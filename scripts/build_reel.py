#!/usr/bin/env python3
"""Writes the video reel into every homepage, between <!-- reel:start --> and <!-- reel:end -->.

Clips live in assets/app-images/videos/<lang>/<id>.mp4 with a poster <id>.webp next to them.
Languages without their own clips use the English ones. A slide whose clip doesn't exist yet
shows its poster, or the old screenshot named in FALLBACK.

Run from the repository root: python3 -I scripts/build_reel.py
"""
import html
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Order of the slides.
SLIDES = ["foil", "commander", "swaps", "playtest", "dice", "card", "scanner"]

# Screenshot shown while a clip doesn't exist yet.
FALLBACK = {
    "foil": "card", "commander": "commander", "swaps": "assistant", "playtest": "deck",
    "dice": "games", "card": "card", "scanner": "scanner",
}

PAGES = {
    "en": "index.html", "it": "it/index.html", "de-DE": "de-DE/index.html", "fr-FR": "fr-FR/index.html",
    "es-ES": "es-ES/index.html", "es-MX": "es-MX/index.html", "pt-BR": "pt-BR/index.html", "pl": "pl/index.html",
    "tr": "tr/index.html", "ru": "ru/index.html", "ja": "ja/index.html", "ko": "ko/index.html",
    "zh-Hans": "zh-Hans/index.html", "zh-Hant": "zh-Hant/index.html",
}

CAPTIONS = {
    "en": {"foil": "Foils that catch the light", "commander": "Find the right Commander for you", "swaps": "Swaps from your own cards",
           "playtest": "Test a deck before you sleeve it", "dice": "Roll the die", "card": "Every card, up close", "scanner": "Scan cards with the camera"},
    "it": {"foil": "Foil che catturano la luce", "commander": "Trova il Commander adatto a te", "swaps": "Scambi con le carte che hai",
           "playtest": "Prova un mazzo prima di imbustarlo", "dice": "Tira il dado", "card": "Ogni carta, da vicino", "scanner": "Scansiona le carte con la fotocamera"},
    "de-DE": {"foil": "Foils, die das Licht einfangen", "commander": "Finde den richtigen Commander für dich", "swaps": "Tausch mit deinen eigenen Karten",
              "playtest": "Teste ein Deck, bevor du es sleevst", "dice": "Wirf den Würfel", "card": "Jede Karte aus der Nähe", "scanner": "Karten mit der Kamera scannen"},
    "fr-FR": {"foil": "Des foils qui captent la lumière", "commander": "Trouve le Commander qui te correspond", "swaps": "Des échanges avec tes propres cartes",
              "playtest": "Teste un deck avant de le mettre sous pochettes", "dice": "Lance le dé", "card": "Chaque carte de près", "scanner": "Scanne tes cartes avec l'appareil photo"},
    "es-ES": {"foil": "Foils que atrapan la luz", "commander": "Encuentra el Commander ideal para ti", "swaps": "Cambios con tus propias cartas",
              "playtest": "Prueba un mazo antes de enfundarlo", "dice": "Tira el dado", "card": "Cada carta, de cerca", "scanner": "Escanea cartas con la cámara"},
    "es-MX": {"foil": "Foils que atrapan la luz", "commander": "Encuentra el Commander ideal para ti", "swaps": "Cambios con tus propias cartas",
              "playtest": "Prueba un mazo antes de enfundarlo", "dice": "Tira el dado", "card": "Cada carta, de cerca", "scanner": "Escanea cartas con la cámara"},
    "pt-BR": {"foil": "Foils que brilham de verdade", "commander": "Encontre o Commander certo para você", "swaps": "Trocas com os seus próprios cards",
              "playtest": "Teste um deck antes de encapar", "dice": "Role o dado", "card": "Cada card de perto", "scanner": "Escaneie cards com a câmera"},
    "pl": {"foil": "Foile, które łapią światło", "commander": "Znajdź odpowiedniego dowódcę dla siebie", "swaps": "Zamiany z twoich własnych kart",
           "playtest": "Przetestuj talię, zanim ją zakoszulkujesz", "dice": "Rzuć kością", "card": "Każda karta z bliska", "scanner": "Skanuj karty aparatem"},
    "tr": {"foil": "Işığı yakalayan foil kartlar", "commander": "Sana uygun Commander'ı bul", "swaps": "Kendi kartlarınla değişiklikler",
           "playtest": "Desteyi kılıflamadan önce dene", "dice": "Zar at", "card": "Her kart yakından", "scanner": "Kartları kamerayla tara"},
    "ru": {"foil": "Фольга, которая ловит свет", "commander": "Найди подходящего командира", "swaps": "Замены из твоих собственных карт",
           "playtest": "Испытай колоду, прежде чем убрать её в протекторы", "dice": "Брось кубик", "card": "Каждая карта крупным планом", "scanner": "Сканируй карты камерой"},
    "ja": {"foil": "光をとらえるフォイル", "commander": "あなたにぴったりの統率者を見つけよう", "swaps": "手持ちのカードで入れ替え",
           "playtest": "スリーブに入れる前にデッキをテスト", "dice": "サイコロを振ろう", "card": "どのカードも細部まで", "scanner": "カメラでカードをスキャン"},
    "ko": {"foil": "빛을 받아 반짝이는 포일", "commander": "나에게 맞는 커맨더 찾기", "swaps": "내 카드로 바꾸기",
           "playtest": "슬리브에 넣기 전에 덱 테스트", "dice": "주사위 굴리기", "card": "모든 카드를 가까이서", "scanner": "카메라로 카드 스캔"},
    "zh-Hans": {"foil": "流光溢彩的闪卡", "commander": "找到适合你的指挥官", "swaps": "用你自己的卡牌替换",
                "playtest": "套牌套上卡套前先试玩", "dice": "掷骰子", "card": "每张卡牌的细节", "scanner": "用相机扫描卡牌"},
    "zh-Hant": {"foil": "流光溢彩的閃卡", "commander": "找到適合你的指揮官", "swaps": "用你自己的卡牌替換",
                "playtest": "套牌套上卡套前先試玩", "dice": "擲骰子", "card": "每張卡牌的細節", "scanner": "用相機掃描卡牌"},
}

