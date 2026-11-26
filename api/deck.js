// /d/<slug> (rewritten here by vercel.json): the deck page with the deck already inside it and the
// chat preview (title, "by …", commander art) that WhatsApp, Telegram and iMessage read from the
// HTML. The deck is read from the public Supabase function `manapal-deck`.
"use strict";

const fs = require("fs");
const path = require("path");

const SUPABASE = "https://mspwylmyyfmtqkfgpvea.supabase.co/functions/v1/manapal-deck";
const SLUG = /^[A-Za-z0-9]{10}$/;
const TEMPLATE = fs.readFileSync(path.join(process.cwd(), "d", "index.html"), "utf8");

// The preview's second line, in the reader's language (Accept-Language of the chat app's crawler).
const PREVIEW = {
  en: { cards: (n) => `${n} cards`, by: (name) => `by ${name}`, body: "Open it to see the list and which cards you already have.", gone: "This deck link is gone" },
  it: { cards: (n) => `${n} carte`, by: (name) => `di ${name}`, body: "Aprilo per vedere la lista e quali carte hai già.", gone: "Questo link non c'è più" },
  de: { cards: (n) => `${n} Karten`, by: (name) => `von ${name}`, body: "Öffne es, um die Liste zu sehen und welche Karten du schon hast.", gone: "Diesen Link gibt es nicht mehr" },
  fr: { cards: (n) => `${n} cartes`, by: (name) => `de ${name}`, body: "Ouvre-le pour voir la liste et les cartes que tu as déjà.", gone: "Ce lien n'existe plus" },
  es: { cards: (n) => `${n} cartas`, by: (name) => `de ${name}`, body: "Ábrelo para ver la lista y qué cartas ya tienes.", gone: "Este enlace ya no existe" },
  pt: { cards: (n) => `${n} cards`, by: (name) => `de ${name}`, body: "Abra para ver a lista e quais cards você já tem.", gone: "Este link não existe mais" },
  pl: { cards: (n) => `Karty: ${n}`, by: (name) => `autor: ${name}`, body: "Otwórz, aby zobaczyć listę i karty, które już masz.", gone: "Ten link już nie działa" },
  tr: { cards: (n) => `${n} kart`, by: (name) => `${name} tarafından`, body: "Listeyi ve hangi kartların sende olduğunu görmek için aç.", gone: "Bu bağlantı artık yok" },
  ru: { cards: (n) => `Карт: ${n}`, by: (name) => `автор: ${name}`, body: "Откройте, чтобы увидеть список и карты, которые у вас уже есть.", gone: "Этой ссылки больше нет" },
  ja: { cards: (n) => `${n}枚`, by: (name) => `${name}のデッキ`, body: "開くとリストと、すでに持っているカードがわかります。", gone: "このリンクはもうありません" },
  ko: { cards: (n) => `${n}장`, by: (name) => `${name}의 덱`, body: "열면 목록과 이미 가진 카드를 볼 수 있습니다.", gone: "이 링크는 더 이상 없습니다" },
  zhHans: { cards: (n) => `${n} 张牌`, by: (name) => `${name} 的套牌`, body: "打开即可查看牌表，以及你已拥有哪些牌。", gone: "此链接已失效" },
  zhHant: { cards: (n) => `${n} 張牌`, by: (name) => `${name} 的套牌`, body: "打開即可查看牌表，以及你已擁有哪些牌。", gone: "這個連結已失效" },
};

function language(header) {
  const first = String(header || "").split(",")[0].trim().toLowerCase();
  if (first.startsWith("zh")) return /hant|tw|hk|mo/.test(first) ? "zhHant" : "zhHans";
  const base = first.split("-")[0];
  return PREVIEW[base] ? base : "en";
}

function escapeHTML(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** JSON inside <script>: nothing in it can close the tag. */
function scriptJSON(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}

function page(head, data) {
  return TEMPLATE
    .replace(/<!--HEAD-->[\s\S]*?<!--\/HEAD-->/, head)
    .replace("<!--DATA-->", `<script id="deck-data" type="application/json">${scriptJSON(data)}</script>`);
}

module.exports = async (req, res) => {
  const slug = String((req.query && req.query.slug) || "");
  const texts = PREVIEW[language(req.headers["accept-language"])];
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  let deck = null;
  let found = false;
  if (SLUG.test(slug)) {
    try {
      const response = await fetch(`${SUPABASE}?slug=${slug}`, { headers: { Accept: "application/json" } });
      if (response.ok) {
        deck = (await response.json()).deck;
        found = !!deck;
      } else if (response.status !== 404) {
        // The server is down: the page loads the deck by itself a moment later.
        res.setHeader("Cache-Control", "no-store");
        return res.status(200).send(TEMPLATE);
      }
    } catch (error) {
      res.setHeader("Cache-Control", "no-store");
      return res.status(200).send(TEMPLATE);
    }
  }

  if (!found) {
    const head = `<title>${escapeHTML(texts.gone)} · ManaPal</title>\n<meta property="og:site_name" content="ManaPal">\n<meta property="og:title" content="${escapeHTML(texts.gone)}">\n<meta property="og:image" content="https://manapal.app/assets/icon.png">`;
    res.setHeader("Cache-Control", "public, max-age=60, s-maxage=60");
    return res.status(404).send(page(head, { deck: null }));
  }

  const owner = deck.owner && deck.owner.display_name;
  const format = deck.format ? deck.format.charAt(0).toUpperCase() + deck.format.slice(1) : "";
  const subtitle = [format, texts.cards(deck.card_count), owner ? texts.by(owner) : null].filter(Boolean).join(" · ");
  const description = `${subtitle}. ${texts.body}`;
  const image = deck.cover_art_url || "https://manapal.app/assets/icon.png";
  const url = `https://manapal.app/d/${slug}`;
  const head = [
    `<title>${escapeHTML(deck.name)} · ManaPal</title>`,
    `<meta name="description" content="${escapeHTML(description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:site_name" content="ManaPal">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${escapeHTML(deck.name)}">`,
    `<meta property="og:description" content="${escapeHTML(description)}">`,
    `<meta property="og:image" content="${escapeHTML(image)}">`,
    `<meta property="og:image:width" content="626">`,
    `<meta property="og:image:height" content="457">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="apple-itunes-app" content="app-id=6822809444, app-argument=${url}">`,
  ].join("\n");
  // Edits reach the page within a minute; a removed link too.
  res.setHeader("Cache-Control", "public, max-age=30, s-maxage=60, stale-while-revalidate=300");
  return res.status(200).send(page(head, { deck }));
};
