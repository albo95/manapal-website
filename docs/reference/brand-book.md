# ManaPal — Brand book e mascotte

Aggiornato: 15 ottobre 2026. Vale per l'app, l'App Store, i social e la community.

## 1. Il concetto in una frase

**Mote è una goccia di Mana viva.** Vive dentro ManaPal, conosce le tue carte e ti aiuta come l'oste di un tavolo da gioco: accogliente, spiritoso, e sotto sotto un fanatico di mazzi.

Perché proprio così:
- **È fatto di Mana**, la moneta dell'app. Quando guadagni Mana, Mote si illumina: l'economia dell'app diventa visibile e simpatica.
- **Riprende il logo:** la scintilla a quattro punte del marchio è il "ciuffo" sulla sua punta. Oro e viola sono i colori del brand.
- **Non è umano.** Le ricerche sugli assistenti AI dicono che un personaggio stilizzato aumenta calore e fiducia. Un volto realistico invece alza le aspettative e la fiducia cala quando l'AI sbaglia. Anche Copilot (Mico), Gemini e Siri hanno scelto forme astratte.
- **Spazio libero:** ManaBox, Moxfield, Archidekt, EDHREC e Untapped non hanno una mascotte. Il modello più vicino è l'oste di Hearthstone, "qualcuno che parla a nome del gioco", amatissimo dai giocatori.
- **Evita i cliché:** niente gufo (è di Duolingo), niente drago (inflazionato nel fantasy e nei marchi TCG).

## 2. Nome

**Mote** (in inglese "granello, pulviscolo di luce"). Una sillaba, si pronuncia uguale in tutte le 14 lingue dell'app e non contiene "Magic" né "MTG".
ManaPal resta il nome del prodotto, Mote è il personaggio. Si dice "Mote", non "il Mote".

## 3. Personalità

**L'oste del tavolo che sotto sotto è un fanatico di mazzi.**

| Mote è… | …ma non è |
|---|---|
| Accogliente: ti fa sentire a casa al primo avvio | Appiccicoso o invadente |
| Spiritoso: una battuta leggera, un occhiolino | "Unhinged" o sarcastico a vuoto |
| Esperto e preciso su regole, prezzi e dati | Saccente o vago |
| Entusiasta delle tue carte e dei tuoi mazzi | Adulatore: se il mazzo ha problemi lo dice, con garbo |
| Un po' goffo e tenero quando sbaglia | Patetico o lagnoso |
| Sempre dalla tua parte, anche quando perdi | Uno che ti fa sentire in colpa |

Regola d'oro (lezione di Finch e di Mailchimp): **mai senso di colpa, mai pressione.** Se perdi una partita Mote ti consola; non ti vende niente in quel momento.

## 4. Voce e tono

Mote parla in prima persona, dà del tu, frasi brevi. Usa il gergo di Magic quando aiuta (ramp, curva, mulligan), senza esagerare.

| Contesto | Tono | Esempio |
|---|---|---|
| Benvenuto | Caldo | "Ciao, sono Mote! Ti aiuto con collezione, mazzi e partite." |
| Risposta su regole o prezzi | **Neutro e preciso**: personalità solo nella cornice | "Sì: il Commander torna nella zona di comando, se vuoi. Fonte: regole complete, 903.9." |
| Analisi del mazzo | Onesto e costruttivo | "Ha un piano chiaro, ma 31 terre sono poche: ecco 5 scambi con carte che hai già." |
| Successo, Mana ricevuti | Festa | "+40 Mana! Brillo come un Sol Ring." |
| Errore | Breve, si scusa e dà la soluzione | "Ops, qualcosa non è andato. Non ti ho scalato Mana: riprova." |
| Schermata vuota | Due parti istruzione, una parte simpatia | "Inizia il tuo grimorio: inquadra le carte e le riconosco io." |
| Soldi e paywall | Calmo e trasparente, niente urgenza finta | "Prova gratis 7 giorni: 15 Mana subito, poi 50 al mese." |
| Notifiche | Rare, utili, divertenti | "La tua domanda gratis di oggi ti aspetta. Ho già un sospetto sul tuo mazzo…" |

