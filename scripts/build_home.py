#!/usr/bin/env python3
"""Writes the top of every homepage (hero, feature chapters with their clips, "and there's more",
free and Pro) from scripts/home/<lang>.json, between <!-- home:start --> and <!-- home:end -->.
The guides, FAQ and final call to action below stay as they are in each page.

Clips: assets/app-images/videos/<lang>/<name>.mp4 (+ .webp poster), falling back to English.
A chapter whose clip doesn't exist yet shows the framed screenshot in FALLBACK.

Run from the repository root: python3 -I scripts/build_home.py
"""
import html
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK = "assets/app-images/mock/iphone-16.webp"

PAGES = {
    "en": "index.html", "it": "it/index.html", "de-DE": "de-DE/index.html", "fr-FR": "fr-FR/index.html",
    "es-ES": "es-ES/index.html", "es-MX": "es-MX/index.html", "pt-BR": "pt-BR/index.html", "pl": "pl/index.html",
    "tr": "tr/index.html", "ru": "ru/index.html", "ja": "ja/index.html", "ko": "ko/index.html",
    "zh-Hans": "zh-Hans/index.html", "zh-Hant": "zh-Hant/index.html",
}

# Clip shown by each chapter, and the hero's.
HERO_CLIP = "foil"
CLIPS = {"scan": "scanner", "foils": "card", "commander": "commander", "mote": "swaps", "playtest": "playtest", "play": "dice"}
FALLBACK = {"scanner": "scanner", "card": "card", "commander": "commander", "swaps": "assistant", "playtest": "deck", "dice": "games", "foil": "card"}


def asset(lang, name):
    for folder in ([lang, "en"] if lang != "en" else ["en"]):
        path = f"assets/app-images/videos/{folder}/{name}"
        if os.path.exists(os.path.join(ROOT, path)):
            return path
    return None


def phone(lang, clip, alt, prefix, size=""):
    """A phone in the iPhone 16 mockup playing the clip, or the framed screenshot while there's none."""
    alt = html.escape(alt, quote=True)
    video = asset(lang, f"{clip}.mp4")
    if video:
        poster = asset(lang, f"{clip}.webp")
        return (f'<div class="phone{size}"><video muted playsinline loop preload="none" data-autoplay '
                f'poster="{prefix}{poster}" data-src="{prefix}{video}" aria-label="{alt}"></video>'
                f'<img class="phone-frame" src="{prefix}{MOCK}" alt=""></div>')
    folder = "it" if lang == "it" else "en"
    shot = f"assets/app-images/screenshots/{folder}/{FALLBACK[clip]}.webp"
    return f'<div class="phone-shot{size}"><img src="{prefix}{shot}" alt="{alt}" loading="lazy"></div>'


def still(lang, clip, prefix):
    """A clip's poster in the mockup, for the phones fanned behind the hero."""
    poster = asset(lang, f"{clip}.webp")
    if not poster:
        return ""
    return f'<div class="phone"><img class="phone-screen" src="{prefix}{poster}" alt="" loading="lazy"><img class="phone-frame" src="{prefix}{MOCK}" alt=""></div>'


def store_button(t):
    return ('<span class="store-btn is-soon" aria-disabled="true"><svg viewBox="0 0 24 24" aria-hidden="true">'
            '<path fill="currentColor" d="M12 1.5c.6 4.7 2.9 7.9 10.5 10.5-7.6 2.6-9.9 5.8-10.5 10.5C11.4 17.8 9.1 14.6 1.5 12 9.1 9.4 11.4 6.2 12 1.5z"/>'
            f'</svg><span><small>{t["store_small"]}</small><strong>{t["store_big"]}</strong></span></span>')