UI = {
    "en": ("Previous", "Next", "Go to clip"), "it": ("Precedente", "Successivo", "Vai al video"),
    "de-DE": ("Zurück", "Weiter", "Zum Video"), "fr-FR": ("Précédent", "Suivant", "Aller à la vidéo"),
    "es-ES": ("Anterior", "Siguiente", "Ir al vídeo"), "es-MX": ("Anterior", "Siguiente", "Ir al video"),
    "pt-BR": ("Anterior", "Próximo", "Ir para o vídeo"), "pl": ("Poprzedni", "Następny", "Przejdź do filmu"),
    "tr": ("Önceki", "Sonraki", "Videoya git"), "ru": ("Назад", "Далее", "Перейти к видео"),
    "ja": ("前へ", "次へ", "動画へ移動"), "ko": ("이전", "다음", "영상으로 이동"),
    "zh-Hans": ("上一个", "下一个", "前往视频"), "zh-Hant": ("上一個", "下一個", "前往影片"),
}


def asset(lang, name):
    """Path of a clip or poster for this language, falling back to English."""
    for folder in ([lang, "en"] if lang != "en" else ["en"]):
        path = f"assets/app-images/videos/{folder}/{name}"
        if os.path.exists(os.path.join(ROOT, path)):
            return path
    return None


def screenshot(lang, slide):
    folder = "it" if lang == "it" else "en"
    return f"assets/app-images/screenshots/{folder}/{FALLBACK[slide]}.webp"


def block(lang, title_html, prefix):
    captions = CAPTIONS[lang]
    previous, following, go_to = UI[lang]
    items, dots = [], []
    for index, slide in enumerate(SLIDES):
        caption = html.escape(captions[slide], quote=True)
        clip = asset(lang, f"{slide}.mp4")
        poster = asset(lang, f"{slide}.webp")
        if clip:
            media = (f'<video muted playsinline loop="false" preload="none" poster="{prefix}{poster or screenshot(lang, slide)}" '
                     f'data-src="{prefix}{clip}" aria-label="{caption}"></video>').replace(' loop="false"', "")
            phone = f'<div class="phone">{media}</div>'
        else:
            # Old screenshots already have their phone frame drawn in.
            image = poster or screenshot(lang, slide)
            framed = poster is not None
            img = f'<img src="{prefix}{image}" alt="{caption}" loading="lazy">'
            phone = f'<div class="phone">{img}</div>' if framed else f'<div class="phone-shot">{img}</div>'
        items.append(f'        <li class="reel-slide" data-caption="{caption}">{phone}<p class="reel-label">{caption}</p></li>')
        dots.append(f'<button type="button" aria-label="{go_to} {index + 1}: {caption}"></button>')
    return f'''<!-- reel:start -->
  <section class="reel-section" id="screenshots" aria-labelledby="shots-title">
    <div class="container section-head">
      <h2 id="shots-title">{title_html}</h2>
    </div>
    <div class="reel" data-reel tabindex="0" aria-roledescription="carousel" aria-labelledby="shots-title">
      <ul class="reel-track">
{chr(10).join(items)}
      </ul>
      <p class="reel-caption" aria-live="polite"></p>
      <div class="reel-progress" aria-hidden="true"><span></span></div>
      <div class="reel-controls">
        <button type="button" class="reel-arrow" data-reel-prev aria-label="{previous}">‹</button>
        <div class="reel-dots">{"".join(dots)}</div>
        <button type="button" class="reel-arrow" data-reel-next aria-label="{following}">›</button>
      </div>
    </div>
  </section>
  <!-- reel:end -->'''


def update(lang, page):
    path = os.path.join(ROOT, page)
    text = open(path, encoding="utf-8").read()
    prefix = "" if lang == "en" else "../"
    if "<!-- reel:start -->" in text:
        title = re.search(r'<h2 id="shots-title">(.*?)</h2>', text, re.S).group(1)
        text = re.sub(r"<!-- reel:start -->.*?<!-- reel:end -->", lambda _: block(lang, title, prefix), text, flags=re.S)
    else:
        old = re.search(r'\n  <section class="section" id="screenshots".*?</section>\n', text, re.S)
        title = re.search(r'<h2 id="shots-title">(.*?)</h2>', old.group(0), re.S).group(1)
        text = text.replace(old.group(0), "\n")
        # Right after the hero.
        hero_end = text.index("</section>", text.index('<section class="hero"')) + len("</section>")
        text = text[:hero_end] + "\n\n  " + block(lang, title, prefix) + text[hero_end:]
    script = f'<script src="{prefix}assets/reel.js" defer></script>'
    if script not in text:
        text = text.replace("</body>", f"{script}\n</body>")
    open(path, "w", encoding="utf-8").write(text)


for lang, page in PAGES.items():
    update(lang, page)
print("reel written in", len(PAGES), "pages")