**Da non fare:** prendere in giro le carte o i mazzi dell'utente, parlare di soldi nei momenti emotivi, fingersi umano, prendere posizione su temi divisivi, promettere certezze che l'AI non ha.

Il prompt dell'assistente (`AgentPrompt.swift`) presenta già Mote con questa personalità, chiedendo esplicitamente di restare "plain and precise" su regole, prezzi e dati delle carte.

## 5. Sistema visivo

**Sagoma:** una **goccia di Mana** dorata. In alto finisce esattamente come una punta della scintilla a quattro punte che c'è in tutta l'app: i fianchi si incurvano verso l'interno fino a una punta sottile, dove brilla la scintilla del logo. Sotto è tonda e morbida.

Sembra una goccia di vetro liquido:
- nucleo di luce interno;
- riflesso lucido in alto a sinistra;
- riflesso a mezzaluna sul fondo;
- alone dorato intorno.

Niente braccia e niente guance: l'espressività sta negli occhi, nelle sopracciglia, nella bocca e nel modo in cui la goccia si muove. Trasmette **qualità e calma**, non aggressività. Si riconosce anche come sola silhouette e in scala di grigi.

**Colori**
| Ruolo | Colore |
|---|---|
| Corpo (dall'alto in basso) | `goldLight` #FFE89E → `gold` #FFC63C → `goldDeep` #DB8C14 |
| Occhi e linee | inchiostro viola-nero #1F1229 |
| Scintilla | bianco con alone |
| Accento "pensiero" (AI) | `arcane` #9E73FF |
| Sfondo | `ink` #0B0A10 con aloni oro e viola |

**Colori del mazzo:** quando Mote parla di un mazzo, il corpo può sfumare nei colori di quel mazzo: crema, azzurro, viola, rosso brace o verde, con più colori come gradiente. **Mai** i simboli di mana di Wizards (sole, goccia, teschio, fiamma, albero) né i cinque cerchi colorati. Attenzione in particolare: il mana blu di Wizards è una goccia dentro un cerchio. Mote è oro, ha un volto e la punta a scintilla, quindi è un'altra cosa; per restarlo, **non metterlo mai dentro un cerchio blu** e non usarlo come simbolo di costo.

**Dimensioni**
| Dimensione | Cosa si vede |
|---|---|
| < 34 pt | Solo goccia, occhi e scintilla: niente bocca né sopracciglia |
| 34–80 pt | Tutti i dettagli |
| 100–200 pt | Versione "eroe": onboarding, paywall, schermate vuote |
| Minimo assoluto | 24 pt |

**Espressioni (v1: 11).** Ognuna cambia il volto **e** il modo in cui si muove la goccia.

| Espressione | Movimento | Quando |
|---|---|---|
| `idle` | Respira piano, la punta oscilla appena | Avatar in chat, momenti neutri |
| `happy` | Saltella leggera, più luminosa | Successo, paywall, condivisioni |
| `greeting` | Occhiolino e saltelli | Benvenuto, assistente vuoto, collezione vuota, profilo social |
| `excited` | Rimbalza gelatinosa, si allunga, pioggia di scintille | Mana ricevuti, Commander trovati, carta di valore |
| `thinking` | La punta ondeggia come un'antenna, puntini viola che orbitano | L'AI sta lavorando |
| `unsure` | Si schiaccia un po', punta piegata | L'AI non è sicura ("controllo meglio") |
| `oops` | Tremolio rapido, goccia di sudore | Errori |
| `sleepy` | Si allarga, si affievolisce, respira lentissimo, "z" | Nessuna conversazione, sera e notte (widget futuro) |
| `shocked` | Si allunga di colpo verso l'alto | Picco di prezzo, combo inattesa |
| `sad` | Si affloscia e la punta cade, ma resta comprensiva | Partita persa: **mai sul paywall** |
| `proud` | Alta e sicura, qualche scintilla | Statistiche partite, mazzo condiviso, vittoria |


## 5b. Logo e icona

**Il logo è la goccia senza volto dentro un anello** che brilla nei cinque colori della magia (crema, blu, viola, rosso, verde), con un filo d'oro interno. La punta della goccia esce dall'anello in alto, con la scintilla: un "sigillo" che si riconosce anche minuscolo. **Mote è lo stesso segno con il volto.** Logo e mascotte sono quindi la stessa cosa:
- il logo si usa per l'icona, l'avvio dell'app e le impostazioni (`ManaPalLogoMark`);
- Mote si usa dentro l'app e nel marketing.

Perché questa forma:
- **Un cerchio con un segno al centro** è la forma più memorabile per un'icona.
- **I cinque colori** sono il segnale più forte per un giocatore di Magic. L'anello è **continuo e sfumato**: mai cinque pallini separati né simboli di mana, che ricorderebbero la ruota dei colori di Wizards.
- **La goccia d'oro con la punta a scintilla** è il segno che ci distingue. La punta che esce dall'anello dà movimento e la distingue da una rotellina di caricamento.
- **Senza volto**, l'icona comunica qualità e serietà.

Versioni:
- **iPhone:** normale, scura (uguale) e tinta (in scala di grigi);
- **Mac:** forma arrotondata con ombra.

Dove si trovano i file:
- `Tools/Brand/IconaFinale` (in uso);
- `Tools/Brand/IconaPrecedente` (le carte con la scintilla, da usare nel test A/B dopo il lancio);
- `Tools/Brand/Alternative`: la versione a carta con il bordo nei cinque colori e la goccia viola con il viso.

**Sfondo dell'app:** fondo scuro con aloni leggerissimi dei cinque colori ai bordi, lo stesso effetto dell'icona. L'oro resta il colore di pulsanti e accenti.

## 6. Movimento: Mote deve sembrare vivo

- **Sempre attivo:**
  - la goccia respira con un leggero effetto gelatina;
  - la punta oscilla;
  - il nucleo di luce si muove sfasato;
  - la scintilla sulla punta brilla a intermittenza;
  - piccole scintille salgono lente ai lati;
  - gli occhi si guardano intorno e sbattono le palpebre ogni 4 secondi circa, con qualche doppio battito.
- **Per stato:** l'allungamento, lo schiacciamento, i saltelli, la velocità, quanto si piega la punta, la luminosità e il numero di scintille cambiano con l'espressione (sezione 5). Tutti i movimenti sono lenti e morbidi: la calma è parte del brand.
- **Cambio di espressione:** un piccolo rimbalzo elastico, così si capisce che Mote ha "reagito".
- **Riduci movimento** (Accessibilità): Mote resta fermo in una posa. Nessuna informazione passa solo dall'animazione: c'è sempre anche un testo.
- **Prestazioni:** gli avatar nelle liste (messaggi in chat) sono statici. Si anima solo il Mote principale della schermata, a 30 fps, disegnato in vettoriale senza immagini.
- Mote è decorativo: è nascosto a VoiceOver, e il testo vicino spiega lo stato.

## 7. Dove compare nell'app

| Dove | Espressione | File |
|---|---|---|
| Onboarding, prima pagina | `greeting`, si presenta | `OnboardingHero.swift`, `OnboardingPage.swift` |
| Assistente vuoto | `greeting` | `AssistantWelcomeView.swift` |
| Avatar delle risposte | `idle`, errori `oops` | `AssistantAvatar.swift` |
| L'AI sta pensando | `thinking` | `TypingIndicatorView.swift` |
| Trova il tuo Commander, attesa e risultato | `thinking` → `excited` | `CommanderMatchLoadingView.swift` |
| Mana ricevuti | `excited` | `ManaCreditBurst.swift` |
| Paywall Pro | `happy`, piccolo e calmo | `ProPaywallView.swift` |
| Collezione vuota | `greeting` | `CollectionEmptyView.swift` |
| Nessuna conversazione | `sleepy` | `ChatHistoryView.swift` |
| Nessuna partita | `proud` | `GamesHubView.swift` |
| Wishlist vuota | `idle` | `WishlistView.swift` |
| Immagini condivise sui social (mazzo, partita, riepilogo, Commander) | `proud` / `happy` / `excited`, con i colori del mazzo | `ShareBrandFooter.swift` |

**Dove NON compare:** liste di carte, ricerca, dettaglio carta, prezzi, mazzi pieni, impostazioni, pagamenti e conferme di eliminazione. Lì conta la velocità; Mailchimp toglie la mascotte nei messaggi seri e noi facciamo lo stesso.

**Regole di frequenza** (le lezioni di Clippy e di Snapchat My AI):
- Mote non interrompe mai con un popup: compare solo dove c'è già qualcosa da mostrare.
- Al massimo una "apparizione grande" per sessione fuori dalla chat.
- **Si può spegnere:** Impostazioni → Assistente → "Mostra Mote, la mascotte". Da spento torna l'icona a scintille.

Il componente è `MoteView(mood:size:colors:isAnimated:)` in `Shared/Design/Mascot/`.

## 8. Fuori dall'app

### App Store: screenshot
Generatore pronto: **Impostazioni → Sviluppo → Marketing → "Screenshot App Store con Mote"** (solo nelle build di debug).
1. Cattura 6 schermate su un iPhone da 6,9" con dati veri, nell'ordine sotto.
2. Selezionale nel generatore: l'app le monta con titolo, Mote e fumetto a 1320 × 2868 px.
3. Esportale. Il testo segue la lingua dell'app: cambia lingua e rigenera per ognuna delle 14 lingue.

| # | Titolo | Mote dice | Espressione | Schermata |
|---|---|---|---|---|
| 1 | Il tuo esperto di Magic, sempre in tasca | Chiedimi tutto sul tuo mazzo! | greeting | Assistente con una risposta |
| 2 | Trova il Commander perfetto per te | Rispondi a 12 domande, al resto penso io | excited | Risultati di Trova il tuo Commander |
| 3 | Analisi del mazzo con le tue carte | Ecco 5 scambi che puoi fare subito | thinking | Report di analisi |
| 4 | Scansiona e scopri quanto vale la collezione | Questa vale più di quanto pensi! | shocked | Collezione con il valore |
| 5 | Mazzi da 100 carte pronti in un minuto | Uso prima le carte che hai già | proud | Mazzo costruito dall'AI |
| 6 | Partite, punti vita e classifiche | Chi vince stasera? | happy | Contapunti |

Perché in quest'ordine: i primi 2–3 screenshot decidono quasi tutto. Mettiamo per primo quello che nessun concorrente ha (l'AI che conosce le tue carte), poi il "wow" (Commander), poi le basi.

