// Toolbox content: pronunciation lab, writing models, free resources (carried over from v3).
DW.tools = {
sounds: [
  { s: 'ü', ipa: '[yː] / [ʏ]', fr: 'Dis « i » puis arrondis les lèvres : c’est le « u » de « tu ».', en: 'Say “ee”, then round your lips. It’s the French “u” in “tu”.', w: ['über', 'müde', 'Glück', 'fünf'] },
  { s: 'ö', ipa: '[øː] / [œ]', fr: 'Dis « é » avec les lèvres rondes : « eu » de « peu ».', en: 'Say “ay” with rounded lips, like French “peu”.', w: ['schön', 'hören', 'können', 'zwölf'] },
  { s: 'ä', ipa: '[ɛː] / [ɛ]', fr: '« è » ouvert, comme dans « mère ».', en: 'Open “e”, like French “è” in “mère”.', w: ['Käse', 'spät', 'Männer', 'Äpfel'] },
  { s: 'ch (ach)', ipa: '[x]', fr: 'Après a, o, u, au : comme le « خ » arabe.', en: 'After a, o, u, au: like Arabic “خ” (kh).', w: ['Bach', 'Buch', 'auch', 'acht'] },
  { s: 'ch (ich)', ipa: '[ç]', fr: 'Après e, i, ä, ö, ü, ei, l, n, r : un souffle doux, comme un « y » chuchoté. Pas « ch » français !', en: 'After e, i, ä, ö, ü, ei, l, n, r: a soft hiss, like a whispered “y”. Not “sh”!', w: ['ich', 'Milch', 'Mädchen', 'Küche'] },
  { s: 'r', ipa: '[ʁ] / [ɐ]', fr: 'Au début : dans la gorge, comme le « r » français ou un « غ » doux. À la fin (-er) : un « a » bref.', en: 'At the start: in the throat, like a soft Arabic “غ”. At the end (-er): a short “a”.', w: ['rot', 'Reise', 'Lehrer', 'Wasser'] },
  { s: 'ei / ie', ipa: '[aɪ] / [iː]', fr: 'Lis la 2e lettre : ei = « aï », ie = « i » long.', en: 'Read the second letter: ei = “eye”, ie = long “ee”.', w: ['Wein', 'Wien', 'mein', 'Miete'] },
  { s: 'eu / äu', ipa: '[ɔʏ]', fr: 'Comme « oï ».', en: 'Like “oy” in “boy”.', w: ['heute', 'Leute', 'Häuser', 'Deutsch'] },
  { s: 'z', ipa: '[ts]', fr: 'Toujours « ts ».', en: 'Always “ts”.', w: ['Zeit', 'Zug', 'zehn', 'Pizza'] },
  { s: 's / ß', ipa: '[z] / [s]', fr: 's devant une voyelle = « z ». ß et ss = « s » dur.', en: 's before a vowel = “z”. ß and ss = sharp “s”.', w: ['Sonne', 'sagen', 'groß', 'Fluss'] },
  { s: 'st / sp', ipa: '[ʃt] / [ʃp]', fr: 'Au début d’un mot : « cht » et « chp ».', en: 'At the start of a word: “sht” and “shp”.', w: ['Straße', 'Sport', 'verstehen', 'Beispiel'] },
  { s: 'w / v', ipa: '[v] / [f]', fr: 'w = « v ». v = souvent « f ».', en: 'w = English “v”. v = usually “f”.', w: ['Wasser', 'wie', 'Vater', 'viel'] },
  { s: 'h', ipa: '[h] / muet', fr: 'Au début : on souffle. Après une voyelle : muet, et la voyelle est longue.', en: 'At the start: breathe it out. After a vowel: silent, and the vowel is long.', w: ['Haus', 'heute', 'fahren', 'Sohn'] },
  { s: '-b -d -g', ipa: '[p] [t] [k]', fr: 'À la fin d’un mot, ils deviennent durs : p, t, k.', en: 'At the end of a word they turn hard: p, t, k.', w: ['Tag', 'Hund', 'gelb', 'abfahren'] },
  { s: '-ig', ipa: '[ɪç]', fr: '-ig final se dit « ich ».', en: 'Final -ig sounds like “ich”.', w: ['König', 'wichtig', 'zwanzig', 'richtig'] },
  { s: 'pf', ipa: '[pf]', fr: 'p et f ensemble, très vite.', en: 'p and f together, quickly.', w: ['Apfel', 'Pferd', 'Kopf', 'Pflanze'] },
],
pairs: [
  ['a long / court', 'a long / short', 'Staat', 'Stadt'], ['i long / court', 'i long / short', 'Miete', 'Mitte'], ['o long / court', 'o long / short', 'Ofen', 'offen'],
  ['ü long / court', 'ü long / short', 'Hüte', 'Hütte'], ['u / ü', 'u / ü', 'Kuchen', 'Küchen'], ['o / ö', 'o / ö', 'schon', 'schön'], ['i / ü', 'i / ü', 'Kiste', 'Küste'],
  ['ie / ü', 'ie / ü', 'vier', 'für'], ['e / ö', 'e / ö', 'lesen', 'lösen'], ['a / ä', 'a / ä', 'hatte', 'hätte'], ['a / ä', 'a / ä', 'war', 'wäre'],
  ['ie / ei', 'ie / ei', 'Wien', 'Wein'], ['ch / sch', 'ch / sch', 'Kirche', 'Kirsche'], ['ich / ach', 'ich / ach', 'Bäche', 'Bach'],
],
models: [
  { lvl: 'A1', fr: 'Message informel court', en: 'Short informal message', steps: { fr: ['Liebe … / Lieber … / Hallo …', 'Réponds à chaque point en une phrase', 'Viele Grüße + ton prénom (sans virgule)'], en: ['Liebe … / Lieber … / Hallo …', 'Answer each point in one sentence', 'Viele Grüße + your name (no comma)'] },
    text: 'Liebe Anna,\n\ndanke für deine Nachricht! Am Samstag habe ich leider keine Zeit. Ich muss arbeiten. Hast du am Sonntag Zeit? Wir können um 15 Uhr Kaffee trinken.\n\nViele Grüße\nLina' },
  { lvl: 'A2', fr: 'Répondre à une invitation', en: 'Reply to an invitation', steps: { fr: ['Remercie', 'Oui ou non, avec une raison', 'Pose une ou deux questions', 'Fin amicale'], en: ['Say thank you', 'Yes or no, with a reason', 'Ask one or two questions', 'Friendly ending'] },
    text: 'Hallo Jonas,\n\nvielen Dank für deine Einladung zur Geburtstagsparty! Ich komme sehr gern. Soll ich etwas mitbringen? Ich kann einen Salat machen. Wie komme ich am besten zu dir?\n\nBis Samstag!\nLiebe Grüße\nLina' },
  { lvl: 'B1', fr: 'E-mail formel (demande d’informations)', en: 'Formal email (asking for information)', steps: { fr: ['Objet', 'Sehr geehrte Damen und Herren, (la ligne suivante commence en minuscule)', 'Pourquoi tu écris', 'Questions : zunächst, außerdem, zum Schluss', 'Mit freundlichen Grüßen'], en: ['Subject line', 'Sehr geehrte Damen und Herren, (next line starts in lower case)', 'Why you are writing', 'Questions: zunächst, außerdem, zum Schluss', 'Mit freundlichen Grüßen'] },
    text: 'Anfrage zum Abendkurs Deutsch B2\n\nSehr geehrte Damen und Herren,\n\nich habe Ihre Anzeige für den Deutschkurs B2 gelesen und hätte noch einige Fragen.\n\nZunächst möchte ich wissen, wann der nächste Kurs beginnt. Außerdem würde mich interessieren, ob es auch Abendkurse gibt, da ich tagsüber arbeite. Könnten Sie mir zum Schluss bitte mitteilen, wie hoch die Kursgebühr ist?\n\nVielen Dank im Voraus für Ihre Antwort.\n\nMit freundlichen Grüßen\nLina Haddad' },
  { lvl: 'B1', fr: 'Contribution à un forum (ton avis)', en: 'Forum post (your opinion)', steps: { fr: ['Le thème en une phrase', 'Ton avis + 2 raisons', 'L’autre côté (trotzdem)', 'Ton exemple personnel', 'Courte conclusion'], en: ['Topic in one sentence', 'Your opinion + 2 reasons', 'The other side (trotzdem)', 'Your own example', 'Short ending'] },
    text: 'Ich finde das Thema Homeoffice sehr interessant. Meiner Meinung nach hat es viele Vorteile: Man spart Zeit, weil man nicht ins Büro fahren muss, und man kann sich die Arbeit freier einteilen. Trotzdem sehe ich auch Nachteile. Viele Menschen fühlen sich zu Hause allein. Ich persönlich arbeite gern zwei Tage pro Woche von zu Hause und drei Tage im Büro. So habe ich das Beste aus beiden Welten.' },
  { lvl: 'B2', fr: 'Lettre de motivation (Anschreiben)', en: 'Cover letter (Anschreiben)', steps: { fr: ['Objet : Bewerbung als …', 'Pourquoi ce poste', 'Ton poste actuel + résultats', 'Pourquoi cette entreprise', 'Langues, date de début', 'Demande un entretien'], en: ['Subject: Bewerbung als …', 'Why this job', 'Your current job + results', 'Why this company', 'Languages, start date', 'Ask for an interview'] },
    text: 'Bewerbung als Softwareentwicklerin\n\nSehr geehrte Frau Becker,\n\nmit großem Interesse habe ich Ihre Stellenanzeige gelesen. Da ich seit vier Jahren als Webentwicklerin in Tunis tätig bin und meine Erfahrung gern in einem internationalen Team einbringen möchte, bewerbe ich mich hiermit um diese Stelle.\n\nIn meiner aktuellen Position bin ich für die Entwicklung von Webanwendungen verantwortlich. Dabei arbeite ich eng mit Kunden aus Frankreich und Deutschland zusammen.\n\nMeine Deutschkenntnisse entsprechen dem Niveau B2; außerdem spreche ich fließend Arabisch, Französisch und Englisch. Ich könnte ab dem 1. Februar bei Ihnen beginnen.\n\nÜber eine Einladung zu einem persönlichen Gespräch freue ich mich sehr.\n\nMit freundlichen Grüßen\nLina Haddad' },
  { lvl: 'B2', fr: 'Réclamation formelle (Beschwerde)', en: 'Formal complaint (Beschwerde)', steps: { fr: ['Objet avec numéro de commande', 'Les faits : quoi, quand', 'Les problèmes, précisément', 'Ce que tu veux', 'Un délai'], en: ['Subject with order number', 'Facts: what, when', 'The problems, exactly', 'What you want', 'A deadline'] },
    text: 'Beschwerde über Ihre Lieferung (Bestellnummer 48213)\n\nSehr geehrte Damen und Herren,\n\nam 28. September habe ich in Ihrem Onlineshop einen Laptop bestellt, der am 3. Oktober geliefert wurde. Leider muss ich Ihnen mitteilen, dass das Gerät beschädigt angekommen ist: Der Bildschirm hat einen deutlichen Riss.\n\nDarüber hinaus wurde mir eine Lieferung innerhalb von zwei Werktagen zugesichert. Tatsächlich hat die Zustellung jedoch fünf Tage gedauert.\n\nIch bitte Sie daher, mir umgehend ein neues Gerät zuzusenden oder den Kaufpreis zu erstatten. Ich erwarte Ihre Rückmeldung bis zum 20. Oktober.\n\nMit freundlichen Grüßen\nLina Haddad' },
],
res: [
  { fr: 'Cours gratuits complets', en: 'Main free courses', list: [
    ['DW Learn German (Nicos Weg)', 'https://learngerman.dw.com/', 'A1–B1', 'Cours vidéo complet avec exercices.', 'Complete video course with exercises.'],
    ['VHS-Lernportal', 'https://www.vhs-lernportal.de/', 'A1–B2', 'Cours gratuits avec des tuteurs qui corrigent tes textes (inscription).', 'Free courses with tutors who correct your writing (sign-up).'],
    ['Deutsch.info', 'https://www.deutsch.info/', 'A1–B1', 'Leçons courtes avec audio + infos sur la vie en Allemagne.', 'Short lessons with audio + info about life in Germany.'] ] },
  { fr: 'Grammaire', en: 'Grammar practice', list: [
    ['Schubert Verlag', 'https://www.schubert-verlag.de/aufgaben/', 'A1–C1', 'Des centaines d’exercices gratuits par niveau.', 'Hundreds of free exercises by level.'],
    ['Lingolia Deutsch', 'https://deutsch.lingolia.com/', 'A1–C1', 'Explications et tableaux de grammaire clairs.', 'Clear grammar explanations and tables.'],
    ['Verbformen', 'https://www.verbformen.de/', 'A1–C2', 'Toutes les formes de n’importe quel verbe ou nom.', 'Every form of any verb or noun.'] ] },
  { fr: 'Écoute', en: 'Listening', list: [
    ['Easy German (YouTube)', 'https://www.youtube.com/@EasyGerman', 'A2–C1', 'Interviews dans la rue avec sous-titres.', 'Street interviews with subtitles.'],
    ['nachrichtenleicht', 'https://www.nachrichtenleicht.de/', 'A2–B1', 'Les infos en allemand facile, avec audio.', 'News in easy German, with audio.'],
    ['DW Top-Thema', 'https://www.dw.com/de/deutsch-lernen/s-2055', 'B1–C1', 'Infos lentes avec transcription.', 'Slow news with transcripts.'] ] },
  { fr: 'Mots et prononciation', en: 'Words and pronunciation', list: [
    ['Forvo', 'https://forvo.com/languages/de/', 'A1–C2', 'Des natifs prononcent n’importe quel mot.', 'Native speakers say any word.'],
    ['LEO', 'https://dict.leo.org/', 'A1–C2', 'Dictionnaire allemand–français / anglais.', 'German–French / English dictionary.'],
    ['DWDS', 'https://www.dwds.de/', 'B1–C2', 'Dictionnaire allemand avec exemples et audio.', 'German dictionary with examples and audio.'] ] },
  { fr: 'Écrire, travailler, examens', en: 'Writing, work and exams', list: [
    ['LanguageTool', 'https://languagetool.org/', 'A2–C2', 'Corrige tes textes allemands.', 'Checks your German texts.'],
    ['Goethe-Institut', 'https://www.goethe.de/de/spr/kup/prf.html', 'A1–C2', 'Modèles d’examens officiels gratuits.', 'Free official model exams.'],
    ['Make it in Germany', 'https://www.make-it-in-germany.com/', '—', 'Portail officiel : visa, reconnaissance des diplômes, emplois.', 'Official portal: visas, recognition of degrees, jobs.'] ] },
],
};
