DW.level({
id: 'a1-2', code: 'A1.2', weeks: '3–4',
title: { fr: 'La vie de tous les jours', en: 'Everyday life' },
goal: { fr: 'Faire des courses, trouver ton chemin, parler du travail, prendre rendez-vous, aller chez le médecin, parler du passé et inviter quelqu’un.', en: 'Go shopping, find your way, talk about work, make appointments, see a doctor, talk about the past and invite someone.' },
units: [
/* ---------- 1 ---------- */
{ t: 'Einkaufen', fr: 'Faire les courses : quantités, prix, l’accusatif', en: 'Shopping: quantities, prices, the accusative',
sheet: `
# Demander poliment | Asking politely
= Ich hätte gern ein Kilo Tomaten. | Je voudrais un kilo de tomates. | I’d like a kilo of tomatoes.
= Ich möchte zwei Flaschen Wasser. | Je voudrais deux bouteilles d’eau. | I’d like two bottles of water.
= Was kostet der Käse? – Er kostet 3,50 €. | Combien coûte le fromage ? – Il coûte 3,50 €. | How much is the cheese? – It costs €3.50.
= Was kosten die Äpfel? – Sie kosten 2 € das Kilo. | Combien coûtent les pommes ? – 2 € le kilo. | How much are the apples? – €2 a kilo.
! « Ich hätte gern… » est très poli et très courant. Apprends-le comme un bloc. | “Ich hätte gern…” is very polite and very common. Learn it as one block.
# Quantités | Quantities
> Après une quantité, **pas de « de »** : ein Kilo Äpfel, eine Flasche Milch. | After a quantity, **no “of”**: ein Kilo Äpfel, eine Flasche Milch.
t: 100 Gramm Käse | ein Kilo Kartoffeln | ein Liter Milch
t: eine Flasche Saft | eine Packung Reis | eine Dose Tomaten
t: ein Becher Joghurt | ein Stück Kuchen | sechs Eier
# Prix | Prices
* 3,50 € = drei Euro fünfzig · 0,99 € = neunundneunzig Cent · 12 € = zwölf Euro. | 3,50 € = drei Euro fünfzig · 0,99 € = neunundneunzig Cent · 12 € = zwölf Euro.
! En allemand, la virgule sépare les centimes : 3,50 €. | In German a comma separates the cents: 3,50 €.
# Rappel accusatif | Accusative reminder
T: ~ | der | die | das | Pl.
t: Nom. | der / ein | die / eine | das / ein | die / –
t: Akk. | ==den / einen== | die / eine | das / ein | die / –
= Ich brauche **einen** Joghurt und **eine** Banane. | J’ai besoin d’un yaourt et d’une banane. | I need a yoghurt and a banana.
= Ich nehme **den** Käse. | Je prends le fromage. | I’ll take the cheese.
# Pronoms à l’accusatif | Accusative pronouns
t: der Käse → **ihn** | die Milch → **sie** | das Brot → **es** | die Äpfel → **sie**
= Der Käse ist gut. Ich nehme **ihn**. | Le fromage est bon. Je le prends. | The cheese is good. I’ll take it.
`,
w: `
einkaufen | faire les courses | to go shopping
der Supermarkt (Supermärkte) | le supermarché | supermarket
der Markt (Märkte) | le marché | market
die Bäckerei (-en) | la boulangerie | bakery
kosten | coûter | to cost
der Preis (-e) | le prix | price
der Euro (-s) | l’euro | euro
der Cent (-s) | le centime | cent
das Kilo (-s) | le kilo | kilo
das Gramm | le gramme | gram
der Liter (-) | le litre | litre
die Flasche (-n) | la bouteille | bottle
die Packung (-en) | le paquet | packet
die Dose (-n) | la boîte (de conserve) | tin, can
das Stück (-e) | le morceau | piece
der Joghurt (-s) | le yaourt | yoghurt
die Zwiebel (-n) | l’oignon | onion
die Orange (-n) | l’orange | orange
der Zucker | le sucre | sugar
das Salz | le sel | salt
nehmen | prendre | to take
brauchen | avoir besoin de | to need
bezahlen | payer | to pay
billig | bon marché | cheap
teuer | cher | expensive
frisch | frais | fresh
die Kasse (-n) | la caisse | checkout
`,
p: `
Ich hätte gern ein Kilo Tomaten. | Je voudrais un kilo de tomates. | I’d like a kilo of tomatoes.
Was kostet das? | Combien ça coûte ? | How much is that?
Das kostet drei Euro fünfzig. | Ça coûte trois euros cinquante. | That costs three euros fifty.
Haben Sie auch Bio-Eier? | Vous avez aussi des œufs bio ? | Do you also have organic eggs?
Sonst noch etwas? | Autre chose ? | Anything else?
Nein, danke. Das ist alles. | Non merci. C’est tout. | No, thanks. That’s all.
Ich nehme zwei Flaschen Wasser. | Je prends deux bouteilles d’eau. | I’ll take two bottles of water.
Wo finde ich den Reis? | Où est-ce que je trouve le riz ? | Where can I find the rice?
Kann ich mit Karte bezahlen? | Je peux payer par carte ? | Can I pay by card?
Das ist zu teuer. | C’est trop cher. | That’s too expensive.
Ich brauche noch Milch. | J’ai encore besoin de lait. | I still need milk.
Brauchst du eine Tüte? | Tu as besoin d’un sac ? | Do you need a bag?
`,
g: `
Ich brauche ___ Joghurt. | einen | ein/einen/eine | J’ai besoin d’un yaourt. | I need a yoghurt.
Ich nehme ___ Käse. | den | der/den/dem | Je prends le fromage. | I’ll take the cheese.
Ich kaufe ___ Flasche Wasser. | eine | ein/einen/eine | J’achète une bouteille d’eau. | I’m buying a bottle of water.
Was ___ die Tomaten? | kosten | kostet/kosten/kostest | Combien coûtent les tomates ? | How much are the tomatoes?
Was ___ der Saft? | kostet | kostet/kosten/koste | Combien coûte le jus ? | How much is the juice?
Der Käse ist frisch. Ich nehme ___. | ihn | ihn/sie/es | Le fromage est frais. Je le prends. | The cheese is fresh. I’ll take it.
Die Milch ist billig. Ich kaufe ___. | sie | ihn/sie/es | Le lait n’est pas cher. Je l’achète. | The milk is cheap. I’ll buy it.
Das Brot ist lecker. Ich nehme ___. | es | ihn/sie/es | Le pain est bon. Je le prends. | The bread is tasty. I’ll take it.
Ich ___ gern 200 Gramm Käse. | hätte | hätte/habe/hatte | Je voudrais 200 grammes de fromage. | I’d like 200 grams of cheese.
Du ___ zwei Kilo Äpfel. | nimmst | nehmst/nimmst/nimmt | Tu prends deux kilos de pommes. | You take two kilos of apples.
Er ___ nur eine Banane. | nimmt | nimmt/nehmt/nimmst | Il ne prend qu’une banane. | He only takes one banana.
Wir brauchen ___ Zucker. Wir haben noch viel. | keinen | kein/keinen/keine | On n’a pas besoin de sucre. On en a encore beaucoup. | We don’t need sugar. We still have a lot.
`,
r: { de: `Einkaufsliste für Samstag: Wir brauchen ein Kilo Kartoffeln, zwei Zwiebeln, sechs Eier und einen Liter Milch. Für den Kuchen brauchen wir noch Zucker und Butter. Salz haben wir noch. Bitte kauf auch zwei Flaschen Orangensaft, aber nicht im Supermarkt, der Saft dort ist zu teuer. Auf dem Markt ist er billiger. Brot kaufe ich in der Bäckerei. Danke! Mama`,
  fr: `Liste de courses pour samedi : il nous faut un kilo de pommes de terre, deux oignons, six œufs et un litre de lait. Pour le gâteau, il nous faut encore du sucre et du beurre. Du sel, on en a encore. Achète aussi deux bouteilles de jus d’orange, mais pas au supermarché, le jus y est trop cher. Au marché, il est moins cher. Le pain, je l’achète à la boulangerie. Merci ! Maman`,
  en: `Shopping list for Saturday: we need a kilo of potatoes, two onions, six eggs and a litre of milk. For the cake we still need sugar and butter. We still have salt. Please also buy two bottles of orange juice, but not at the supermarket, the juice there is too expensive. At the market it’s cheaper. I’ll buy bread at the bakery. Thanks! Mum`,
  q: `
Was braucht die Familie nicht? | Salz | Zucker | Milch
Wo soll man den Saft kaufen? | auf dem Markt | im Supermarkt | in der Bäckerei
Warum nicht im Supermarkt? | Der Saft ist dort zu teuer. | Der Supermarkt ist zu. | Es gibt keinen Saft.
Wer kauft das Brot? | die Mutter | das Kind | niemand
` },
d: `
Verkäuferin | Guten Morgen! Was darf es sein? | Bonjour ! Qu’est-ce que je vous sers ? | Good morning! What can I get you?
Kunde | Ich hätte gern ein Kilo Tomaten. | Je voudrais un kilo de tomates. | I’d like a kilo of tomatoes.
Verkäuferin | Gern. Sonst noch etwas? | Avec plaisir. Autre chose ? | Sure. Anything else?
Kunde | Ja, was kosten die Äpfel? | Oui, combien coûtent les pommes ? | Yes, how much are the apples?
Verkäuferin | Zwei Euro das Kilo. Sie sind ganz frisch. | Deux euros le kilo. Elles sont toutes fraîches. | Two euros a kilo. They’re very fresh.
Kunde | Dann nehme ich zwei Kilo. Das ist alles. | Alors j’en prends deux kilos. C’est tout. | Then I’ll take two kilos. That’s all.
Verkäuferin | Das macht sechs Euro fünfzig, bitte. | Ça fait six euros cinquante, s’il vous plaît. | That’s six euros fifty, please.
Kunde | Kann ich mit Karte bezahlen? | Je peux payer par carte ? | Can I pay by card?
`,
wr: { fr: 'Écris ta liste de courses pour un repas avec des amis et un petit message : ce qu’il faut acheter (avec quantités), où, et ce que vous avez déjà.', en: 'Write your shopping list for a meal with friends and a short message: what to buy (with quantities), where, and what you already have.', min: 40,
  req: ['brauchen=brauche;brauchen', 'quantité=Kilo;Gramm;Liter;Flasche;Packung;Dose;Stück', 'accusatif=\\b(einen|den|keinen)\\b', 'wo=Supermarkt;Markt;Bäckerei'],
  model: 'Hallo Sami! Am Freitag kochen wir für unsere Freunde. Wir brauchen ein Kilo Reis, zwei Kilo Tomaten, drei Zwiebeln und einen Liter Milch. Kaufst du bitte das Gemüse auf dem Markt? Dort ist es frisch und billig. Brot kaufe ich in der Bäckerei. Salz und Zucker brauchen wir nicht, wir haben noch genug. Danke!' },
pr: { fr: '« -e » final se prononce faiblement mais se prononce (Flasche, Tüte). « -en » final : le « e » disparaît presque (kosten = « kostn »).', en: 'Final “-e” is weak but pronounced (Flasche, Tüte). Final “-en”: the “e” almost disappears (kosten = “kostn”).',
  w: `
Flasche | bouteille | bottle
Tüte | sac | bag
kosten | coûter | to cost
Zwiebel | oignon | onion
bezahlen | payer | to pay
frisch | frais | fresh
Ich hätte gern ein Kilo Tomaten. | Je voudrais un kilo de tomates. | I’d like a kilo of tomatoes.
Das macht sechs Euro fünfzig. | Ça fait 6,50 €. | That’s €6.50.
` } },

/* ---------- 2 ---------- */
{ t: 'In der Stadt', fr: 'Lieux, chemin, transports ; le datif après mit / zu / in', en: 'Places, directions, transport; the dative after mit / zu / in',
sheet: `
# Le datif | The dative
> Après **mit, zu, bei, von, aus, nach, seit** → toujours le **datif**. | After **mit, zu, bei, von, aus, nach, seit** → always the **dative**.
T: ~ | der | die | das | Pl.
t: Dat. | ==dem / einem== | ==der / einer== | ==dem / einem== | ==den== + -n
= Ich fahre **mit dem** Bus. | Je prends le bus. | I go by bus.
= Ich fahre **mit der** U-Bahn. | Je prends le métro. | I take the underground.
= Ich gehe **zum** Bahnhof. (zu + dem) | Je vais à la gare. | I’m going to the station.
= Ich gehe **zur** Post. (zu + der) | Je vais à la poste. | I’m going to the post office.
! Contractions : zu + dem = **zum**, zu + der = **zur**, in + dem = **im**, bei + dem = **beim**, von + dem = **vom**. | Contractions: zu + dem = **zum**, zu + der = **zur**, in + dem = **im**, bei + dem = **beim**, von + dem = **vom**.
# Où ? → in + datif | Where? → in + dative
= Ich bin **im** Supermarkt. | Je suis au supermarché. | I’m at the supermarket.
= Sie arbeitet **in der** Apotheke. | Elle travaille à la pharmacie. | She works at the pharmacy.
# Les transports | Transport
t: mit dem Auto | mit dem Bus | mit dem Zug | mit dem Fahrrad
t: mit der U-Bahn | mit der S-Bahn | mit der Straßenbahn | **zu Fuß** (à pied~on foot)
# Indiquer le chemin | Giving directions
> L’**impératif poli** : le verbe en 1re position + **Sie**. | The **polite imperative**: verb first + **Sie**.
= Gehen Sie geradeaus. | Allez tout droit. | Go straight on.
= Gehen Sie die erste Straße links. | Prenez la première rue à gauche. | Take the first street on the left.
= Nehmen Sie die zweite Straße rechts. | Prenez la deuxième rue à droite. | Take the second street on the right.
= Die Post ist gegenüber vom Bahnhof. | La poste est en face de la gare. | The post office is opposite the station.
`,
w: `
die Stadt (Städte) | la ville | town, city
der Bahnhof (Bahnhöfe) | la gare | station
die Haltestelle (-n) | l’arrêt | stop (bus, tram)
die Post | la poste | post office
die Bank (-en) | la banque | bank
die Apotheke (-n) | la pharmacie | pharmacy
das Krankenhaus (Krankenhäuser) | l’hôpital | hospital
das Museum (Museen) | le musée | museum
die Kirche (-n) | l’église | church
die Moschee (-n) | la mosquée | mosque
der Park (-s) | le parc | park
die Straße (-n) | la rue | street
der Platz (Plätze) | la place | square
der Bus (-se) | le bus | bus
die U-Bahn (-en) | le métro | underground
der Zug (Züge) | le train | train
das Auto (-s) | la voiture | car
das Fahrrad (Fahrräder) | le vélo | bicycle
zu Fuß | à pied | on foot
fahren | aller (en véhicule), conduire | to go (by vehicle), to drive
gehen | aller (à pied) | to go, to walk
links | à gauche | left
rechts | à droite | right
geradeaus | tout droit | straight on
weit | loin | far
nah | près | near
gegenüber | en face | opposite
die Fahrkarte (-n) | le billet | ticket
`,
p: `
Entschuldigung, wo ist der Bahnhof? | Excusez-moi, où est la gare ? | Excuse me, where is the station?
Wie komme ich zum Museum? | Comment je vais au musée ? | How do I get to the museum?
Gehen Sie hier geradeaus. | Allez tout droit ici. | Go straight on here.
Dann die zweite Straße links. | Puis la deuxième rue à gauche. | Then the second street on the left.
Ist das weit? | C’est loin ? | Is it far?
Nein, nur fünf Minuten zu Fuß. | Non, seulement cinq minutes à pied. | No, only five minutes on foot.
Ich fahre mit dem Bus zur Arbeit. | Je vais au travail en bus. | I go to work by bus.
Wo ist die Haltestelle? | Où est l’arrêt ? | Where is the stop?
Welcher Bus fährt zum Zentrum? | Quel bus va au centre ? | Which bus goes to the centre?
Eine Fahrkarte nach Hamburg, bitte. | Un billet pour Hambourg, s’il vous plaît. | A ticket to Hamburg, please.
Die Apotheke ist neben der Bank. | La pharmacie est à côté de la banque. | The pharmacy is next to the bank.
Ich bin auch fremd hier. | Je ne suis pas d’ici non plus. | I’m a stranger here too.
`,
g: `
Ich fahre mit ___ Bus. | dem | der/dem/den | Je prends le bus. | I go by bus.
Ich fahre mit ___ U-Bahn. | der | der/dem/die | Je prends le métro. | I take the underground.
Sie fährt mit ___ Fahrrad. | dem | der/dem/das | Elle va à vélo. | She goes by bike.
Wie komme ich ___ Bahnhof? | zum | zum/zur/zu | Comment je vais à la gare ? | How do I get to the station?
Ich gehe ___ Post. | zur | zum/zur/zu | Je vais à la poste. | I’m going to the post office.
Ich bin ___ Supermarkt. | im | im/in/in die | Je suis au supermarché. | I’m at the supermarket.
Er arbeitet in ___ Bank. | der | der/dem/die | Il travaille à la banque. | He works at the bank.
___ Sie geradeaus. | Gehen | Gehen/Geht/Gehst | Allez tout droit. | Go straight on.
___ Sie die erste Straße rechts. | Nehmen | Nehmen/Nimm/Nimmt | Prenez la première rue à droite. | Take the first street on the right.
Du ___ mit dem Zug nach Berlin. | fährst | fahrst/fährst/fährt | Tu vas à Berlin en train. | You’re going to Berlin by train.
Ich komme ___ Fuß. | zu | zu/mit/im | Je viens à pied. | I’m coming on foot.
Die Bank ist ___ vom Park. | gegenüber | gegenüber/links/weit | La banque est en face du parc. | The bank is opposite the park.
`,
r: { de: `So kommen Sie zu uns: Vom Bahnhof nehmen Sie den Bus Nummer 12 bis zur Haltestelle „Marktplatz“. Das dauert zehn Minuten. Dann gehen Sie geradeaus bis zur Kirche. Dort gehen Sie links in die Goethestraße. Unsere Sprachschule ist das dritte Haus rechts, gegenüber von der Apotheke. Mit dem Fahrrad brauchen Sie vom Bahnhof nur 15 Minuten. Parkplätze gibt es leider nicht.`,
  fr: `Comment venir chez nous : depuis la gare, prenez le bus numéro 12 jusqu’à l’arrêt « Marktplatz ». Cela dure dix minutes. Ensuite, allez tout droit jusqu’à l’église. Là, tournez à gauche dans la Goethestraße. Notre école de langues est la troisième maison à droite, en face de la pharmacie. À vélo, il ne faut que 15 minutes depuis la gare. Il n’y a malheureusement pas de places de parking.`,
  en: `How to get to us: from the station take bus number 12 to the stop “Marktplatz”. That takes ten minutes. Then go straight on as far as the church. There turn left into Goethestraße. Our language school is the third house on the right, opposite the pharmacy. By bike it only takes 15 minutes from the station. Unfortunately there is no parking.`,
  q: `
Welchen Bus nimmt man? | den Bus Nummer 12 | den Bus Nummer 10 | den Bus Nummer 15
Wo geht man links? | bei der Kirche | am Bahnhof | an der Apotheke
Wo ist die Sprachschule? | gegenüber von der Apotheke | neben der Kirche | am Marktplatz
Was gibt es nicht? | Parkplätze | eine Haltestelle | eine Apotheke
` },
d: `
Tourist | Entschuldigung, wie komme ich zum Museum? | Excusez-moi, comment je vais au musée ? | Excuse me, how do I get to the museum?
Frau | Zum Museum? Gehen Sie hier geradeaus bis zur Ampel. | Au musée ? Allez tout droit jusqu’au feu. | To the museum? Go straight on to the traffic lights.
Tourist | Und dann? | Et ensuite ? | And then?
Frau | Dann nehmen Sie die zweite Straße rechts. Das Museum ist neben der Post. | Ensuite prenez la deuxième rue à droite. Le musée est à côté de la poste. | Then take the second street on the right. The museum is next to the post office.
Tourist | Ist das weit? Kann ich zu Fuß gehen? | C’est loin ? Je peux y aller à pied ? | Is it far? Can I walk?
Frau | Ja, das sind nur zehn Minuten. | Oui, c’est seulement dix minutes. | Yes, it’s only ten minutes.
Tourist | Vielen Dank! | Merci beaucoup ! | Thank you very much!
Frau | Bitte schön. Viel Spaß im Museum! | Je vous en prie. Bonne visite ! | You’re welcome. Enjoy the museum!
`,
wr: { fr: 'Un ami vient te voir. Explique-lui comment venir de la gare chez toi : quel transport, quel arrêt, à droite, à gauche, combien de temps.', en: 'A friend is visiting you. Explain how to get from the station to your home: which transport, which stop, right, left, how long.', min: 45,
  req: ['mit dem / der=mit (dem|der)', 'zum / zur=\\bzum\\b;\\bzur\\b', 'links / rechts=links;rechts', 'geradeaus=geradeaus'],
  model: 'Hallo Jonas! Vom Bahnhof fährst du mit der U-Bahn Linie 3 bis zur Haltestelle Rathaus. Das dauert nur zehn Minuten. Dann gehst du geradeaus bis zum Park. Am Park gehst du rechts. Ich wohne in der Lindenstraße 8, gegenüber von der Bäckerei. Zu Fuß sind das fünf Minuten. Ruf mich an, wenn du da bist!' },
pr: { fr: '« ä » = « è » ouvert (fährt). « ü » = « u » français (zu Fuß – Tschüss). « au » = « aou » (Auto, Haus), « eu / äu » = « oï » (Leute, Häuser).', en: '“ä” = open “e” as in “bed” (fährt). “ü” = French “u”. “au” = “ow” (Auto, Haus), “eu / äu” = “oy” (Leute, Häuser).',
  w: `
fährt | va (en véhicule) | goes (by vehicle)
Häuser | maisons | houses
Auto | voiture | car
Straßenbahn | tramway | tram
geradeaus | tout droit | straight on
Haltestelle | arrêt | stop
Wie komme ich zum Bahnhof? | Comment aller à la gare ? | How do I get to the station?
Gehen Sie die erste Straße rechts. | Prenez la première rue à droite. | Take the first street on the right.
` } },

/* ---------- 3 ---------- */
{ t: 'Arbeit und Beruf', fr: 'Métiers, lieu de travail ; le passé composé avec haben', en: 'Jobs, workplace; the perfect tense with haben',
sheet: `
# Le métier | Your job
= Was sind Sie von Beruf? – Ich bin Ingenieurin. | Quel est votre métier ? – Je suis ingénieure. | What do you do? – I’m an engineer.
! Pas d’article devant le métier : Ich bin **Lehrer** (pas « ein Lehrer »). | No article before the job: Ich bin **Lehrer** (not “ein Lehrer”).
t: der Arzt → die Ärzt**in** | der Lehrer → die Lehrer**in** | der Koch → die Köch**in** | der Verkäufer → die Verkäufer**in**
# Le Perfekt (passé composé) | The Perfekt (perfect tense)
> **haben** (conjugué, position 2) + **participe** (à la fin). On l’utilise à l’oral pour parler du passé. | **haben** (conjugated, position 2) + **participle** (at the end). It’s the normal spoken past.
= Ich **habe** gestern viel **gearbeitet**. | J’ai beaucoup travaillé hier. | I worked a lot yesterday.
# Participe des verbes réguliers | Participle of regular verbs
T: Infinitif~Infinitive | Participe~Participle
t: arbeiten | **ge**arbeit**et**
t: machen | **ge**mach**t**
t: kaufen | **ge**kauf**t**
t: lernen | **ge**lern**t**
t: kochen | **ge**koch**t**
> Règle : **ge-** + radical + **-t** (ou **-et** après t/d). | Rule: **ge-** + stem + **-t** (or **-et** after t/d).
# Participe des verbes irréguliers | Participle of irregular verbs
t: essen → **ge**gess**en** | trinken → **ge**trunk**en** | lesen → **ge**les**en**
t: schreiben → **ge**schrieb**en** | sehen → **ge**seh**en** | sprechen → **ge**sproch**en**
t: nehmen → **ge**nomm**en** | finden → **ge**fund**en** | schlafen → **ge**schlaf**en**
! Irréguliers : **ge- … -en**, et souvent la voyelle change. À apprendre par cœur. | Irregular: **ge- … -en**, and the vowel often changes. Learn them by heart.
# Sans ge- | Without ge-
* Verbes en **-ieren** et verbes commençant par **be-, ver-, er-** : pas de ge-. | Verbs in **-ieren** and verbs starting with **be-, ver-, er-**: no ge-.
= Ich habe **telefoniert**. Ich habe **bezahlt**. Ich habe es **verstanden**. | J’ai téléphoné. J’ai payé. J’ai compris. | I phoned. I paid. I understood.
* Verbes séparables : ge au milieu : einkaufen → ein**ge**kauft. | Separable verbs: ge in the middle: einkaufen → ein**ge**kauft.
`,
w: `
der Beruf (-e) | le métier | job, profession
die Arbeit | le travail | work
arbeiten | travailler | to work
der Arzt (Ärzte) | le médecin | doctor
die Ärztin (-nen) | la médecin | doctor (female)
der Ingenieur (-e) | l’ingénieur | engineer
der Koch (Köche) | le cuisinier | cook
der Verkäufer (-) | le vendeur | salesperson
der Krankenpfleger (-) | l’infirmier | nurse (male)
die Krankenpflegerin (-nen) | l’infirmière | nurse (female)
der Student (-en) | l’étudiant | student
das Büro (-s) | le bureau | office
die Firma (Firmen) | l’entreprise | company
der Kollege (-n) | le collègue | colleague
die Kollegin (-nen) | la collègue | colleague (female)
der Chef (-s) | le chef, le patron | boss
der Computer (-) | l’ordinateur | computer
schreiben | écrire | to write
telefonieren | téléphoner | to phone
studieren | faire des études | to study (at university)
verdienen | gagner (de l’argent) | to earn
gestern | hier | yesterday
heute | aujourd’hui | today
die Stelle (-n) | le poste, l’emploi | job, position
arbeitslos | au chômage | unemployed
`,
p: `
Was sind Sie von Beruf? | Quel est votre métier ? | What do you do for a living?
Ich bin Krankenpflegerin. | Je suis infirmière. | I’m a nurse.
Wo arbeitest du? | Où travailles-tu ? | Where do you work?
Ich arbeite bei einer Firma in Tunis. | Je travaille dans une entreprise à Tunis. | I work for a company in Tunis.
Ich arbeite im Büro. | Je travaille au bureau. | I work in an office.
Ich studiere Informatik. | J’étudie l’informatique. | I study computer science.
Ich suche eine Stelle. | Je cherche un emploi. | I’m looking for a job.
Was hast du gestern gemacht? | Qu’est-ce que tu as fait hier ? | What did you do yesterday?
Ich habe den ganzen Tag gearbeitet. | J’ai travaillé toute la journée. | I worked all day.
Ich habe viele E-Mails geschrieben. | J’ai écrit beaucoup d’e-mails. | I wrote a lot of emails.
Hast du schon gegessen? | Tu as déjà mangé ? | Have you eaten yet?
Wir haben lange telefoniert. | Nous avons téléphoné longtemps. | We talked on the phone for a long time.
`,
g: `
Sie ist ___. | Ärztin | Ärztin/eine Ärztin/Arzt | Elle est médecin. | She is a doctor.
Ich ___ gestern viel gearbeitet. | habe | habe/bin/hat | J’ai beaucoup travaillé hier. | I worked a lot yesterday.
Was hast du gestern ___? | gemacht | gemacht/machen/gemachen | Qu’as-tu fait hier ? | What did you do yesterday?
Wir haben Pizza ___. | gegessen | geesst/gegessen/gessen | Nous avons mangé une pizza. | We ate pizza.
Er hat einen Brief ___. | geschrieben | geschreibt/geschrieben/schriebt | Il a écrit une lettre. | He wrote a letter.
Ich habe Tee ___. | getrunken | getrinkt/getrunken/getrankt | J’ai bu du thé. | I drank tea.
Hast du mit Anna ___? | telefoniert | telefoniert/getelefoniert/telefonieren | Tu as téléphoné à Anna ? | Did you phone Anna?
Ich habe die Rechnung ___. | bezahlt | gebezahlt/bezahlt/bezahlen | J’ai payé la facture. | I paid the bill.
Wir haben im Supermarkt ___. | eingekauft | geeinkauft/eingekauft/einkauft | Nous avons fait les courses au supermarché. | We went shopping at the supermarket.
Hast du das Buch ___? | gelesen | gelest/gelesen/geliest | Tu as lu le livre ? | Have you read the book?
Er ___ einen Film gesehen. | hat | hat/ist/habt | Il a vu un film. | He saw a film.
Ich habe das nicht ___. | verstanden | verstanden/geversteht/verstehen | Je n’ai pas compris ça. | I didn’t understand that.
`,
r: { de: `Ich heiße Leila und bin Köchin in einem Restaurant in Hamburg. Meine Arbeit fängt um zehn Uhr an. Gestern war ein langer Tag: Am Morgen habe ich Gemüse gekauft und Brot gebacken. Am Mittag haben wir für 80 Gäste gekocht! Mein Chef hat viel telefoniert, und ich habe mit meinen Kollegen Fisch und Salat gemacht. Am Abend habe ich zu Hause nur einen Tee getrunken und ein Buch gelesen. Ich liebe meinen Beruf, aber ich verdiene nicht so viel.`,
  fr: `Je m’appelle Leila et je suis cuisinière dans un restaurant à Hambourg. Mon travail commence à dix heures. Hier, la journée a été longue : le matin, j’ai acheté des légumes et cuit du pain. À midi, nous avons cuisiné pour 80 clients ! Mon chef a beaucoup téléphoné, et avec mes collègues j’ai préparé du poisson et de la salade. Le soir, à la maison, j’ai juste bu un thé et lu un livre. J’adore mon métier, mais je ne gagne pas beaucoup.`,
  en: `My name is Leila and I’m a cook in a restaurant in Hamburg. My work starts at ten o’clock. Yesterday was a long day: in the morning I bought vegetables and baked bread. At lunchtime we cooked for 80 guests! My boss made a lot of phone calls, and with my colleagues I made fish and salad. In the evening at home I just drank a tea and read a book. I love my job, but I don’t earn that much.`,
  q: `
Was ist Leila von Beruf? | Köchin | Ärztin | Verkäuferin
Was hat sie am Morgen gemacht? | Sie hat Gemüse gekauft und Brot gebacken. | Sie hat telefoniert. | Sie hat ein Buch gelesen.
Für wie viele Gäste haben sie gekocht? | für 80 | für 18 | für 10
Was ist ein Problem in ihrem Beruf? | Sie verdient nicht viel. | Sie hat keine Kollegen. | Die Arbeit fängt sehr früh an.
` },
d: `
Jana | Hallo Omar! Was machst du jetzt beruflich? | Salut Omar ! Qu’est-ce que tu fais maintenant comme travail ? | Hi Omar! What do you do for work now?
Omar | Ich bin Ingenieur bei einer Firma in Stuttgart. | Je suis ingénieur dans une entreprise à Stuttgart. | I’m an engineer at a company in Stuttgart.
Jana | Toll! Gefällt dir die Arbeit? | Super ! Le travail te plaît ? | Great! Do you like the work?
Omar | Ja, sehr. Aber gestern habe ich zwölf Stunden gearbeitet. | Oui, beaucoup. Mais hier j’ai travaillé douze heures. | Yes, a lot. But yesterday I worked twelve hours.
Jana | Oje! Was hast du am Abend gemacht? | Oh là là ! Qu’as-tu fait le soir ? | Oh dear! What did you do in the evening?
Omar | Nichts! Ich habe nur gegessen und dann geschlafen. | Rien ! J’ai seulement mangé et ensuite dormi. | Nothing! I just ate and then slept.
`,
wr: { fr: 'Raconte ta journée d’hier (travail ou études) au passé composé : au moins 5 choses que tu as faites.', en: 'Tell about your day yesterday (work or studies) in the perfect tense: at least 5 things you did.', min: 40,
  req: ['gestern=gestern', 'habe … ge-=habe .{1,30}\\bge\\w+', '3 participes=(ge\\w+(t|en)\\b.*){3}', 'métier ou études=Beruf;arbeite;studiere;Büro;Firma;Kurs'],
  model: 'Gestern habe ich von acht bis vier Uhr im Büro gearbeitet. Am Morgen habe ich viele E-Mails geschrieben und mit Kunden telefoniert. Am Mittag habe ich mit meiner Kollegin Salat gegessen. Am Nachmittag haben wir ein Projekt gemacht. Am Abend habe ich eingekauft, gekocht und Deutsch gelernt.' },
pr: { fr: 'Le préfixe « ge- » est toujours faible et non accentué : ge-MACHT, ge-AR-bei-tet. Ne dis pas « gé » !', en: 'The prefix “ge-” is always weak and unstressed: ge-MACHT, ge-AR-bei-tet. Don’t stress it!',
  w: `
gemacht | fait | done
gearbeitet | travaillé | worked
geschrieben | écrit | written
getrunken | bu | drunk
gegessen | mangé | eaten
telefoniert | téléphoné | phoned
Ich habe gestern viel gearbeitet. | J’ai beaucoup travaillé hier. | I worked a lot yesterday.
Was sind Sie von Beruf? | Quel est votre métier ? | What do you do?
` } },

/* ---------- 4 ---------- */
{ t: 'Termine', fr: 'Rendez-vous ; les verbes de modalité müssen, wollen, dürfen, sollen', en: 'Appointments; modal verbs müssen, wollen, dürfen, sollen',
sheet: `
# Les verbes de modalité | Modal verbs
T: ~ | können | müssen | wollen | dürfen | sollen
t: ich | kann | **muss** | **will** | **darf** | soll
t: du | kannst | musst | willst | darfst | sollst
t: er / sie | kann | **muss** | **will** | **darf** | soll
t: wir / Sie | können | müssen | wollen | dürfen | sollen
t: ihr | könnt | müsst | wollt | dürft | sollt
! ich et er/sie : **même forme, sans -t** (ich muss, er muss). | ich and er/sie: **same form, no -t** (ich muss, er muss).
# Le sens | The meaning
t: können | pouvoir, savoir~can, be able to
t: müssen | devoir (obligation)~must, have to
t: wollen | vouloir~want to
t: dürfen | avoir le droit~may, be allowed to
t: sollen | devoir (quelqu’un le demande)~should, be supposed to
! **nicht müssen** = ne pas être obligé. **nicht dürfen** = interdit ! | **nicht müssen** = don’t have to. **nicht dürfen** = must not!
= Du **musst** nicht kommen. | Tu n’es pas obligé de venir. | You don’t have to come.
= Hier **darf** man nicht rauchen. | Ici, il est interdit de fumer. | You mustn’t smoke here.
# La phrase-cadre | The sentence frame
> Modal en **position 2**, l’autre verbe **à l’infinitif à la fin**. | Modal in **position 2**, the other verb **in the infinitive at the end**.
= Ich **muss** am Montag zum Arzt **gehen**. | Je dois aller chez le médecin lundi. | I have to go to the doctor on Monday.
= **Kannst** du am Freitag **kommen**? | Tu peux venir vendredi ? | Can you come on Friday?
# Les rendez-vous | Appointments
* der **Termin** = rendez-vous officiel (médecin, bureau). sich **verabreden** / die **Verabredung** = avec des amis. | der **Termin** = formal appointment (doctor, office). die **Verabredung** = a date with friends.
= Ich möchte einen Termin machen. | Je voudrais prendre rendez-vous. | I’d like to make an appointment.
= Geht es am Dienstag um 10 Uhr? – Ja, das passt. | Est-ce que mardi à 10 h, ça va ? – Oui, ça me convient. | Does Tuesday at 10 work? – Yes, that suits me.
`,
w: `
der Termin (-e) | le rendez-vous | appointment
die Zeit | le temps | time
müssen | devoir | must, to have to
wollen | vouloir | to want
dürfen | avoir le droit | may, to be allowed
sollen | devoir (conseil, ordre) | should
passen | convenir | to suit
gehen | aller ; être possible | to go; to work, be OK
leider | malheureusement | unfortunately
vielleicht | peut-être | maybe
später | plus tard | later
morgen | demain | tomorrow
übermorgen | après-demain | the day after tomorrow
der Vormittag (-e) | la matinée | morning (before noon)
der Nachmittag (-e) | l’après-midi | afternoon
die Besprechung (-en) | la réunion | meeting
absagen | annuler | to cancel
verschieben | reporter | to postpone
pünktlich | à l’heure | on time
die Verspätung (-en) | le retard | delay
frei | libre | free
besetzt | occupé | busy, taken
rauchen | fumer | to smoke
`,
p: `
Ich möchte einen Termin machen. | Je voudrais prendre rendez-vous. | I’d like to make an appointment.
Haben Sie am Montag Zeit? | Avez-vous le temps lundi ? | Are you free on Monday?
Geht es am Mittwoch um drei Uhr? | Ça va mercredi à trois heures ? | Does Wednesday at three work?
Ja, das passt mir gut. | Oui, ça me convient bien. | Yes, that suits me well.
Am Dienstag kann ich leider nicht. | Mardi, je ne peux malheureusement pas. | Unfortunately I can’t on Tuesday.
Ich muss heute lange arbeiten. | Je dois travailler tard aujourd’hui. | I have to work late today.
Willst du mit ins Kino kommen? | Tu veux venir au cinéma avec nous ? | Do you want to come to the cinema?
Ich muss den Termin leider absagen. | Je dois malheureusement annuler le rendez-vous. | Unfortunately I have to cancel the appointment.
Können wir den Termin verschieben? | Pouvons-nous reporter le rendez-vous ? | Can we postpone the appointment?
Bitte seien Sie pünktlich. | Merci d’être à l’heure. | Please be on time.
Hier darf man nicht parken. | Ici, il est interdit de se garer. | You mustn’t park here.
Ich komme zehn Minuten später. | J’arrive dix minutes plus tard. | I’ll be ten minutes late.
`,
g: `
Ich ___ heute arbeiten. | muss | muss/musst/müsse | Je dois travailler aujourd’hui. | I have to work today.
Er ___ einen Termin machen. | will | will/willt/wollt | Il veut prendre rendez-vous. | He wants to make an appointment.
___ du morgen kommen? | Kannst | Kannst/Kann/Könnt | Tu peux venir demain ? | Can you come tomorrow?
Hier ___ man nicht rauchen. | darf | darf/darfst/dürft | Ici, il est interdit de fumer. | You mustn’t smoke here.
Der Arzt sagt, ich ___ viel schlafen. | soll | soll/sollst/sollen | Le médecin dit que je dois beaucoup dormir. | The doctor says I should sleep a lot.
Ihr ___ pünktlich sein. | müsst | müsst/musst/müssen | Vous devez être à l’heure. | You must be on time.
Ich muss am Freitag zum Arzt ___. | gehen | gehen/gehe/geht | Je dois aller chez le médecin vendredi. | I have to go to the doctor on Friday.
Wir wollen am Samstag ein Picknick ___. | machen | machen/macht/gemacht | Nous voulons faire un pique-nique samedi. | We want to have a picnic on Saturday.
Du ___ nicht kommen, wenn du keine Zeit hast. | musst | musst/darfst/willst | Tu n’es pas obligé de venir si tu n’as pas le temps. | You don’t have to come if you don’t have time.
Am Montag kann ich ___. Ich arbeite. | leider nicht | leider nicht/nicht leider/kein | Lundi, je ne peux malheureusement pas. Je travaille. | Unfortunately I can’t on Monday. I’m working.
Geht es am Dienstag? – Ja, das ___ mir. | passt | passt/geht mir/kann | Mardi, ça va ? – Oui, ça me convient. | Does Tuesday work? – Yes, that suits me.
Können wir den Termin ___? | verschieben | verschieben/verschiebt/verschoben | Pouvons-nous reporter le rendez-vous ? | Can we postpone the appointment?
`,
r: { de: `Liebe Frau Müller, leider muss ich unseren Termin am Donnerstag um 14 Uhr absagen. Mein Sohn ist krank und ich muss zu Hause bleiben. Können wir den Termin verschieben? Am Montag oder Dienstag habe ich Zeit, aber erst ab 11 Uhr, denn am Vormittag muss ich ihn zum Arzt bringen. Am Mittwoch kann ich leider nicht, da habe ich eine Besprechung. Vielen Dank und viele Grüße, Karim Haddad`,
  fr: `Chère Madame Müller, je dois malheureusement annuler notre rendez-vous de jeudi à 14 h. Mon fils est malade et je dois rester à la maison. Pouvons-nous reporter le rendez-vous ? Lundi ou mardi, j’ai le temps, mais seulement à partir de 11 h, car le matin je dois l’emmener chez le médecin. Mercredi, je ne peux malheureusement pas, j’ai une réunion. Merci beaucoup et bien cordialement, Karim Haddad`,
  en: `Dear Mrs Müller, unfortunately I have to cancel our appointment on Thursday at 2 pm. My son is ill and I have to stay at home. Can we postpone the appointment? I have time on Monday or Tuesday, but only from 11 am, because in the morning I have to take him to the doctor. Unfortunately I can’t on Wednesday, I have a meeting. Many thanks and best regards, Karim Haddad`,
  q: `
Warum sagt Karim den Termin ab? | Sein Sohn ist krank. | Er hat eine Besprechung. | Er ist krank.
Wann hat Karim Zeit? | Montag oder Dienstag ab 11 Uhr | Mittwoch | Donnerstag um 14 Uhr
Was macht er am Montagvormittag? | Er bringt seinen Sohn zum Arzt. | Er arbeitet. | Er hat einen Termin mit Frau Müller.
Warum geht Mittwoch nicht? | Er hat eine Besprechung. | Er ist beim Arzt. | Frau Müller hat keine Zeit.
` },
d: `
Praxis | Praxis Dr. Becker, guten Tag. | Cabinet du docteur Becker, bonjour. | Dr Becker’s practice, hello.
Sara | Guten Tag, hier ist Sara Ben Salah. Ich möchte einen Termin machen. | Bonjour, ici Sara Ben Salah. Je voudrais prendre rendez-vous. | Hello, this is Sara Ben Salah. I’d like to make an appointment.
Praxis | Gern. Geht es am Donnerstag um neun Uhr? | Avec plaisir. Jeudi à neuf heures, ça vous va ? | Of course. Does Thursday at nine work?
Sara | Am Donnerstag muss ich leider arbeiten. Geht es auch am Nachmittag? | Jeudi, je dois malheureusement travailler. C’est possible l’après-midi ? | Unfortunately I have to work on Thursday. Is the afternoon possible?
Praxis | Am Freitag um 16 Uhr ist noch ein Termin frei. | Vendredi à 16 h, il y a encore un créneau libre. | There’s still a slot free on Friday at 4 pm.
Sara | Das passt gut. Vielen Dank! | Ça me convient bien. Merci beaucoup ! | That suits me well. Thank you very much!
Praxis | Bitte bringen Sie Ihre Versicherungskarte mit. | Veuillez apporter votre carte d’assurance. | Please bring your insurance card.
`,
wr: { fr: 'Écris un e-mail à ta professeure : tu dois annuler le cours de jeudi (dis pourquoi) et proposer deux autres moments.', en: 'Write an email to your teacher: you have to cancel Thursday’s lesson (say why) and suggest two other times.', min: 30,
  req: ['Liebe / Sehr geehrte=Liebe;Lieber;Sehr geehrte', 'absagen=absagen;kann .*nicht', 'müssen=muss', 'proposition=Geht es;Haben Sie;Passt;Können wir', 'salutation=Grüße'],
  model: 'Liebe Frau Wagner, leider muss ich den Kurs am Donnerstag absagen. Ich habe einen Termin beim Arzt. Können wir die Stunde verschieben? Geht es am Freitag um 17 Uhr? Am Samstagvormittag habe ich auch Zeit. Vielen Dank und viele Grüße, Sara' },
pr: { fr: 'Les verbes de modalité au singulier sont courts et nets : muss (« mouss » bref), will (« vil »). Au pluriel, « ü » et « ö » : müssen, können, dürfen.', en: 'Singular modal verbs are short and crisp: muss (short “u”), will (“vil”). In the plural: “ü” and “ö”: müssen, können, dürfen.',
  w: `
muss | dois | must
müssen | devoir | have to
können | pouvoir | can
dürfen | avoir le droit | may
will | veux | want
Termin | rendez-vous | appointment
Ich muss den Termin leider absagen. | Je dois annuler le rendez-vous. | I have to cancel the appointment.
Geht es am Mittwoch um drei Uhr? | Ça va mercredi à 15 h ? | Does Wednesday at three work?
` } },

/* ---------- 5 ---------- */
{ t: 'Gesundheit', fr: 'Le corps, chez le médecin ; l’impératif ; « mir tut … weh »', en: 'The body, at the doctor’s; the imperative; “mir tut … weh”',
sheet: `
# J’ai mal… | It hurts…
= Mir tut der Kopf weh. | J’ai mal à la tête. | My head hurts.
= Mir tun die Füße weh. | J’ai mal aux pieds. | My feet hurt.
= Ich habe Kopfschmerzen / Bauchschmerzen / Fieber. | J’ai mal à la tête / mal au ventre / de la fièvre. | I have a headache / stomach ache / fever.
! **tut** avec un singulier, **tun** avec un pluriel. Et c’est **mir** (datif) : « à moi, la tête fait mal ». | **tut** with a singular, **tun** with a plural. And it’s **mir** (dative): “to me the head hurts”.
# L’impératif | The imperative
T: ~ | Sie | du | ihr
t: nehmen | Nehmen **Sie**! | **Nimm**! | Nehm**t**!
t: trinken | Trinken **Sie**! | **Trink**! | Trink**t**!
t: schlafen | Schlafen **Sie**! | **Schlaf**! | Schlaf**t**!
t: sein | **Seien** Sie! | **Sei**! | **Seid**!
> **du** : forme de « du » **sans -st et sans du** : du nimmst → **Nimm!** · du trinkst → **Trink!** | **du**: the “du” form **without -st and without du**: du nimmst → **Nimm!** · du trinkst → **Trink!**
! Pas d’inflexion à l’impératif : du fährst → **Fahr!** (pas « Fähr »). Mais e → i reste : **Iss!**, **Lies!** | No umlaut in the imperative: du fährst → **Fahr!** But e → i stays: **Iss!**, **Lies!**
= Nimm die Tabletten dreimal am Tag! | Prends les comprimés trois fois par jour ! | Take the tablets three times a day!
= Bleiben Sie zwei Tage im Bett! | Restez deux jours au lit ! | Stay in bed for two days!
* **mal** et **bitte** rendent l’impératif plus gentil : Komm **mal** her, **bitte**! | **mal** and **bitte** make the imperative friendlier: Komm **mal** her, **bitte**!
# Le corps | The body
t: {m:der} Kopf | {m:der} Hals | {m:der} Bauch | {m:der} Rücken | {m:der} Arm
t: {n:das} Bein | {n:das} Auge | {n:das} Ohr | {f:die} Hand | {f:die} Nase
t: {m:der} Fuß | {m:der} Zahn | {m:der} Finger | {m:der} Mund | {n:das} Knie
`,
w: `
die Gesundheit | la santé | health
krank | malade | ill, sick
gesund | en bonne santé | healthy
der Kopf (Köpfe) | la tête | head
der Bauch (Bäuche) | le ventre | stomach, belly
der Rücken (-) | le dos | back
der Hals (Hälse) | la gorge, le cou | throat, neck
das Bein (-e) | la jambe | leg
der Fuß (Füße) | le pied | foot
die Hand (Hände) | la main | hand
das Auge (-n) | l’œil | eye
der Zahn (Zähne) | la dent | tooth
die Schmerzen (Pl.) | les douleurs | pain
das Fieber | la fièvre | fever
der Husten | la toux | cough
der Schnupfen | le rhume | runny nose, cold
die Tablette (-n) | le comprimé | tablet
das Medikament (-e) | le médicament | medicine
das Rezept (-e) | l’ordonnance | prescription
die Praxis (Praxen) | le cabinet médical | doctor’s practice
wehtun | faire mal | to hurt
bleiben | rester | to stay
sich ausruhen | se reposer | to rest
die Krankmeldung (-en) | l’arrêt maladie | sick note
Gute Besserung! | Bon rétablissement ! | Get well soon!
`,
p: `
Was fehlt Ihnen? | Qu’est-ce qui ne va pas ? | What’s the matter?
Mir tut der Kopf weh. | J’ai mal à la tête. | My head hurts.
Ich habe Fieber und Husten. | J’ai de la fièvre et je tousse. | I have a fever and a cough.
Seit wann haben Sie Schmerzen? | Depuis quand avez-vous mal ? | How long have you had the pain?
Seit drei Tagen. | Depuis trois jours. | For three days.
Nehmen Sie diese Tabletten. | Prenez ces comprimés. | Take these tablets.
Trink viel Tee und schlaf viel! | Bois beaucoup de thé et dors beaucoup ! | Drink lots of tea and sleep a lot!
Bleiben Sie zwei Tage zu Hause. | Restez deux jours à la maison. | Stay at home for two days.
Ich brauche eine Krankmeldung. | J’ai besoin d’un arrêt maladie. | I need a sick note.
Ich fühle mich nicht gut. | Je ne me sens pas bien. | I don’t feel well.
Gute Besserung! | Bon rétablissement ! | Get well soon!
Wo ist die nächste Apotheke? | Où est la pharmacie la plus proche ? | Where is the nearest pharmacy?
`,
g: `
Mir tut der Bauch ___. | weh | weh/schlecht/krank | J’ai mal au ventre. | My stomach hurts.
Mir ___ die Füße weh. | tun | tut/tun/tue | J’ai mal aux pieds. | My feet hurt.
Mir ___ der Rücken weh. | tut | tut/tun/tust | J’ai mal au dos. | My back hurts.
___ die Tabletten! (du) | Nimm | Nimm/Nimmst/Nehm | Prends les comprimés ! | Take the tablets!
___ viel Wasser! (du) | Trink | Trink/Trinkst/Trinke du | Bois beaucoup d’eau ! | Drink lots of water!
___ Sie im Bett! | Bleiben | Bleiben/Bleib/Bleibt | Restez au lit ! | Stay in bed!
___ ruhig, Kinder! (ihr) | Seid | Sei/Seid/Seien | Soyez calmes, les enfants ! | Be quiet, children!
___ nicht so viel! (du, arbeiten) | Arbeite | Arbeite/Arbeitest/Arbeiten | Ne travaille pas tant ! | Don’t work so much!
___ langsam! (du, fahren) | Fahr | Fahr/Fähr/Fährst | Roule doucement ! | Drive slowly!
___ das Buch! (du, lesen) | Lies | Les/Lies/Liest | Lis le livre ! | Read the book!
Ich habe ___ drei Tagen Fieber. | seit | seit/vor/für | J’ai de la fièvre depuis trois jours. | I’ve had a fever for three days.
Ich habe ___. (la tête) | Kopfschmerzen | Kopfschmerzen/Kopfweh tun/Kopf | J’ai mal à la tête. | I have a headache.
`,
r: { de: `Hallo Lena, ich kann heute leider nicht zum Deutschkurs kommen. Ich bin krank: Ich habe seit gestern Fieber und mir tut der Hals sehr weh. Ich war heute Morgen beim Arzt. Er sagt, ich habe eine Grippe. Ich soll drei Tage im Bett bleiben, viel Tee trinken und die Tabletten nehmen. Kannst du mir bitte die Hausaufgaben schicken? Danke! Liebe Grüße\nSami`,
  fr: `Salut Lena, je ne peux malheureusement pas venir au cours d’allemand aujourd’hui. Je suis malade : j’ai de la fièvre depuis hier et j’ai très mal à la gorge. J’étais chez le médecin ce matin. Il dit que j’ai la grippe. Je dois rester trois jours au lit, boire beaucoup de thé et prendre les comprimés. Tu peux m’envoyer les devoirs, s’il te plaît ? Merci ! Bises, Sami`,
  en: `Hi Lena, unfortunately I can’t come to the German course today. I’m ill: I’ve had a fever since yesterday and my throat really hurts. I was at the doctor’s this morning. He says I have the flu. I’m supposed to stay in bed for three days, drink lots of tea and take the tablets. Can you please send me the homework? Thanks! Love, Sami`,
  q: `
Was hat Sami? | eine Grippe | Zahnschmerzen | einen Unfall
Seit wann hat er Fieber? | seit gestern | seit drei Tagen | seit heute Morgen
Was soll Sami machen? | im Bett bleiben und Tee trinken | zum Kurs gehen | Sport machen
Was möchte Sami von Lena? | die Hausaufgaben | Tabletten | Tee
` },
d: `
Ärztin | Guten Tag, Herr Haddad. Was fehlt Ihnen? | Bonjour, Monsieur Haddad. Qu’est-ce qui ne va pas ? | Hello, Mr Haddad. What’s the matter?
Patient | Mir tut der Rücken sehr weh. | J’ai très mal au dos. | My back hurts a lot.
Ärztin | Seit wann haben Sie die Schmerzen? | Depuis quand avez-vous mal ? | How long have you had the pain?
Patient | Seit einer Woche. Ich arbeite viel am Computer. | Depuis une semaine. Je travaille beaucoup sur l’ordinateur. | For a week. I work a lot at the computer.
Ärztin | Machen Sie jeden Tag Pausen und gehen Sie spazieren. | Faites des pauses tous les jours et allez vous promener. | Take breaks every day and go for walks.
Patient | Brauche ich Tabletten? | J’ai besoin de comprimés ? | Do I need tablets?
Ärztin | Ja, hier ist ein Rezept. Nehmen Sie eine Tablette am Abend. | Oui, voici une ordonnance. Prenez un comprimé le soir. | Yes, here’s a prescription. Take one tablet in the evening.
Patient | Vielen Dank, Frau Doktor. | Merci beaucoup, docteur. | Thank you very much, doctor.
`,
wr: { fr: 'Ton ami(e) est malade. Écris-lui un message : demande comment il/elle va et donne au moins 3 conseils à l’impératif.', en: 'Your friend is ill. Write them a message: ask how they are and give at least 3 pieces of advice in the imperative.', min: 35,
  req: ['question=\\?', 'impératif 1=\\b(Trink|Nimm|Schlaf|Bleib|Geh|Iss|Ruf|Mach|Ruh)\\b', 'impératif 2=(\\b(Trink|Nimm|Schlaf|Bleib|Geh|Iss|Ruf|Mach|Ruh)\\b.*){2}', 'Gute Besserung=Gute Besserung'],
  model: 'Hallo Amira, wie geht es dir heute? Hast du noch Fieber? Bleib im Bett und schlaf viel! Trink viel Tee mit Honig und nimm deine Tabletten. Geh morgen nicht zur Arbeit! Ich bringe dir am Abend eine Suppe. Gute Besserung! Deine Sara' },
pr: { fr: '« ch » après i/e/ä/ö/ü (mich, dich, Bäuche) = souffle léger, comme un chat qui crache doucement. Après a/o/u/au (Bauch, Buch) = « kh » arabe.', en: '“ch” after i/e/ä/ö/ü (mich, Bäuche) = soft hiss. After a/o/u/au (Bauch, Buch) = Arabic “kh” / Scottish “loch”.',
  w: `
Bauch | ventre | stomach
Bäuche | ventres | stomachs
mich | me | me
Rücken | dos | back
Husten | toux | cough
Gute Besserung! | Bon rétablissement ! | Get well soon!
Mir tut der Bauch weh. | J’ai mal au ventre. | My stomach hurts.
Ich fühle mich nicht gut. | Je ne me sens pas bien. | I don’t feel well.
` } },

/* ---------- 6 ---------- */
{ t: 'Kleidung und Wetter', fr: 'Vêtements, temps qu’il fait ; gefallen / passen + datif', en: 'Clothes, weather; gefallen / passen + dative',
sheet: `
# Pronoms au datif | Dative pronouns
T: Nom. | Akk. | Dat.
t: ich | mich | **mir**
t: du | dich | **dir**
t: er | ihn | **ihm**
t: sie | sie | **ihr**
t: wir | uns | **uns**
t: Sie | Sie | **Ihnen**
# Verbes + datif | Verbs + dative
> **gefallen** (plaire), **passen** (aller, taille), **stehen** (aller bien), **gehören** (appartenir), **helfen** (aider) → datif. | **gefallen** (to please), **passen** (to fit), **stehen** (to suit), **gehören** (to belong), **helfen** (to help) → dative.
= Der Pullover **gefällt mir**. | Le pull me plaît. | I like the jumper.
= Die Hose **passt mir** nicht. | Le pantalon ne me va pas (taille). | The trousers don’t fit me.
= Das Kleid **steht dir** gut! | La robe te va bien ! | The dress suits you!
= Kann ich **Ihnen** helfen? | Je peux vous aider ? | Can I help you?
! gefallen : der Rock **gefällt** mir, die Schuhe **gefallen** mir. Le sujet est le vêtement ! | gefallen: der Rock **gefällt** mir, die Schuhe **gefallen** mir. The clothes are the subject!
# welcher ? dieser ! | which? this one!
t: Welch**er** Rock? – Dies**er**. | Welch**e** Jacke? – Dies**e**. | Welch**es** Hemd? – Dies**es**.
# Le temps | The weather
= Wie ist das Wetter? | Quel temps fait-il ? | What’s the weather like?
t: Die Sonne scheint. | Es regnet. | Es schneit. | Es ist windig.
t: Es ist warm. | Es ist kalt. | Es ist bewölkt. | Es sind 25 Grad.
* Les saisons : der Frühling, der Sommer, der Herbst, der Winter → **im** Sommer. | Seasons: der Frühling, der Sommer, der Herbst, der Winter → **im** Sommer.
`,
w: `
die Kleidung | les vêtements | clothes
die Hose (-n) | le pantalon | trousers
das Hemd (-en) | la chemise | shirt
das T-Shirt (-s) | le t-shirt | T-shirt
der Pullover (-) | le pull | jumper
die Jacke (-n) | la veste | jacket
der Mantel (Mäntel) | le manteau | coat
das Kleid (-er) | la robe | dress
der Rock (Röcke) | la jupe | skirt
der Schuh (-e) | la chaussure | shoe
die Mütze (-n) | le bonnet | hat, cap
die Größe (-n) | la taille | size
anprobieren | essayer | to try on
gefallen | plaire | to please (to like)
passen | aller (taille) | to fit
stehen | aller bien | to suit
das Wetter | le temps (météo) | weather
die Sonne | le soleil | sun
der Regen | la pluie | rain
regnen | pleuvoir | to rain
der Schnee | la neige | snow
der Wind | le vent | wind
warm | chaud | warm
kalt | froid | cold
der Sommer | l’été | summer
der Winter | l’hiver | winter
`,
p: `
Kann ich Ihnen helfen? | Je peux vous aider ? | Can I help you?
Ich suche eine Jacke. | Je cherche une veste. | I’m looking for a jacket.
Welche Größe haben Sie? | Quelle taille faites-vous ? | What size are you?
Kann ich die Hose anprobieren? | Je peux essayer le pantalon ? | Can I try on the trousers?
Die Hose passt mir nicht. Sie ist zu klein. | Le pantalon ne me va pas. Il est trop petit. | The trousers don’t fit me. They’re too small.
Der Pullover gefällt mir sehr. | Le pull me plaît beaucoup. | I really like the jumper.
Das Kleid steht dir gut. | La robe te va bien. | The dress suits you.
Haben Sie das auch in Blau? | Vous l’avez aussi en bleu ? | Do you have it in blue too?
Wie ist das Wetter heute? | Quel temps fait-il aujourd’hui ? | What’s the weather like today?
Es regnet und es ist kalt. | Il pleut et il fait froid. | It’s raining and it’s cold.
Morgen scheint die Sonne. | Demain, il y aura du soleil. | Tomorrow the sun will shine.
Nimm eine Jacke mit! | Prends une veste ! | Take a jacket with you!
`,
g: `
Der Rock gefällt ___. (moi) | mir | mich/mir/ich | La jupe me plaît. | I like the skirt.
Die Schuhe ___ mir. | gefallen | gefällt/gefallen/gefallt | Les chaussures me plaisent. | I like the shoes.
Die Jacke ___ mir gut. | gefällt | gefällt/gefallen/gefalle | La veste me plaît bien. | I really like the jacket.
Das Hemd steht ___ gut. (toi) | dir | dich/dir/du | La chemise te va bien. | The shirt suits you.
Kann ich ___ helfen? (vous, poli) | Ihnen | Sie/Ihnen/Ihr | Je peux vous aider ? | Can I help you?
Die Hose passt ___ nicht. (lui) | ihm | ihn/ihm/er | Le pantalon ne lui va pas. | The trousers don’t fit him.
Der Mantel gefällt ___. (elle) | ihr | sie/ihr/ihm | Le manteau lui plaît. | She likes the coat.
___ Jacke nimmst du? | Welche | Welcher/Welche/Welches | Quelle veste prends-tu ? | Which jacket are you taking?
Ich nehme ___ Hemd. | dieses | dieser/diese/dieses | Je prends cette chemise. | I’ll take this shirt.
Heute ___ es. | regnet | regnet/regen/regent | Aujourd’hui, il pleut. | Today it’s raining.
Im Winter ___ es oft. | schneit | schneit/schnee/schneien | En hiver, il neige souvent. | In winter it often snows.
Es ist kalt. ___ einen Mantel mit! (du) | Nimm | Nimm/Nehm/Nimmst | Il fait froid. Prends un manteau ! | It’s cold. Take a coat!
`,
r: { de: `Das Wetter am Wochenende: Am Samstag scheint im Süden die Sonne. Es wird warm, bis zu 24 Grad. Im Norden ist es bewölkt und es gibt am Nachmittag Regen. Am Sonntag wird es überall kühler: Im Norden sind es nur 15 Grad und es ist sehr windig. In den Bergen kann es in der Nacht sogar schneien. Unser Tipp: Nehmen Sie eine Jacke und einen Regenschirm mit!`,
  fr: `La météo du week-end : samedi, le soleil brille dans le sud. Il fera chaud, jusqu’à 24 degrés. Dans le nord, le ciel est nuageux et il pleut l’après-midi. Dimanche, il fera plus frais partout : dans le nord, seulement 15 degrés et beaucoup de vent. En montagne, il peut même neiger la nuit. Notre conseil : prenez une veste et un parapluie !`,
  en: `The weekend weather: on Saturday the sun shines in the south. It gets warm, up to 24 degrees. In the north it’s cloudy and there will be rain in the afternoon. On Sunday it gets cooler everywhere: in the north only 15 degrees and very windy. In the mountains it may even snow at night. Our tip: take a jacket and an umbrella!`,
  q: `
Wo scheint am Samstag die Sonne? | im Süden | im Norden | in den Bergen
Wie ist das Wetter am Samstag im Norden? | bewölkt mit Regen | sonnig und warm | Es schneit.
Wie warm ist es am Sonntag im Norden? | 15 Grad | 24 Grad | 5 Grad
Was soll man mitnehmen? | eine Jacke und einen Regenschirm | eine Mütze | nichts
` },
d: `
Verkäufer | Guten Tag! Kann ich Ihnen helfen? | Bonjour ! Je peux vous aider ? | Hello! Can I help you?
Kundin | Ja, ich suche einen Pullover für den Winter. | Oui, je cherche un pull pour l’hiver. | Yes, I’m looking for a jumper for the winter.
Verkäufer | Welche Größe brauchen Sie? | Quelle taille vous faut-il ? | What size do you need?
Kundin | Größe M. Dieser hier gefällt mir. Haben Sie ihn auch in Grün? | Taille M. Celui-ci me plaît. Vous l’avez aussi en vert ? | Size M. I like this one. Do you have it in green too?
Verkäufer | Ja, hier bitte. Die Kabine ist dort hinten. | Oui, voilà. La cabine est là-bas au fond. | Yes, here you are. The changing room is at the back.
Kundin | Er passt mir sehr gut. Was kostet er? | Il me va très bien. Combien coûte-t-il ? | It fits me very well. How much is it?
Verkäufer | 39 Euro. Er steht Ihnen wirklich gut! | 39 euros. Il vous va vraiment bien ! | 39 euros. It really suits you!
Kundin | Dann nehme ich ihn. | Alors je le prends. | Then I’ll take it.
`,
wr: { fr: 'Écris à un ami qui vient te voir : décris le temps chez toi cette semaine et dis-lui quels vêtements apporter. Parle aussi d’un vêtement que tu as acheté et qui te plaît.', en: 'Write to a friend who is visiting: describe the weather where you are this week and say which clothes to bring. Also mention a piece of clothing you bought and like.', min: 45,
  req: ['météo=Sonne;regnet;kalt;warm;Grad;windig;Wetter', 'impératif=\\b(Nimm|Bring|Pack)\\b', 'gefallen=gefällt;gefallen', 'datif=\\b(mir|dir|ihm|ihr|Ihnen)\\b'],
  model: 'Hallo Jonas! Hier in Tunis ist das Wetter diese Woche sehr schön. Die Sonne scheint und es sind 28 Grad. Am Abend ist es ein bisschen windig. Bring T-Shirts und eine Sonnenbrille mit! Nimm auch einen Pullover für den Abend mit. Ich habe gestern ein Kleid gekauft. Es ist blau und es gefällt mir sehr. Bis Samstag!' },
pr: { fr: '« -ig » final se dit « ich » (windig, sonnig), mais devant une voyelle « ig » (windige). « v » se dit souvent « f » (viel, Pullover = « poulôva »).', en: 'Final “-ig” sounds like “ich” (windig, sonnig). “v” often sounds like “f” (viel), but Pullover = “pull-OH-ver”.',
  w: `
windig | venteux | windy
sonnig | ensoleillé | sunny
Pullover | pull | jumper
gefällt | plaît | pleases
Größe | taille | size
Mantel | manteau | coat
Der Pullover gefällt mir sehr. | Le pull me plaît beaucoup. | I really like the jumper.
Es regnet und es ist kalt. | Il pleut et il fait froid. | It’s raining and cold.
` } },

/* ---------- 7 ---------- */
{ t: 'Reisen und Erinnerungen', fr: 'Voyages ; le Perfekt avec sein ; war / hatte', en: 'Travel; the perfect with sein; war / hatte',
sheet: `
# Perfekt avec sein | Perfect with sein
> Les verbes de **déplacement** (aller, venir, voler…) et de **changement d’état** (se réveiller, devenir…) → **sein**. | Verbs of **movement** (go, come, fly…) and **change of state** (wake up, become…) → **sein**.
T: Infinitif~Infinitive | Perfekt
t: fahren | ich **bin** gefahren
t: gehen | ich **bin** gegangen
t: fliegen | ich **bin** geflogen
t: kommen | ich **bin** gekommen
t: laufen | ich **bin** gelaufen
t: aufstehen | ich **bin** aufgestanden
t: bleiben | ich **bin** geblieben (!)
t: passieren | es **ist** passiert
! **bleiben** et **sein** aussi : ich bin geblieben, ich bin gewesen. | **bleiben** and **sein** too: ich bin geblieben, ich bin gewesen.
= Wir **sind** nach Wien **geflogen**. | Nous sommes allés à Vienne en avion. | We flew to Vienna.
= Am Abend **sind** wir ins Kino **gegangen**. | Le soir, nous sommes allés au cinéma. | In the evening we went to the cinema.
# war et hatte | war and hatte
> Pour **sein** et **haben**, on utilise surtout le **Präteritum** : plus court ! | For **sein** and **haben** people mostly use the **Präteritum**: shorter!
T: ~ | sein | haben
t: ich | war | hatte
t: du | warst | hattest
t: er / sie | war | hatte
t: wir / Sie | waren | hatten
t: ihr | wart | hattet
= Der Urlaub **war** toll! Wir **hatten** viel Glück mit dem Wetter. | Les vacances étaient super ! Nous avons eu beaucoup de chance avec le temps. | The holiday was great! We were very lucky with the weather.
# Où ? Vers où ? | Where to?
t: **nach** + ville / pays : nach Berlin, nach Spanien | **in** + pays avec article : in die Schweiz, in die Türkei | **zu** + personne : zu meiner Tante
t: **an** + mer / lac : an den Strand, ans Meer | **in** + montagne : in die Berge | **nach Hause** (à la maison~home)
`,
w: `
die Reise (-n) | le voyage | trip, journey
reisen | voyager | to travel
der Urlaub (-e) | les vacances (congés) | holiday
die Ferien (Pl.) | les vacances (scolaires) | holidays
fliegen | voler, prendre l’avion | to fly
das Flugzeug (-e) | l’avion | plane
der Flughafen (Flughäfen) | l’aéroport | airport
das Hotel (-s) | l’hôtel | hotel
das Meer (-e) | la mer | sea
der Strand (Strände) | la plage | beach
die Berge (Pl.) | la montagne | mountains
der Koffer (-) | la valise | suitcase
besuchen | rendre visite, visiter | to visit
bleiben | rester | to stay
ankommen | arriver | to arrive
zurückkommen | revenir | to come back
laufen | courir ; marcher | to run; to walk
passieren | se passer, arriver | to happen
das Foto (-s) | la photo | photo
der Pass (Pässe) | le passeport | passport
toll | super | great
schrecklich | horrible | terrible
letzte Woche | la semaine dernière | last week
letztes Jahr | l’année dernière | last year
`,
p: `
Wo warst du im Urlaub? | Où étais-tu en vacances ? | Where were you on holiday?
Ich war zwei Wochen in Italien. | J’étais deux semaines en Italie. | I was in Italy for two weeks.
Wir sind mit dem Zug gefahren. | Nous sommes partis en train. | We went by train.
Wir sind nach Istanbul geflogen. | Nous sommes allés à Istanbul en avion. | We flew to Istanbul.
Wann seid ihr angekommen? | Quand êtes-vous arrivés ? | When did you arrive?
Wir haben in einem kleinen Hotel gewohnt. | Nous avons logé dans un petit hôtel. | We stayed in a small hotel.
Das Wetter war fantastisch. | Le temps était fantastique. | The weather was fantastic.
Am Abend sind wir am Strand spazieren gegangen. | Le soir, nous nous sommes promenés sur la plage. | In the evening we went for a walk on the beach.
Wie war die Reise? | Comment s’est passé le voyage ? | How was the trip?
Ich hatte keine Zeit. | Je n’avais pas le temps. | I didn’t have time.
Was ist passiert? | Qu’est-ce qui s’est passé ? | What happened?
Ich bin gestern spät nach Hause gekommen. | Je suis rentré(e) tard hier. | I came home late yesterday.
`,
g: `
Wir ___ nach Berlin gefahren. | sind | haben/sind/waren | Nous sommes allés à Berlin. | We went to Berlin.
Ich ___ viele Fotos gemacht. | habe | habe/bin/war | J’ai pris beaucoup de photos. | I took lots of photos.
Er ist nach Hause ___. | gegangen | gegeht/gegangen/gegangt | Il est rentré à la maison. | He went home.
Sie sind nach Madrid ___. | geflogen | gefliegt/geflogen/gefliegen | Ils sont allés à Madrid en avion. | They flew to Madrid.
Wann ___ du aufgestanden? | bist | hast/bist/warst | Quand t’es-tu levé ? | When did you get up?
Wir sind drei Tage in Wien ___. | geblieben | gebleibt/geblieben/gebleiben | Nous sommes restés trois jours à Vienne. | We stayed in Vienna for three days.
Wo ___ du gestern? | warst | war/warst/wart | Où étais-tu hier ? | Where were you yesterday?
Wir ___ viel Spaß. | hatten | hatten/hattet/hatte | Nous nous sommes bien amusés. | We had a lot of fun.
Ihr ___ in den Ferien in Spanien. | wart | waren/wart/warst | Vous étiez en Espagne pendant les vacances. | You were in Spain during the holidays.
Ich fliege ___ Tunesien. | nach | nach/in/zu | Je vais en Tunisie en avion. | I’m flying to Tunisia.
Wir fahren ___ die Schweiz. | in | nach/in/zu | Nous allons en Suisse. | We are going to Switzerland.
Ich fahre ___ meiner Oma. | zu | nach/zu/in | Je vais chez ma grand-mère. | I’m going to my grandma’s.
`,
r: { de: `Liebe Amira, ich bin wieder zu Hause! Der Urlaub in Österreich war wunderbar. Wir sind mit dem Zug nach Salzburg gefahren und sind dort vier Tage geblieben. Wir haben in einer kleinen Pension gewohnt. Am ersten Tag haben wir die Altstadt besichtigt und viel Kuchen gegessen. Dann sind wir in die Berge gefahren. Das Wetter war leider nicht so gut, es hat oft geregnet. Aber wir hatten viel Spaß! Viele Grüße\nLena`,
  fr: `Chère Amira, je suis de retour à la maison ! Les vacances en Autriche étaient merveilleuses. Nous sommes allés à Salzbourg en train et nous y sommes restés quatre jours. Nous avons logé dans une petite pension. Le premier jour, nous avons visité la vieille ville et mangé beaucoup de gâteaux. Ensuite, nous sommes allés à la montagne. Le temps n’était malheureusement pas terrible, il a souvent plu. Mais nous nous sommes bien amusés ! Bises, Lena`,
  en: `Dear Amira, I’m back home! The holiday in Austria was wonderful. We went to Salzburg by train and stayed there for four days. We stayed in a small guesthouse. On the first day we visited the old town and ate lots of cake. Then we went to the mountains. Unfortunately the weather wasn’t so good, it often rained. But we had a lot of fun! Best wishes, Lena`,
  q: `
Wie ist Lena nach Salzburg gefahren? | mit dem Zug | mit dem Auto | mit dem Flugzeug
Wie lange ist sie in Salzburg geblieben? | vier Tage | zwei Wochen | einen Tag
Was hat sie am ersten Tag gemacht? | die Altstadt besichtigt | Ski gefahren | im Hotel geschlafen
Wie war das Wetter? | Es hat oft geregnet. | Es war sehr heiß. | Es hat geschneit.
` },
d: `
Nina | Hallo Karim! Du bist so braun! Wo warst du? | Salut Karim ! Tu es tout bronzé ! Où étais-tu ? | Hi Karim! You’re so tanned! Where were you?
Karim | Ich war zwei Wochen in Tunesien, bei meiner Familie. | J’étais deux semaines en Tunisie, dans ma famille. | I was in Tunisia for two weeks, with my family.
Nina | Schön! Bist du geflogen? | Super ! Tu as pris l’avion ? | Nice! Did you fly?
Karim | Ja, von Frankfurt nach Tunis. Der Flug war nur zweieinhalb Stunden. | Oui, de Francfort à Tunis. Le vol n’a duré que deux heures et demie. | Yes, from Frankfurt to Tunis. The flight was only two and a half hours.
Nina | Und was hast du gemacht? | Et qu’est-ce que tu as fait ? | And what did you do?
Karim | Ich bin oft ans Meer gegangen und habe viel gegessen! | Je suis souvent allé à la mer et j’ai beaucoup mangé ! | I often went to the sea and ate a lot!
Nina | Das klingt toll. Ich hatte leider keinen Urlaub. | Ça a l’air super. Moi, je n’ai malheureusement pas eu de vacances. | That sounds great. Unfortunately I didn’t have a holiday.
`,
wr: { fr: 'Raconte un voyage (vrai ou inventé) : où, comment, combien de temps, ce que tu as fait, comment c’était.', en: 'Tell about a trip (real or invented): where, how, how long, what you did, what it was like.', min: 50,
  req: ['bin / sind + participe=\\b(bin|sind|ist)\\b .{0,40}\\bge\\w+(en|t)\\b', 'habe / haben + participe=\\b(habe|haben|hat)\\b .{0,40}\\bge\\w+(en|t)\\b', 'war / hatte=\\bwar\\b;\\bwaren\\b;\\bhatte', 'transport=mit dem;mit der;geflogen;gefahren'],
  model: 'Letztes Jahr war ich eine Woche in Berlin. Ich bin mit dem Flugzeug von Tunis nach Berlin geflogen. Ich habe bei meiner Freundin Nour gewohnt. Wir haben viele Museen besucht und ich habe viele Fotos gemacht. Am Wochenende sind wir an einen See gefahren. Das Wetter war schön, aber das Essen war teuer. Ich hatte eine tolle Zeit!' },
pr: { fr: 'Accentue la syllabe du radical, pas « ge- » : ge-FLO-gen, ge-FAH-ren, ge-GAN-gen. Le « r » après une voyelle longue se vocalise : war (« vaa »), Meer (« méa »).', en: 'Stress the stem, not “ge-”: ge-FLO-gen, ge-FAH-ren, ge-GAN-gen. An “r” after a long vowel softens: war (“vaa”), Meer (“mayuh”).',
  w: `
geflogen | volé | flown
gefahren | allé (véhicule) | driven, gone
gegangen | allé (à pied) | gone
Flughafen | aéroport | airport
Urlaub | vacances | holiday
Meer | mer | sea
Wir sind nach Wien geflogen. | Nous sommes allés à Vienne en avion. | We flew to Vienna.
Der Urlaub war wunderbar. | Les vacances étaient merveilleuses. | The holiday was wonderful.
` } },

/* ---------- 8 ---------- */
{ t: 'Feste und Einladungen', fr: 'Dates, fêtes, invitations ; les nombres ordinaux', en: 'Dates, celebrations, invitations; ordinal numbers',
sheet: `
# Les nombres ordinaux | Ordinal numbers
> 1 à 19 : nombre + **-te** · à partir de 20 : nombre + **-ste**. | 1 to 19: number + **-te** · from 20: number + **-ste**.
t: 1. der **erste** | 2. der zweite | 3. der **dritte** | 4. der vierte
t: 7. der **siebte** | 8. der **achte** | 19. der neunzehnte | 20. der zwanzig**ste**
! Irréguliers : erste, dritte, siebte, achte. | Irregular: erste, dritte, siebte, achte.
# La date | The date
= Heute ist der dritte Mai. | Aujourd’hui, c’est le trois mai. | Today is the third of May.
= Ich habe **am** zwölften Juni Geburtstag. | Mon anniversaire est le douze juin. | My birthday is on the twelfth of June.
! « am » + ordinal en **-ten** : am erst**en**, am dritt**en**, am zwanzigst**en**. | “am” + ordinal in **-ten**: am erst**en**, am dritt**en**, am zwanzigst**en**.
* Écrit : 12.06. = am zwölften sechsten (ou : am zwölften Juni). | Written: 12.06. = am zwölften sechsten (or: am zwölften Juni).
t: Januar | Februar | März | April | Mai | Juni
t: Juli | August | September | Oktober | November | Dezember
* **im** + mois : im Mai · **am** + date : am 1. Mai · **von … bis** : vom 3. bis zum 7. März. | **im** + month: im Mai · **am** + date: am 1. Mai · **von … bis**: vom 3. bis zum 7. März.
# Inviter et répondre | Inviting and replying
= Ich lade dich zu meiner Party ein. | Je t’invite à ma fête. | I’m inviting you to my party.
= Ich komme gern! | Je viens avec plaisir ! | I’d love to come!
= Leider kann ich nicht kommen, denn ich muss arbeiten. | Malheureusement, je ne peux pas venir, car je dois travailler. | Unfortunately I can’t come because I have to work.
* **denn** (car) : ne change pas l’ordre des mots ! | **denn** (because): doesn’t change the word order!
# Vœux | Wishes
t: Alles Gute zum Geburtstag! | Herzlichen Glückwunsch! | Frohe Weihnachten!
t: Frohes neues Jahr! | Schöne Feiertage! | Eid Mubarak! / Frohes Fest!
`,
w: `
das Fest (-e) | la fête | celebration, festival
die Party (-s) | la fête (soirée) | party
der Geburtstag (-e) | l’anniversaire | birthday
die Hochzeit (-en) | le mariage | wedding
die Einladung (-en) | l’invitation | invitation
einladen | inviter | to invite
feiern | fêter | to celebrate
das Geschenk (-e) | le cadeau | present
schenken | offrir | to give (as a present)
der Gast (Gäste) | l’invité | guest
die Torte (-n) | le gâteau (à la crème) | gateau, cake
der Monat (-e) | le mois | month
das Datum (Daten) | la date | date
der Januar | janvier | January
der Mai | mai | May
der Oktober | octobre | October
erste | premier | first
dritte | troisième | third
siebte | septième | seventh
der Feiertag (-e) | le jour férié | public holiday
Weihnachten | Noël | Christmas
der Ramadan | le ramadan | Ramadan
gratulieren | féliciter | to congratulate
denn | car | because
mitbringen | apporter | to bring along
`,
p: `
Wann hast du Geburtstag? | Quand est ton anniversaire ? | When is your birthday?
Ich habe am vierten April Geburtstag. | Mon anniversaire est le quatre avril. | My birthday is on the fourth of April.
Der Wievielte ist heute? | On est le combien aujourd’hui ? | What’s the date today?
Heute ist der erste Oktober. | Aujourd’hui, c’est le premier octobre. | Today is the first of October.
Ich lade dich zu meinem Geburtstag ein. | Je t’invite à mon anniversaire. | I’m inviting you to my birthday.
Die Party beginnt um acht Uhr. | La fête commence à huit heures. | The party starts at eight.
Ich komme gern. Soll ich etwas mitbringen? | Je viens avec plaisir. Je dois apporter quelque chose ? | I’d love to come. Should I bring something?
Leider kann ich nicht kommen. | Malheureusement, je ne peux pas venir. | Unfortunately I can’t come.
Alles Gute zum Geburtstag! | Joyeux anniversaire ! | Happy birthday!
Herzlichen Glückwunsch! | Félicitations ! | Congratulations!
Vielen Dank für die Einladung! | Merci beaucoup pour l’invitation ! | Thank you very much for the invitation!
Wir feiern bei mir zu Hause. | On fait la fête chez moi. | We’re celebrating at my place.
`,
g: `
Heute ist der ___ Mai. (1.) | erste | erste/einste/ersten | Aujourd’hui, c’est le premier mai. | Today is the first of May.
Mein Geburtstag ist am ___ März. (3.) | dritten | dritten/dreiten/dritte | Mon anniversaire est le trois mars. | My birthday is on the third of March.
Wir feiern am ___ Juli. (7.) | siebten | siebten/siebenten/siebte | Nous faisons la fête le sept juillet. | We celebrate on the seventh of July.
Er hat am ___ Mai Geburtstag. (20.) | zwanzigsten | zwanzigten/zwanzigsten/zwanzigste | Son anniversaire est le vingt mai. | His birthday is on the twentieth of May.
Die Prüfung ist ___ Juni. | im | im/am/um | L’examen est en juin. | The exam is in June.
Die Party ist ___ Samstag. | am | im/am/um | La fête est samedi. | The party is on Saturday.
Ich lade dich zu meiner Party ___. | ein | ein/an/mit | Je t’invite à ma fête. | I’m inviting you to my party.
Ich kann nicht kommen, ___ ich muss arbeiten. | denn | denn/weil/dann | Je ne peux pas venir, car je dois travailler. | I can’t come because I have to work.
Was schenkst du ___ Mutter? | deiner | deine/deiner/dein | Qu’offres-tu à ta mère ? | What are you giving your mother?
Wir ___ am Wochenende Hochzeit. | feiern | feiern/feiert/feier | Nous fêtons un mariage ce week-end. | We’re celebrating a wedding at the weekend.
Kannst du einen Kuchen ___? | mitbringen | mitbringen/bringen mit/mitbringst | Tu peux apporter un gâteau ? | Can you bring a cake?
Alles Gute ___ Geburtstag! | zum | zum/zur/am | Joyeux anniversaire ! | Happy birthday!
`,
r: { de: `Einladung! Liebe Freunde, am Samstag, den 14. Juni, werde ich dreißig! Das möchte ich mit euch feiern. Die Party beginnt um 19 Uhr bei mir zu Hause, in der Lindenstraße 5. Es gibt Essen aus Tunesien und Musik. Bitte bringt keine Geschenke mit, aber vielleicht einen Salat oder Getränke. Bitte antwortet bis zum 10. Juni. Ich freue mich auf euch! Eure Amira`,
  fr: `Invitation ! Chers amis, samedi 14 juin, j’aurai trente ans ! Je voudrais fêter ça avec vous. La fête commence à 19 h chez moi, Lindenstraße 5. Il y aura de la cuisine tunisienne et de la musique. N’apportez pas de cadeaux, s’il vous plaît, mais peut-être une salade ou des boissons. Répondez avant le 10 juin. J’ai hâte de vous voir ! Votre Amira`,
  en: `Invitation! Dear friends, on Saturday 14 June I’m turning thirty! I’d like to celebrate with you. The party starts at 7 pm at my place, Lindenstraße 5. There will be Tunisian food and music. Please don’t bring presents, but maybe a salad or drinks. Please reply by 10 June. I’m looking forward to seeing you! Love, Amira`,
  q: `
Warum feiert Amira? | Sie hat Geburtstag. | Sie heiratet. | Sie hat einen neuen Job.
Wann beginnt die Party? | um 19 Uhr | um 14 Uhr | um 10 Uhr
Was sollen die Gäste mitbringen? | Salat oder Getränke | Geschenke | Musik
Bis wann sollen die Freunde antworten? | bis zum 10. Juni | bis zum 14. Juni | bis Samstag
` },
d: `
Amira | Hallo Jonas! Am Samstag habe ich Geburtstag. Ich lade dich ein! | Salut Jonas ! Samedi, c’est mon anniversaire. Je t’invite ! | Hi Jonas! It’s my birthday on Saturday. I’m inviting you!
Jonas | Oh, danke! Wann und wo feierst du? | Oh, merci ! Quand et où fais-tu la fête ? | Oh, thanks! When and where are you celebrating?
Amira | Bei mir zu Hause, um sieben Uhr. | Chez moi, à sept heures. | At my place, at seven.
Jonas | Ich komme gern! Soll ich etwas mitbringen? | Je viens avec plaisir ! Je dois apporter quelque chose ? | I’d love to come! Should I bring anything?
Amira | Vielleicht einen Salat? | Peut-être une salade ? | Maybe a salad?
Jonas | Klar, das mache ich. Und wie alt wirst du? | Bien sûr, je m’en occupe. Et tu vas avoir quel âge ? | Sure, I’ll do that. And how old will you be?
Amira | Dreißig! | Trente ans ! | Thirty!
`,
wr: { fr: 'Écris une invitation pour ta fête d’anniversaire : date, heure, lieu, programme, ce qu’il faut apporter, avant quand répondre.', en: 'Write an invitation to your birthday party: date, time, place, programme, what to bring, when to reply by.', min: 40,
  req: ['date=am \\w+(ten|sten)\\b;den \\w+(ten|sten)\\b', 'heure=Uhr', 'einladen=lade .*ein;Einladung', 'mitbringen=mitbringen;bringt .*mit;bring .*mit', 'antworten=antwort'],
  model: 'Liebe Freunde, ich lade euch herzlich zu meiner Geburtstagsparty ein! Wir feiern am Freitag, den zwölften Juli, um acht Uhr bei mir zu Hause. Es gibt Musik, Kuchen und Essen aus Tunesien. Bitte bringt Getränke oder einen Salat mit. Antwortet bitte bis zum fünften Juli. Ich freue mich auf euch! Eure Sara' },
pr: { fr: 'Les mots longs : découpe-les et accentue le premier élément : GE-burts-tag, WEIH-nach-ten, FEI-er-tag. « ei » = « aï », « ie » = « i ».', en: 'Long words: split them and stress the first part: GE-burts-tag, WEIH-nach-ten, FEI-er-tag. “ei” = “eye”, “ie” = “ee”.',
  w: `
Geburtstag | anniversaire | birthday
Weihnachten | Noël | Christmas
Feiertag | jour férié | holiday
Einladung | invitation | invitation
Glückwunsch | félicitation | congratulations
dreißigsten | trentième | thirtieth
Alles Gute zum Geburtstag! | Joyeux anniversaire ! | Happy birthday!
Ich habe am vierten April Geburtstag. | Mon anniversaire est le 4 avril. | My birthday is on 4 April.
` } },
],

exam: {
  texts: [
    { de: `Hallo Sara,
vielen Dank für deine Karte aus Berlin! Ich bin jetzt seit drei Monaten in München. Ich arbeite als Krankenpflegerin im Krankenhaus. Die Arbeit ist anstrengend, denn ich muss oft in der Nacht arbeiten. Aber meine Kolleginnen sind sehr nett. Letztes Wochenende sind wir zusammen in die Berge gefahren. Wir sind sechs Stunden gelaufen! Am Abend hatte ich Schmerzen in den Beinen. Im August habe ich zwei Wochen Urlaub. Willst du mich besuchen? Wir können zusammen ins Museum gehen und am Abend tanzen.
Liebe Grüße
Nour`,
      q: `
Wo arbeitet Nour? | im Krankenhaus | im Museum | in einem Hotel
Warum ist die Arbeit anstrengend? | Sie muss oft nachts arbeiten. | Die Kolleginnen sind nicht nett. | Sie verdient wenig.
Was hat Nour letztes Wochenende gemacht? | Sie ist in die Berge gefahren. | Sie hat getanzt. | Sie war im Museum.
Was ist nach der Wanderung passiert? | Sie hatte Schmerzen in den Beinen. | Sie war krank. | Sie hat Sara besucht.
Wann hat Nour Urlaub? | im August | im März | jetzt
` },
    { de: `Praxis Dr. med. Anna Lorenz – Allgemeinmedizin
Sprechzeiten: Montag, Dienstag, Donnerstag 8–12 Uhr und 15–18 Uhr · Mittwoch und Freitag 8–13 Uhr
Termine bitte nur telefonisch: 0511 72 40 33. Ohne Termin müssen Sie lange warten.
Bitte bringen Sie immer Ihre Versicherungskarte mit.
Vom 22. Juli bis zum 9. August ist die Praxis geschlossen. In dieser Zeit gehen Sie bitte zu Dr. Weber, Marktplatz 3.
Haben Sie in der Nacht oder am Wochenende Probleme, rufen Sie bitte die 116 117 an.`,
      q: `
Wann ist die Praxis am Mittwochnachmittag geöffnet? | gar nicht | von 15 bis 18 Uhr | bis 12 Uhr
Wie bekommt man einen Termin? | per Telefon | per E-Mail | direkt in der Praxis
Was muss man immer mitbringen? | die Versicherungskarte | ein Rezept | Geld
Was passiert vom 22. Juli bis zum 9. August? | Die Praxis ist zu. | Dr. Weber ist im Urlaub. | Es gibt keine Termine am Freitag.
Wen ruft man am Sonntag an? | die 116 117 | Dr. Lorenz | Dr. Weber
` },
  ],
  write: { fr: 'Réponds à Nour : remercie-la, raconte ce que tu as fait le week-end dernier (au passé), dis si tu peux venir en août et propose quelque chose à faire ensemble.', en: 'Reply to Nour: thank her, tell what you did last weekend (past tense), say whether you can come in August and suggest something to do together.', min: 60,
    req: ['Liebe Nour=Liebe Nour', 'merci=Danke;danke', 'passé avec sein=\\b(bin|sind)\\b .{0,40}\\bge\\w+en\\b', 'passé avec haben=\\b(habe|haben)\\b .{0,40}\\bge\\w+(t|en)\\b', 'août=August', 'proposition=können wir;Wollen wir;Lass uns;Hast du Lust', 'salutation=Grüße'],
    model: 'Liebe Nour, danke für deine E-Mail! Schön, dass dir die Arbeit gefällt. Letztes Wochenende bin ich mit meiner Schwester nach Sousse gefahren. Wir sind am Strand spazieren gegangen und haben Fisch gegessen. Am Sonntag habe ich für meine Prüfung gelernt. Im August komme ich gern zu dir nach München! Ich habe vom zehnten bis zum zwanzigsten August Urlaub. Können wir zusammen in die Berge fahren? Ich laufe sehr gern. Liebe Grüße\nSara' },
  speak: `
Was haben Sie gestern gemacht? | habe;bin | Gestern habe ich gearbeitet und Deutsch gelernt. | Qu’avez-vous fait hier ? | What did you do yesterday?
Was sind Sie von Beruf? | bin;arbeite;studiere | Ich bin Ingenieurin. | Quel est votre métier ? | What do you do for a living?
Wie kommen Sie zur Arbeit? | mit;zu Fuß;fahre | Ich fahre mit dem Bus zur Arbeit. | Comment allez-vous au travail ? | How do you get to work?
Wann haben Sie Geburtstag? | am;Geburtstag | Ich habe am vierten April Geburtstag. | Quand est votre anniversaire ? | When is your birthday?
Wo waren Sie im letzten Urlaub? | war;bin | Ich war in Italien. | Où étiez-vous pendant vos dernières vacances ? | Where were you on your last holiday?
Wie ist das Wetter heute? | Sonne;regnet;kalt;warm;Wetter;Grad;scheint | Heute scheint die Sonne und es ist warm. | Quel temps fait-il aujourd’hui ? | What’s the weather like today?
Was kaufen Sie im Supermarkt? | kaufe;brauche | Ich kaufe Brot, Milch und Obst. | Qu’achetez-vous au supermarché ? | What do you buy at the supermarket?
Was müssen Sie morgen machen? | muss | Morgen muss ich früh aufstehen und arbeiten. | Que devez-vous faire demain ? | What do you have to do tomorrow?
Was tun Sie, wenn Sie krank sind? | bleibe;gehe;trinke;nehme;schlafe | Ich bleibe im Bett und trinke viel Tee. | Que faites-vous quand vous êtes malade ? | What do you do when you are ill?
`,
},
});