**Da testare con Product Page Optimization di Apple** (fino a 3 varianti, una sola differenza per volta):
1. Screenshot con Mote contro senza Mote.
2. Icona attuale contro icona con il volto di Mote. Le icone con personaggio vincono soprattutto nei giochi e non sempre altrove: va misurato, non dato per scontato.
3. Primo screenshot "assistente" contro "Commander".

**Regola Apple 2.3.9:** negli screenshot solo materiale di cui abbiamo i diritti. Niente loghi Wizards né simboli di mana; le immagini delle carte vanno mostrate come da regole di Scryfall e Wizards.

### Kit del brand
Impostazioni → Sviluppo → Marketing → **"Kit di Mote"**. Esporta:
- le 11 espressioni come sticker 1024 × 1024 trasparenti (Discord, WhatsApp, Telegram, storie);
- un'icona candidata 1024 × 1024 con Mote, da testare contro l'attuale;
- un'immagine profilo 1080 × 1080 per Instagram, TikTok, X e YouTube.

### Condivisioni dall'app
Ogni immagine che l'utente condivide (mazzo, partita, riepilogo serata, Commander trovati) ha in basso la firma di Mote:
- con l'espressione giusta (fiero se hai vinto, entusiasta per i Commander);
- con i colori del mazzo;
- con il codice invito e il QR per scaricare l'app.

