# ManaPal — dati e materiali

Aggiornato: 30 ottobre 2026. Fatti su ManaPal e materiali disponibili. Il progetto dell'app è in `Developer/AlbosApps/Apps/ManaPal` ed è la fonte di verità: se un dato qui sotto cambia, cambia prima lì.

### Dove stanno i dati nel progetto dell'app
| Cosa | File |
|---|---|
| Prezzi, limiti gratuiti, Pro, pacchetti Mana | `ManaPal-TODO.txt`, sezione 0 |
| Dominio e collegamento tra sito e app | `ManaPal-TODO.txt`, sezione 2 |
| Brand, Mote, voce, vincoli legali | `ManaPal-Brand.md` |
| Colori dell'app | `ManaPal/Shared/Design/AppTheme.swift` |
| Percorsi web usati dall'app | `ManaPal/Shared/Sharing/AppLinks.swift` |
| Formato dei link dei QR | `ManaPal/Features/Game/Transfer/GameTransferPayload.swift`, `ManaPal/Features/Decks/Transfer/DeckTransferPayload.swift` |
| Testi dell'app in 14 lingue | `ManaPal/Localizable.xcstrings` |
| Glossario ufficiale di Magic in 6 lingue | `ManaPal/Shared/Glossary/MagicGlossary.json` |
| Bozza di sito esistente | `Tools/Website` (copia identica in `docs/reference/website-draft/`) |
| Immagini originali in PNG | `Tools/Brochure/Assets`, `AppStore/Screenshots`, `Tools/Brand` |

Documenti interni con margini e costi: `ManaPal-BusinessPlan.md`, `ManaPal-Costi.md`, `ManaPal-Analytics.md`, PDF "Dossier" e "Pro-Revisione". La cartella `docs/` di questo repository è materiale di riferimento, non contenuto del sito.

## 1. Cos'è ManaPal

App per iPhone e iPad (iOS 18 o successivo) per i giocatori di **Magic: The Gathering**: collezione, mazzi, partite e un assistente AI di nome **Mote**. Il progetto compila anche per Mac; l'uscita su Mac al lancio non è confermata.

Frase usata nei materiali: *la tua collezione di Magic, i tuoi mazzi e le tue partite in un'app sola, con un assistente che conosce le tue carte.*

### Funzioni (gratis salvo dove indicato)
- **Collezione**: scanner che riconosce le carte con la fotocamera, ricerca anche in italiano, prezzi aggiornati (Cardmarket in euro, convertiti con i cambi BCE), valore nel tempo, binder, wishlist, espansioni con avanzamento, scambi, import da ManaBox, Moxfield, Archidekt, Delver Lens, Dragon Shield, Deckbox, TCGplayer, Cardmarket (CSV) ed export.
- **Mazzi**: creazione e import (Archidekt, Moxfield, lista di testo, codice QR tra due iPhone), statistiche (curva, ruoli, colori, carte più costose), simulazione della mano iniziale e partita di prova, precostruiti ufficiali con descrizione, "compra le carte mancanti".
- **Partite**: contapunti per 2-6 giocatori con comandanti, veleno, monarca, iniziativa, Planechase e Archenemy; storico e statistiche (mazzi, colori, testa a testa); dado 3D; partite condivise via QR.
- **Commander**: esplora i comandanti per colore e tema, quiz "Trova il tuo Commander".
- **Mote, l'assistente AI** (a Mana): domande su regole e carte, analisi del mazzo con scambi dalle tue carte, "Costruisci un mazzo con le mie carte", "Trova il tuo Commander", stima della condizione di una carta dalle foto.
- **14 lingue**: italiano, inglese, spagnolo, spagnolo (America Latina), portoghese (Brasile), francese, tedesco, giapponese, russo, turco, coreano, cinese semplificato, cinese tradizionale, polacco. Anche le carte si vedono nella lingua scelta.
- **iCloud**: collezione e mazzi sincronizzati tra i dispositivi.

### Prezzi (in vigore al 30 ottobre)
**Gratis per sempre:** collezione, prezzi, scanner, espansioni, precostruiti, pedine, partite; 7 mazzi costruiti (idee di mazzo illimitate), 5 binder; ogni giorno 1 domanda veloce all'AI, 3 descrizioni di mazzo e 10 riconoscimenti di carte; 10 Mana di benvenuto.