def block(lang, t, prefix):
    e = html.escape
    ids = [c["id"] for c in t["chapters"]] + ["more"]
    jumps = "".join(f'<li><a href="#{i}">{e(label)}</a></li>' for i, label in zip(ids, t["jumps"]))
    chapters = []
    for index, c in enumerate(t["chapters"]):
        chips = "".join(f"<li>{e(chip)}</li>" for chip in c["chips"])
        side = " is-flipped" if index % 2 else ""
        chapters.append(f'''  <section class="chapter t-{c["tab"]}{side}" id="{c["id"]}" aria-labelledby="{c["id"]}-title">
    <div class="container chapter-grid">
      <div class="chapter-copy reveal">
        <p class="kicker">{e(c["kicker"])}</p>
        <h2 id="{c["id"]}-title">{e(c["title"])}</h2>
        <p class="chapter-text">{e(c["text"])}</p>
        <ul class="chips">{chips}</ul>
      </div>
      <div class="chapter-media reveal">{phone(lang, CLIPS[c["id"]], c["alt"], prefix)}</div>
    </div>
  </section>''')
    more = "".join(f'<li class="t-{m["tab"]} reveal"><strong>{e(m["title"])}</strong><span>{e(m["text"])}</span></li>' for m in t["more"])
    free = "".join(f"<li>{e(i)}</li>" for i in t["free_items"])
    pro = "".join(f"<li>{e(i)}</li>" for i in t["pro_items"])
    return f'''<!-- home:start -->
  <section class="hero" aria-labelledby="hero-title">
    <div class="container hero-grid">
      <div class="hero-copy">
        <img class="hero-icon" src="{prefix}assets/icon.png" alt="" width="72" height="72">
        <span class="eyebrow">{e(t["eyebrow"])}</span>
        <h1 id="hero-title">{t["h1"]}</h1>
        <p class="lead">{e(t["lead"])}</p>
        {store_button(t)}
        <p class="btn-note">{e(t["note"])}</p>
      </div>
      <div class="hero-media">
        <div class="hero-back is-left" aria-hidden="true">{still(lang, "commander", prefix)}</div>
        <div class="hero-back is-right" aria-hidden="true">{still(lang, "swaps", prefix)}</div>
        {phone(lang, HERO_CLIP, t["hero_alt"], prefix, " is-hero")}
      </div>
    </div>
    <nav class="container jumps" aria-label="{e(t["jump_label"])}"><ul>{jumps}</ul></nav>
  </section>

  <div id="features">
{chr(10).join(chapters)}
  </div>

  <section class="section more" id="more" aria-labelledby="more-title">
    <div class="container">
      <div class="section-head centered reveal">
        <h2 id="more-title">{e(t["more_title"])}</h2>
        <p>{e(t["more_lead"])}</p>
      </div>
      <ul class="more-grid">{more}</ul>
    </div>
  </section>

  <section class="section plans" aria-label="{e(t["free_title"])} · {e(t["pro_title"])}">
    <div class="container plans-grid">
      <div class="plan reveal"><h2>{e(t["free_title"])}</h2><ul>{free}</ul></div>
      <div class="plan is-pro reveal"><h2>{e(t["pro_title"])} <span class="tag">{e(t["pro_tag"])}</span></h2><ul>{pro}</ul></div>
      <p class="plans-note">{e(t["pricing_note"])}</p>
    </div>
  </section>
  <!-- home:end -->'''


def update(lang, page):
    strings = os.path.join(ROOT, "scripts", "home", f"{lang}.json")
    if not os.path.exists(strings):
        return False
    t = json.load(open(strings, encoding="utf-8"))
    path = os.path.join(ROOT, page)
    text = open(path, encoding="utf-8").read()
    prefix = "" if lang == "en" else "../"
    new = block(lang, t, prefix)
    if "<!-- home:start -->" in text:
        text = re.sub(r"<!-- home:start -->.*?<!-- home:end -->", lambda _: new, text, flags=re.S)
    else:
        # Replace everything from the hero to the guides.
        start = text.index('  <section class="hero"')
        end = text.index('  <section class="section" id="guides"')
        text = text[:start] + "  " + new + "\n\n" + text[end:]
    text = text.replace('href="#download"', 'href="#features"')
    text = re.sub(r'<script src="[./]*assets/reel\.js" defer></script>\n?', "", text)
    script = f'<script src="{prefix}assets/site.js" defer></script>'
    if script not in text:
        text = text.replace("</body>", f"{script}\n</body>")
    open(path, "w", encoding="utf-8").write(text)
    return True


done = [lang for lang, page in PAGES.items() if update(lang, page)]
print("home written:", ", ".join(done))
