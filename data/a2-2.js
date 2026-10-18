DW.level({
id: 'a2-2', code: 'A2.2', weeks: '7–8',
title: { fr: 'Se débrouiller partout', en: 'Getting by anywhere' },
goal: { fr: 'Faire une réclamation, raconter au prétérit, parler des fêtes, donner des conseils, poser des questions indirectes, décrire avec des relatives et postuler à un emploi.', en: 'Make a complaint, narrate in the simple past, talk about festivals, give advice, ask indirect questions, describe with relative clauses and apply for a job.' },
units: [
/* ---------- 1 ---------- */
{ t: 'Online bestellen', fr: 'Commander en ligne, réclamer ; deux compléments (datif + accusatif)', en: 'Ordering online, complaining; two objects (dative + accusative)',
sheet: `
# Qui reçoit quoi ? | Who gets what?
> Avec **geben, schenken, schicken, zeigen, bringen, erklären, empfehlen** : la **personne** au **datif**, la **chose** à l’**accusatif**. | With **geben, schenken, schicken, zeigen, bringen, erklären, empfehlen**: the **person** in the **dative**, the **thing** in the **accusative**.
= Ich schicke **dem Kunden** (Dat.) **das Paket** (Akk.). | J’envoie le colis au client. | I’m sending the customer the parcel.
= Sie schenkt **ihrer Mutter** **eine Uhr**. | Elle offre une montre à sa mère. | She gives her mother a watch.
# L’ordre des mots | Word order
T: Cas~Case | Ordre~Order | Exemple~Example
t: 2 noms~2 nouns | Dat. → Akk. | Ich gebe **dem Mann** **den Schlüssel**.
t: 1 pronom~1 pronoun | pronom d’abord~pronoun first | Ich gebe **ihm** den Schlüssel. / Ich gebe **ihn** dem Mann.
t: 2 pronoms~2 pronouns | **Akk. → Dat.** | Ich gebe **ihn ihm**.
! Deux pronoms : **accusatif avant datif** (« ihn ihm », « es dir »). | Two pronouns: **accusative before dative** (“ihn ihm”, “es dir”).
= Kannst du **es mir** zeigen? | Tu peux me le montrer ? | Can you show it to me?
# Rappel : le datif | Dative reminder
t: dem / einem / meinem (m, n) | der / einer / meiner (f) | den … -n (Pl.)
t: mir · dir · ihm · ihr · uns · euch · ihnen · Ihnen | |
# Réclamer | Complaining
= Die Jacke ist zu klein. Ich möchte sie **umtauschen**. | La veste est trop petite. Je voudrais l’échanger. | The jacket is too small. I’d like to exchange it.
= Ich möchte das Handy **zurückschicken**. | Je voudrais renvoyer le portable. | I’d like to send the phone back.
= Ich hätte gern **mein Geld zurück**. | Je voudrais être remboursé(e). | I’d like my money back.
`,
w: `
bestellen | commander | to order
die Bestellung (-en) | la commande | order
liefern | livrer | to deliver
die Lieferung (-en) | la livraison | delivery
das Paket (-e) | le colis | parcel
der Online-Shop (-s) | la boutique en ligne | online shop
die Ware (-n) | la marchandise | goods
das Angebot (-e) | l’offre | offer
der Rabatt (-e) | la réduction | discount
umtauschen | échanger | to exchange
zurückschicken | renvoyer | to send back
die Reklamation (-en) | la réclamation | complaint
sich beschweren | se plaindre | to complain
beschädigt | endommagé | damaged
defekt | défectueux | faulty
falsch | faux, mauvais | wrong
der Kundenservice | le service client | customer service
die Garantie (-n) | la garantie | guarantee
die Quittung (-en) | le reçu | receipt
schenken | offrir | to give as a present
zeigen | montrer | to show
erklären | expliquer | to explain
schicken | envoyer | to send
das Geld zurückbekommen | être remboursé | to get a refund
bar | en espèces | in cash
`,
p: `
Ich habe die Schuhe online bestellt. | J’ai commandé les chaussures en ligne. | I ordered the shoes online.
Das Paket ist immer noch nicht angekommen. | Le colis n’est toujours pas arrivé. | The parcel still hasn’t arrived.
Die Ware ist beschädigt. | La marchandise est endommagée. | The goods are damaged.
Sie haben mir die falsche Größe geschickt. | Vous m’avez envoyé la mauvaise taille. | You sent me the wrong size.
Ich möchte den Pullover umtauschen. | Je voudrais échanger le pull. | I’d like to exchange the jumper.
Kann ich mein Geld zurückbekommen? | Puis-je être remboursé(e) ? | Can I get my money back?
Haben Sie die Quittung noch? | Vous avez encore le reçu ? | Do you still have the receipt?
Ich zeige Ihnen das Problem. | Je vous montre le problème. | I’ll show you the problem.
Kannst du es mir erklären? | Tu peux me l’expliquer ? | Can you explain it to me?
Ich schenke meiner Schwester ein Buch. | J’offre un livre à ma sœur. | I’m giving my sister a book.
Das Gerät hat zwei Jahre Garantie. | L’appareil a deux ans de garantie. | The device has a two-year guarantee.
Wann wird die Bestellung geliefert? | Quand la commande sera-t-elle livrée ? | When will the order be delivered?
`,
g: `
Ich schicke ___ Kunden das Paket. | dem | dem/den/der | J’envoie le colis au client. | I’m sending the customer the parcel.
Sie schenkt ___ Tochter ein Fahrrad. | ihrer | ihre/ihrer/ihrem | Elle offre un vélo à sa fille. | She’s giving her daughter a bike.
Kannst du ___ das Foto zeigen? (moi) | mir | mich/mir/ich | Tu peux me montrer la photo ? | Can you show me the photo?
Ich erkläre ___ die Aufgabe. (lui) | ihm | ihn/ihm/er | Je lui explique l’exercice. | I’m explaining the exercise to him.
Ich gebe ___ den Schlüssel. (vous, poli) | Ihnen | Sie/Ihnen/Ihr | Je vous donne la clé. | I’m giving you the key.
Das Buch? Ich gebe ___ dir morgen. | es | es/ihm/ihn | Le livre ? Je te le donne demain. | The book? I’ll give it to you tomorrow.
Den Brief? Ich schicke ihn ___ heute. (elle) | ihr | ihr/sie/ihm | La lettre ? Je la lui envoie aujourd’hui. | The letter? I’ll send it to her today.
Die Jacke ist zu klein. Ich möchte sie ___. | umtauschen | umtauschen/tausche um/umgetauscht | La veste est trop petite. Je voudrais l’échanger. | The jacket is too small. I’d like to exchange it.
Das Paket ist ___. | beschädigt | beschädigt/beschädigen/schaden | Le colis est endommagé. | The parcel is damaged.
Wir haben den Kindern Geschenke ___. | gekauft | gekauft/kaufen/gekaufen | Nous avons acheté des cadeaux aux enfants. | We bought the children presents.
Hast du ___ Eltern geschrieben? | deinen | deine/deinen/deinem | Tu as écrit à tes parents ? | Did you write to your parents?
Er hat mir das Handy ___. | zurückgeschickt | zurückgeschickt/geschicktzurück/zurückschickt | Il m’a renvoyé le portable. | He sent the phone back to me.
`,
r: { de: `Sehr geehrte Damen und Herren, am 3. Mai habe ich bei Ihnen eine Kaffeemaschine bestellt (Bestellnummer 48213). Das Paket ist gestern angekommen, aber leider ist die Maschine beschädigt: Die Glaskanne ist kaputt. Außerdem haben Sie mir die falsche Farbe geschickt – ich hatte Schwarz bestellt, nicht Rot. Ich möchte die Maschine zurückschicken. Bitte schicken Sie mir eine neue Maschine in Schwarz oder geben Sie mir das Geld zurück. Mit freundlichen Grüßen\nAmira Ben Ali`,
  fr: `Madame, Monsieur, le 3 mai, j’ai commandé chez vous une machine à café (numéro de commande 48213). Le colis est arrivé hier, mais la machine est malheureusement endommagée : la verseuse en verre est cassée. De plus, vous m’avez envoyé la mauvaise couleur – j’avais commandé du noir, pas du rouge. Je voudrais renvoyer la machine. Veuillez m’envoyer une nouvelle machine noire ou me rembourser. Cordialement, Amira Ben Ali`,
  en: `Dear Sir or Madam, on 3 May I ordered a coffee machine from you (order number 48213). The parcel arrived yesterday, but unfortunately the machine is damaged: the glass jug is broken. In addition, you sent me the wrong colour – I had ordered black, not red. I would like to send the machine back. Please send me a new machine in black or refund my money. Yours faithfully, Amira Ben Ali`,
  q: `
Was hat Amira bestellt? | eine Kaffeemaschine | eine Glaskanne | ein Handy
Was ist kaputt? | die Glaskanne | das Paket | die Maschine ist zu klein
Welche Farbe wollte Amira? | Schwarz | Rot | Weiß
Was möchte Amira? | eine neue Maschine oder ihr Geld | eine rote Maschine | einen Rabatt
` },
d: `
Service | Kundenservice „Modehaus Klein“, was kann ich für Sie tun? | Service client « Modehaus Klein », que puis-je faire pour vous ? | “Modehaus Klein” customer service, how can I help?
Karim | Guten Tag, ich habe letzte Woche eine Jacke bestellt. Sie ist leider zu klein. | Bonjour, j’ai commandé une veste la semaine dernière. Elle est malheureusement trop petite. | Hello, I ordered a jacket last week. Unfortunately it’s too small.
Service | Das tut mir leid. Möchten Sie sie umtauschen? | Je suis désolée. Voulez-vous l’échanger ? | I’m sorry. Would you like to exchange it?
Karim | Ja, gern. Können Sie mir die Jacke in Größe L schicken? | Oui, volontiers. Pouvez-vous m’envoyer la veste en taille L ? | Yes, please. Can you send me the jacket in size L?
Service | Natürlich. Schicken Sie uns die alte Jacke bitte zurück. Das kostet nichts. | Bien sûr. Renvoyez-nous l’ancienne veste, s’il vous plaît. C’est gratuit. | Of course. Please send us the old jacket back. It’s free of charge.
Karim | Und wann bekomme ich die neue? | Et quand est-ce que je reçois la nouvelle ? | And when will I get the new one?
Service | In drei bis vier Tagen. Ich schicke Ihnen gleich eine E-Mail mit allen Informationen. | Dans trois à quatre jours. Je vous envoie tout de suite un e-mail avec toutes les informations. | In three to four days. I’ll send you an email with all the information right away.
`,
wr: { fr: 'Écris une réclamation à une boutique en ligne : ce que tu as commandé, quand, ce qui ne va pas (2 problèmes), ce que tu veux.', en: 'Write a complaint to an online shop: what you ordered, when, what is wrong (2 problems), what you want.', min: 60,
  req: ['Sehr geehrte=Sehr geehrte', 'bestellt=bestellt', 'problème=kaputt;beschädigt;defekt;falsch;zu klein;zu groß', 'umtauschen / zurück=umtauschen;zurück', 'datif + accusatif=\\b(mir|Ihnen|ihm|ihr)\\b .{0,25}\\b(den|die|das|eine|einen|ein|mein|meine|meinen)\\b', 'Mit freundlichen Grüßen=Mit freundlichen Grüßen'],
  model: 'Sehr geehrte Damen und Herren, am 10. Juni habe ich in Ihrem Online-Shop ein Kleid und zwei T-Shirts bestellt. Die Lieferung ist heute angekommen, aber es gibt zwei Probleme. Das Kleid ist beschädigt: Ein Knopf fehlt. Außerdem haben Sie mir die T-Shirts in der falschen Größe geschickt. Ich möchte das Kleid zurückschicken und die T-Shirts umtauschen. Bitte schicken Sie mir die T-Shirts in Größe M. Mit freundlichen Grüßen\nSara Ben Salah' },
pr: { fr: 'Accent des verbes séparables même au participe : ZURÜCKgeschickt, UMgetauscht. Les mots étrangers gardent souvent leur accent : GaranTIE, ReklamaTION.', en: 'Separable verbs keep the stress on the prefix, even in the participle: zuRÜCKgeschickt, UMgetauscht. Foreign words keep their stress: GaranTIE, ReklamaTION.',
  w: `
zurückschicken | renvoyer | send back
umtauschen | échanger | exchange
Garantie | garantie | guarantee
Reklamation | réclamation | complaint
beschädigt | endommagé | damaged
Lieferung | livraison | delivery
Ich möchte die Jacke umtauschen. | Je voudrais échanger la veste. | I’d like to exchange the jacket.
Können Sie es mir erklären? | Pouvez-vous me l’expliquer ? | Can you explain it to me?
` } },

/* ---------- 2 ---------- */
{ t: 'Schule und Ausbildung', fr: 'École, formation ; le prétérit pour raconter ; als / wenn', en: 'School, training; the simple past for stories; als / wenn',
sheet: `
# Le Präteritum (prétérit) | The Präteritum (simple past)
> À l’écrit (récits, livres, journaux), on raconte au **Präteritum**. | In writing (stories, books, newspapers) we narrate in the **Präteritum**.
T: ~ | régulier~regular: lernen | irrégulier~irregular: gehen
t: ich | lern**te** | **ging**
t: du | lern**test** | ging**st**
t: er / sie | lern**te** | **ging**
t: wir / Sie | lern**ten** | ging**en**
t: ihr | lern**tet** | ging**t**
! Irrégulier : ich et er/sie **sans terminaison** : ich ging, er kam, sie las. | Irregular: ich and er/sie have **no ending**: ich ging, er kam, sie las.
# Les irréguliers les plus fréquents | Most frequent irregular verbs
t: gehen → ging | kommen → kam | sehen → sah | finden → fand
t: geben → gab | nehmen → nahm | sprechen → sprach | lesen → las
t: schreiben → schrieb | bleiben → blieb | fahren → fuhr | essen → aß
t: wissen → wusste | denken → dachte | bringen → brachte | kennen → kannte
# als ou wenn (au passé) ? | als or wenn (in the past)?
T: ~ | Usage | Exemple~Example
t: **als** | une seule fois (passé)~once (past) | **Als** ich 18 war, machte ich das Abitur.
t: **wenn** | chaque fois (habitude)~every time (habit) | **Wenn** es regnete, blieben wir zu Hause.
t: **wenn** | présent / futur~present / future | **Wenn** ich Zeit habe, komme ich.
= Als ich in die Schule **kam**, **konnte** ich schon lesen. | Quand je suis entré(e) à l’école, je savais déjà lire. | When I started school, I could already read.
! Verbe à la **fin** dans la subordonnée, et la principale commence par le **verbe**. | Verb at the **end** in the subordinate clause, and the main clause starts with the **verb**.
`,
w: `
die Grundschule (-n) | l’école primaire | primary school
das Gymnasium (Gymnasien) | le lycée | grammar school
die Universität (-en) | l’université | university
die Ausbildung (-en) | la formation professionnelle | vocational training
das Abitur | le baccalauréat | A-levels (school-leaving exam)
die Prüfung (-en) | l’examen | exam
eine Prüfung bestehen | réussir un examen | to pass an exam
durchfallen | échouer | to fail
die Note (-n) | la note | mark, grade
das Zeugnis (-se) | le bulletin ; le certificat | school report; certificate
das Fach (Fächer) | la matière | subject
der Schüler (-) | l’élève | pupil
der Unterricht | le cours | lessons
die Klasse (-n) | la classe | class
das Studium | les études | studies
der Abschluss (Abschlüsse) | le diplôme | qualification, degree
studieren | faire des études | to study
lernen | apprendre, réviser | to learn
verstehen | comprendre | to understand
erklären | expliquer | to explain
der Lieblingslehrer (-) | le prof préféré | favourite teacher
die Erfahrung (-en) | l’expérience | experience
als | quand (une fois, passé) | when (once, past)
`,
p: `
Als ich sechs war, kam ich in die Schule. | À six ans, je suis entré(e) à l’école. | When I was six, I started school.
Mathe war mein Lieblingsfach. | Les maths étaient ma matière préférée. | Maths was my favourite subject.
Ich hatte immer gute Noten in Sprachen. | J’avais toujours de bonnes notes en langues. | I always had good marks in languages.
Mit achtzehn machte ich das Abitur. | À dix-huit ans, j’ai passé le bac. | At eighteen I did my A-levels.
Danach studierte ich Informatik in Tunis. | Ensuite, j’ai étudié l’informatique à Tunis. | Then I studied computer science in Tunis.
Ich habe die Prüfung bestanden! | J’ai réussi l’examen ! | I passed the exam!
Er ist leider durchgefallen. | Il a malheureusement échoué. | Unfortunately he failed.
Wenn ich Hausaufgaben hatte, half mir meine Mutter. | Quand j’avais des devoirs, ma mère m’aidait. | Whenever I had homework, my mother helped me.
Ich mache eine Ausbildung als Krankenpflegerin. | Je fais une formation d’infirmière. | I’m training to be a nurse.
Welchen Abschluss haben Sie? | Quel diplôme avez-vous ? | What qualification do you have?
Der Lehrer erklärte alles sehr gut. | Le professeur expliquait tout très bien. | The teacher explained everything very well.
Damals gab es noch keine Computer in der Schule. | À l’époque, il n’y avait pas encore d’ordinateurs à l’école. | Back then there were no computers at school.
`,
g: `
Gestern ___ ich ins Kino. (gehen, prétérit) | ging | ging/gehte/gang | Hier je suis allé(e) au cinéma. | Yesterday I went to the cinema.
Er ___ zu spät. (kommen) | kam | kam/kommte/kamte | Il est arrivé en retard. | He came late.
Wir ___ einen Film. (sehen) | sahen | sahen/sehten/sahten | Nous avons vu un film. | We saw a film.
Sie ___ einen Brief. (schreiben, elle) | schrieb | schrieb/schreibte/schriebte | Elle a écrit une lettre. | She wrote a letter.
Ich ___ jeden Tag drei Stunden. (lernen) | lernte | lernte/lernten/larnte | J’étudiais trois heures par jour. | I studied three hours every day.
Damals ___ es keine Handys. (geben) | gab | gab/gebte/gaben | À l’époque, il n’y avait pas de portables. | Back then there were no mobile phones.
___ ich zehn war, bekam ich ein Fahrrad. | Als | Als/Wenn/Wann | Quand j’avais dix ans, j’ai reçu un vélo. | When I was ten, I got a bike.
___ es schneite, bauten wir einen Schneemann. (chaque fois) | Wenn | Als/Wenn/Wann | Chaque fois qu’il neigeait, on faisait un bonhomme de neige. | Whenever it snowed, we built a snowman.
___ kommst du nach Hause? | Wann | Als/Wenn/Wann | Quand rentres-tu ? | When are you coming home?
Als ich in Berlin ___, lernte ich Deutsch. | wohnte | wohnte/wohne/gewohnt | Quand j’habitais à Berlin, j’ai appris l’allemand. | When I lived in Berlin, I learned German.
Sie hat die Prüfung ___. | bestanden | bestanden/bestehen/bestand | Elle a réussi l’examen. | She passed the exam.
Er ___ alles sehr gut. (wissen) | wusste | wusste/wisste/weißte | Il savait tout très bien. | He knew everything very well.
`,
r: { de: `Mein Weg zum Beruf: Ich ging in Sousse zur Schule. Meine Lieblingsfächer waren Biologie und Französisch. Als ich sechzehn war, wusste ich schon, dass ich Ärztin werden wollte. Ich lernte sehr viel und bestand das Abitur mit sehr guten Noten. Dann studierte ich sieben Jahre Medizin in Tunis. Das Studium war schwer, aber spannend. Als ich fertig war, bekam ich ein Angebot von einem Krankenhaus in Stuttgart. Deshalb lernte ich ein Jahr intensiv Deutsch. Heute arbeite ich als Kinderärztin.`,
  fr: `Mon chemin vers mon métier : je suis allée à l’école à Sousse. Mes matières préférées étaient la biologie et le français. Quand j’avais seize ans, je savais déjà que je voulais devenir médecin. J’ai beaucoup étudié et j’ai réussi le bac avec de très bonnes notes. Ensuite, j’ai étudié la médecine pendant sept ans à Tunis. Les études étaient difficiles, mais passionnantes. Quand j’ai eu fini, j’ai reçu une offre d’un hôpital de Stuttgart. C’est pourquoi j’ai appris l’allemand de façon intensive pendant un an. Aujourd’hui, je travaille comme pédiatre.`,
  en: `My path to my job: I went to school in Sousse. My favourite subjects were biology and French. When I was sixteen, I already knew that I wanted to become a doctor. I studied a lot and passed my A-levels with very good marks. Then I studied medicine in Tunis for seven years. The studies were hard but exciting. When I had finished, I got an offer from a hospital in Stuttgart. That’s why I studied German intensively for a year. Today I work as a paediatrician.`,
  q: `
Was waren ihre Lieblingsfächer? | Biologie und Französisch | Mathe und Deutsch | Medizin
Wann wusste sie, dass sie Ärztin werden wollte? | mit sechzehn | nach dem Studium | mit sieben
Wie lange hat sie studiert? | sieben Jahre | ein Jahr | sechzehn Jahre
Warum hat sie Deutsch gelernt? | Sie bekam ein Angebot aus Stuttgart. | Sie wollte in Deutschland studieren. | Deutsch war ihr Lieblingsfach.
` },
d: `
Jonas | Was hast du eigentlich studiert? | Au fait, qu’est-ce que tu as étudié ? | What did you actually study?
Nour | Ich habe Architektur studiert, in Sfax. | J’ai étudié l’architecture, à Sfax. | I studied architecture, in Sfax.
Jonas | Und warst du eine gute Schülerin? | Et tu étais une bonne élève ? | And were you a good pupil?
Nour | In Mathe ja, aber in Sport war ich schlecht! Als ich vierzehn war, bin ich sogar in Sport durchgefallen. | En maths oui, mais en sport j’étais nulle ! À quatorze ans, j’ai même raté le sport. | In maths yes, but I was bad at sport! When I was fourteen I even failed sport.
Jonas | Wirklich? Ich hatte immer Probleme mit Sprachen. | Vraiment ? Moi, j’ai toujours eu des problèmes avec les langues. | Really? I always had problems with languages.
Nour | Aber jetzt sprichst du doch super Arabisch! | Mais maintenant tu parles super bien arabe ! | But now you speak great Arabic!
Jonas | Danke, aber das hat zehn Jahre gedauert! | Merci, mais ça a pris dix ans ! | Thanks, but it took ten years!
`,
wr: { fr: 'Raconte ton parcours scolaire au Präteritum : école, matières, examens, études ou formation, un souvenir avec « als » et une habitude avec « wenn ».', en: 'Tell about your education in the Präteritum: school, subjects, exams, studies or training, one memory with “als” and one habit with “wenn”.', min: 50,
  req: ['als=\\bAls\\b;\\bals ich', 'wenn=\\b(W|w)enn\\b', '3 verbes au prétérit=(\\b(ging|kam|war|hatte|lernte|machte|studierte|bestand|bekam|wusste|fand|sah|las|schrieb|gab|wollte|musste|konnte|durfte|begann|wohnte|arbeitete)\\b.*){3}', 'Schule / Prüfung=Schule;Prüfung;Abitur;Studium;Ausbildung'],
  model: 'Ich ging zwölf Jahre in Tunis zur Schule. Mein Lieblingsfach war Englisch, aber in Physik hatte ich schlechte Noten. Wenn ich eine Prüfung hatte, lernte ich immer mit meiner Freundin Leila. Als ich neunzehn war, bestand ich das Abitur. Danach studierte ich Informatik an der Universität. Das Studium dauerte fünf Jahre. Als ich fertig war, fand ich schnell eine Stelle bei einer Firma.' },
pr: { fr: 'Les irréguliers au prétérit changent la voyelle : ging, kam, sah, las. Prononce bien la voyelle longue de « kam » (« kaam ») et « sah » (« zaa »).', en: 'Irregular past forms change the vowel: ging, kam, sah, las. Make the vowel in “kam” (“kaahm”) and “sah” (“zaah”) long.',
  w: `
ging | allait | went
kam | venait | came
sah | voyait | saw
las | lisait | read
schrieb | écrivait | wrote
bestanden | réussi | passed
Als ich sechs war, kam ich in die Schule. | À six ans, je suis entré(e) à l’école. | When I was six I started school.
Ich habe die Prüfung bestanden! | J’ai réussi l’examen ! | I passed the exam!
` } },

/* ---------- 3 ---------- */
{ t: 'Feste und Traditionen', fr: 'Fêtes et traditions ; « trotzdem » ; prépositions de temps', en: 'Festivals and traditions; “trotzdem”; time prepositions',
sheet: `
# trotzdem = quand même | trotzdem = nevertheless
> **trotzdem** occupe la position 1 (ou se place après le verbe) : le verbe reste en position 2. | **trotzdem** takes position 1 (or comes after the verb): the verb stays in position 2.
= Es regnet. **Trotzdem gehen** wir spazieren. | Il pleut. Nous allons quand même nous promener. | It’s raining. We’re going for a walk anyway.
= Ich war müde. Ich bin **trotzdem** zur Party gegangen. | J’étais fatigué(e). Je suis quand même allé(e) à la fête. | I was tired. I went to the party anyway.
T: Mot~Word | Sens~Meaning | Verbe~Verb
t: deshalb | conséquence logique~logical result | Deshalb **bleibe** ich zu Hause.
t: trotzdem | contraire à l’attendu~unexpected result | Trotzdem **gehe** ich raus.
# Prépositions de temps | Time prepositions
t: **vor** + Dat. (il y a, avant) | vor zwei Jahren, vor dem Essen
t: **nach** + Dat. (après) | nach der Arbeit, nach dem Fest
t: **seit** + Dat. (depuis) | seit einem Monat
t: **in** + Dat. (dans, futur) | in einer Woche
t: **ab** + Dat. (à partir de) | ab nächster Woche
t: **bis** (jusqu’à) | bis Montag, bis zum Ende
t: **zwischen** + Dat. (entre) | zwischen Weihnachten und Neujahr
t: **über** + Akk. (pendant, ~ sur) | über das Wochenende
! **vor** + temps = « il y a » : **vor** drei Tagen = il y a trois jours. **in** drei Tagen = dans trois jours. | **vor** + time = “ago”: **vor** drei Tagen = three days ago. **in** drei Tagen = in three days.
# Fêtes | Festivals
t: Weihnachten (25.12.) | Silvester (31.12.) | Ostern | der Karneval / Fasching
t: das Zuckerfest (Eid al-Fitr) | das Opferfest (Eid al-Adha) | der Ramadan | das Oktoberfest
`,
w: `
die Tradition (-en) | la tradition | tradition
der Brauch (Bräuche) | la coutume | custom
feiern | fêter | to celebrate
der Feiertag (-e) | le jour férié | public holiday
Weihnachten | Noël | Christmas
Silvester | la Saint-Sylvestre | New Year’s Eve
Ostern | Pâques | Easter
das Zuckerfest | l’Aïd al-Fitr | Eid al-Fitr
das Opferfest | l’Aïd al-Adha | Eid al-Adha
fasten | jeûner | to fast
die Kerze (-n) | la bougie | candle
das Feuerwerk (-e) | le feu d’artifice | fireworks
der Weihnachtsbaum (Weihnachtsbäume) | le sapin de Noël | Christmas tree
schmücken | décorer | to decorate
das Kostüm (-e) | le déguisement | costume
sich verkleiden | se déguiser | to dress up
die Verwandten (Pl.) | la famille, les proches | relatives
besuchen | rendre visite à | to visit
backen | faire de la pâtisserie | to bake
die Süßigkeit (-en) | la sucrerie | sweet
trotzdem | quand même | nevertheless
vor | il y a ; avant | ago; before
nach | après | after
ab | à partir de | from
`,
p: `
Wie feiert man bei euch Neujahr? | Comment fête-t-on le Nouvel An chez vous ? | How do you celebrate New Year where you’re from?
Zum Zuckerfest besuchen wir unsere Verwandten. | Pour l’Aïd, nous rendons visite à notre famille. | For Eid we visit our relatives.
Im Ramadan fastet man von morgens bis abends. | Pendant le ramadan, on jeûne du matin au soir. | During Ramadan people fast from morning to evening.
An Weihnachten schmücken viele Familien einen Baum. | À Noël, beaucoup de familles décorent un sapin. | At Christmas many families decorate a tree.
An Silvester gibt es um Mitternacht ein Feuerwerk. | Le soir du réveillon, il y a un feu d’artifice à minuit. | On New Year’s Eve there are fireworks at midnight.
Im Karneval verkleiden sich die Leute. | Au carnaval, les gens se déguisent. | At carnival people dress up.
Ich war krank. Trotzdem bin ich zum Fest gegangen. | J’étais malade. Je suis quand même allé(e) à la fête. | I was ill. I went to the celebration anyway.
Vor zwei Jahren war ich auf dem Oktoberfest. | Il y a deux ans, j’étais à la fête de la bière. | Two years ago I was at the Oktoberfest.
Nach dem Essen gibt es Süßigkeiten. | Après le repas, il y a des sucreries. | After the meal there are sweets.
Ab Montag habe ich Urlaub. | À partir de lundi, je suis en congé. | From Monday I’m on holiday.
Frohe Feiertage! | Joyeuses fêtes ! | Happy holidays!
Was ist dein Lieblingsfest? | Quelle est ta fête préférée ? | What’s your favourite festival?
`,
g: `
Es ist kalt. ___ gehen wir raus. | Trotzdem | Trotzdem/Deshalb/Weil | Il fait froid. On sort quand même. | It’s cold. We’re going out anyway.
Ich bin krank. ___ bleibe ich zu Hause. | Deshalb | Trotzdem/Deshalb/Obwohl | Je suis malade. C’est pourquoi je reste à la maison. | I’m ill. That’s why I’m staying at home.
Er hat wenig Geld. Trotzdem ___ er viele Geschenke. | kauft | kauft/er kauft/kaufen | Il a peu d’argent. Il achète quand même beaucoup de cadeaux. | He has little money. He still buys lots of presents.
Ich war ___ drei Jahren in Wien. | vor | vor/seit/in | J’étais à Vienne il y a trois ans. | I was in Vienna three years ago.
Ich lerne ___ einem Jahr Deutsch. | seit | vor/seit/ab | J’apprends l’allemand depuis un an. | I’ve been learning German for a year.
___ einer Woche ist Weihnachten. | In | In/Vor/Seit | Dans une semaine, c’est Noël. | Christmas is in a week.
___ der Arbeit gehe ich einkaufen. | Nach | Nach/Vor/Seit | Après le travail, je vais faire les courses. | After work I go shopping.
___ dem Essen wäscht man die Hände. | Vor | Vor/Nach/Seit | Avant le repas, on se lave les mains. | Before the meal you wash your hands.
___ Montag ist das Geschäft wieder geöffnet. | Ab | Ab/Seit/Vor | À partir de lundi, le magasin est de nouveau ouvert. | From Monday the shop is open again.
Die Kinder ___ sich als Piraten. | verkleiden | verkleiden/verkleidet/verkleiden sich | Les enfants se déguisent en pirates. | The children dress up as pirates.
Wir ___ den Baum mit Kerzen. | schmücken | schmücken/schmückt/geschmückt | Nous décorons le sapin avec des bougies. | We decorate the tree with candles.
Im Ramadan ___ viele Muslime. | fasten | fasten/fastet/gefastet | Pendant le ramadan, beaucoup de musulmans jeûnent. | During Ramadan many Muslims fast.
`,
r: { de: `Zwei Feste, eine Familie: Seit fünf Jahren bin ich mit Lukas verheiratet. Er ist Deutscher, ich bin Tunesierin. Deshalb feiern wir jedes Jahr viele Feste! Im Dezember schmücken wir einen Weihnachtsbaum und backen Plätzchen mit seiner Mutter. Zum Zuckerfest fliegen wir nach Tunesien. Dort besuchen wir meine Verwandten und essen viele Süßigkeiten. Lukas fastet im Ramadan nicht, trotzdem isst er tagsüber nicht vor mir. Das finde ich sehr lieb. Unser Lieblingsfest ist aber Silvester: Wir feiern es immer mit Freunden aus beiden Ländern.`,
  fr: `Deux fêtes, une famille : depuis cinq ans, je suis mariée avec Lukas. Il est allemand, je suis tunisienne. C’est pourquoi nous fêtons beaucoup de fêtes chaque année ! En décembre, nous décorons un sapin de Noël et faisons des biscuits avec sa mère. Pour l’Aïd, nous prenons l’avion pour la Tunisie. Là-bas, nous rendons visite à ma famille et mangeons beaucoup de sucreries. Lukas ne jeûne pas pendant le ramadan, mais il ne mange quand même pas devant moi pendant la journée. Je trouve ça très gentil. Notre fête préférée, c’est pourtant la Saint-Sylvestre : nous la fêtons toujours avec des amis des deux pays.`,
  en: `Two festivals, one family: I’ve been married to Lukas for five years. He’s German, I’m Tunisian. That’s why we celebrate lots of festivals every year! In December we decorate a Christmas tree and bake biscuits with his mother. For Eid we fly to Tunisia. There we visit my relatives and eat lots of sweets. Lukas doesn’t fast during Ramadan, but he still doesn’t eat in front of me during the day. I find that very sweet. Our favourite celebration, though, is New Year’s Eve: we always celebrate it with friends from both countries.`,
  q: `
Seit wann ist die Autorin verheiratet? | seit fünf Jahren | seit einem Jahr | seit zehn Jahren
Was macht die Familie im Dezember? | Sie schmückt einen Baum und backt. | Sie fliegt nach Tunesien. | Sie fastet.
Was macht Lukas im Ramadan? | Er isst nicht vor seiner Frau. | Er fastet. | Er fliegt nach Deutschland.
Welches Fest feiern sie am liebsten? | Silvester | Weihnachten | das Zuckerfest
` },
d: `
Paul | Sag mal, wie feiert ihr in Tunesien das Zuckerfest? | Dis donc, comment fêtez-vous l’Aïd en Tunisie ? | Tell me, how do you celebrate Eid in Tunisia?
Leila | Am Morgen ziehen wir neue Kleider an und besuchen die Familie. | Le matin, nous mettons des vêtements neufs et rendons visite à la famille. | In the morning we put on new clothes and visit the family.
Paul | Gibt es auch Geschenke? | Il y a aussi des cadeaux ? | Are there presents too?
Leila | Ja, die Kinder bekommen Geld und es gibt viele Süßigkeiten. | Oui, les enfants reçoivent de l’argent et il y a beaucoup de sucreries. | Yes, the children get money and there are lots of sweets.
Paul | Das klingt ein bisschen wie Weihnachten bei uns! | Ça ressemble un peu à Noël chez nous ! | That sounds a bit like Christmas here!
Leila | Stimmt! Dieses Jahr bin ich in Deutschland. Trotzdem feiere ich mit Freunden. | C’est vrai ! Cette année, je suis en Allemagne. Je fais quand même la fête avec des amis. | True! This year I’m in Germany. I’m still celebrating with friends.
Paul | Darf ich mitkommen? | Je peux venir ? | Can I come too?
Leila | Natürlich! Du bist herzlich eingeladen. | Bien sûr ! Tu es le bienvenu. | Of course! You’re very welcome.
`,
wr: { fr: 'Décris ta fête préférée pour un ami allemand : quand, ce qu’on fait, ce qu’on mange, un souvenir (il y a … ans). Utilise « trotzdem » et « deshalb ».', en: 'Describe your favourite festival for a German friend: when, what people do, what they eat, a memory (… years ago). Use “trotzdem” and “deshalb”.', min: 50,
  req: ['trotzdem=trotzdem', 'deshalb=deshalb', 'vor … Jahren=vor \\w+ (Jahr|Jahren|Monaten|Wochen)', 'feiern=feier'],
  model: 'Mein Lieblingsfest ist das Zuckerfest am Ende vom Ramadan. Am Morgen ziehen alle neue Kleider an. Dann besuchen wir unsere Verwandten und essen Baklawa und Makroud. Die Kinder bekommen Geld, deshalb freuen sie sich besonders. Vor drei Jahren war ich am Zuckerfest in Deutschland. Meine Familie war weit weg, trotzdem habe ich gefeiert: Ich habe Süßigkeiten gebacken und meine Kollegen eingeladen. Es war ein wunderschöner Tag!' },
pr: { fr: '« st » au milieu d’un mot = « st » (Fest, Ostern), au début = « cht » (Stadt). « Silvester » : le « v » se dit « v » ici (mot latin).', en: '“st” inside a word = “st” (Fest, Ostern), at the start = “sht” (Stadt). In “Silvester” the “v” is a “v” (Latin word).',
  w: `
Fest | fête | festival
Ostern | Pâques | Easter
Silvester | réveillon | New Year’s Eve
Weihnachten | Noël | Christmas
trotzdem | quand même | anyway
Feuerwerk | feu d’artifice | fireworks
Es regnet. Trotzdem gehen wir raus. | Il pleut. On sort quand même. | It’s raining. We’re going out anyway.
Vor zwei Jahren war ich in Berlin. | Il y a deux ans, j’étais à Berlin. | Two years ago I was in Berlin.
` } },

/* ---------- 4 ---------- */
{ t: 'Umwelt und Ratschläge', fr: 'L’environnement ; conseiller avec « sollte » et « an deiner Stelle würde ich »', en: 'The environment; giving advice with “sollte” and “an deiner Stelle würde ich”',
sheet: `
# Donner un conseil | Giving advice
T: ~ | sollen → sollte (Konjunktiv II)
t: ich | sollte
t: du | solltest
t: er / sie | sollte
t: wir / Sie | sollten
t: ihr | solltet
= Du **solltest** weniger Plastik **kaufen**. | Tu devrais acheter moins de plastique. | You should buy less plastic.
= Man **sollte** das Licht **ausmachen**. | On devrait éteindre la lumière. | You should switch off the light.
= **An deiner Stelle würde ich** mit dem Fahrrad **fahren**. | À ta place, je prendrais le vélo. | If I were you, I’d go by bike.
= **Es wäre gut**, wenn wir den Müll **trennen**. | Ce serait bien de trier les déchets. | It would be good if we separated the rubbish.
! **sollte** (conseil, poli) ≠ **soll** (quelqu’un le demande) ≠ **muss** (obligation). | **sollte** (advice) ≠ **soll** (someone asks) ≠ **muss** (obligation).
# Trier les déchets en Allemagne | Rubbish sorting in Germany
T: Poubelle~Bin | Quoi ?~What?
t: gelb (Gelber Sack) | Plastik, Dosen, Verpackungen
t: blau | Papier, Karton
t: braun (Bio) | Essensreste, Obst, Gemüse
t: schwarz / grau (Restmüll) | alles andere~everything else
t: Glascontainer | Flaschen, Gläser (weiß, grün, braun)
* **das Pfand** : on rapporte les bouteilles au magasin et on récupère 0,25 €. | **das Pfand**: you take bottles back to the shop and get €0.25 back.
`,
w: `
die Umwelt | l’environnement | environment
der Müll | les déchets | rubbish
den Müll trennen | trier les déchets | to sort rubbish
der Mülleimer (-) | la poubelle | bin
die Verpackung (-en) | l’emballage | packaging
das Plastik | le plastique | plastic
das Glas | le verre | glass
das Papier | le papier | paper
das Pfand | la consigne | deposit
recyceln | recycler | to recycle
sparen | économiser | to save
die Energie | l’énergie | energy
der Strom | l’électricité | electricity
das Klima | le climat | climate
schützen | protéger | to protect
verschmutzen | polluer | to pollute
die Luft | l’air | air
die Natur | la nature | nature
umweltfreundlich | écologique | environmentally friendly
öffentliche Verkehrsmittel | les transports en commun | public transport
ausmachen | éteindre | to switch off
wegwerfen | jeter | to throw away
sollte | devrait | should
der Rat / der Ratschlag (Ratschläge) | le conseil | advice
`,
p: `
Wir trennen den Müll. | Nous trions les déchets. | We sort our rubbish.
Wohin kommt der Joghurtbecher? | Où va le pot de yaourt ? | Where does the yoghurt pot go?
In den gelben Sack. | Dans le sac jaune. | In the yellow bag.
Du solltest weniger Auto fahren. | Tu devrais moins prendre la voiture. | You should drive less.
An deiner Stelle würde ich mit dem Rad fahren. | À ta place, je prendrais le vélo. | If I were you, I’d cycle.
Man sollte das Licht ausmachen. | On devrait éteindre la lumière. | You should switch off the light.
Ich nehme immer eine Stofftasche mit. | J’emporte toujours un sac en tissu. | I always take a cloth bag with me.
Wir sollten mehr Energie sparen. | Nous devrions économiser plus d’énergie. | We should save more energy.
Das ist nicht gut für die Umwelt. | Ce n’est pas bon pour l’environnement. | That’s not good for the environment.
Wirf das bitte nicht weg! | Ne jette pas ça, s’il te plaît ! | Please don’t throw that away!
Ich bringe die Flaschen zurück und bekomme Pfand. | Je rapporte les bouteilles et je récupère la consigne. | I take the bottles back and get the deposit.
Was würdest du an meiner Stelle machen? | Que ferais-tu à ma place ? | What would you do in my place?
`,
g: `
Du ___ mehr Wasser trinken. | solltest | solltest/sollst du/sollte | Tu devrais boire plus d’eau. | You should drink more water.
Wir ___ den Müll trennen. | sollten | sollten/solltet/sollte | Nous devrions trier les déchets. | We should sort the rubbish.
Man sollte das Licht ___. | ausmachen | ausmachen/macht aus/ausgemacht | On devrait éteindre la lumière. | You should switch off the light.
An deiner Stelle ___ ich zu Fuß gehen. | würde | würde/werde/wurde | À ta place, j’irais à pied. | If I were you, I’d walk.
Ihr ___ weniger Plastik kaufen. | solltet | solltet/sollten/solltest | Vous devriez acheter moins de plastique. | You should buy less plastic.
Die Zeitung kommt in die ___ Tonne. | blaue | blaue/gelbe/braune | Le journal va dans la poubelle bleue. | The newspaper goes in the blue bin.
Die Bananenschale kommt in den ___. | Biomüll | Biomüll/Restmüll/Gelben Sack | La peau de banane va dans la poubelle bio. | The banana peel goes in the organic waste.
Die Plastikflasche bringe ich zurück, denn es gibt ___. | Pfand | Pfand/Strom/Müll | Je rapporte la bouteille en plastique, car il y a une consigne. | I take the plastic bottle back because there’s a deposit.
Wir müssen die Natur ___. | schützen | schützen/schützt/geschützt | Nous devons protéger la nature. | We must protect nature.
Wirf die Flasche nicht ___! | weg | weg/aus/ab | Ne jette pas la bouteille ! | Don’t throw the bottle away!
Es ___ gut, wenn alle mitmachen. | wäre | wäre/war/ist gewesen | Ce serait bien si tout le monde participait. | It would be good if everyone took part.
Was ___ du an meiner Stelle tun? | würdest | würdest/wirst/wurdest | Que ferais-tu à ma place ? | What would you do in my place?
`,
r: { de: `Liebe Leserinnen und Leser, viele von Ihnen fragen: Was kann ich im Alltag für die Umwelt tun? Hier unsere Tipps: Sie sollten beim Einkaufen immer eine Stofftasche mitnehmen. Kaufen Sie Obst und Gemüse vom Markt – dort gibt es weniger Verpackung. Zu Hause sollten Sie das Licht ausmachen, wenn Sie ein Zimmer verlassen. Fahren Sie kurze Strecken mit dem Fahrrad oder gehen Sie zu Fuß. Und trennen Sie Ihren Müll! An unserer Stelle würden Sie vielleicht sagen: „Das ist doch nicht viel.“ Aber wenn alle mitmachen, ist es sehr viel!`,
  fr: `Chères lectrices, chers lecteurs, beaucoup d’entre vous demandent : que puis-je faire pour l’environnement au quotidien ? Voici nos conseils : vous devriez toujours emporter un sac en tissu quand vous faites les courses. Achetez les fruits et légumes au marché – il y a moins d’emballage. À la maison, vous devriez éteindre la lumière quand vous quittez une pièce. Faites les petits trajets à vélo ou à pied. Et triez vos déchets ! À notre place, vous diriez peut-être : « Ce n’est pas grand-chose. » Mais si tout le monde participe, c’est énorme !`,
  en: `Dear readers, many of you ask: what can I do for the environment in everyday life? Here are our tips: you should always take a cloth bag when you go shopping. Buy fruit and vegetables at the market – there’s less packaging there. At home you should switch off the light when you leave a room. Do short journeys by bike or on foot. And sort your rubbish! In our place you might say: “That’s not much.” But if everyone takes part, it’s a lot!`,
  q: `
Was soll man beim Einkaufen mitnehmen? | eine Stofftasche | eine Plastiktüte | eine Flasche
Warum soll man auf dem Markt einkaufen? | Es gibt weniger Verpackung. | Es ist billiger. | Es gibt Pfand.
Wann soll man das Licht ausmachen? | wenn man ein Zimmer verlässt | am Abend | nie
Was ist die Hauptidee des Textes? | Kleine Dinge helfen, wenn alle mitmachen. | Man muss ein Elektroauto kaufen. | Recycling ist zu kompliziert.
` },
d: `
Mia | Hilfe! Ich weiß nie, wohin der Müll kommt. Wohin gehört der Joghurtbecher? | Au secours ! Je ne sais jamais où vont les déchets. Où va le pot de yaourt ? | Help! I never know where the rubbish goes. Where does the yoghurt pot belong?
Omar | In den gelben Sack. Aber du solltest ihn vorher leer machen. | Dans le sac jaune. Mais tu devrais le vider avant. | In the yellow bag. But you should empty it first.
Mia | Und die alten Zeitungen? | Et les vieux journaux ? | And the old newspapers?
Omar | Die kommen in die blaue Tonne. An deiner Stelle würde ich einen Zettel an den Kühlschrank hängen. | Ils vont dans la poubelle bleue. À ta place, j’accrocherais une note sur le frigo. | They go in the blue bin. If I were you, I’d stick a note on the fridge.
Mia | Gute Idee! Und was mache ich mit den Flaschen? | Bonne idée ! Et qu’est-ce que je fais des bouteilles ? | Good idea! And what do I do with the bottles?
Omar | Bring sie in den Supermarkt zurück. Dann bekommst du Pfand. | Rapporte-les au supermarché. Comme ça, tu récupères la consigne. | Take them back to the supermarket. Then you get the deposit.
`,
wr: { fr: 'Un ami veut vivre de façon plus écologique. Donne-lui au moins 4 conseils (sollte, an deiner Stelle würde ich, es wäre gut…).', en: 'A friend wants to live more ecologically. Give them at least 4 pieces of advice (sollte, an deiner Stelle würde ich, es wäre gut…).', min: 50,
  req: ['solltest / sollte=solltest;sollte', 'an deiner Stelle=an deiner Stelle', 'würde=würde', 'environnement=Umwelt;Müll;Plastik;Energie;Strom;Klima;Natur'],
  model: 'Lieber Jonas, toll, dass du umweltfreundlicher leben möchtest! Du solltest zuerst weniger Plastik kaufen. Nimm beim Einkaufen immer eine Stofftasche mit. Du solltest auch kurze Strecken mit dem Fahrrad fahren. An deiner Stelle würde ich weniger Fleisch essen. Es wäre auch gut, wenn du den Müll trennst. Und mach das Licht aus, wenn du das Zimmer verlässt. Viel Erfolg! Deine Sara' },
pr: { fr: '« ö » long et court : Öl (long), können (court). « -tz » = « ts » fort : schützen, Platz. Le « r » dans « Umwelt » n’existe pas : U-m-w-e-l-t.', en: 'Long and short “ö”: Öl (long), können (short). “-tz” = strong “ts”: schützen, Platz.',
  w: `
schützen | protéger | protect
Umwelt | environnement | environment
Verpackung | emballage | packaging
umweltfreundlich | écologique | eco-friendly
öffentlich | public | public
solltest | devrais | should
Du solltest weniger Plastik kaufen. | Tu devrais acheter moins de plastique. | You should buy less plastic.
An deiner Stelle würde ich mit dem Rad fahren. | À ta place, je prendrais le vélo. | If I were you, I’d cycle.
` } },

/* ---------- 5 ---------- */
{ t: 'Auf dem Amt', fr: 'Administration et banque ; les questions indirectes (ob, wo, wann…)', en: 'Offices and banks; indirect questions (ob, wo, wann…)',
sheet: `
# Questions indirectes | Indirect questions
> Plus polies que les questions directes. Le verbe conjugué part **à la fin**. | More polite than direct questions. The conjugated verb goes **to the end**.
T: Directe~Direct | Indirecte~Indirect
t: Wo **ist** das Bürgeramt? | Können Sie mir sagen, wo das Bürgeramt **ist**?
t: Wann **öffnet** die Bank? | Wissen Sie, wann die Bank **öffnet**?
t: Wie viel **kostet** das? | Ich möchte wissen, wie viel das **kostet**.
# Questions oui/non → ob | Yes/no questions → ob
> Une question **sans mot W** devient une question avec **ob** (= si). | A question **without a W-word** becomes a question with **ob** (= whether).
t: **Brauche** ich einen Termin? | Wissen Sie, **ob** ich einen Termin **brauche**?
t: **Kann** ich hier bezahlen? | Ich weiß nicht, **ob** ich hier bezahlen **kann**.
! **ob** = si (question). **wenn** = si (condition). « Je ne sais pas **s’il** vient » → Ich weiß nicht, **ob** er kommt. | **ob** = whether (question). **wenn** = if (condition). “I don’t know if he’s coming” → Ich weiß nicht, **ob** er kommt.
# Phrases d’introduction | Lead-in phrases
t: Können Sie mir sagen, … | Wissen Sie, … | Ich möchte wissen, …
t: Darf ich fragen, … | Ich weiß nicht, … | Ich frage mich, …
# À la mairie / banque | At the town hall / bank
* sich **anmelden** = déclarer son domicile (obligatoire en Allemagne dans les 14 jours !). | sich **anmelden** = register your address (required in Germany within 14 days!).
`,
w: `
das Amt (Ämter) | le bureau administratif | public office
die Behörde (-n) | l’administration | authority
das Bürgeramt (Bürgerämter) | le service des citoyens (mairie) | citizens’ office
sich anmelden | s’inscrire, déclarer son domicile | to register
das Formular (-e) | le formulaire | form
ausfüllen | remplir | to fill in
unterschreiben | signer | to sign
die Unterschrift (-en) | la signature | signature
der Ausweis (-e) | la carte d’identité | ID card
der Reisepass (Reisepässe) | le passeport | passport
das Visum (Visa) | le visa | visa
die Aufenthaltserlaubnis | le titre de séjour | residence permit
die Wartenummer (-n) | le numéro d’attente | queue number
die Gebühr (-en) | les frais | fee
das Konto (Konten) | le compte | account
ein Konto eröffnen | ouvrir un compte | to open an account
überweisen | virer (de l’argent) | to transfer
abheben | retirer (de l’argent) | to withdraw
der Geldautomat (-en) | le distributeur | cash machine
die Geheimzahl (-en) | le code secret | PIN
der Antrag (Anträge) | la demande | application
beantragen | demander (officiellement) | to apply for
ob | si (question) | whether, if
die Sprechzeiten (Pl.) | les heures d’ouverture | opening hours
`,
p: `
Können Sie mir sagen, wo das Bürgeramt ist? | Pouvez-vous me dire où se trouve le bureau des citoyens ? | Can you tell me where the citizens’ office is?
Wissen Sie, ob ich einen Termin brauche? | Savez-vous si j’ai besoin d’un rendez-vous ? | Do you know if I need an appointment?
Ich möchte mich anmelden. | Je voudrais déclarer mon domicile. | I’d like to register my address.
Bitte füllen Sie dieses Formular aus. | Veuillez remplir ce formulaire. | Please fill in this form.
Unterschreiben Sie bitte hier. | Signez ici, s’il vous plaît. | Please sign here.
Haben Sie Ihren Reisepass dabei? | Avez-vous votre passeport sur vous ? | Do you have your passport with you?
Ich möchte ein Konto eröffnen. | Je voudrais ouvrir un compte. | I’d like to open an account.
Ich möchte wissen, wie viel das kostet. | Je voudrais savoir combien ça coûte. | I’d like to know how much it costs.
Wie lange dauert das? | Combien de temps cela prend-il ? | How long does it take?
Ich weiß nicht, ob das richtig ist. | Je ne sais pas si c’est correct. | I don’t know if that’s right.
Der Geldautomat hat meine Karte behalten. | Le distributeur a gardé ma carte. | The cash machine kept my card.
Ich muss mein Visum verlängern. | Je dois prolonger mon visa. | I need to extend my visa.
`,
g: `
Können Sie mir sagen, wo der Bahnhof ___? | ist | ist/sind/sein | Pouvez-vous me dire où est la gare ? | Can you tell me where the station is?
Wissen Sie, wann die Bank ___? | öffnet | öffnet/öffnen/geöffnet | Savez-vous quand la banque ouvre ? | Do you know when the bank opens?
Ich weiß nicht, ___ er heute kommt. | ob | ob/wenn/dass | Je ne sais pas s’il vient aujourd’hui. | I don’t know if he’s coming today.
Wissen Sie, ___ ich hier parken darf? | ob | ob/wenn/dass | Savez-vous si je peux me garer ici ? | Do you know if I can park here?
Ich möchte wissen, wie viel das Visum ___. | kostet | kostet/kosten/koste | Je voudrais savoir combien coûte le visa. | I’d like to know how much the visa costs.
Darf ich fragen, wie lange das ___? | dauert | dauert/dauern/gedauert | Puis-je demander combien de temps ça dure ? | May I ask how long it takes?
Können Sie mir sagen, ob ich einen Termin ___? | brauche | brauche/brauchen/braucht | Pouvez-vous me dire si j’ai besoin d’un rendez-vous ? | Can you tell me if I need an appointment?
Ich frage mich, warum er nicht ___ hat. | angerufen | angerufen/anrufen/rief an | Je me demande pourquoi il n’a pas appelé. | I wonder why he didn’t call.
Bitte füllen Sie das Formular ___. | aus | aus/an/ein | Veuillez remplir le formulaire. | Please fill in the form.
Ich möchte mich ___. | anmelden | anmelden/melde an/angemeldet | Je voudrais déclarer mon domicile. | I’d like to register.
Ich möchte 100 Euro ___. | abheben | abheben/hebe ab/abgehoben | Je voudrais retirer 100 euros. | I’d like to withdraw 100 euros.
Wissen Sie, wo ich das Formular ___ kann? | bekommen | bekommen/bekomme/bekommt | Savez-vous où je peux obtenir le formulaire ? | Do you know where I can get the form?
`,
r: { de: `Neu in Deutschland? So melden Sie sich an: Wenn Sie in eine neue Wohnung ziehen, müssen Sie sich innerhalb von 14 Tagen beim Bürgeramt anmelden. Machen Sie zuerst online einen Termin. Bringen Sie Ihren Reisepass oder Ausweis und die Wohnungsgeberbestätigung von Ihrem Vermieter mit. Das Formular können Sie vorher im Internet ausfüllen. Die Anmeldung kostet nichts. Sie bekommen sofort eine Meldebescheinigung. Diese brauchen Sie zum Beispiel, wenn Sie ein Konto eröffnen möchten.`,
  fr: `Nouveau en Allemagne ? Voici comment déclarer votre domicile : quand vous emménagez dans un nouveau logement, vous devez vous déclarer au bureau des citoyens dans les 14 jours. Prenez d’abord rendez-vous en ligne. Apportez votre passeport ou votre carte d’identité et l’attestation de votre propriétaire. Vous pouvez remplir le formulaire à l’avance sur internet. La déclaration est gratuite. Vous recevez immédiatement une attestation de domicile. Vous en avez besoin par exemple pour ouvrir un compte.`,
  en: `New in Germany? Here’s how to register: when you move into a new flat, you must register at the citizens’ office within 14 days. First make an appointment online. Bring your passport or ID card and the landlord confirmation from your landlord. You can fill in the form online beforehand. Registration is free. You receive a registration certificate immediately. You need it, for example, if you want to open a bank account.`,
  q: `
Bis wann muss man sich anmelden? | innerhalb von 14 Tagen | nach einem Monat | sofort
Was muss man mitbringen? | den Pass und eine Bestätigung vom Vermieter | ein Konto | eine Gebühr
Was kostet die Anmeldung? | nichts | 14 Euro | 40 Euro
Wofür braucht man die Meldebescheinigung? | zum Beispiel für ein Konto | für den Termin | für den Vermieter
` },
d: `
Mitarbeiter | Guten Tag. Was kann ich für Sie tun? | Bonjour. Que puis-je faire pour vous ? | Hello. What can I do for you?
Sara | Guten Tag. Ich bin neu in Köln und möchte mich anmelden. | Bonjour. Je suis nouvelle à Cologne et je voudrais déclarer mon domicile. | Hello. I’m new in Cologne and would like to register.
Mitarbeiter | Haben Sie Ihren Pass und die Bestätigung vom Vermieter dabei? | Avez-vous votre passeport et l’attestation du propriétaire ? | Do you have your passport and the landlord confirmation with you?
Sara | Ja, hier bitte. Können Sie mir sagen, wie lange das dauert? | Oui, voilà. Pouvez-vous me dire combien de temps ça prend ? | Yes, here you are. Can you tell me how long it takes?
Mitarbeiter | Nur zehn Minuten. Füllen Sie bitte noch dieses Formular aus. | Seulement dix minutes. Remplissez encore ce formulaire, s’il vous plaît. | Only ten minutes. Please fill in this form as well.
Sara | Gern. Wissen Sie, ob ich auch hier ein Konto eröffnen kann? | D’accord. Savez-vous si je peux aussi ouvrir un compte ici ? | Sure. Do you know if I can open a bank account here too?
Mitarbeiter | Nein, dafür müssen Sie zu einer Bank gehen. Hier unterschreiben, bitte. | Non, pour ça, vous devez aller dans une banque. Signez ici, s’il vous plaît. | No, for that you have to go to a bank. Sign here, please.
`,
wr: { fr: 'Écris un e-mail à une école de langues pour demander des informations. Pose au moins 4 questions indirectes (ob, wann, wie viel, wo…).', en: 'Write an email to a language school asking for information. Ask at least 4 indirect questions (ob, wann, wie viel, wo…).', min: 50,
  req: ['Sehr geehrte=Sehr geehrte', 'ob=\\bob\\b', '2 questions indirectes ou plus=(\\b(ob|wann|wie viel|wo|wie lange|welche|was|wie)\\b [^.?]*\\b\\w+\\?.*){2};(wissen|sagen|fragen|wüsste)[^.?]*\\b(ob|wann|wo|wie)\\b.*(wissen|sagen|fragen|wüsste)[^.?]*\\b(ob|wann|wo|wie)\\b', 'formule finale=Mit freundlichen Grüßen'],
  model: 'Sehr geehrte Damen und Herren, ich möchte im Sommer einen Deutschkurs B1 bei Ihnen machen. Können Sie mir sagen, wann der nächste Intensivkurs beginnt? Ich möchte auch wissen, wie viel der Kurs kostet. Wissen Sie, ob Sie auch Zimmer bei Familien vermitteln? Und darf ich fragen, ob man am Ende eine Prüfung machen kann? Vielen Dank für Ihre Antwort. Mit freundlichen Grüßen\nSara Ben Salah' },
pr: { fr: 'Mélodie de la question indirecte : la voix monte à la fin si c’est une vraie question (« Wissen Sie, ob … ? ↗ »), elle descend si c’est une affirmation (« Ich weiß nicht, ob … ↘ »).', en: 'Indirect question melody: the voice rises at the end if it’s a real question (“Wissen Sie, ob …? ↗”) and falls if it’s a statement (“Ich weiß nicht, ob … ↘”).',
  w: `
Aufenthaltserlaubnis | titre de séjour | residence permit
Bürgeramt | bureau des citoyens | citizens’ office
unterschreiben | signer | sign
Geldautomat | distributeur | cash machine
Können Sie mir sagen, wo das Bürgeramt ist? | Pouvez-vous me dire où est le bureau des citoyens ? | Can you tell me where the citizens’ office is?
Wissen Sie, ob ich einen Termin brauche? | Savez-vous si j’ai besoin d’un rendez-vous ? | Do you know if I need an appointment?
Ich weiß nicht, ob das richtig ist. | Je ne sais pas si c’est juste. | I don’t know if that’s right.
` } },

/* ---------- 6 ---------- */
{ t: 'Kultur und Freizeit', fr: 'Culture, sorties ; les propositions relatives', en: 'Culture, going out; relative clauses',
sheet: `
# La proposition relative | The relative clause
> Elle décrit un nom. Le pronom relatif a le **genre du nom** et le **cas de sa fonction** dans la relative. Verbe à la **fin**. | It describes a noun. The relative pronoun takes the **gender of the noun** and the **case of its role** in the relative clause. Verb at the **end**.
T: ~ | m | f | n | Pl.
t: Nom. | der | die | das | die
t: Akk. | **den** | die | das | die
t: Dat. | **dem** | **der** | **dem** | **denen**
= Das ist der Film, **der** mir so gut **gefällt**. (Nom.) | C’est le film qui me plaît tant. | That’s the film that I like so much.
= Das ist der Film, **den** ich gestern **gesehen habe**. (Akk.) | C’est le film que j’ai vu hier. | That’s the film I saw yesterday.
= Das ist die Freundin, **der** ich das Buch **geschenkt habe**. (Dat.) | C’est l’amie à qui j’ai offert le livre. | That’s the friend I gave the book to.
= Das sind die Leute, **denen** ich **helfe**. (Dat. Pl.) | Ce sont les gens que j’aide. | Those are the people I help.
! Méthode : 1) genre du nom ? 2) dans la relative, le pronom est sujet (Nom.), objet (Akk.) ou après un verbe/préposition + datif (Dat.) ? | Method: 1) noun’s gender? 2) in the relative clause, is the pronoun subject (Nom.), object (Akk.) or after a dative verb/preposition (Dat.)?
# Avec préposition | With a preposition
= Das ist das Kino, **in dem** wir uns kennengelernt haben. | C’est le cinéma dans lequel nous nous sommes rencontrés. | That’s the cinema where we met.
= Die Band, **mit der** ich spiele, heißt „Nordwind“. | Le groupe avec lequel je joue s’appelle « Nordwind ». | The band I play with is called “Nordwind”.
`,
w: `
die Kultur (-en) | la culture | culture
das Theater (-) | le théâtre | theatre
das Konzert (-e) | le concert | concert
die Ausstellung (-en) | l’exposition | exhibition
die Oper (-n) | l’opéra | opera
die Band (-s) | le groupe (musique) | band
der Sänger (-) | le chanteur | singer
die Sängerin (-nen) | la chanteuse | singer (female)
der Schauspieler (-) | l’acteur | actor
die Bühne (-n) | la scène | stage
die Eintrittskarte (-n) | le billet d’entrée | ticket
der Eintritt | l’entrée | admission
die Vorstellung (-en) | la représentation | performance
das Publikum | le public | audience
der Roman (-e) | le roman | novel
der Maler (-) | le peintre | painter
das Gemälde (-) | le tableau | painting
spannend | passionnant | exciting
lustig | drôle | funny
beeindruckend | impressionnant | impressive
ausverkauft | complet | sold out
klatschen | applaudir | to clap
kennenlernen | faire la connaissance de | to get to know
der/die/das (Relativpronomen) | qui, que | who, which, that
`,
p: `
Hast du Lust, ins Konzert zu gehen? | Tu as envie d’aller au concert ? | Do you fancy going to a concert?
Das Konzert ist leider ausverkauft. | Le concert est malheureusement complet. | Unfortunately the concert is sold out.
Wie viel kostet der Eintritt? | Combien coûte l’entrée ? | How much is admission?
Das ist die Sängerin, die ich so toll finde. | C’est la chanteuse que je trouve géniale. | That’s the singer I think is so great.
Der Film, den wir gestern gesehen haben, war spannend. | Le film que nous avons vu hier était passionnant. | The film we saw yesterday was exciting.
Ich habe einen Freund, der in einer Band spielt. | J’ai un ami qui joue dans un groupe. | I have a friend who plays in a band.
Das ist das Café, in dem wir uns kennengelernt haben. | C’est le café où nous nous sommes rencontrés. | That’s the café where we met.
Die Ausstellung war wirklich beeindruckend. | L’exposition était vraiment impressionnante. | The exhibition was really impressive.
Am Ende hat das Publikum lange geklatscht. | À la fin, le public a applaudi longtemps. | At the end the audience clapped for a long time.
Welches Buch liest du gerade? | Quel livre lis-tu en ce moment ? | Which book are you reading at the moment?
Ich mag Filme, die lustig sind. | J’aime les films qui sont drôles. | I like films that are funny.
Wer ist der Mann, dem du geholfen hast? | Qui est l’homme que tu as aidé ? | Who is the man you helped?
`,
g: `
Das ist der Mann, ___ neben mir wohnt. | der | der/den/dem | C’est l’homme qui habite à côté de moi. | That’s the man who lives next to me.
Das ist der Film, ___ ich gesehen habe. | den | der/den/dem | C’est le film que j’ai vu. | That’s the film I saw.
Das ist die Frau, ___ in der Bank arbeitet. | die | die/der/den | C’est la femme qui travaille à la banque. | That’s the woman who works at the bank.
Das ist die Frau, ___ ich geholfen habe. | der | die/der/dem | C’est la femme que j’ai aidée. | That’s the woman I helped.
Das ist das Buch, ___ mir so gut gefällt. | das | das/dem/den | C’est le livre qui me plaît tant. | That’s the book I like so much.
Das sind die Freunde, ___ ich oft besuche. | die | die/denen/den | Ce sont les amis à qui je rends souvent visite. | Those are the friends I often visit.
Das sind die Kinder, ___ ich Deutsch unterrichte. | denen | die/denen/den | Ce sont les enfants à qui j’enseigne l’allemand. | Those are the children I teach German to.
Der Kollege, ___ ich das Buch geschenkt habe, hat Geburtstag. | dem | dem/den/der | Le collègue à qui j’ai offert le livre a son anniversaire. | The colleague I gave the book to has a birthday.
Das ist das Kino, in ___ wir oft gehen. | das | das/dem/den | C’est le cinéma où nous allons souvent. | That’s the cinema we often go to.
Das ist die Stadt, in ___ ich geboren bin. | der | der/die/dem | C’est la ville où je suis né(e). | That’s the city where I was born.
Ich mag Leute, die ehrlich ___. | sind | sind/ist/seid | J’aime les gens qui sont honnêtes. | I like people who are honest.
Das Konzert ist leider ___. | ausverkauft | ausverkauft/verkauft aus/ausverkaufen | Le concert est malheureusement complet. | Unfortunately the concert is sold out.
`,
r: { de: `Kulturtipps für das Wochenende: Am Freitag spielt die Band „Nordwind“, die mit ihrem ersten Album sofort bekannt wurde, im Jugendzentrum. Karten gibt es noch an der Abendkasse. Am Samstag zeigt das Stadtmuseum eine Ausstellung über Paul Klee, den Maler, der 1914 nach Tunesien reiste. Seine Bilder aus Tunis und Kairouan sind wirklich beeindruckend. Und am Sonntag spielt das Stadttheater eine lustige Komödie, für die man leider keine Karten mehr bekommt: Sie ist schon seit Wochen ausverkauft.`,
  fr: `Conseils culture pour le week-end : vendredi, le groupe « Nordwind », qui est devenu célèbre dès son premier album, joue au centre de jeunesse. Il reste des billets à la caisse du soir. Samedi, le musée de la ville présente une exposition sur Paul Klee, le peintre qui a voyagé en Tunisie en 1914. Ses tableaux de Tunis et de Kairouan sont vraiment impressionnants. Et dimanche, le théâtre municipal joue une comédie drôle pour laquelle on ne trouve malheureusement plus de billets : elle est complète depuis des semaines.`,
  en: `Culture tips for the weekend: on Friday the band “Nordwind”, which became famous with its first album, is playing at the youth centre. Tickets are still available at the box office. On Saturday the city museum is showing an exhibition about Paul Klee, the painter who travelled to Tunisia in 1914. His pictures of Tunis and Kairouan are really impressive. And on Sunday the city theatre is putting on a funny comedy for which you unfortunately can’t get tickets any more: it has been sold out for weeks.`,
  q: `
Wo spielt die Band „Nordwind“? | im Jugendzentrum | im Stadttheater | im Museum
Wer war Paul Klee? | ein Maler | ein Sänger | ein Schauspieler
Wohin reiste Klee 1914? | nach Tunesien | nach Paris | nach Wien
Warum kann man nicht ins Theater gehen? | Es ist ausverkauft. | Es ist geschlossen. | Es ist zu teuer.
` },
d: `
Lena | Sag mal, kennst du die Sängerin, die am Samstag im Stadtpark singt? | Dis donc, tu connais la chanteuse qui chante samedi au parc de la ville ? | Tell me, do you know the singer who’s singing in the city park on Saturday?
Karim | Ja! Das ist die Sängerin, die das Lied „Sommerregen“ singt. | Oui ! C’est la chanteuse qui chante « Sommerregen ». | Yes! That’s the singer who sings “Sommerregen”.
Lena | Genau. Hast du Lust, mitzukommen? | Exactement. Tu as envie de venir ? | Exactly. Do you fancy coming along?
Karim | Gern! Wie viel kostet der Eintritt? | Volontiers ! Combien coûte l’entrée ? | Sure! How much is admission?
Lena | Nichts, das Konzert ist gratis. Wir treffen uns am Café, in dem wir letzte Woche waren. | Rien, le concert est gratuit. On se retrouve au café où nous étions la semaine dernière. | Nothing, the concert is free. Let’s meet at the café we went to last week.
Karim | Perfekt. Bringst du deine Freundin mit, die aus Wien kommt? | Parfait. Tu amènes ton amie qui vient de Vienne ? | Perfect. Are you bringing your friend who’s from Vienna?
Lena | Ja, sie freut sich schon! | Oui, elle a déjà hâte ! | Yes, she’s already looking forward to it!
`,
wr: { fr: 'Écris un petit article sur un film, un livre, un concert ou une exposition que tu as aimé(e). Utilise au moins 4 propositions relatives.', en: 'Write a short article about a film, book, concert or exhibition you liked. Use at least 4 relative clauses.', min: 60,
  req: ['relative 1=, (der|die|das|den|dem|denen) ', 'relatives ×4=(, (der|die|das|den|dem|denen|in dem|in der|mit dem|mit der) .*){4}', 'passé=\\b(habe|hat|war|sind|bin)\\b', 'opinion=finde;gefällt;gefallen;spannend;beeindruckend;lustig;toll'],
  model: 'Letzte Woche habe ich einen Film gesehen, der mir sehr gut gefallen hat. Er heißt „Das Lehrerzimmer“. Es geht um eine junge Lehrerin, die an einer Schule in Deutschland arbeitet. In ihrer Klasse gibt es einen Schüler, den alle für einen Dieb halten. Die Lehrerin, der die Wahrheit sehr wichtig ist, will das Problem lösen. Aber alles wird immer schlimmer. Es ist ein Film, den ich wirklich spannend finde. Ich empfehle ihn allen, die gern Dramen sehen.' },
pr: { fr: 'Dans la relative, la voix fait une petite pause à la virgule, puis continue jusqu’au verbe final qui est bien articulé : …, den ich gestern GESEHEN habe.', en: 'In the relative clause the voice makes a small pause at the comma, then carries on to the final verb, which is clearly stressed: …, den ich gestern geSEHen habe.',
  w: `
Ausstellung | exposition | exhibition
beeindruckend | impressionnant | impressive
ausverkauft | complet | sold out
Eintrittskarte | billet | ticket
Das ist der Film, den ich gesehen habe. | C’est le film que j’ai vu. | That’s the film I saw.
Ich habe einen Freund, der in einer Band spielt. | J’ai un ami qui joue dans un groupe. | I have a friend who plays in a band.
Das ist das Café, in dem wir uns kennengelernt haben. | C’est le café où nous nous sommes rencontrés. | That’s the café where we met.
` } },

/* ---------- 7 ---------- */
{ t: 'Beziehungen', fr: 'Relations ; verbes à préposition, worauf ? / darauf', en: 'Relationships; verbs with prepositions, worauf? / darauf',
sheet: `
# Verbes + préposition fixe | Verbs + fixed preposition
> À apprendre **avec la préposition et le cas**, comme un bloc. | Learn them **with the preposition and the case**, as one block.
t: warten **auf** + A | denken **an** + A | sich freuen **auf** + A | sich interessieren **für** + A
t: sprechen **über** + A | sich ärgern **über** + A | sich kümmern **um** + A | Angst haben **vor** + D
t: träumen **von** + D | sich treffen **mit** + D | telefonieren **mit** + D | teilnehmen **an** + D
= Ich **warte auf** dich. | Je t’attends. | I’m waiting for you.
= Ich **denke** oft **an** meine Familie. | Je pense souvent à ma famille. | I often think about my family.
# Questions : wo(r)- + préposition | Questions: wo(r)- + preposition
> Pour une **chose** : **wo- + préposition** (wor- devant une voyelle). Pour une **personne** : préposition + **wen / wem**. | For a **thing**: **wo- + preposition** (wor- before a vowel). For a **person**: preposition + **wen / wem**.
T: Chose~Thing | Personne~Person
t: **Worauf** wartest du? – Auf den Bus. | **Auf wen** wartest du? – Auf Anna.
t: **Woran** denkst du? – An den Urlaub. | **An wen** denkst du? – An meine Mutter.
t: **Wovon** träumst du? – Von einem Haus. | **Von wem** träumst du? – Von dir.
# Réponses : da(r)- + préposition | Answers: da(r)- + preposition
= Freust du dich auf die Ferien? – Ja, ich freue mich sehr **darauf**. | Tu te réjouis des vacances ? – Oui, j’ai très hâte. | Are you looking forward to the holidays? – Yes, very much.
= Denkst du an Mamas Geburtstag? – Ja, ich denke **daran**. | Tu penses à l’anniversaire de maman ? – Oui, j’y pense. | Are you remembering Mum’s birthday? – Yes, I am.
! **dar-** devant une voyelle : darauf, daran, darüber. Pour une **personne** : préposition + pronom (auf ihn, an sie). | **dar-** before a vowel: darauf, daran, darüber. For a **person**: preposition + pronoun (auf ihn, an sie).
`,
w: `
die Beziehung (-en) | la relation | relationship
die Liebe | l’amour | love
der Partner (-) | le partenaire | partner
die Partnerin (-nen) | la partenaire | partner (female)
das Paar (-e) | le couple | couple
heiraten | se marier | to marry
sich trennen | se séparer | to separate
sich verlieben | tomber amoureux | to fall in love
die Hochzeit (-en) | le mariage | wedding
warten auf | attendre | to wait for
denken an | penser à | to think of
träumen von | rêver de | to dream of
sprechen über | parler de | to talk about
Angst haben vor | avoir peur de | to be afraid of
sich kümmern um | s’occuper de | to look after
sich verlassen auf | compter sur | to rely on
eifersüchtig | jaloux | jealous
vertrauen | faire confiance | to trust
der Streit | la dispute | argument
sich versöhnen | se réconcilier | to make up
die Fernbeziehung (-en) | la relation à distance | long-distance relationship
worauf | à quoi, de quoi | what … for/on
darauf | à cela, en | for it, on it
woran | à quoi | what … of/about
`,
p: `
Worauf wartest du? | Qu’est-ce que tu attends ? | What are you waiting for?
Ich warte auf den Anruf von Sami. | J’attends l’appel de Sami. | I’m waiting for Sami’s call.
Woran denkst du gerade? | À quoi penses-tu en ce moment ? | What are you thinking about?
Ich denke an unseren ersten Urlaub. | Je pense à nos premières vacances. | I’m thinking about our first holiday.
Wovon träumst du? | De quoi rêves-tu ? | What do you dream of?
Ich träume von einem Haus am Meer. | Je rêve d’une maison au bord de la mer. | I dream of a house by the sea.
Über wen sprecht ihr? | De qui parlez-vous ? | Who are you talking about?
Ich kann mich immer auf sie verlassen. | Je peux toujours compter sur elle. | I can always rely on her.
Hast du Angst vor Spinnen? – Nein, davor habe ich keine Angst. | Tu as peur des araignées ? – Non, je n’en ai pas peur. | Are you afraid of spiders? – No, I’m not afraid of them.
Wir haben uns gestritten, aber jetzt haben wir uns versöhnt. | Nous nous sommes disputés, mais maintenant nous nous sommes réconciliés. | We argued, but now we’ve made up.
Eine Fernbeziehung ist nicht einfach. | Une relation à distance n’est pas facile. | A long-distance relationship isn’t easy.
Wann heiratet ihr? | Quand vous mariez-vous ? | When are you getting married?
`,
g: `
Ich warte ___ den Bus. | auf | auf/für/an | J’attends le bus. | I’m waiting for the bus.
Er denkt oft ___ seine Kindheit. | an | an/von/über | Il pense souvent à son enfance. | He often thinks about his childhood.
Wir sprechen ___ das Wetter. | über | über/von/auf | Nous parlons du temps. | We’re talking about the weather.
Sie träumt ___ einer Reise nach Japan. | von | von/über/auf | Elle rêve d’un voyage au Japon. | She dreams of a trip to Japan.
Hast du Angst ___ dem Test? | vor | vor/für/von | Tu as peur du test ? | Are you afraid of the test?
___ wartest du? – Auf das Paket. | Worauf | Worauf/Auf was/Wo | Qu’est-ce que tu attends ? – Le colis. | What are you waiting for? – The parcel.
___ wartest du? – Auf meine Freundin. | Auf wen | Worauf/Auf wen/Wem | Qui attends-tu ? – Mon amie. | Who are you waiting for? – My girlfriend.
___ denkst du? – An die Prüfung. | Woran | Woran/An was/Wovon | À quoi penses-tu ? – À l’examen. | What are you thinking about? – The exam.
Freust du dich auf den Urlaub? – Ja, ich freue mich ___. | darauf | darauf/dafür/auf ihn | Tu as hâte d’être en vacances ? – Oui, j’ai hâte. | Are you looking forward to the holiday? – Yes, I am.
Sprichst du oft über deine Arbeit? – Nein, ich spreche nie ___. | darüber | darüber/davon/über sie | Tu parles souvent de ton travail ? – Non, je n’en parle jamais. | Do you often talk about your work? – No, I never talk about it.
Wartest du auf Jonas? – Ja, ich warte auf ___. | ihn | ihn/darauf/ihm | Tu attends Jonas ? – Oui, je l’attends. | Are you waiting for Jonas? – Yes, I’m waiting for him.
Ich kann mich ___ meinen Bruder verlassen. | auf | auf/an/für | Je peux compter sur mon frère. | I can rely on my brother.
`,
r: { de: `Liebe in Zeiten von Zoom: Yasmin (29) aus Tunis und Felix (31) aus Hamburg haben sich vor zwei Jahren bei einem Sprachkurs online kennengelernt. Seitdem führen sie eine Fernbeziehung. „Wir telefonieren jeden Abend miteinander“, erzählt Yasmin. „Wir sprechen über alles: über die Arbeit, über unsere Familien, über unsere Träume.“ Natürlich gibt es auch Probleme. „Manchmal bin ich eifersüchtig“, sagt Felix. „Aber ich weiß, dass ich mich auf sie verlassen kann.“ Jetzt freuen sich beide auf ein großes Ereignis: Im Sommer heiraten sie – in Tunis!`,
  fr: `L’amour au temps de Zoom : Yasmin (29 ans), de Tunis, et Felix (31 ans), de Hambourg, se sont rencontrés il y a deux ans lors d’un cours de langue en ligne. Depuis, ils vivent une relation à distance. « Nous nous appelons tous les soirs », raconte Yasmin. « Nous parlons de tout : du travail, de nos familles, de nos rêves. » Bien sûr, il y a aussi des problèmes. « Parfois, je suis jaloux », dit Felix. « Mais je sais que je peux compter sur elle. » Maintenant, tous deux se réjouissent d’un grand événement : cet été, ils se marient – à Tunis !`,
  en: `Love in the age of Zoom: Yasmin (29) from Tunis and Felix (31) from Hamburg met two years ago on an online language course. Since then they’ve been in a long-distance relationship. “We phone each other every evening,” says Yasmin. “We talk about everything: work, our families, our dreams.” Of course there are problems too. “Sometimes I’m jealous,” says Felix. “But I know I can rely on her.” Now they’re both looking forward to a big event: in summer they’re getting married – in Tunis!`,
  q: `
Wo haben sich Yasmin und Felix kennengelernt? | bei einem Online-Sprachkurs | in Hamburg | im Urlaub
Wie oft telefonieren sie? | jeden Abend | einmal pro Woche | jeden Morgen
Was sagt Felix über Yasmin? | Er kann sich auf sie verlassen. | Sie ist eifersüchtig. | Sie spricht nicht viel.
Worauf freuen sie sich? | auf ihre Hochzeit | auf einen Sprachkurs | auf einen Umzug nach Hamburg
` },
d: `
Mia | Du bist so still heute. Woran denkst du? | Tu es si silencieux aujourd’hui. À quoi penses-tu ? | You’re so quiet today. What are you thinking about?
Omar | An Leila. Wir haben uns gestern gestritten. | À Leila. On s’est disputés hier. | About Leila. We had an argument yesterday.
Mia | Oh nein. Worüber denn? | Oh non. À quel sujet ? | Oh no. What about?
Omar | Über den Urlaub. Sie will ans Meer, ich will in die Berge. | Les vacances. Elle veut aller à la mer, moi à la montagne. | The holiday. She wants to go to the sea, I want to go to the mountains.
Mia | Habt ihr schon darüber gesprochen? | Vous en avez déjà parlé ? | Have you talked about it yet?
Omar | Nein, ich warte auf ihren Anruf. | Non, j’attends son appel. | No, I’m waiting for her call.
Mia | Warte nicht darauf! Ruf sie doch an. | N’attends pas ! Appelle-la donc. | Don’t wait for it! Call her.
`,
wr: { fr: 'Écris un message à un(e) ami(e) qui a un problème de couple. Pose des questions (worüber, woran…) et donne des conseils. Utilise au moins 4 verbes à préposition.', en: 'Write a message to a friend who has a relationship problem. Ask questions (worüber, woran…) and give advice. Use at least 4 verbs with prepositions.', min: 50,
  req: ['wo(r)-=\\bwo(r)?(auf|an|über|von|für|mit|vor|um)\\b', 'da(r)-=\\bda(r)?(auf|an|über|von|für|mit|vor|um)\\b', 'verbes à préposition=(warte|wartest|denke|denkst|sprecht|sprich|sprechen|träum|freu|ärger|verlass|Angst).{0,30}\\b(auf|an|über|von|vor|mit|um|für)\\b', 'conseil=solltest;würde ich;Ruf;Sprich'],
  model: 'Liebe Amira, ich habe deine Nachricht gelesen. Worüber habt ihr euch gestritten? Ich denke, du solltest mit Sami darüber sprechen. Wartet nicht zu lange darauf, dass der andere anruft! Ich weiß, dass du dich immer auf ihn verlassen konntest. Denk an die schönen Momente! An deiner Stelle würde ich ihn heute Abend zum Essen einladen. Ich freue mich darauf, bald von dir zu hören. Deine Sara' },
pr: { fr: '« r » de « wor- / dar- » : très léger, presque un « a » : woran = « vô-RAN », darauf = « da-RAOUF ». L’accent est sur la préposition.', en: 'The “r” in “wor- / dar-” is very light: woran = “vo-RAN”, darauf = “da-ROWF”. The stress is on the preposition part.',
  w: `
worauf | à quoi | what … for
darauf | à cela | for it
woran | à quoi | what … of
daran | à cela | of it
worüber | de quoi | what … about
eifersüchtig | jaloux | jealous
Worauf wartest du? | Qu’est-ce que tu attends ? | What are you waiting for?
Ich freue mich sehr darauf. | J’ai très hâte. | I’m really looking forward to it.
` } },

/* ---------- 8 ---------- */
{ t: 'Die Bewerbung', fr: 'Chercher un emploi ; l’infinitif avec « zu » ; « um … zu »', en: 'Looking for a job; infinitive with “zu”; “um … zu”',
sheet: `
# Infinitif avec zu | Infinitive with zu
> Après certains verbes et expressions, le 2e verbe va à la fin avec **zu**. | After certain verbs and expressions, the 2nd verb goes to the end with **zu**.
t: Ich habe **Lust**, … zu … | Ich habe **keine Zeit**, … zu … | Es ist **wichtig**, … zu …
t: Ich **versuche**, … zu … | Ich **hoffe**, … zu … | Ich **vergesse** oft, … zu …
t: Ich **beginne / fange an**, … zu … | Es **macht Spaß**, … zu … | Ich **habe vor**, … zu …
= Ich habe Lust, ins Kino **zu gehen**. | J’ai envie d’aller au cinéma. | I feel like going to the cinema.
= Es ist wichtig, pünktlich **zu sein**. | Il est important d’être à l’heure. | It’s important to be on time.
! Verbe séparable : **zu au milieu** : anzurufen, aufzustehen, einzukaufen. | Separable verb: **zu goes in the middle**: anzurufen, aufzustehen, einzukaufen.
! **Pas de zu** après les verbes de modalité : Ich **muss** arbeiten (pas « zu arbeiten »). | **No zu** after modal verbs: Ich **muss** arbeiten (not “zu arbeiten”).
# um … zu = pour (but) | um … zu = in order to
= Ich lerne Deutsch, **um** in Deutschland **zu arbeiten**. | J’apprends l’allemand pour travailler en Allemagne. | I’m learning German in order to work in Germany.
= **Um** die Stelle **zu bekommen**, schreibe ich eine gute Bewerbung. | Pour obtenir le poste, j’écris une bonne candidature. | To get the job, I’m writing a good application.
* **um…zu** : même sujet dans les deux parties. | **um…zu**: same subject in both parts.
# La candidature | The application
t: das Anschreiben (lettre~cover letter) | der Lebenslauf (CV) | die Zeugnisse (certificats~certificates) | das Vorstellungsgespräch (entretien~interview)
= Hiermit bewerbe ich mich um die Stelle als … | Par la présente, je pose ma candidature pour le poste de … | I hereby apply for the position of …
`,
w: `
die Bewerbung (-en) | la candidature | application
sich bewerben um | postuler pour | to apply for
der Lebenslauf (Lebensläufe) | le CV | CV
das Anschreiben (-) | la lettre de motivation | cover letter
das Vorstellungsgespräch (-e) | l’entretien d’embauche | job interview
die Stellenanzeige (-n) | l’offre d’emploi | job ad
der Arbeitgeber (-) | l’employeur | employer
der Arbeitnehmer (-) | le salarié | employee
die Erfahrung (-en) | l’expérience | experience
die Kenntnisse (Pl.) | les connaissances | knowledge, skills
die Teilzeit | le temps partiel | part-time
die Vollzeit | le temps plein | full-time
das Praktikum (Praktika) | le stage | internship
der Vertrag (Verträge) | le contrat | contract
die Probezeit | la période d’essai | probation period
flexibel | flexible | flexible
teamfähig | qui sait travailler en équipe | team player
selbstständig | autonome | independent
belastbar | résistant au stress | resilient
die Stärke (-n) | le point fort | strength
die Schwäche (-n) | le point faible | weakness
um … zu | pour (but) | in order to
versuchen | essayer | to try
vorhaben | avoir l’intention | to plan
`,
p: `
Ich bewerbe mich um die Stelle als Krankenpflegerin. | Je postule pour le poste d’infirmière. | I’m applying for the position of nurse.
Ich habe drei Jahre Erfahrung in diesem Bereich. | J’ai trois ans d’expérience dans ce domaine. | I have three years’ experience in this field.
Ich habe gute Kenntnisse in Englisch und Französisch. | J’ai de bonnes connaissances en anglais et en français. | I have good knowledge of English and French.
Ich bin teamfähig und arbeite gern selbstständig. | Je sais travailler en équipe et j’aime travailler en autonomie. | I’m a team player and like working independently.
Im Anhang finden Sie meinen Lebenslauf. | Vous trouverez mon CV en pièce jointe. | Please find my CV attached.
Ich freue mich auf eine Einladung zum Vorstellungsgespräch. | Je me réjouis d’être invité(e) à un entretien. | I look forward to an invitation to an interview.
Was sind Ihre Stärken? | Quels sont vos points forts ? | What are your strengths?
Ich habe vor, in Deutschland zu arbeiten. | J’ai l’intention de travailler en Allemagne. | I plan to work in Germany.
Es ist wichtig, pünktlich zu sein. | Il est important d’être à l’heure. | It’s important to be punctual.
Ich lerne Deutsch, um eine gute Stelle zu finden. | J’apprends l’allemand pour trouver un bon emploi. | I’m learning German in order to find a good job.
Ab wann können Sie anfangen? | À partir de quand pouvez-vous commencer ? | When can you start?
Ich arbeite lieber in Vollzeit. | Je préfère travailler à temps plein. | I prefer working full-time.
`,
g: `
Ich habe keine Lust, heute ___. | zu kochen | zu kochen/kochen/kochen zu | Je n’ai pas envie de cuisiner aujourd’hui. | I don’t feel like cooking today.
Es ist wichtig, viel ___. | zu üben | zu üben/üben/übt zu | Il est important de beaucoup s’entraîner. | It’s important to practise a lot.
Vergiss nicht, deine Mutter ___! | anzurufen | anzurufen/zu anrufen/anrufen zu | N’oublie pas d’appeler ta mère ! | Don’t forget to call your mother!
Ich versuche, früh ___. | aufzustehen | aufzustehen/zu aufstehen/aufstehen | J’essaie de me lever tôt. | I try to get up early.
Ich muss morgen ___. | arbeiten | arbeiten/zu arbeiten/arbeite | Je dois travailler demain. | I have to work tomorrow.
Ich lerne Deutsch, ___ in Berlin zu studieren. | um | um/für/damit zu | J’apprends l’allemand pour étudier à Berlin. | I’m learning German in order to study in Berlin.
Er spart Geld, um ein Auto zu ___. | kaufen | kaufen/kauft/gekauft | Il économise pour acheter une voiture. | He’s saving money to buy a car.
Ich bewerbe mich ___ die Stelle als Koch. | um | um/für/auf | Je postule pour le poste de cuisinier. | I’m applying for the job as a cook.
Haben Sie Erfahrung ___ diesem Bereich? | in | in/mit/bei | Avez-vous de l’expérience dans ce domaine ? | Do you have experience in this field?
Im Anhang finden Sie meinen ___. | Lebenslauf | Lebenslauf/Leben/Laufbahn | Vous trouverez mon CV en pièce jointe. | Please find my CV attached.
Ich habe vor, nächstes Jahr ein Praktikum ___. | zu machen | zu machen/machen/gemacht | J’ai l’intention de faire un stage l’année prochaine. | I plan to do an internship next year.
Es macht mir Spaß, mit Kindern ___. | zu arbeiten | zu arbeiten/arbeiten/arbeite | J’aime travailler avec des enfants. | I enjoy working with children.
`,
r: { de: `Stellenanzeige: Das Hotel „Seeblick“ in Konstanz sucht ab 1. April eine Rezeptionistin / einen Rezeptionisten in Vollzeit. Ihre Aufgaben: Gäste begrüßen, Zimmer vergeben, Telefon und E-Mails beantworten. Wir erwarten: eine Ausbildung im Hotel oder Erfahrung an einer Rezeption, gute Kenntnisse in Deutsch und Englisch (Französisch ist ein Plus), Freundlichkeit und Teamfähigkeit. Sie müssen bereit sein, auch am Wochenende zu arbeiten. Wir bieten: ein gutes Gehalt, ein junges Team und kostenlose Mahlzeiten. Bitte schicken Sie Ihre Bewerbung mit Lebenslauf bis zum 15. März an: jobs@hotel-seeblick.de`,
  fr: `Offre d’emploi : l’hôtel « Seeblick » à Constance recherche à partir du 1er avril un ou une réceptionniste à temps plein. Vos missions : accueillir les clients, attribuer les chambres, répondre au téléphone et aux e-mails. Nous attendons : une formation en hôtellerie ou une expérience à une réception, de bonnes connaissances en allemand et en anglais (le français est un plus), de l’amabilité et un bon esprit d’équipe. Vous devez être prêt(e) à travailler aussi le week-end. Nous offrons : un bon salaire, une équipe jeune et des repas gratuits. Merci d’envoyer votre candidature avec CV avant le 15 mars à : jobs@hotel-seeblick.de`,
  en: `Job ad: Hotel “Seeblick” in Konstanz is looking for a full-time receptionist from 1 April. Your tasks: welcoming guests, allocating rooms, answering the phone and emails. We expect: hotel training or experience at a reception desk, good knowledge of German and English (French is a plus), friendliness and team spirit. You must be willing to work at weekends too. We offer: a good salary, a young team and free meals. Please send your application with CV by 15 March to: jobs@hotel-seeblick.de`,
  q: `
Was sucht das Hotel? | eine Person für die Rezeption | einen Koch | einen Praktikanten
Welche Sprache ist ein Plus? | Französisch | Englisch | Deutsch
Wann muss man manchmal arbeiten? | am Wochenende | nur nachts | nie am Wochenende
Bis wann soll man sich bewerben? | bis zum 15. März | bis zum 1. April | bis Ende April
` },
d: `
Personalchefin | Guten Tag, Frau Ben Salah. Bitte nehmen Sie Platz. Warum möchten Sie bei uns arbeiten? | Bonjour, Madame Ben Salah. Asseyez-vous, je vous prie. Pourquoi voulez-vous travailler chez nous ? | Hello, Ms Ben Salah. Please take a seat. Why would you like to work for us?
Sara | Ihr Hotel hat einen sehr guten Ruf und ich habe Lust, in einem internationalen Team zu arbeiten. | Votre hôtel a une très bonne réputation et j’ai envie de travailler dans une équipe internationale. | Your hotel has a very good reputation and I’d like to work in an international team.
Personalchefin | Welche Erfahrungen haben Sie? | Quelles expériences avez-vous ? | What experience do you have?
Sara | Ich habe drei Jahre an der Rezeption in einem Hotel in Hammamet gearbeitet. | J’ai travaillé trois ans à la réception d’un hôtel à Hammamet. | I worked at the reception of a hotel in Hammamet for three years.
Personalchefin | Und was sind Ihre Stärken? | Et quels sont vos points forts ? | And what are your strengths?
Sara | Ich bin freundlich, belastbar und spreche vier Sprachen. | Je suis aimable, résistante au stress et je parle quatre langues. | I’m friendly, resilient and speak four languages.
Personalchefin | Sehr schön. Ab wann könnten Sie anfangen? | Très bien. À partir de quand pourriez-vous commencer ? | Very good. When could you start?
Sara | Ab dem ersten April. Ich freue mich darauf, Sie bald wiederzusehen! | À partir du premier avril. J’ai hâte de vous revoir bientôt ! | From the first of April. I look forward to seeing you again soon!
`,
wr: { fr: 'Réponds à l’offre d’emploi de l’hôtel « Seeblick » : présente-toi, ton expérience, tes langues, tes qualités, pourquoi ce poste. Utilise « um … zu » et un infinitif avec « zu ».', en: 'Reply to the “Seeblick” hotel job ad: introduce yourself, your experience, your languages, your qualities, why this job. Use “um … zu” and an infinitive with “zu”.', min: 80,
  req: ['Sehr geehrte=Sehr geehrte', 'bewerbe mich=bewerbe mich;bewerbe ich mich', 'Erfahrung=Erfahrung;gearbeitet', 'um … zu=\\bum\\b .{3,60}\\bzu \\w+', 'infinitif + zu=(Lust|wichtig|versuche|hoffe|bereit|vor|Spaß)[^.]*\\b(zu \\w+|\\w+zu\\w+en)', 'Mit freundlichen Grüßen=Mit freundlichen Grüßen'],
  model: 'Sehr geehrte Damen und Herren, hiermit bewerbe ich mich um die Stelle als Rezeptionistin in Ihrem Hotel. Ich bin 30 Jahre alt und komme aus Tunesien. Nach meiner Ausbildung im Hotelfach habe ich drei Jahre an der Rezeption eines großen Hotels in Hammamet gearbeitet. Ich spreche Arabisch, Französisch, Englisch und Deutsch. Ich bin freundlich, teamfähig und belastbar. Ich bin auch bereit, am Wochenende zu arbeiten. Ich möchte nach Deutschland kommen, um neue Erfahrungen zu sammeln. Im Anhang finden Sie meinen Lebenslauf. Ich freue mich auf eine Einladung zum Vorstellungsgespräch. Mit freundlichen Grüßen\nSara Ben Salah' },
pr: { fr: 'Les mots composés longs : l’accent principal est sur le 1er mot : VORstellungsgespräch, LEbenslauf, STELlenanzeige. Lis-les par morceaux : Vor-stellungs-gespräch.', en: 'Long compound words: the main stress is on the first part: VORstellungsgespräch, LEbenslauf, STELlenanzeige. Read them in chunks: Vor-stellungs-gespräch.',
  w: `
Vorstellungsgespräch | entretien | interview
Lebenslauf | CV | CV
Stellenanzeige | offre d’emploi | job ad
selbstständig | autonome | independent
teamfähig | esprit d’équipe | team player
Ich bewerbe mich um die Stelle als Koch. | Je postule pour le poste de cuisinier. | I’m applying for the cook job.
Ich lerne Deutsch, um in Deutschland zu arbeiten. | J’apprends l’allemand pour travailler en Allemagne. | I’m learning German to work in Germany.
Im Anhang finden Sie meinen Lebenslauf. | Mon CV est en pièce jointe. | Please find my CV attached.
` } },
],

exam: {
  texts: [
    { de: `Liebe Frau Ben Salah,
vielen Dank für Ihre Nachricht vom 12. Oktober. Es tut uns sehr leid, dass die Waschmaschine beschädigt bei Ihnen angekommen ist. Selbstverständlich müssen Sie die Maschine nicht selbst zurückschicken: Unser Paketdienst holt sie am Donnerstag zwischen 8 und 12 Uhr bei Ihnen ab. Bitte sagen Sie uns bis Mittwoch, ob Ihnen dieser Termin passt. Eine neue Maschine liefern wir Ihnen am selben Tag. Als kleine Entschuldigung schenken wir Ihnen außerdem einen Gutschein über 30 Euro, den Sie bei Ihrer nächsten Bestellung benutzen können.
Mit freundlichen Grüßen
Thomas Berger, Kundenservice „ElektroWelt“`,
      q: `
Was war das Problem? | Die Waschmaschine war beschädigt. | Die Maschine ist nicht angekommen. | Die Rechnung war falsch.
Wer bringt die alte Maschine weg? | der Paketdienst | Frau Ben Salah | Herr Berger
Was soll Frau Ben Salah bis Mittwoch machen? | sagen, ob der Termin passt | die Maschine zurückschicken | den Gutschein benutzen
Wann bekommt sie die neue Maschine? | am Donnerstag | am Mittwoch | nächste Woche
Was bekommt sie zusätzlich? | einen Gutschein über 30 Euro | 30 Euro bar | eine zweite Maschine
` },
    { de: `Ehrenamt – helfen Sie mit!
Das Familienzentrum „Brücke“ sucht freiwillige Helferinnen und Helfer, die Lust haben, Kindern bei den Hausaufgaben zu helfen. Die Kinder, mit denen Sie arbeiten, sind zwischen 8 und 12 Jahre alt. Viele von ihnen sind erst seit kurzer Zeit in Deutschland. Sie brauchen keine Ausbildung als Lehrer, aber Sie sollten gut Deutsch sprechen und geduldig sein. Wir treffen uns montags und mittwochs von 15 bis 17 Uhr. Wenn Sie eine zweite Sprache wie Arabisch, Türkisch oder Ukrainisch sprechen, ist das besonders hilfreich. Interessiert? Rufen Sie Frau Yilmaz an: 0221 58 40 12.`,
      q: `
Was sucht das Familienzentrum? | Helfer für Hausaufgaben | Lehrer mit Ausbildung | Kinder für einen Kurs
Wie alt sind die Kinder? | 8 bis 12 Jahre | 15 bis 17 Jahre | unter 8 Jahren
Was muss man nicht haben? | eine Ausbildung als Lehrer | gute Deutschkenntnisse | Geduld
Wann trifft man sich? | montags und mittwochs | jeden Tag | am Wochenende
Was ist besonders hilfreich? | eine zweite Sprache | ein Auto | Erfahrung als Lehrer
` },
  ],
  write: { fr: 'Tu veux aider au centre familial « Brücke ». Écris un e-mail à Mme Yilmaz : présente-toi, explique pourquoi tu veux aider (weil, um…zu), quelle expérience tu as, quelles langues tu parles, et pose deux questions indirectes.', en: 'You want to volunteer at the “Brücke” family centre. Write an email to Ms Yilmaz: introduce yourself, explain why you want to help (weil, um…zu), what experience you have, which languages you speak, and ask two indirect questions.', min: 80,
    req: ['Sehr geehrte Frau Yilmaz=Sehr geehrte Frau Yilmaz', 'weil=weil', 'um … zu=\\bum\\b .{3,60}\\bzu \\w+', 'langues=spreche', 'question indirecte=(wissen|sagen|fragen)[^.?]*\\b(ob|wann|wo|wie|welche)\\b', 'relative=, (der|die|das|den|dem|denen) ', 'Mit freundlichen Grüßen=Mit freundlichen Grüßen'],
    model: 'Sehr geehrte Frau Yilmaz, ich habe Ihre Anzeige gelesen und möchte gern im Familienzentrum „Brücke“ helfen. Ich heiße Sara Ben Salah, bin 30 Jahre alt und komme aus Tunesien. Ich möchte helfen, weil ich selbst weiß, wie schwer der Anfang in einem neuen Land ist. Ich spreche Arabisch, Französisch und Deutsch. In Tunis habe ich zwei Jahre Kindern Nachhilfe gegeben, die Probleme in Mathe hatten. Ich möchte mitmachen, um den Kindern die Schule leichter zu machen. Können Sie mir sagen, wann ich anfangen kann? Ich möchte auch wissen, ob ich ein Führungszeugnis brauche. Mit freundlichen Grüßen\nSara Ben Salah' },
  speak: `
Was haben Sie zuletzt online bestellt? | habe;bestellt;gekauft | Ich habe letzte Woche Schuhe online bestellt. | Qu’avez-vous commandé en ligne récemment ? | What did you last order online?
Wie war Ihre Schulzeit? | war;hatte;ging;habe | Meine Schulzeit war schön, aber ich hatte viele Prüfungen. | Comment était votre scolarité ? | What was your school time like?
Welches Fest feiern Sie am liebsten? | feiere;am liebsten;Fest | Am liebsten feiere ich das Zuckerfest. | Quelle fête préférez-vous ? | Which festival do you like celebrating most?
Was sollte man für die Umwelt tun? | sollte;sollten;Müll;Plastik;Fahrrad | Man sollte weniger Plastik kaufen und den Müll trennen. | Que devrait-on faire pour l’environnement ? | What should people do for the environment?
Was ist ein Buch oder Film, der Ihnen gefallen hat? | der;den;das;die;gefallen | Ein Film, der mir sehr gefallen hat, ist „Das Lehrerzimmer“. | Quel livre ou film vous a plu ? | What is a book or film you liked?
Worauf freuen Sie sich? | freue mich;darauf;auf | Ich freue mich auf meine Reise nach Deutschland. | De quoi vous réjouissez-vous ? | What are you looking forward to?
Warum lernen Sie Deutsch? | um;zu;weil | Ich lerne Deutsch, um in Deutschland zu arbeiten. | Pourquoi apprenez-vous l’allemand ? | Why are you learning German?
Was sind Ihre Stärken? | bin;kann;Stärke | Ich bin teamfähig und sehr zuverlässig. | Quels sont vos points forts ? | What are your strengths?
Wissen Sie, wo man sich in Deutschland anmeldet? | Bürgeramt;Amt;anmelden;weiß | Man meldet sich beim Bürgeramt an. | Savez-vous où l’on déclare son domicile en Allemagne ? | Do you know where you register in Germany?
`,
},
});
