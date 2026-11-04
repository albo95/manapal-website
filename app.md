# ManaPal: source of truth for the website copy

Last updated: 30 October 2026. Sources: `docs/SITE-BRIEF.md`, `docs/reference/brand-book.md`, the existing draft in `docs/reference/website-draft/`, and the app project (`ManaPal-TODO.txt` section 0, `AppLinks.swift`, `ManaPal-Analytics.md`). If something changes in the app project, update it here first.

## Identity

| Field | Value |
|---|---|
| Name | ManaPal |
| Developer | AlbosApps |
| Contact / support email | albosapps@gmail.com |
| Domain | manapal.app (HTTPS required for .app) |
| App Store ID | 6822809444 |
| App Store URL | https://apps.apple.com/app/id6822809444 |
| Status | **Not released yet**: every page uses the non-clickable "Coming soon on the App Store" button |
| Platforms | iPhone and iPad, iOS 18 or later (a Mac build exists but isn't confirmed for launch) |
| Primary language | en-US (site root) |
| Other languages (landing page only) | it, zh-Hant, ru, ja, zh-Hans, es-ES, ko, es-MX, pl, de-DE, fr-FR, pt-BR, tr |
| Bundle ID / Team ID | com.albertobruno.magicpal.app / 2L7RFD7CXX |

No App Store texts (subtitle, description, keywords) have been written yet for any locale. The copy below comes from the brief and the brand book.

## Promise

**One-line promise (from the marketing materials):** your Magic collection, your decks and your games in one app, with an assistant that knows your cards.

**Site headline idea:** The MTG app that knows your cards.

**Audience:** Magic: The Gathering players on iPhone and iPad, especially Commander/EDH players who own a physical collection, build decks, play at the kitchen table or in a store, and want help choosing a commander, tuning a deck or knowing what their cards are worth. Secondary: collectors who want to scan and value their cards, and people moving over from ManaBox, Moxfield, Archidekt, Delver Lens, Dragon Shield, Deckbox and TCGplayer.

## Features and benefits (free unless stated)

- **Collection**: camera scanner that recognizes cards; search in many languages (including Italian); up-to-date prices (Cardmarket data in euros, converted with ECB exchange rates); collection value over time; binders; wishlist; sets with completion progress; trades; import from ManaBox, Moxfield, Archidekt, Delver Lens, Dragon Shield, Deckbox, TCGplayer, Cardmarket (CSV); export.
  *Benefit:* know what you own and what it's worth without spreadsheets.
- **Decks**: create or import (Archidekt, Moxfield, text list, QR code between two iPhones); statistics (mana curve, roles, colors, most expensive cards, lands, average mana cost, % of cards owned, cost of missing cards); opening hand simulation and playtest; official precons with descriptions; "buy the missing cards".
  *Benefit:* see what your deck actually does before the game starts.
- **Games**: life counter for 2–6 players with commanders, poison, monarch, initiative, Planechase and Archenemy; game history and stats (decks, colors, head-to-head); 3D die; shared games via QR; playgroup and leaderboards.
  *Benefit:* one phone on the table tracks everything, and your wins are remembered.
- **Commander**: explore commanders by color, theme, popularity and price; "Find the right Commander for you" quiz (12 questions, results in budget, mid and top lists).
- **Mote, the AI assistant** (uses Mana): questions about rules and cards; deck analysis with swaps taken from your own cards (and the deck's bracket); "Build a deck with my cards"; "Find your Commander"; card condition estimate from photos. Mote answers based on the cards you actually own.
- **14 languages**: Italian, English, Spanish, Spanish (Latin America), Portuguese (Brazil), French, German, Japanese, Russian, Turkish, Korean, Simplified Chinese, Traditional Chinese, Polish. Cards are shown in the chosen language too.
- **iCloud**: collection and decks synced across your devices.

## Pricing (in effect on 30 October 2026, may change: the site avoids listing prices)

- **Free forever:** collection, prices, scanner, sets, precons, tokens, games; 7 built decks (unlimited deck ideas), 5 binders; every day 1 quick AI question, 3 deck descriptions and 10 card recognitions; 20 welcome Mana.
- **Mana** (AI currency, never expires). Every action shows its cost before it starts; if it fails, the Mana is refunded. Expert question 10, deck analysis 20, Find your Commander 30, Build a deck with my cards 50. Packs: 12 Mana €0.99, 40 Mana €2.99, 110 Mana €6.99, 260 Mana €14.99.
- **ManaPal Pro:** weekly €2.99 (10 Mana/week) or yearly €49.99 (50 Mana/month, 7-day free trial on the yearly plan only). Unlocks unlimited decks, binders and playtest, multi-deck import, advanced stats, 6 themes. Auto-renewable subscriptions + consumable in-app purchases, all through Apple.

## Brand

- Colors: gold `#FFC63C` (main accent, buttons), light gold `#FFE89E`, deep gold `#DB8C14`, arcane violet `#9E73FF` (AI accent), ink `#0B0A10` (background), raised ink `#17161F` (surfaces), violet ink `#1F1229` (text on gold). The app is dark-only.
- Typography: Young Serif for titles in the app; on the site we use the system serif (`ui-serif` / New York) for headings so we make no font requests, and the system sans for text.
- Tone: talk to the reader as "you", short concrete sentences, no fake urgency, never guilt.
- Mote: golden Mana drop with a sparkle tip. Never inside a blue circle, never used as a cost symbol. Decorative.
- Legal: never Magic logos, planeswalker symbol, mana/guild symbols, card frames as our own graphics. ManaPal is not an official app.
- **Mandatory Fan Content Policy notice (every page footer):** "ManaPal is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC." Card data and images: Scryfall. Mana and set symbols in the app: Mana and Keyrune fonts by Andrew Gioia (SIL OFL 1.1).

## Privacy facts (from the owner's existing privacy draft and the project)

- Collection, decks, games and friends stay on the device and in the user's iCloud (Apple CloudKit). The developer can't see them.
- Sign in with Apple (only for AI features): an anonymous identifier to manage Mana credits. Backend: Supabase.
- AI features: the request, the cards/decks needed for the answer and card photos to recognize are sent to the ManaPal server and to Anthropic (Claude), the AI provider, only to generate the answer and only after in-app consent. Name and email are never sent.
- Purchases: handled by Apple; the developer only receives the confirmation needed to credit Mana / Pro.
- Invite codes: used to give Mana to the inviter and the invitee.
- Card data and images: Scryfall. Sync: Apple iCloud.
- Usage statistics: Google Analytics for Firebase, opt-in only (switch "Help us improve ManaPal", off by default; nothing is sent while it's off), never user-written text. Pseudonymous (random app-instance ID), so don't call it anonymous. The privacy policy already describes it as active; the SDK integration in the app is still to do.
- Our server keeps a per-account record of each AI action (type, cost, model, tokens, outcome, time), never its content.
- Retention: server data until the account is deleted (only the welcome-Mana claim stays); statistics up to 14 months.

## Images available

| File | Content |
|---|---|
| `assets/icon.png` | App icon (favicon, apple-touch-icon, header logo) |
| `assets/brand/icons/` | Icon 1024 (normal, dark, tinted) and PNGs 16–512 |
| `assets/app-images/mote/*.webp` | Mote expressions: greeting, happy, excited, proud, thinking, idle, dizzy, shocked |
| `assets/app-images/screenshots/en/*.webp` | 12 English screenshots in an iPhone frame: assistant, scanner, collection, commander, analysis, games, deck, mote, stats, history, search, card |
| `assets/app-images/screenshots/it/*.webp` | The same 12 screens in Italian |
| `assets/app-images/app-store/it/*.webp` | 9 composed Italian App Store screenshots (not used on the site) |

Screenshots exist only in English and Italian: the Italian page uses `it/`, every other language uses `en/`.

What each screenshot shows (used for alt texts):
- **assistant**: Mote suggests 3 swaps with cards you already own for the "Giada's Angels" Commander deck, plus 4 missing cards (about $9.85) with a "Buy 4 cards" button.
- **scanner**: The camera recognizes The One Ring ($111.31), with Set, Foil and "Add instantly" buttons and a running summary (4 cards, $111.88).
- **collection**: Collection home: value $572.26 for 124 cards, Binders, Wishlist, Sets, Trade, color filters and card grid.
- **commander**: "Find the right Commander for you" (12 questions, budget/mid/top lists) and "Explore commanders" ranked by popularity with price.
- **analysis**: AI analysis of "Giada's Angels": Bracket 2, suggested swaps marked "You own it", "Apply swaps".
- **games**: 4-player Commander life counter with commander art, turn counter and commander damage.
- **deck**: Commander deck page "Dance of the Elements" (Ashling, the Limitless), with Mote, Try it, Statistics and AI analysis.
- **mote**: Mote's home: "Pick a deck or a card: Mote answers based on the cards you actually own".
- **stats**: Deck statistics: 100/100 cards, 96% owned, 38 lands, avg mana cost 3.53, value $73.48, $9.85 to buy, 33% wins, opening hand 76% to draw 2–4 lands, mana curve.
- **history**: Games hub: game in progress, Resume / New game, playgroup with leaderboards, latest games.
- **search**: Add cards: search by name or set, Import tab, filters, "Most played in Commander".
- **card**: Card detail for Ashling, the Limitless with full rules text.

---

## SEO keyword plan

### Research method and limits

The Astro popularity/difficulty tools were not authorized in this run: only App Store search was available. I checked who ranks for the main terms on the US App Store:

- **"mtg card scanner"**: ManaBox (1,742 ratings), Dragon Shield (3,753), TCGplayer (17,878), Collectr (68,966). The head term is crowded and hard to win, but how-to searches around scanning ("how to scan mtg cards", "best way to catalog mtg collection") are a good fit for a Google guide.
- **"commander deck builder"**: the top results have 0–10 ratings (Grimoire, DeckCrafter, Commander Bracket, DeckLab). **Weak competition, high intent**: this is the best opportunity.
- **"mtg ai deck builder"**: again mostly apps with 0 ratings, except Mythic Tools (3,652). This is a niche ManaPal can own with "build from your own cards".

Rule followed: prefer specific, high-intent searches made by players who already own cards and are about to need the app (scan, value, build, choose a commander, tune lands, track a game) over generic MTG traffic (news, spoilers, decklists).

### en-US (landing page + 6 guides)

| Keyword | Type | Search intent | Why it converts | Page |
|---|---|---|---|---|
| mtg app for iphone / mtg collection app | Primary | Find one app to manage cards, decks and games | The searcher wants an app right now: the landing page shows everything ManaPal does | `index.html` |
| commander deck builder app (secondary) | Primary support | Find an app to build Commander decks | Low App Store competition; covered in the hero and the download reasons | `index.html` |
| mtg card scanner app (secondary) | Primary support | Find a scanner app | Covered in the hero sub-headline and screenshots | `index.html` |
| how to scan mtg cards | Long-tail | Learn the fastest way to digitize a physical collection | Whoever asks this is about to install a scanner: the guide ends with ManaPal's scanner | `guides/how-to-scan-mtg-cards.html` |
| how much is my mtg collection worth | Long-tail | Find out the value of a pile of cards | Strong motivation (money); the answer is "scan it and see the total", which is ManaPal's collection value | `guides/how-much-is-my-mtg-collection-worth.html` |
| build commander deck from your collection | Long-tail | Make a Commander deck using cards already owned | ManaPal's unique feature ("Build a deck with my cards"); almost no app answers this | `guides/build-commander-deck-from-your-collection.html` |
| how to choose a commander | Long-tail | Pick a commander that fits play style and budget | Leads straight to the "Find the right Commander for you" quiz | `guides/how-to-choose-a-commander.html` |
| how many lands in a commander deck | Long-tail | Fix mana problems (screw/flood) | High-volume deckbuilding question; ManaPal shows lands, curve and opening-hand odds | `guides/how-many-lands-in-a-commander-deck.html` |
| mtg life counter commander damage | Long-tail | Find a way to track 40 life, commander damage, poison, monarch | The searcher is about to play and needs a tool: the app's free life counter is the answer | `guides/mtg-life-counter-commander-damage.html` |

### Other languages (landing page only, keywords chosen in the local language)

| Locale | Primary keyword on the page | Supporting terms |
|---|---|---|
| it | app Magic The Gathering | scanner carte Magic, mazzo Commander, contapunti Magic, valore collezione Magic |
| de-DE | Magic: The Gathering App | MTG Karten scannen, Commander Deck bauen, Lebenspunktezähler, Sammlung verwalten |
| fr-FR | application Magic: The Gathering | scanner cartes Magic, deck Commander, compteur de points de vie, valeur collection |
| es-ES | app de Magic: The Gathering | escáner de cartas Magic, mazo Commander, contador de vidas, valor de tu colección |
| es-MX | app para Magic: The Gathering | escáner de cartas Magic, mazo de Commander, contador de vidas, cuánto vale tu colección |
| pt-BR | app de Magic: The Gathering | scanner de cartas Magic, deck de Commander, contador de vida, valor da coleção |
| pl | aplikacja Magic: The Gathering | skaner kart MTG, talia Commander, licznik życia, wartość kolekcji |
| ru | приложение для Magic: The Gathering | сканер карт МТГ, колода Commander, счётчик жизней, стоимость коллекции |
| tr | Magic: The Gathering uygulaması | MTG kart tarayıcı, Commander destesi, can sayacı, koleksiyon değeri |
| ja | MTG アプリ (マジック:ザ・ギャザリング) | カードスキャン, 統率者戦 デッキ, ライフカウンター, コレクションの価値 |
| ko | MTG 앱 (매직 더 개더링) | 카드 스캐너, 커맨더 덱, 라이프 카운터, 컬렉션 가치 |
| zh-Hans | 万智牌 App | 万智牌 卡牌扫描, 指挥官 套牌, 生命计数器, 收藏价值 |
| zh-Hant | 魔法風雲會 App | 卡牌掃描, 指揮官 套牌, 生命計數器, 收藏價值 |

Non-English landing pages link to the English guides (marked as English) until localized guides exist.