**Mana** (la moneta dell'AI, non scade). Ogni azione mostra il costo prima di partire; se fallisce i Mana tornano indietro.
| Azione | Mana |
|---|---|
| Domanda all'esperto | 10 |
| Analisi del mazzo | 20 |
| Trova il tuo Commander | 30 |
| Costruisci un mazzo con le mie carte | 50 |

| Pacchetto | Prezzo |
|---|---|
| 12 Mana | 0,99 € |
| 40 Mana | 2,99 € |
| 100 Mana | 6,99 € |
| 240 Mana | 14,99 € |

**ManaPal Pro:** settimanale 2,99 € (10 Mana a settimana) o annuale 49,99 € (50 Mana al mese, prova gratis 7 giorni con 30 Mana). Sblocca mazzi, binder e simulatore illimitati, import di più mazzi insieme, statistiche avanzate, 6 temi.

## 2. Brand

Brand book: `docs/reference/brand-book.md`. Design system: `docs/reference/design-system-it.pdf` e `-en.pdf`.

### Colori dell'app
| Ruolo nell'app | Hex |
|---|---|
| Oro (accento principale) | `#FFC63C` |
| Oro chiaro | `#FFE89E` |
| Oro scuro | `#DB8C14` |
| Arcano (accento AI, viola) | `#9E73FF` |
| Inchiostro (sfondo) | `#0B0A10` |
| Inchiostro rialzato (superfici) | `#17161F` |
| Inchiostro viola (occhi di Mote, testo su oro) | `#1F1229` |

L'app è solo in tema scuro.

### Tipografia dell'app
- Titoli: Young Serif (`assets/brand/fonts/YoungSerif-Regular.ttf`, licenza SIL Open Font License; disponibile anche su Google Fonts).
- Testo: il font di sistema di Apple (SF Pro).

### Stile dei testi nell'app
- Titoli di paragrafo bianchi in grassetto.
- Oro per evidenziare le parole chiave dentro il testo.
- Nomi delle carte sottolineati quando sono link.
- Tono: si dà del tu, frasi brevi e concrete, nessuna urgenza commerciale.

### Mote
Goccia di Mana dorata con la punta a scintilla. Regole del brand book: mai dentro un cerchio blu, mai usato come simbolo di costo.

## 3. Materiali in questo repository

| Percorso | Cosa |
|---|---|
| `assets/app-images/screenshots/it/` e `en/` | 12 schermate per lingua in cornice iPhone: analysis, assistant, card, collection, commander, deck, games, history, mote, scanner, search, stats |
| `assets/app-images/screenshots/older-it/` | 17 schermate meno recenti (onboarding, pro, mana, deckbuild, victory, setup, report…) |
| `assets/app-images/app-store/it/` | 9 screenshot dell'App Store composti con titoli |
| `assets/app-images/mote/` | 8 espressioni di Mote, sfondo trasparente |
| `assets/brand/icons/` | Icona dell'app 1024 (normale, dark, tinted) e PNG da 16 a 512 |
| `assets/brand/fonts/` | Young Serif |
| `docs/reference/` | Brand book, design system, presentazione, volantino (it/en), bozza di sito esistente |

Immagini in WebP, icone in PNG. Screenshot di fine ottobre 2026.

## 4. Link che l'app genera

- QR delle partite: `https://manapal.app/g#d=<dati>`; l'app li apre anche come `manapal://game?d=<dati>`.
- QR dei mazzi: `https://manapal.app/d#d=<dati>`; l'app li apre anche come `manapal://deck?d=<dati>`.
- Finché `AppLinks.webHost` è `nil` (oggi) l'app genera solo i link `manapal://`; i link `https://manapal.app/...` si attivano quando il dominio è online.
- Identificativi per i link universali: Team ID `2L7RFD7CXX`, bundle `com.albertobruno.magicpal.app`.
- La bozza esistente in `Tools/Website` ha: pagina principale, privacy, termini, pagina `/g`, file `apple-app-site-association` con il percorso `/g*`. Non ha ancora nulla per `/d`.

## 5. Dati fissi
- Dominio: **manapal.app** (il dominio .app richiede HTTPS).
- App Store ID: non ancora assegnato.
- Email di supporto: non ancora decisa.
- Privacy policy: https://manapal.app/privacy.html (nell'app il link punta ancora a https://albosapps.github.io/manapal/privacy.html). Descrive le statistiche d'uso con Google Analytics for Firebase come attive: solo con consenso esplicito (interruttore "Aiutaci a migliorare ManaPal", spento di default), senza testi scritti dall'utente. Sono pseudonime, non anonime.
- Termini: oggi l'EULA standard di Apple.

## 6. Vincoli legali
- La Fan Content Policy di Wizards richiede questo avviso: *ManaPal is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.*
- Dati e immagini delle carte: Scryfall.
- Simboli di mana ed espansioni nell'app: font Mana e Keyrune di Andrew Gioia (SIL OFL 1.1).
- Dal brand book: niente loghi di Magic, simbolo planeswalker, simboli di mana o di gilda, cornici delle carte come grafica propria, "Magic" o "MTG" nel logo o nel nome. ManaPal non è un'app ufficiale. Le immagini delle carte negli screenshot rientrano nella Fan Content Policy.