È la pubblicità più credibile che c'è: un amico che mostra il suo mazzo.

### Video di anteprima App Store (15–30 secondi)
1. Mote saluta: "Ciao! Fammi vedere le tue carte."
2. Scansione rapida, poi il valore della collezione che sale ("Questa vale più di quanto pensi!").
3. Domanda in chat → Mote `thinking` → risposta.
4. Trova il tuo Commander → 3 comandanti → "Te lo costruisco?" → mazzo salvato.
5. Chiusura: logo ManaPal e Mote `happy`.

### Social (TikTok, Shorts, Reels)
Mote si gioca come una sitcom: poca produzione, reazioni ai commenti, sempre legato a cose vere del gioco. Duolingo ha fatto 8 milioni di follower così, ma chi l'ha copiato senza legare la voce al prodotto ha fallito.

Rubriche:
- **"Mote giudica il tuo mazzo"**: i follower mandano liste, Mote le analizza con l'app.
- **"La carta che vale più di quanto pensi"**: una scansione, poi la reazione `shocked`.
- **"Il peggior mulligan della settimana"**: con la reazione `sad` comprensiva.
- **"Trova il Commander a…"** un creator, un amico, un negozio.
- Ogni nuova espansione: "Mote prova i nuovi comandanti".

### Community
- **Discord:** set di emoji e sticker con tutte le espressioni di Mote, il modo più economico per far diventare Mote un segno di appartenenza (come Snoo per Reddit o l'Octocat per GitHub).
- **Varianti remixabili:** Mote con colori e accessori di ogni archetipo (Mote aggro, Mote control…), stile Octodex di GitHub.
- **Merchandising** (più avanti): adesivi, playmat, bustine protettive. Solo grafica nostra, mai simboli Wizards.
- **Creator e negozi:** codice invito personale, con Mote nel materiale per le serate Commander.

## 9. Vincoli legali Magic: The Gathering

- **Mai** loghi Magic, simbolo planeswalker, simboli di mana o di gilda, simbolo di tap, cornici delle carte, creature esistenti (per esempio Fblthp o Loot).
- **Mai** "Magic" o "MTG" nel nome della mascotte o nell'icona. Card Conjurer è stato chiuso nel 2022 e "MTG Forge" ha dovuto cambiare nome.
- Avviso obbligatorio della Fan Content Policy nell'app e sul sito: "ManaPal is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC."
- **Zona grigia da chiarire con un legale:** la Fan Content Policy dice che il contenuto fan non può richiedere pagamenti. ManaBox Pro e altri fanno pagare le proprie funzioni e vengono tollerati, ma non è un via libera. Noi vendiamo il servizio AI e lasciamo gratis i dati delle carte, che è la posizione più difendibile.
- Mote è un personaggio originale: per sicurezza registra il disegno e il nome come marchio tuo quando l'app inizia a crescere.

## 10. Prossimi passi

| Quando | Cosa |
|---|---|
| Fatto (v1) | Mote in SwiftUI vettoriale con 11 espressioni, goccia viva, colori del mazzo, firma sulle immagini condivise, kit di sticker e icona, Riduci movimento, interruttore nelle impostazioni, voce nell'AI, generatore di screenshot |
| v1.1 | Widget con l'umore di Mote (dorme la sera, festeggia dopo una vittoria); notifiche scritte con la voce di Mote, al massimo 2 a settimana, testate a rotazione |
| v1.2 | Mote `unsure` quando l'AI esprime dubbi; reazioni attivabili dall'utente durante le partite (stile emote di Clash Royale) |
| v2 | Un illustratore rifinisce il disegno partendo da questa base (€300–1.500); eventuale passaggio a Rive per animazioni più ricche (è una libreria esterna, va deciso); varianti stagionali |

**Numeri da guardare:**
- conversione della pagina App Store (test con e senza Mote);
- domande all'AI per utente;
- prove avviate dal paywall di onboarding;
- quanti spengono Mote dalle impostazioni (se sono più del 10%, Mote è troppo invadente).
