/* ManaPal links (/d deck, /g game, /f friend): the texts of the pages, in the site's 14 languages.
   Card types and boards are the app's own translations (Localizable.xcstrings, MagicGlossary). */
(function () {
  "use strict";

  var T = {
    en: {
      open: "Open in ManaPal", get: "Get ManaPal", copy: "Copy list", copied: "List copied",
      copyHint: "Paste it into ManaBox, Moxfield, Archidekt or MTG Arena.",
      by: "by {name}", cards: "{n} cards", oneCard: "1 card", loading: "Opening the deck…",
      pitch: "With ManaPal you see at once which of these cards are already in your collection.",
      gone: "This link is gone", goneBody: "Whoever shared it removed it, or the link isn't complete.",
      invalid: "This link doesn't work", invalidBody: "It may have been cut off when it was copied. Ask for it again.",
      wishTitle: "{name} is looking for these cards", wishTitleAnon: "Cards this deck still needs",
      wishBody: "Have some of them? You can lend them.",
      snapshot: "A snapshot of the deck: it doesn't follow later edits.",
      updated: "Updated {date}", artBy: "Art by {artist}",
      commander: "Commander", commanders: "Commanders", creature: "Creatures", planeswalker: "Planeswalkers", battle: "Battles",
      instant: "Instants", sorcery: "Sorceries", artifact: "Artifacts", enchantment: "Enchantments", land: "Lands",
      other: "Other", side: "Sideboard", maybe: "Maybe",
      gameTitle: "A game is waiting for you", gameBody: "A friend recorded a game with you. Open it in ManaPal: it goes into your history and your stats.",
      gameOpen: "Open the game",
      friendTitle: "An invite to play", friendBody: "A friend invited you to ManaPal: the games you play together will reach both phones.",
      friendOpen: "Accept in ManaPal",
      noApp: "No ManaPal yet? Get it, then tap the link again."
    },
    it: {
      open: "Apri in ManaPal", get: "Scarica ManaPal", copy: "Copia la lista", copied: "Lista copiata",
      copyHint: "Si incolla in ManaBox, Moxfield, Archidekt o MTG Arena.",
      by: "di {name}", cards: "{n} carte", oneCard: "1 carta", loading: "Apro il mazzo…",
      pitch: "Con ManaPal vedi subito quali di queste carte hai già nella tua collezione.",
      gone: "Questo link non c'è più", goneBody: "Chi l'ha condiviso l'ha tolto, oppure il link non è completo.",
      invalid: "Questo link non funziona", invalidBody: "Forse si è tagliato quando è stato copiato. Fattelo rimandare.",
      wishTitle: "{name} cerca queste carte", wishTitleAnon: "Le carte che mancano a questo mazzo",
      wishBody: "Ne hai qualcuna? Puoi prestarla.",
      snapshot: "Una fotografia del mazzo: non segue le modifiche successive.",
      updated: "Aggiornato il {date}", artBy: "Illustrazione di {artist}",
      commander: "Comandante", commanders: "Comandanti", creature: "Creature", planeswalker: "Planeswalker", battle: "Battaglie",
      instant: "Istantanei", sorcery: "Stregonerie", artifact: "Artefatti", enchantment: "Incantesimi", land: "Terre",
      other: "Altre", side: "Sideboard", maybe: "Forse",
      gameTitle: "Una partita ti aspetta", gameBody: "Un amico ha registrato una partita con te. Aprila in ManaPal: finisce nel tuo storico e nelle statistiche.",
      gameOpen: "Apri la partita",
      friendTitle: "Un invito a giocare", friendBody: "Un amico ti ha invitato su ManaPal: le partite giocate insieme arriveranno su entrambi i telefoni.",
      friendOpen: "Accetta in ManaPal",
      noApp: "Non hai ancora ManaPal? Scaricalo, poi tocca di nuovo il link."
    },
    de: {
      open: "In ManaPal öffnen", get: "ManaPal laden", copy: "Liste kopieren", copied: "Liste kopiert",
      copyHint: "Lässt sich in ManaBox, Moxfield, Archidekt oder MTG Arena einfügen.",
      by: "von {name}", cards: "{n} Karten", oneCard: "1 Karte", loading: "Deck wird geöffnet…",
      pitch: "Mit ManaPal siehst du sofort, welche dieser Karten schon in deiner Sammlung sind.",
      gone: "Diesen Link gibt es nicht mehr", goneBody: "Wer ihn geteilt hat, hat ihn entfernt, oder der Link ist unvollständig.",
      invalid: "Dieser Link funktioniert nicht", invalidBody: "Vielleicht wurde er beim Kopieren abgeschnitten. Lass ihn dir noch einmal schicken.",
      wishTitle: "{name} sucht diese Karten", wishTitleAnon: "Karten, die diesem Deck noch fehlen",
      wishBody: "Hast du welche davon? Du kannst sie ausleihen.",
      snapshot: "Ein Schnappschuss des Decks: spätere Änderungen sind nicht dabei.",
      updated: "Aktualisiert am {date}", artBy: "Illustration von {artist}",
      commander: "Commander", commanders: "Commander", creature: "Kreaturen", planeswalker: "Planeswalker", battle: "Schlachten",
      instant: "Spontanzauber", sorcery: "Hexereien", artifact: "Artefakte", enchantment: "Verzauberungen", land: "Länder",
      other: "Andere", side: "Sideboard", maybe: "Vielleicht",
      gameTitle: "Ein Spiel wartet auf dich", gameBody: "Ein Freund hat ein Spiel mit dir eingetragen. Öffne es in ManaPal: Es landet in deinem Verlauf und deinen Statistiken.",
      gameOpen: "Spiel öffnen",
      friendTitle: "Eine Einladung zum Spielen", friendBody: "Ein Freund hat dich zu ManaPal eingeladen: Eure gemeinsamen Spiele landen auf beiden Handys.",
      friendOpen: "In ManaPal annehmen",
      noApp: "Noch kein ManaPal? Lade es und tippe dann noch einmal auf den Link."
    },
    fr: {
      open: "Ouvrir dans ManaPal", get: "Télécharger ManaPal", copy: "Copier la liste", copied: "Liste copiée",
      copyHint: "À coller dans ManaBox, Moxfield, Archidekt ou MTG Arena.",
      by: "de {name}", cards: "{n} cartes", oneCard: "1 carte", loading: "Ouverture du deck…",
      pitch: "Avec ManaPal, tu vois tout de suite lesquelles de ces cartes sont déjà dans ta collection.",
      gone: "Ce lien n'existe plus", goneBody: "La personne qui l'a partagé l'a retiré, ou le lien est incomplet.",
      invalid: "Ce lien ne fonctionne pas", invalidBody: "Il a peut-être été coupé en le copiant. Demande-le à nouveau.",
      wishTitle: "{name} cherche ces cartes", wishTitleAnon: "Les cartes qui manquent à ce deck",
      wishBody: "Tu en as certaines ? Tu peux les prêter.",
      snapshot: "Une photo du deck : elle ne suit pas les modifications suivantes.",
      updated: "Mis à jour le {date}", artBy: "Illustration de {artist}",
      commander: "Commandant", commanders: "Commandants", creature: "Créatures", planeswalker: "Planeswalkers", battle: "Batailles",
      instant: "Éphémères", sorcery: "Rituels", artifact: "Artefacts", enchantment: "Enchantements", land: "Terrains",
      other: "Autres", side: "Réserve", maybe: "Peut-être",
      gameTitle: "Une partie t'attend", gameBody: "Un ami a enregistré une partie avec toi. Ouvre-la dans ManaPal : elle rejoint ton historique et tes statistiques.",
      gameOpen: "Ouvrir la partie",
      friendTitle: "Une invitation à jouer", friendBody: "Un ami t'a invité sur ManaPal : les parties jouées ensemble arriveront sur vos deux téléphones.",
      friendOpen: "Accepter dans ManaPal",
      noApp: "Pas encore ManaPal ? Télécharge-le, puis touche à nouveau le lien."
    },
    es: {
      open: "Abrir en ManaPal", get: "Descargar ManaPal", copy: "Copiar la lista", copied: "Lista copiada",
      copyHint: "Se pega en ManaBox, Moxfield, Archidekt o MTG Arena.",
      by: "de {name}", cards: "{n} cartas", oneCard: "1 carta", loading: "Abriendo el mazo…",
      pitch: "Con ManaPal ves al momento cuáles de estas cartas ya tienes en tu colección.",
      gone: "Este enlace ya no existe", goneBody: "Quien lo compartió lo quitó, o el enlace no está completo.",
      invalid: "Este enlace no funciona", invalidBody: "Puede que se cortara al copiarlo. Pide que te lo envíen de nuevo.",
      wishTitle: "{name} busca estas cartas", wishTitleAnon: "Las cartas que le faltan a este mazo",
      wishBody: "¿Tienes alguna? Puedes prestarla.",
      snapshot: "Una foto del mazo: no sigue los cambios posteriores.",
      updated: "Actualizado el {date}", artBy: "Ilustración de {artist}",
      commander: "Comandante", commanders: "Comandantes", creature: "Criaturas", planeswalker: "Planeswalkers", battle: "Batallas",
      instant: "Instantáneos", sorcery: "Conjuros", artifact: "Artefactos", enchantment: "Encantamientos", land: "Tierras",
      other: "Otras", side: "Banquillo", maybe: "Quizás",
      gameTitle: "Te espera una partida", gameBody: "Un amigo registró una partida contigo. Ábrela en ManaPal: irá a tu historial y a tus estadísticas.",
      gameOpen: "Abrir la partida",
      friendTitle: "Una invitación a jugar", friendBody: "Un amigo te invitó a ManaPal: las partidas que juguéis juntos llegarán a los dos teléfonos.",
      friendOpen: "Aceptar en ManaPal",
      noApp: "¿Aún no tienes ManaPal? Descárgalo y vuelve a tocar el enlace."
    },
    "es-419": {
      open: "Abrir en ManaPal", get: "Descargar ManaPal", copy: "Copiar la lista", copied: "Lista copiada",
      copyHint: "Se pega en ManaBox, Moxfield, Archidekt o MTG Arena.",
      by: "de {name}", cards: "{n} cartas", oneCard: "1 carta", loading: "Abriendo el mazo…",
      pitch: "Con ManaPal ves al instante cuáles de estas cartas ya tienes en tu colección.",
      gone: "Este enlace ya no existe", goneBody: "Quien lo compartió lo quitó, o el enlace no está completo.",
      invalid: "Este enlace no funciona", invalidBody: "Puede que se haya cortado al copiarlo. Pide que te lo manden de nuevo.",
      wishTitle: "{name} busca estas cartas", wishTitleAnon: "Las cartas que le faltan a este mazo",
      wishBody: "¿Tienes alguna? Puedes prestarla.",
      snapshot: "Una foto del mazo: no sigue los cambios posteriores.",
      updated: "Actualizado el {date}", artBy: "Ilustración de {artist}",
      commander: "Comandante", commanders: "Comandantes", creature: "Criaturas", planeswalker: "Planeswalkers", battle: "Batallas",
      instant: "Instantáneos", sorcery: "Conjuros", artifact: "Artefactos", enchantment: "Encantamientos", land: "Tierras",
      other: "Otras", side: "Sideboard", maybe: "Quizás",
      gameTitle: "Te espera una partida", gameBody: "Un amigo registró una partida contigo. Ábrela en ManaPal: irá a tu historial y a tus estadísticas.",
      gameOpen: "Abrir la partida",
      friendTitle: "Una invitación a jugar", friendBody: "Un amigo te invitó a ManaPal: las partidas que jueguen juntos llegarán a los dos teléfonos.",
      friendOpen: "Aceptar en ManaPal",
      noApp: "¿Todavía no tienes ManaPal? Descárgalo y vuelve a tocar el enlace."
    },
    "pt-BR": {
      open: "Abrir no ManaPal", get: "Baixar o ManaPal", copy: "Copiar a lista", copied: "Lista copiada",
      copyHint: "Dá para colar no ManaBox, Moxfield, Archidekt ou MTG Arena.",
      by: "de {name}", cards: "{n} cards", oneCard: "1 card", loading: "Abrindo o deck…",
      pitch: "Com o ManaPal você vê na hora quais destes cards já estão na sua coleção.",
      gone: "Este link não existe mais", goneBody: "Quem compartilhou removeu, ou o link está incompleto.",
      invalid: "Este link não funciona", invalidBody: "Talvez tenha sido cortado ao copiar. Peça para mandarem de novo.",
      wishTitle: "{name} procura estes cards", wishTitleAnon: "Os cards que faltam neste deck",
      wishBody: "Tem algum? Você pode emprestar.",
      snapshot: "Uma foto do deck: não acompanha as alterações seguintes.",
      updated: "Atualizado em {date}", artBy: "Ilustração de {artist}",
      commander: "Comandante", commanders: "Comandantes", creature: "Criaturas", planeswalker: "Planeswalkers", battle: "Batalhas",
      instant: "Mágicas Instantâneas", sorcery: "Feitiços", artifact: "Artefatos", enchantment: "Encantamentos", land: "Terrenos",
      other: "Outros", side: "Sideboard", maybe: "Talvez",
      gameTitle: "Uma partida está esperando você", gameBody: "Um amigo registrou uma partida com você. Abra no ManaPal: ela vai para o seu histórico e as suas estatísticas.",
      gameOpen: "Abrir a partida",
      friendTitle: "Um convite para jogar", friendBody: "Um amigo convidou você para o ManaPal: as partidas jogadas juntos chegam aos dois celulares.",
      friendOpen: "Aceitar no ManaPal",
      noApp: "Ainda não tem o ManaPal? Baixe e toque no link de novo."
    },
    pl: {
      open: "Otwórz w ManaPal", get: "Pobierz ManaPal", copy: "Kopiuj listę", copied: "Skopiowano listę",
      copyHint: "Wkleisz ją do ManaBox, Moxfield, Archidekt lub MTG Arena.",
      by: "autor: {name}", cards: "Karty: {n}", oneCard: "1 karta", loading: "Otwieram talię…",
      pitch: "Z ManaPal od razu widzisz, które z tych kart masz już w kolekcji.",
      gone: "Ten link już nie działa", goneBody: "Osoba, która go udostępniła, usunęła go albo link jest niepełny.",
      invalid: "Ten link nie działa", invalidBody: "Może został ucięty przy kopiowaniu. Poproś o niego jeszcze raz.",
      wishTitle: "{name} szuka tych kart", wishTitleAnon: "Karty, których brakuje tej talii",
      wishBody: "Masz którąś? Możesz ją pożyczyć.",
      snapshot: "Zdjęcie talii: nie uwzględnia późniejszych zmian.",
      updated: "Zaktualizowano {date}", artBy: "Ilustracja: {artist}",
      commander: "Dowódca", commanders: "Dowódcy", creature: "Stwory", planeswalker: "Planeswalkerzy", battle: "Bitwy",
      instant: "Instanty", sorcery: "Sorcery", artifact: "Artefakty", enchantment: "Zaklęcia", land: "Lądy",
      other: "Inne", side: "Sideboard", maybe: "Może",
      gameTitle: "Czeka na ciebie gra", gameBody: "Znajomy zapisał grę z tobą. Otwórz ją w ManaPal: trafi do twojej historii i statystyk.",
      gameOpen: "Otwórz grę",
      friendTitle: "Zaproszenie do gry", friendBody: "Znajomy zaprasza cię do ManaPal: wspólne gry trafią na oba telefony.",
      friendOpen: "Przyjmij w ManaPal",
      noApp: "Nie masz jeszcze ManaPal? Pobierz go i dotknij linku jeszcze raz."
    },
    tr: {
      open: "ManaPal'da aç", get: "ManaPal'ı indir", copy: "Listeyi kopyala", copied: "Liste kopyalandı",
      copyHint: "ManaBox, Moxfield, Archidekt veya MTG Arena'ya yapıştırabilirsin.",
      by: "{name} tarafından", cards: "{n} kart", oneCard: "1 kart", loading: "Deste açılıyor…",
      pitch: "ManaPal ile bu kartlardan hangilerinin koleksiyonunda olduğunu hemen görürsün.",
      gone: "Bu bağlantı artık yok", goneBody: "Paylaşan kişi kaldırmış ya da bağlantı eksik.",
      invalid: "Bu bağlantı çalışmıyor", invalidBody: "Kopyalanırken kesilmiş olabilir. Yeniden göndermelerini iste.",
      wishTitle: "{name} bu kartları arıyor", wishTitleAnon: "Bu destede eksik olan kartlar",
      wishBody: "Bazıları sende var mı? Ödünç verebilirsin.",
      snapshot: "Destenin bir fotoğrafı: sonraki değişiklikleri izlemez.",
      updated: "{date} tarihinde güncellendi", artBy: "İllüstrasyon: {artist}",
      commander: "Komutan", commanders: "Komutanlar", creature: "Yaratıklar", planeswalker: "Planeswalker'lar", battle: "Battle'lar",
      instant: "Instant'lar", sorcery: "Sorcery'ler", artifact: "Artifact'ler", enchantment: "Enchantment'lar", land: "Land'ler",
      other: "Diğer", side: "Yedek deste", maybe: "Belki",
      gameTitle: "Seni bir oyun bekliyor", gameBody: "Bir arkadaşın seninle bir oyun kaydetti. ManaPal'da aç: geçmişine ve istatistiklerine eklenir.",
      gameOpen: "Oyunu aç",
      friendTitle: "Oyun daveti", friendBody: "Bir arkadaşın seni ManaPal'a davet etti: birlikte oynadığınız oyunlar iki telefona da gelir.",
      friendOpen: "ManaPal'da kabul et",
      noApp: "Henüz ManaPal yok mu? İndir, sonra bağlantıya yeniden dokun."
    },
    ru: {
      open: "Открыть в ManaPal", get: "Скачать ManaPal", copy: "Скопировать список", copied: "Список скопирован",
      copyHint: "Его можно вставить в ManaBox, Moxfield, Archidekt или MTG Arena.",
      by: "автор: {name}", cards: "Карт: {n}", oneCard: "1 карта", loading: "Открываю колоду…",
      pitch: "В ManaPal сразу видно, какие из этих карт уже есть в вашей коллекции.",
      gone: "Этой ссылки больше нет", goneBody: "Автор удалил её, или ссылка неполная.",
      invalid: "Ссылка не работает", invalidBody: "Возможно, она обрезалась при копировании. Попросите прислать её снова.",
      wishTitle: "{name} ищет эти карты", wishTitleAnon: "Карты, которых не хватает колоде",
      wishBody: "Есть какие-то из них? Их можно одолжить.",
      snapshot: "Снимок колоды: последующие изменения в него не попадут.",
      updated: "Обновлено {date}", artBy: "Иллюстрация: {artist}",
      commander: "Командир", commanders: "Командиры", creature: "Существа", planeswalker: "Мироходцы", battle: "Битвы",
      instant: "Мгновенные заклинания", sorcery: "Волшебства", artifact: "Артефакты", enchantment: "Чары", land: "Земли",
      other: "Другое", side: "Сайдборд", maybe: "Возможно",
      gameTitle: "Вас ждёт партия", gameBody: "Друг записал партию с вами. Откройте её в ManaPal: она попадёт в вашу историю и статистику.",
      gameOpen: "Открыть партию",
      friendTitle: "Приглашение сыграть", friendBody: "Друг приглашает вас в ManaPal: совместные партии будут на обоих телефонах.",
      friendOpen: "Принять в ManaPal",
      noApp: "Ещё нет ManaPal? Скачайте приложение и снова нажмите на ссылку."
    },
    ja: {
      open: "ManaPalで開く", get: "ManaPalを入手", copy: "リストをコピー", copied: "リストをコピーしました",
      copyHint: "ManaBox、Moxfield、Archidekt、MTGアリーナに貼り付けられます。",
      by: "{name}のデッキ", cards: "{n}枚", oneCard: "1枚", loading: "デッキを開いています…",
      pitch: "ManaPalなら、このうちどのカードをもう持っているかがすぐわかります。",
      gone: "このリンクはもうありません", goneBody: "共有した人が削除したか、リンクが途中で切れています。",
      invalid: "このリンクは使えません", invalidBody: "コピーしたときに切れたのかもしれません。もう一度送ってもらってください。",
      wishTitle: "{name}が探しているカード", wishTitleAnon: "このデッキに足りないカード",
      wishBody: "持っているカードがあれば、貸してあげられます。",
      snapshot: "デッキのスナップショットです。この後の変更は反映されません。",
      updated: "{date}に更新", artBy: "イラスト：{artist}",
      commander: "統率者", commanders: "統率者", creature: "クリーチャー", planeswalker: "プレインズウォーカー", battle: "バトル",
      instant: "インスタント", sorcery: "ソーサリー", artifact: "アーティファクト", enchantment: "エンチャント", land: "土地",
      other: "その他", side: "サイドボード", maybe: "たぶん",
      gameTitle: "対戦が届いています", gameBody: "友達があなたとの対戦を記録しました。ManaPalで開くと、履歴と統計に追加されます。",
      gameOpen: "対戦を開く",
      friendTitle: "対戦へのお誘い", friendBody: "友達があなたをManaPalに招待しました。一緒にした対戦が両方のiPhoneに届きます。",
      friendOpen: "ManaPalで承認",
      noApp: "まだManaPalがない場合は、入手してからもう一度リンクをタップしてください。"
    },
    ko: {
      open: "ManaPal에서 열기", get: "ManaPal 받기", copy: "목록 복사", copied: "목록을 복사했습니다",
      copyHint: "ManaBox, Moxfield, Archidekt, MTG 아레나에 붙여 넣을 수 있습니다.",
      by: "{name}의 덱", cards: "{n}장", oneCard: "1장", loading: "덱을 여는 중…",
      pitch: "ManaPal에서는 이 카드 중 무엇을 이미 가지고 있는지 바로 보입니다.",
      gone: "이 링크는 더 이상 없습니다", goneBody: "공유한 사람이 삭제했거나 링크가 완전하지 않습니다.",
      invalid: "이 링크가 작동하지 않습니다", invalidBody: "복사하다가 잘렸을 수 있습니다. 다시 보내 달라고 하세요.",
      wishTitle: "{name} 님이 찾는 카드", wishTitleAnon: "이 덱에 부족한 카드",
      wishBody: "가지고 있는 카드가 있나요? 빌려줄 수 있습니다.",
      snapshot: "덱의 스냅숏입니다. 이후 변경 사항은 반영되지 않습니다.",
      updated: "{date}에 업데이트됨", artBy: "일러스트: {artist}",
      commander: "커맨더", commanders: "커맨더", creature: "생물", planeswalker: "플레인즈워커", battle: "전투",
      instant: "순간마법", sorcery: "집중마법", artifact: "마법물체", enchantment: "부여마법", land: "대지",
      other: "기타", side: "사이드보드", maybe: "아마도",
      gameTitle: "게임이 기다리고 있습니다", gameBody: "친구가 당신과의 게임을 기록했습니다. ManaPal에서 열면 기록과 통계에 추가됩니다.",
      gameOpen: "게임 열기",
      friendTitle: "게임 초대", friendBody: "친구가 ManaPal에 초대했습니다. 함께 한 게임이 두 사람의 iPhone 모두에 저장됩니다.",
      friendOpen: "ManaPal에서 수락",
      noApp: "아직 ManaPal이 없나요? 받은 다음 링크를 다시 탭하세요."
    },
    "zh-Hans": {
      open: "在 ManaPal 中打开", get: "获取 ManaPal", copy: "复制牌表", copied: "已复制牌表",
      copyHint: "可以粘贴到 ManaBox、Moxfield、Archidekt 或 MTG 竞技场。",
      by: "{name} 的套牌", cards: "{n} 张牌", oneCard: "1 张牌", loading: "正在打开套牌…",
      pitch: "用 ManaPal，一眼就能看到其中哪些牌你已经收藏了。",
      gone: "此链接已失效", goneBody: "分享者已删除它，或者链接不完整。",
      invalid: "此链接无法使用", invalidBody: "可能在复制时被截断了。请对方重新发送。",
      wishTitle: "{name} 正在找这些牌", wishTitleAnon: "这副套牌还缺的牌",
      wishBody: "你有其中几张吗？可以借给对方。",
      snapshot: "这是套牌的快照：之后的修改不会同步。",
      updated: "更新于 {date}", artBy: "插画：{artist}",
      commander: "指挥官", commanders: "指挥官", creature: "生物", planeswalker: "鹏洛客", battle: "战役",
      instant: "瞬间", sorcery: "法术", artifact: "神器", enchantment: "结界", land: "地",
      other: "其他", side: "备牌", maybe: "待定",
      gameTitle: "有一局对战在等你", gameBody: "朋友记录了一局和你的对战。在 ManaPal 中打开，它会进入你的历史和统计。",
      gameOpen: "打开对战",
      friendTitle: "游戏邀请", friendBody: "朋友邀请你加入 ManaPal：一起玩的对局会同时出现在两部手机上。",
      friendOpen: "在 ManaPal 中接受",
      noApp: "还没有 ManaPal？下载后再点一次链接。"
    },
    "zh-Hant": {
      open: "在 ManaPal 中打開", get: "取得 ManaPal", copy: "拷貝牌表", copied: "已拷貝牌表",
      copyHint: "可以貼到 ManaBox、Moxfield、Archidekt 或 MTG 競技場。",
      by: "{name} 的套牌", cards: "{n} 張牌", oneCard: "1 張牌", loading: "正在打開套牌…",
      pitch: "用 ManaPal，一眼就能看到其中哪些牌你已經收藏了。",
      gone: "這個連結已失效", goneBody: "分享者已刪除，或連結不完整。",
      invalid: "這個連結無法使用", invalidBody: "可能在拷貝時被截斷了。請對方重新傳送。",
      wishTitle: "{name} 正在找這些牌", wishTitleAnon: "這副套牌還缺的牌",
      wishBody: "你有其中幾張嗎？可以借給對方。",
      snapshot: "這是套牌的快照：之後的修改不會同步。",
      updated: "更新於 {date}", artBy: "插畫：{artist}",
      commander: "指揮官", commanders: "指揮官", creature: "生物", planeswalker: "鵬洛客", battle: "戰役",
      instant: "瞬間", sorcery: "巫術", artifact: "神器", enchantment: "結界", land: "地",
      other: "其他", side: "備牌", maybe: "或許",
      gameTitle: "有一場對戰在等你", gameBody: "朋友記錄了一場和你的對戰。在 ManaPal 中打開，它會加入你的歷史和統計。",
      gameOpen: "打開對戰",
      friendTitle: "遊戲邀請", friendBody: "朋友邀請你加入 ManaPal：一起玩的對局會同時出現在兩支手機上。",
      friendOpen: "在 ManaPal 中接受",
      noApp: "還沒有 ManaPal？下載後再點一次連結。"
    }
  };

  /** The visitor's language among the site's: ?lang=, then the browser's, else English. */
  function pick() {
    var wanted = [];
    var param = new URLSearchParams(location.search).get("lang");
    if (param) wanted.push(param);
    (navigator.languages || [navigator.language || "en"]).forEach(function (l) { wanted.push(l); });
    for (var i = 0; i < wanted.length; i++) {
      var lower = String(wanted[i] || "").toLowerCase();
      if (lower.indexOf("zh") === 0) return /hant|tw|hk|mo/.test(lower) ? "zh-Hant" : "zh-Hans";
      if (lower.indexOf("pt") === 0) return "pt-BR";
      if (lower.indexOf("es") === 0) return lower === "es" || lower === "es-es" ? "es" : "es-419";
      var base = lower.split("-")[0];
      if (T[base]) return base;
    }
    return "en";
  }

  var lang = pick();
  document.documentElement.lang = lang;

  window.MP = window.MP || {};
  window.MP.lang = lang;
  window.MP.t = function (key, vars) {
    var text = (T[lang] && T[lang][key]) || T.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (name) { text = text.split("{" + name + "}").join(vars[name]); });
    return text;
  };
  /** Fills every [data-t] element of a static page. */
  window.MP.translate = function (root) {
    (root || document).querySelectorAll("[data-t]").forEach(function (el) { el.textContent = window.MP.t(el.getAttribute("data-t")); });
  };
  window.MP.appStore = "https://apps.apple.com/app/id6822809444";
})();
