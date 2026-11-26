/* ManaPal deck page: https://manapal.app/d/<slug> (a deck link, read from the server) and
   https://manapal.app/d#d=<data> (a snapshot: the whole deck packed in the link by the app,
   DeckTransferPayload). With ManaPal installed iOS opens the app straight away; this page is for
   everyone else: the list, the owner's wishlist, "Copy list" for other apps, and the way to the app.
   Card names, types and images come from Scryfall. */
(function () {
  "use strict";

  var MP = window.MP;
  var t = MP.t;
  var SUPABASE = "https://mspwylmyyfmtqkfgpvea.supabase.co/functions/v1/manapal-deck";
  var BOARDS = ["commander", "main", "side", "maybe"];
  var TYPES = ["creature", "planeswalker", "battle", "land", "instant", "sorcery", "artifact", "enchantment"];
  var ORDER = ["creature", "planeswalker", "battle", "instant", "sorcery", "artifact", "enchantment", "land", "other"];
  var COLORS = { W: "#f8f1d2", U: "#4da8ff", B: "#9b8aa6", R: "#ff6b3d", G: "#4dcc73", C: "#c9c3cf" };

  var $ = function (id) { return document.getElementById(id); };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === "text") node.textContent = attrs[key];
      else if (key === "class") node.className = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (children || []).forEach(function (child) { if (child) node.appendChild(child); });
    return node;
  }

  // MARK: Reading the link

  /** The app's binary snapshot: [version][name][format][commander] then runs of [flags][count][UUIDs]. */
  function decodeSnapshot(encoded) {
    var text = encoded.replace(/-/g, "+").replace(/_/g, "/");
    while (text.length % 4) text += "=";
    var binary = atob(text);
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    var offset = 0;
    var decoder = new TextDecoder("utf-8");
    function byte() { if (offset >= bytes.length) throw new Error("short"); return bytes[offset++]; }
    function string() { var length = byte(); if (offset + length > bytes.length) throw new Error("short"); var value = decoder.decode(bytes.subarray(offset, offset + length)); offset += length; return value; }
    function uuid() {
      if (offset + 16 > bytes.length) throw new Error("short");
      var hex = "";
      for (var j = 0; j < 16; j++) hex += ("0" + bytes[offset + j].toString(16)).slice(-2);
      offset += 16;
      return hex.slice(0, 8) + "-" + hex.slice(8, 12) + "-" + hex.slice(12, 16) + "-" + hex.slice(16, 20) + "-" + hex.slice(20);
    }
    if (byte() !== 1) throw new Error("version");
    var deck = { name: string(), format: string(), commander_name: string() || null, cards: [], missing: null, owner: null, snapshot: true };
    while (offset < bytes.length) {
      var flags = byte(), count = byte();
      for (var k = 0; k < count; k++) {
        deck.cards.push({ id: uuid(), n: "", q: (flags & 0x1f) + 1, b: BOARDS[(flags >> 5) & 3], f: (flags & 0x80) !== 0 });
      }
    }
    if (!deck.cards.length) throw new Error("empty");
    return deck;
  }

  function slugFromPath() {
    var match = location.pathname.match(/^\/d\/([A-Za-z0-9]{10})\/?$/);
    return match ? match[1] : null;
  }

  /** The deck embedded by /api/deck (with the chat preview), or fetched here as a fallback. */
  function loadDeck() {
    var embedded = $("deck-data");
    if (embedded && embedded.textContent.trim()) {
      try {
        var data = JSON.parse(embedded.textContent);
        return Promise.resolve(data.deck ? { deck: data.deck, slug: data.deck.slug } : { gone: true });
      } catch (error) { /* fall through */ }
    }
    var slug = slugFromPath();
    if (slug) {
      return fetch(SUPABASE + "?slug=" + slug).then(function (response) {
        if (response.status === 404) return { gone: true };
        if (!response.ok) throw new Error("server");
        return response.json().then(function (body) { return { deck: body.deck, slug: slug }; });
      });
    }
    var hash = location.hash.replace(/^#/, "");
    var param = new URLSearchParams(hash).get("d") || new URLSearchParams(location.search).get("d");
    if (!param) return Promise.resolve({ invalid: true });
    try {
      return Promise.resolve({ deck: decodeSnapshot(param), payload: param });
    } catch (error) {
      return Promise.resolve({ invalid: true });
    }
  }

  // MARK: Scryfall

  function fetchCards(ids) {
    var unique = Array.from(new Set(ids));
    var batches = [];
    for (var i = 0; i < unique.length; i += 75) batches.push(unique.slice(i, i + 75));
    return Promise.all(batches.map(function (batch) {
      return fetch("https://api.scryfall.com/cards/collection", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ identifiers: batch.map(function (id) { return { id: id }; }) })
      }).then(function (response) { return response.ok ? response.json() : { data: [] }; })
        .catch(function () { return { data: [] }; });
    })).then(function (results) {
      var byID = {};
      results.forEach(function (result) { (result.data || []).forEach(function (card) { byID[card.id] = card; }); });
      return byID;
    });
  }

  function face(card) { return card && (card.image_uris ? card : (card.card_faces || [])[0]) || {}; }
  function image(card, size) { var uris = face(card).image_uris || (card && card.image_uris) || {}; return uris[size] || uris.normal || null; }
  function frontName(card) { return card ? String(card.name).split(" // ")[0] : ""; }

  function typeOf(card) {
    var line = String((face(card).type_line || (card && card.type_line) || "")).split(" // ")[0].toLowerCase();
    for (var i = 0; i < TYPES.length; i++) if (line.indexOf(TYPES[i]) !== -1) return TYPES[i];
    return "other";
  }

  // MARK: Rendering

  function pips(colors) {
    var wrap = el("span", { class: "dl-pips", "aria-hidden": "true" });
    String(colors || "").split("").forEach(function (letter) {
      if (COLORS[letter]) wrap.appendChild(el("span", { class: "dl-pip", style: "background:" + COLORS[letter] }));
    });
    return wrap;
  }

  function tile(entry, card, quantity) {
    var name = card ? card.printed_name || card.name : entry.n;
    var src = image(card, "normal");
    var figure = el("figure", { class: "dl-card" }, [
      src ? el("img", { src: src, alt: name, loading: "lazy", decoding: "async", width: "488", height: "680" })
          : el("div", { class: "dl-card-text" }, [el("span", { text: name })])
    ]);
    if (quantity > 1) figure.appendChild(el("span", { class: "dl-qty", text: "×" + quantity }));
    figure.appendChild(el("figcaption", { class: "visually-hidden", text: (quantity > 1 ? quantity + " " : "") + name }));
    return figure;
  }

  function section(title, count, entries, byID) {
    var grid = el("div", { class: "dl-grid" });
    entries.forEach(function (entry) { grid.appendChild(tile(entry, byID[entry.id], entry.q)); });
    return el("section", { class: "dl-group" }, [
      el("h2", {}, [el("span", { text: title }), el("span", { class: "dl-count", text: String(count) })]),
      grid
    ]);
  }

  function listText(deck, byID) {
    var lines = [];
    function name(entry) { var card = byID[entry.id]; return card ? card.name : entry.n; }
    var groups = [["Commander", "commander"], ["Deck", "main"], ["Sideboard", "side"], ["Maybeboard", "maybe"]];
    groups.forEach(function (group) {
      var entries = deck.cards.filter(function (entry) { return entry.b === group[1] && name(entry); });
      if (!entries.length) return;
      if (lines.length) lines.push("");
      lines.push(group[0]);
      entries.forEach(function (entry) { lines.push(entry.q + " " + name(entry)); });
    });
    return lines.join("\n");
  }

  function showState(titleKey, bodyKey) {
    $("dl-loading").hidden = true;
    $("dl-content").hidden = true;
    var state = $("dl-state");
    state.hidden = false;
    state.querySelector("h1").textContent = t(titleKey);
    state.querySelector("p").textContent = t(bodyKey);
    document.title = t(titleKey) + " · ManaPal";
  }

  function render(result, byID) {
    var deck = result.deck;
    // Merge the same printing on the same board (a snapshot splits big quantities).
    var merged = {};
    deck.cards.forEach(function (entry) {
      var key = entry.b + "|" + entry.id;
      if (merged[key]) merged[key].q += entry.q;
      else merged[key] = { id: entry.id, n: entry.n, q: entry.q, b: entry.b };
    });
    var entries = Object.keys(merged).map(function (key) { return merged[key]; });
    var commanders = entries.filter(function (entry) { return entry.b === "commander"; });
    var main = entries.filter(function (entry) { return entry.b === "main"; });
    var count = commanders.concat(main).reduce(function (sum, entry) { return sum + entry.q; }, 0);

    // Hero: the cover chosen by the owner, else the commander's art.
    var coverID = deck.cover_art_url ? (deck.cover_art_url.match(/([0-9a-f-]{36})\.jpg/) || [])[1] : null;
    var coverCard = (coverID && byID[coverID]) || (commanders[0] && byID[commanders[0].id]) || (main[0] && byID[main[0].id]);
    var art = deck.cover_art_url || image(coverCard, "art_crop");
    if (art) $("dl-hero").style.setProperty("--art", "url(\"" + art.replace(/"/g, "") + "\")");
    var artist = coverCard && (face(coverCard).artist || coverCard.artist);
    if (artist) $("dl-credit").textContent = t("artBy", { artist: artist });

    $("dl-title").textContent = deck.name;
    document.title = deck.name + " · ManaPal";
    var format = deck.format ? deck.format.charAt(0).toUpperCase() + deck.format.slice(1) : "";
    var meta = $("dl-meta");
    meta.textContent = "";
    var colors = deck.color_identity || commanders.concat(main).reduce(function (all, entry) {
      return all + ((byID[entry.id] && byID[entry.id].color_identity) || []).join("");
    }, "");
    var unique = "WUBRG".split("").filter(function (letter) { return colors.indexOf(letter) !== -1; }).join("");
    meta.appendChild(pips(unique));
    meta.appendChild(document.createTextNode([format, count === 1 ? t("oneCard") : t("cards", { n: count })].filter(Boolean).join(" · ")));
    if (deck.owner && deck.owner.display_name) {
      var owner = $("dl-owner");
      owner.hidden = false;
      owner.querySelector("span").textContent = t("by", { name: deck.owner.display_name });
      if (deck.owner.avatar_art_url) owner.querySelector("img").src = deck.owner.avatar_art_url;
      else owner.querySelector("img").remove();
    }

    // The app: the short link for a server deck, the whole payload for a snapshot.
    $("dl-open").href = result.slug ? "manapal://d/" + result.slug : "manapal://deck?d=" + result.payload;
    $("dl-get").href = MP.appStore;

    // The owner's wishlist, when they share it.
    if (deck.missing && deck.missing.length) {
      var wish = $("dl-wish");
      wish.hidden = false;
      wish.querySelector("h2").textContent = deck.owner && deck.owner.display_name ? t("wishTitle", { name: deck.owner.display_name }) : t("wishTitleAnon");
      var byName = {};
      entries.forEach(function (entry) {
        var card = byID[entry.id];
        if (card) { byName[card.name.toLowerCase()] = entry; byName[frontName(card).toLowerCase()] = entry; }
        if (entry.n) byName[entry.n.toLowerCase()] = entry;
      });
      var grid = wish.querySelector(".dl-grid");
      deck.missing.forEach(function (missing) {
        var entry = byName[missing.n.toLowerCase()] || { id: "", n: missing.n };
        grid.appendChild(tile(entry, byID[entry.id], missing.q));
      });
    }

    // The list, grouped like the app: commanders, then by type; sideboard and maybe at the end.
    var list = $("dl-list");
    if (commanders.length) list.appendChild(section(commanders.length > 1 ? t("commanders") : t("commander"), commanders.length, commanders, byID));
    var byType = {};
    main.forEach(function (entry) { var type = typeOf(byID[entry.id]); (byType[type] = byType[type] || []).push(entry); });
    ORDER.forEach(function (type) {
      var group = byType[type];
      if (!group) return;
      group.sort(function (a, b) {
        var ca = byID[a.id] || {}, cb = byID[b.id] || {};
        return (ca.cmc || 0) - (cb.cmc || 0) || String(ca.name || a.n).localeCompare(String(cb.name || b.n));
      });
      list.appendChild(section(t(type), group.reduce(function (sum, entry) { return sum + entry.q; }, 0), group, byID));
    });
    [["side", "side"], ["maybe", "maybe"]].forEach(function (board) {
      var group = entries.filter(function (entry) { return entry.b === board[0]; });
      if (group.length) list.appendChild(section(t(board[1]), group.reduce(function (sum, entry) { return sum + entry.q; }, 0), group, byID));
    });

    // "Copy list": the standard text, for ManaBox, Moxfield, Archidekt and Arena.
    var copy = $("dl-copy");
    var text = listText(deck, byID);
    copy.addEventListener("click", function () {
      var done = function () {
        copy.querySelector("span").textContent = t("copied");
        copy.classList.add("is-done");
        setTimeout(function () { copy.querySelector("span").textContent = t("copy"); copy.classList.remove("is-done"); }, 2200);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });

    var note = $("dl-note");
    if (deck.snapshot) note.textContent = t("snapshot");
    else if (deck.updated_at) {
      var date = new Date(deck.updated_at);
      if (!isNaN(date)) note.textContent = t("updated", { date: date.toLocaleDateString(MP.lang, { day: "numeric", month: "long", year: "numeric" }) });
    }

    $("dl-loading").hidden = true;
    $("dl-content").hidden = false;
  }

  MP.translate();
  loadDeck().then(function (result) {
    if (result.gone) return showState("gone", "goneBody");
    if (result.invalid || !result.deck) return showState("invalid", "invalidBody");
    return fetchCards(result.deck.cards.map(function (entry) { return entry.id; })).then(function (byID) {
      // A snapshot carries no names: without Scryfall it can only show what it found.
      render(result, byID);
    });
  }).catch(function () { showState("invalid", "invalidBody"); });
})();
