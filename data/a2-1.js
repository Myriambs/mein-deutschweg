DW.level({
id: 'a2-1', code: 'A2.1', weeks: '5–6',
title: { fr: 'Raconter et expliquer', en: 'Telling and explaining' },
goal: { fr: 'Raconter ton enfance, décrire où sont les choses, donner des raisons, parler de tes sentiments, comparer, commander au restaurant et demander poliment.', en: 'Tell about your childhood, say where things are, give reasons, talk about feelings, compare, order in a restaurant and ask politely.' },
units: [
/* ---------- 1 ---------- */
{ t: 'Als ich klein war', fr: 'L’enfance ; le prétérit des verbes de modalité', en: 'Childhood; past tense of modal verbs',
sheet: `
# Modaux au passé | Modals in the past
> Pour les verbes de modalité, on utilise le **Präteritum** (pas le Perfekt). Pas de tréma au passé ! | For modal verbs, use the **Präteritum** (not the Perfekt). No umlaut in the past!
T: ~ | können | müssen | wollen | dürfen | sollen
t: ich | konn**te** | muss**te** | woll**te** | durf**te** | soll**te**
t: du | konn**test** | muss**test** | woll**test** | durf**test** | soll**test**
t: er / sie | konn**te** | muss**te** | woll**te** | durf**te** | soll**te**
t: wir / Sie | konn**ten** | muss**ten** | woll**ten** | durf**ten** | soll**ten**
t: ihr | konn**tet** | muss**tet** | woll**tet** | durf**tet** | soll**tet**
= Als Kind **musste** ich früh ins Bett gehen. | Enfant, je devais aller au lit tôt. | As a child I had to go to bed early.
= Ich **durfte** nicht allein in die Stadt fahren. | Je n’avais pas le droit d’aller seul(e) en ville. | I wasn’t allowed to go into town alone.
= Mit fünf Jahren **konnte** ich schon lesen. | À cinq ans, je savais déjà lire. | At five I could already read.
! können → konnte, müssen → musste, dürfen → durfte : **le tréma disparaît**. | können → konnte, müssen → musste, dürfen → durfte: **the umlaut disappears**.
# Rappel : le passé à l’oral | Reminder: the spoken past
* **sein, haben, modaux** → Präteritum : war, hatte, konnte. | **sein, haben, modals** → Präteritum: war, hatte, konnte.
* **tous les autres verbes** → Perfekt : ich habe gespielt, ich bin gelaufen. | **all other verbs** → Perfekt: ich habe gespielt, ich bin gelaufen.
= Als Kind **war** ich sehr schüchtern. Ich **habe** viel **gelesen**. | Enfant, j’étais très timide. J’ai beaucoup lu. | As a child I was very shy. I read a lot.
# Exprimer l’âge au passé | Age in the past
t: als Kind | mit zehn Jahren | früher | damals
t: in meiner Kindheit | in der Schule | als Jugendlicher | als ich klein war
`,
w: `
die Kindheit | l’enfance | childhood
das Kind (-er) | l’enfant | child
der/die Jugendliche (-n) | l’adolescent(e) | teenager
früher | autrefois, avant | in the past, before
damals | à l’époque | back then
die Schule (-n) | l’école | school
der Lehrer (-) | le professeur | teacher
die Hausaufgabe (-n) | le devoir | homework
das Spielzeug (-e) | le jouet | toy
die Puppe (-n) | la poupée | doll
spielen | jouer | to play
streiten | se disputer | to argue
schüchtern | timide | shy
frech | insolent, effronté | cheeky
brav | sage | well-behaved
streng | sévère | strict
allein | seul | alone
erlauben | permettre | to allow
verbieten | interdire | to forbid
die Erinnerung (-en) | le souvenir | memory
sich erinnern an | se souvenir de | to remember
das Lieblingsessen | le plat préféré | favourite food
der Nachbar (-n) | le voisin | neighbour
aufwachsen | grandir | to grow up
die Ferien (Pl.) | les vacances scolaires | school holidays
`,
p: `
Als Kind war ich sehr schüchtern. | Enfant, j’étais très timide. | As a child I was very shy.
Ich bin in einem kleinen Dorf aufgewachsen. | J’ai grandi dans un petit village. | I grew up in a small village.
Ich musste jeden Tag Hausaufgaben machen. | Je devais faire mes devoirs tous les jours. | I had to do homework every day.
Am Wochenende durfte ich lange aufbleiben. | Le week-end, j’avais le droit de veiller tard. | At the weekend I was allowed to stay up late.
Ich wollte immer Pilot werden. | Je voulais toujours devenir pilote. | I always wanted to become a pilot.
Mit sechs Jahren konnte ich schon schwimmen. | À six ans, je savais déjà nager. | At six I could already swim.
Meine Eltern waren sehr streng. | Mes parents étaient très sévères. | My parents were very strict.
Was war dein Lieblingsspielzeug? | Quel était ton jouet préféré ? | What was your favourite toy?
Ich habe oft mit meinem Bruder gestritten. | Je me suis souvent disputé(e) avec mon frère. | I often argued with my brother.
Früher hatten wir keinen Fernseher. | Autrefois, nous n’avions pas de télé. | In the past we didn’t have a TV.
Ich erinnere mich gut an meine Lehrerin. | Je me souviens bien de ma maîtresse. | I remember my teacher well.
Damals war alles anders. | À l’époque, tout était différent. | Back then everything was different.
`,
g: `
Als Kind ___ ich viel lesen. (wollen) | wollte | wollte/willte/wolltet | Enfant, je voulais beaucoup lire. | As a child I wanted to read a lot.
Ich ___ früh ins Bett gehen. (müssen) | musste | müsste/musste/mustte | Je devais aller au lit tôt. | I had to go to bed early.
Wir ___ nicht fernsehen. (dürfen) | durften | dürften/durften/durftet | Nous n’avions pas le droit de regarder la télé. | We weren’t allowed to watch TV.
___ du als Kind schwimmen? (können) | Konntest | Konntest/Könntest/Kanntest | Tu savais nager enfant ? | Could you swim as a child?
Er ___ nicht kommen, er war krank. (können) | konnte | konnte/könnte/kann | Il ne pouvait pas venir, il était malade. | He couldn’t come, he was ill.
Ihr ___ zu Hause helfen. (sollen) | solltet | solltet/sollten/sollst | Vous deviez aider à la maison. | You were supposed to help at home.
Als Kind ___ ich sehr frech. | war | war/habe/bin | Enfant, j’étais très insolent(e). | As a child I was very cheeky.
Früher ___ wir einen Hund. | hatten | hatten/hattet/haben gehabt | Autrefois, nous avions un chien. | We used to have a dog.
Ich ___ viel mit meiner Schwester gespielt. | habe | habe/bin/hatte | J’ai beaucoup joué avec ma sœur. | I played a lot with my sister.
Ich bin in Sousse ___. | aufgewachsen | aufgewachsen/geaufwachst/aufwachsen | J’ai grandi à Sousse. | I grew up in Sousse.
Meine Mutter hat mir das nicht ___. | erlaubt | erlaubt/geerlaubt/erlaubte | Ma mère ne me l’a pas permis. | My mother didn’t allow me that.
Ich erinnere mich ___ meinen ersten Schultag. | an | an/von/über | Je me souviens de mon premier jour d’école. | I remember my first day at school.
`,
r: { de: `Meine Kindheit in Kairouan: Ich bin in einer großen Familie aufgewachsen. Wir waren fünf Kinder und hatten nicht viel Geld, aber wir waren glücklich. Mein Vater war Lehrer und sehr streng. Wir mussten jeden Tag zuerst die Hausaufgaben machen, dann durften wir draußen spielen. Einen Fernseher hatten wir nicht, deshalb haben wir viel gelesen. Am liebsten war ich bei meiner Oma. Bei ihr durfte ich alles! Sie hat die besten Makroud der Welt gebacken.`,
  fr: `Mon enfance à Kairouan : j’ai grandi dans une grande famille. Nous étions cinq enfants et nous n’avions pas beaucoup d’argent, mais nous étions heureux. Mon père était enseignant et très sévère. Nous devions d’abord faire nos devoirs tous les jours, ensuite nous avions le droit de jouer dehors. Nous n’avions pas de télévision, c’est pourquoi nous lisions beaucoup. C’est chez ma grand-mère que je préférais être. Chez elle, j’avais le droit de tout faire ! Elle faisait les meilleurs makrouds du monde.`,
  en: `My childhood in Kairouan: I grew up in a big family. We were five children and didn’t have much money, but we were happy. My father was a teacher and very strict. Every day we had to do our homework first, then we were allowed to play outside. We didn’t have a TV, so we read a lot. My favourite place was my grandma’s. At her house I was allowed to do everything! She baked the best makroud in the world.`,
  q: `
Wie viele Kinder waren in der Familie? | fünf | drei | zwei
Was mussten die Kinder zuerst machen? | die Hausaufgaben | im Haus helfen | lesen
Warum haben sie viel gelesen? | Sie hatten keinen Fernseher. | Der Vater war Lehrer. | Sie durften nicht spielen.
Wie war es bei der Oma? | Man durfte alles. | Es war sehr streng. | Es gab keinen Kuchen.
` },
d: `
Lena | Was wolltest du als Kind werden? | Qu’est-ce que tu voulais devenir enfant ? | What did you want to be as a child?
Karim | Ich wollte immer Fußballspieler werden! Und du? | Je voulais toujours devenir footballeur ! Et toi ? | I always wanted to be a footballer! And you?
Lena | Ich wollte Tierärztin werden. Wir hatten drei Katzen. | Je voulais devenir vétérinaire. Nous avions trois chats. | I wanted to be a vet. We had three cats.
Karim | Durftest du als Kind lange aufbleiben? | Tu avais le droit de veiller tard quand tu étais enfant ? | Were you allowed to stay up late as a child?
Lena | Nein, ich musste immer um acht Uhr ins Bett. Meine Eltern waren streng. | Non, je devais toujours aller au lit à huit heures. Mes parents étaient sévères. | No, I always had to go to bed at eight. My parents were strict.
Karim | Bei uns war das anders. Im Sommer haben wir bis Mitternacht draußen gespielt! | Chez nous, c’était différent. L’été, on jouait dehors jusqu’à minuit ! | It was different for us. In summer we played outside until midnight!
`,
wr: { fr: 'Raconte ton enfance : où tu as grandi, comment tu étais, ce que tu devais faire, ce que tu avais (ou n’avais pas) le droit de faire, un beau souvenir.', en: 'Tell about your childhood: where you grew up, what you were like, what you had to do, what you were (not) allowed to do, a nice memory.', min: 50,
  req: ['aufgewachsen=aufgewachsen', 'musste=musste', 'durfte=durfte', 'war / hatte=\\bwar\\b;\\bhatte', 'Perfekt=\\b(habe|bin|haben|sind)\\b .{0,40}\\bge\\w+(t|en)\\b'],
  model: 'Ich bin in Tunis aufgewachsen. Als Kind war ich ziemlich schüchtern, aber ich hatte viele Freunde in unserer Straße. Ich musste meiner Mutter oft in der Küche helfen. Am Wochenende durfte ich lange fernsehen, aber in der Woche durfte ich nicht allein ausgehen. Mein schönster Sommer war mit zehn Jahren: Wir sind nach Tabarka gefahren und ich habe jeden Tag im Meer gebadet.' },
pr: { fr: 'Ne confonds pas « konnte » (o, pouvait) et « könnte » (ö, pourrait), « musste » (u) et « müsste » (ü). Une seule lettre change le sens !', en: 'Don’t mix up “konnte” (o, could) and “könnte” (ö, would be able to), “musste” (u) and “müsste” (ü). One letter changes the meaning!',
  w: `
konnte | pouvait | could
könnte | pourrait | would be able to
musste | devait | had to
müsste | devrait | would have to
durfte | avait le droit | was allowed
aufgewachsen | grandi | grew up
Als Kind musste ich früh ins Bett gehen. | Enfant, je devais aller tôt au lit. | As a child I had to go to bed early.
Ich wollte immer Pilot werden. | Je voulais toujours devenir pilote. | I always wanted to be a pilot.
` } },

/* ---------- 2 ---------- */
{ t: 'Umziehen', fr: 'Déménager ; prépositions spatiales (wo ? / wohin ?)', en: 'Moving house; two-way prepositions (wo? / wohin?)',
sheet: `
# Wo ? ou Wohin ? | Where? or Where to?
> 9 prépositions : **in, an, auf, über, unter, vor, hinter, neben, zwischen**. | 9 prepositions: **in, an, auf, über, unter, vor, hinter, neben, zwischen**.
T: Question~Question | Cas~Case | Exemple~Example
t: **Wo?** (position) | **Datif**~**Dative** | Das Buch liegt auf **dem** Tisch.
t: **Wohin?** (mouvement) | **Accusatif**~**Accusative** | Ich lege das Buch auf **den** Tisch.
! Mouvement vers un endroit = accusatif. Rester à un endroit = datif. | Movement towards a place = accusative. Staying in a place = dative.
# Les paires de verbes | Verb pairs
T: Wohin? (Akk.) — action | Wo? (Dat.) — état
t: **stellen** (poser debout) | **stehen** (être debout)
t: **legen** (poser à plat) | **liegen** (être couché)
t: **hängen** (accrocher) | **hängen** (être accroché)
t: **setzen** (asseoir) | **sitzen** (être assis)
= Ich **stelle** die Lampe **neben das** Sofa. → Die Lampe **steht neben dem** Sofa. | Je pose la lampe à côté du canapé. → La lampe est à côté du canapé. | I put the lamp next to the sofa. → The lamp is next to the sofa.
= Ich **hänge** das Bild **an die** Wand. → Das Bild **hängt an der** Wand. | J’accroche le tableau au mur. → Le tableau est accroché au mur. | I hang the picture on the wall. → The picture hangs on the wall.
# Contractions | Contractions
t: in + dem = **im** | in + das = **ins** | an + dem = **am** | an + das = **ans**
= Ich gehe **ins** Bett. – Ich bin **im** Bett. | Je vais au lit. – Je suis au lit. | I’m going to bed. – I’m in bed.
`,
w: `
umziehen | déménager | to move house
der Umzug (Umzüge) | le déménagement | move
die Möbel (Pl.) | les meubles | furniture
der Karton (-s) | le carton | cardboard box
das Regal (-e) | l’étagère | shelf
der Teppich (-e) | le tapis | carpet, rug
das Bild (-er) | le tableau, l’image | picture
die Wand (Wände) | le mur | wall
der Boden (Böden) | le sol | floor
die Ecke (-n) | le coin | corner
der Spiegel (-) | le miroir | mirror
der Kühlschrank (Kühlschränke) | le réfrigérateur | fridge
stellen | poser (debout) | to put (upright)
stehen | être (debout) | to stand
legen | poser (à plat) | to lay, put (flat)
liegen | être (couché) | to lie
hängen | accrocher ; être accroché | to hang
über | au-dessus de | above
unter | sous | under
vor | devant | in front of
hinter | derrière | behind
neben | à côté de | next to
zwischen | entre | between
der Vermieter (-) | le propriétaire (bailleur) | landlord
die Nebenkosten (Pl.) | les charges | utility costs
der Schlüssel (-) | la clé | key
`,
p: `
Nächste Woche ziehe ich um. | La semaine prochaine, je déménage. | Next week I’m moving house.
Kannst du mir beim Umzug helfen? | Tu peux m’aider à déménager ? | Can you help me with the move?
Wohin soll ich den Karton stellen? | Où dois-je mettre le carton ? | Where should I put the box?
Stell ihn bitte in die Küche. | Mets-le dans la cuisine, s’il te plaît. | Put it in the kitchen, please.
Der Schlüssel liegt auf dem Tisch. | La clé est sur la table. | The key is on the table.
Ich hänge den Spiegel an die Wand. | J’accroche le miroir au mur. | I’m hanging the mirror on the wall.
Das Sofa steht zwischen den Fenstern. | Le canapé est entre les fenêtres. | The sofa is between the windows.
Die Katze schläft unter dem Bett. | Le chat dort sous le lit. | The cat sleeps under the bed.
Leg die Bücher bitte ins Regal. | Mets les livres sur l’étagère, s’il te plaît. | Put the books on the shelf, please.
Wie hoch sind die Nebenkosten? | À combien s’élèvent les charges ? | How much are the utility costs?
Die neue Wohnung ist größer und heller. | Le nouvel appartement est plus grand et plus clair. | The new flat is bigger and brighter.
Ich fühle mich hier schon wie zu Hause. | Je me sens déjà comme chez moi ici. | I already feel at home here.
`,
g: `
Das Buch liegt auf ___ Tisch. | dem | dem/den/der | Le livre est sur la table. | The book is on the table.
Ich lege das Buch auf ___ Tisch. | den | dem/den/der | Je pose le livre sur la table. | I put the book on the table.
Das Bild hängt an ___ Wand. | der | der/die/dem | Le tableau est accroché au mur. | The picture hangs on the wall.
Ich hänge das Bild an ___ Wand. | die | der/die/den | J’accroche le tableau au mur. | I hang the picture on the wall.
Ich ___ die Flasche in den Kühlschrank. | stelle | stelle/stehe/liege | Je mets la bouteille dans le frigo. | I put the bottle in the fridge.
Die Flasche ___ im Kühlschrank. | steht | stellt/steht/legt | La bouteille est dans le frigo. | The bottle is in the fridge.
Die Zeitung ___ auf dem Sofa. | liegt | legt/liegt/steht | Le journal est sur le canapé. | The newspaper is on the sofa.
Er ___ sein Handy auf den Tisch. | legt | legt/liegt/stellt sich | Il pose son portable sur la table. | He puts his phone on the table.
Die Kinder gehen ___ Bett. | ins | im/ins/in | Les enfants vont au lit. | The children go to bed.
Die Lampe steht ___ dem Sofa und dem Regal. | zwischen | zwischen/neben/unter | La lampe est entre le canapé et l’étagère. | The lamp is between the sofa and the shelf.
Der Hund schläft ___ dem Tisch. | unter | unter/über/auf | Le chien dort sous la table. | The dog sleeps under the table.
Wir fahren morgen ___ Meer. | ans | am/ans/an | Demain, on va à la mer. | Tomorrow we’re going to the seaside.
`,
r: { de: `Endlich bin ich umgezogen! Meine neue Wohnung liegt im dritten Stock und hat einen kleinen Balkon. Am Samstag haben mir meine Freunde geholfen. Wir haben die Möbel mit einem Transporter gebracht. Das Sofa steht jetzt im Wohnzimmer zwischen den zwei Fenstern. Den großen Spiegel habe ich im Flur an die Wand gehängt. Die Bücher liegen leider noch in den Kartons auf dem Boden. Mein Vermieter ist sehr nett, aber die Nebenkosten sind ziemlich hoch.`,
  fr: `J’ai enfin déménagé ! Mon nouvel appartement est au troisième étage et a un petit balcon. Samedi, mes amis m’ont aidé(e). Nous avons transporté les meubles avec une camionnette. Le canapé est maintenant dans le salon entre les deux fenêtres. J’ai accroché le grand miroir au mur dans l’entrée. Malheureusement, les livres sont encore dans les cartons par terre. Mon propriétaire est très gentil, mais les charges sont assez élevées.`,
  en: `I’ve finally moved! My new flat is on the third floor and has a small balcony. On Saturday my friends helped me. We brought the furniture in a van. The sofa is now in the living room between the two windows. I hung the big mirror on the wall in the hall. Unfortunately the books are still in boxes on the floor. My landlord is very nice, but the utility costs are quite high.`,
  q: `
Wo steht das Sofa? | zwischen den Fenstern | im Flur | auf dem Balkon
Wo hängt der Spiegel? | im Flur | im Wohnzimmer | im Bad
Wo sind die Bücher? | in Kartons auf dem Boden | im Regal | auf dem Balkon
Was ist das Problem mit der Wohnung? | Die Nebenkosten sind hoch. | Der Vermieter ist unfreundlich. | Sie hat keinen Balkon.
` },
d: `
Sami | So, wohin kommt das Regal? | Bon, où va l’étagère ? | Right, where does the shelf go?
Amira | Stell es bitte neben die Tür. | Mets-la à côté de la porte, s’il te plaît. | Put it next to the door, please.
Sami | Okay. Und der Teppich? | D’accord. Et le tapis ? | Okay. And the rug?
Amira | Den legen wir vor das Sofa. | On le met devant le canapé. | We’ll put that in front of the sofa.
Sami | Wo ist eigentlich der Hammer? Ich will das Bild aufhängen. | Au fait, où est le marteau ? Je veux accrocher le tableau. | Where’s the hammer, by the way? I want to hang the picture.
Amira | Er liegt in dem blauen Karton in der Küche. | Il est dans le carton bleu dans la cuisine. | It’s in the blue box in the kitchen.
Sami | Gefunden! Häng ich das Bild über das Sofa? | Trouvé ! J’accroche le tableau au-dessus du canapé ? | Found it! Shall I hang the picture above the sofa?
Amira | Ja, perfekt. Danke für deine Hilfe! | Oui, parfait. Merci pour ton aide ! | Yes, perfect. Thanks for your help!
`,
wr: { fr: 'Décris ta chambre ou ton salon : où sont les meubles et les objets ? Dis aussi ce que tu veux changer (où tu veux mettre quoi).', en: 'Describe your bedroom or living room: where are the furniture and objects? Also say what you want to change (where you want to put what).', min: 50,
  req: ['Wo + datif=(steht|liegt|hängt) (auf|an|in|neben|vor|hinter|unter|über|zwischen) (dem|der|den)', 'Wohin + accusatif=(stelle|lege|hänge|stellen|legen|hängen) .{0,30}(auf|an|in|neben|vor|hinter|unter|über|zwischen) (den|die|das)', 'im / am=\\bim\\b;\\bam\\b', 'wollen=will;möchte'],
  model: 'Mein Zimmer ist nicht groß, aber gemütlich. Das Bett steht an der Wand neben dem Fenster. Über dem Bett hängt ein Foto von meiner Familie. Der Schreibtisch steht vor dem Fenster und darauf liegt mein Computer. Meine Bücher stehen im Regal. Ich möchte etwas ändern: Ich will das Regal neben die Tür stellen und einen Teppich vor das Bett legen.' },
pr: { fr: '« ü » long et court : über (long), Schlüssel (court, avant deux consonnes). « eu » = « oï » : Teppich non, mais heute, neu, Freunde.', en: 'Long and short “ü”: über (long), Schlüssel (short, before two consonants). “eu” = “oy”: heute, neu, Freunde.',
  w: `
über | au-dessus | above
Schlüssel | clé | key
zwischen | entre | between
Kühlschrank | frigo | fridge
neue Freunde | nouveaux amis | new friends
Teppich | tapis | rug
Das Bild hängt an der Wand. | Le tableau est au mur. | The picture is on the wall.
Ich stelle die Lampe neben das Sofa. | Je pose la lampe à côté du canapé. | I put the lamp next to the sofa.
` } },

/* ---------- 3 ---------- */
{ t: 'Warum? Weil …', fr: 'Le travail au quotidien ; « weil » et « deshalb »', en: 'Working life; “weil” and “deshalb”',
sheet: `
# weil = parce que | weil = because
> Après **weil**, le verbe conjugué part **à la fin** de la phrase. Une virgule avant weil ! | After **weil**, the conjugated verb goes **to the end**. Comma before weil!
= Ich bin müde, **weil** ich viel gearbeitet **habe**. | Je suis fatigué(e) parce que j’ai beaucoup travaillé. | I’m tired because I worked a lot.
= Ich lerne Deutsch, **weil** ich in Deutschland arbeiten **möchte**. | J’apprends l’allemand parce que je voudrais travailler en Allemagne. | I’m learning German because I’d like to work in Germany.
= Er kommt nicht, **weil** er krank **ist**. | Il ne vient pas parce qu’il est malade. | He isn’t coming because he is ill.
! Verbe séparable : il se **recolle** à la fin : …, weil ich früh **aufstehe**. | Separable verb: it **joins back together** at the end: …, weil ich früh **aufstehe**.
# deshalb = c’est pourquoi | deshalb = that’s why
> **deshalb** occupe la position 1 → le verbe vient **juste après** (position 2), puis le sujet. | **deshalb** takes position 1 → the verb comes **right after** (position 2), then the subject.
= Ich habe viel gearbeitet. **Deshalb bin ich** müde. | J’ai beaucoup travaillé. C’est pourquoi je suis fatigué(e). | I worked a lot. That’s why I’m tired.
# denn, weil, deshalb | denn, weil, deshalb
T: Mot~Word | Position du verbe~Verb position | Exemple~Example
t: denn | normale (2)~normal (2) | …, denn ich **bin** müde.
t: weil | **fin**~**end** | …, weil ich müde **bin**.
t: deshalb | **juste après**~**right after** | Deshalb **bin** ich müde.
# Le travail | At work
* Phrases utiles : eine Besprechung haben, Überstunden machen, im Homeoffice arbeiten, Feierabend haben. | Useful: eine Besprechung haben, Überstunden machen, im Homeoffice arbeiten, Feierabend haben.
`,
w: `
der Arbeitsplatz (Arbeitsplätze) | le poste de travail | workplace
die Besprechung (-en) | la réunion | meeting
die Überstunde (-n) | l’heure supplémentaire | overtime hour
der Feierabend | la fin de la journée de travail | end of the working day
das Homeoffice | le télétravail | working from home
der Kunde (-n) | le client | customer
die Kundin (-nen) | la cliente | customer (female)
das Projekt (-e) | le projet | project
der Termin (-e) | le rendez-vous | appointment
die Pause (-n) | la pause | break
der Urlaub (-e) | les congés | holiday, leave
das Gehalt (Gehälter) | le salaire | salary
erledigen | régler, accomplir | to get done
vorbereiten | préparer | to prepare
organisieren | organiser | to organise
drucken | imprimer | to print
schicken | envoyer | to send
anstrengend | fatigant, épuisant | exhausting
stressig | stressant | stressful
zufrieden | satisfait | satisfied
müde | fatigué | tired
weil | parce que | because
deshalb | c’est pourquoi | that’s why
denn | car | because, for
pünktlich | à l’heure | punctual
`,
p: `
Warum lernst du Deutsch? | Pourquoi apprends-tu l’allemand ? | Why are you learning German?
Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. | J’apprends l’allemand parce que je voudrais travailler en Allemagne. | I’m learning German because I’d like to work in Germany.
Ich bin müde, weil ich Überstunden gemacht habe. | Je suis fatigué(e) parce que j’ai fait des heures sup. | I’m tired because I worked overtime.
Ich komme zu spät, weil der Bus Verspätung hat. | J’arrive en retard parce que le bus a du retard. | I’m late because the bus is delayed.
Heute arbeite ich im Homeoffice. | Aujourd’hui, je travaille en télétravail. | Today I’m working from home.
Ich habe gleich eine Besprechung. | J’ai une réunion tout à l’heure. | I have a meeting in a moment.
Kannst du das bitte für mich drucken? | Tu peux imprimer ça pour moi, s’il te plaît ? | Can you print this for me, please?
Ich muss noch eine E-Mail schicken. | Je dois encore envoyer un e-mail. | I still have to send an email.
Die Arbeit ist anstrengend, aber interessant. | Le travail est fatigant, mais intéressant. | The work is tiring but interesting.
Endlich Feierabend! | Enfin fini pour aujourd’hui ! | Finally finished work!
Der Chef ist krank. Deshalb fällt die Besprechung aus. | Le chef est malade. C’est pourquoi la réunion est annulée. | The boss is ill. That’s why the meeting is cancelled.
Ich bin mit meiner Arbeit zufrieden. | Je suis satisfait(e) de mon travail. | I’m happy with my job.
`,
g: `
Ich bleibe zu Hause, weil ich krank ___. | bin | bin/ist/habe | Je reste à la maison parce que je suis malade. | I’m staying at home because I’m ill.
Sie lernt Deutsch, weil sie in Berlin studieren ___. | möchte | möchte/möchten/will studieren | Elle apprend l’allemand parce qu’elle voudrait étudier à Berlin. | She’s learning German because she’d like to study in Berlin.
Er ist müde, weil er um fünf Uhr ___. | aufsteht | steht auf/aufsteht/aufstehen | Il est fatigué parce qu’il se lève à cinq heures. | He’s tired because he gets up at five.
Ich bin glücklich, weil ich eine neue Stelle ___ habe. | gefunden | gefunden/finde/gefindet | Je suis heureux/heureuse parce que j’ai trouvé un nouveau poste. | I’m happy because I’ve found a new job.
Es regnet. Deshalb ___ ich ein Taxi. | nehme | nehme/ich nehme/nimmt | Il pleut. C’est pourquoi je prends un taxi. | It’s raining. That’s why I’m taking a taxi.
Ich habe keine Zeit. ___ kann ich nicht kommen. | Deshalb | Deshalb/Weil/Denn | Je n’ai pas le temps. C’est pourquoi je ne peux pas venir. | I have no time. That’s why I can’t come.
Ich komme nicht, ___ ich muss arbeiten. | denn | denn/weil/deshalb | Je ne viens pas car je dois travailler. | I’m not coming because I have to work.
Ich komme nicht, ___ ich arbeiten muss. | weil | denn/weil/deshalb | Je ne viens pas parce que je dois travailler. | I’m not coming because I have to work.
Wir machen eine Pause, weil wir müde ___. | sind | sind/seid/haben | Nous faisons une pause parce que nous sommes fatigués. | We’re taking a break because we’re tired.
Sie ist zufrieden, weil das Projekt gut ___. | läuft | läuft/laufen/lauft | Elle est satisfaite parce que le projet se passe bien. | She’s satisfied because the project is going well.
Ich muss heute Überstunden ___. | machen | machen/mache/gemacht | Je dois faire des heures sup aujourd’hui. | I have to work overtime today.
Kannst du die Präsentation ___? | vorbereiten | vorbereiten/bereitest vor/vorbereitet | Tu peux préparer la présentation ? | Can you prepare the presentation?
`,
r: { de: `Ein Tag im Leben von Jonas, 34, Softwareentwickler: „Ich arbeite dreimal pro Woche im Büro und zweimal im Homeoffice. Ich mag das Homeoffice, weil ich nicht mit dem Auto fahren muss. Im Büro habe ich oft Besprechungen. Die sind manchmal langweilig, aber wichtig. Diese Woche war sehr stressig, weil wir ein großes Projekt fertig machen mussten. Deshalb habe ich jeden Tag Überstunden gemacht. Aber nächste Woche habe ich Urlaub!“`,
  fr: `Une journée dans la vie de Jonas, 34 ans, développeur : « Je travaille trois fois par semaine au bureau et deux fois en télétravail. J’aime le télétravail parce que je n’ai pas besoin de prendre la voiture. Au bureau, j’ai souvent des réunions. Elles sont parfois ennuyeuses, mais importantes. Cette semaine a été très stressante parce que nous devions terminer un gros projet. C’est pourquoi j’ai fait des heures sup tous les jours. Mais la semaine prochaine, je suis en congé ! »`,
  en: `A day in the life of Jonas, 34, software developer: “I work in the office three times a week and at home twice. I like working from home because I don’t have to drive. At the office I often have meetings. They are sometimes boring, but important. This week was very stressful because we had to finish a big project. That’s why I worked overtime every day. But next week I’m on holiday!”`,
  q: `
Warum mag Jonas das Homeoffice? | Er muss nicht Auto fahren. | Er hat keine Besprechungen. | Er verdient mehr.
Wie findet er die Besprechungen? | manchmal langweilig, aber wichtig | immer interessant | sehr stressig
Warum war die Woche stressig? | Ein großes Projekt musste fertig werden. | Er war krank. | Der Chef war im Urlaub.
Was macht Jonas nächste Woche? | Er hat Urlaub. | Er arbeitet im Büro. | Er macht Überstunden.
` },
d: `
Chefin | Herr Haddad, warum sind Sie heute so spät? | Monsieur Haddad, pourquoi êtes-vous si en retard aujourd’hui ? | Mr Haddad, why are you so late today?
Karim | Entschuldigung, ich komme zu spät, weil die U-Bahn kaputt war. | Excusez-moi, je suis en retard parce que le métro était en panne. | Sorry, I’m late because the underground was broken down.
Chefin | Das passiert. Haben Sie die Präsentation vorbereitet? | Ça arrive. Avez-vous préparé la présentation ? | It happens. Have you prepared the presentation?
Karim | Ja, ich habe sie gestern fertig gemacht. Deshalb habe ich bis acht Uhr gearbeitet. | Oui, je l’ai terminée hier. C’est pourquoi j’ai travaillé jusqu’à huit heures. | Yes, I finished it yesterday. That’s why I worked until eight.
Chefin | Sehr gut. Die Besprechung mit dem Kunden beginnt um zehn. | Très bien. La réunion avec le client commence à dix heures. | Very good. The meeting with the customer starts at ten.
Karim | Kein Problem. Ich drucke die Unterlagen gleich. | Pas de problème. J’imprime les documents tout de suite. | No problem. I’ll print the documents right away.
`,
wr: { fr: 'Écris à un ami pourquoi tu apprends l’allemand et comment tu organises ta semaine. Donne au moins 3 raisons avec « weil », et utilise « deshalb » une fois.', en: 'Write to a friend why you are learning German and how you organise your week. Give at least 3 reasons with “weil” and use “deshalb” once.', min: 50,
  req: ['weil (1)=weil', 'weil ×3=(weil.*){3}', 'deshalb=deshalb', 'verbe à la fin=weil [^.,!?]* (bin|ist|habe|hat|möchte|will|muss|kann|arbeite|lerne|gefällt|mag|liebe|brauche)[.,!?]'],
  model: 'Hallo Jonas! Ich lerne Deutsch, weil ich nächstes Jahr in Deutschland arbeiten möchte. Ich lerne auch gern Sprachen, weil ich gern reise. Außerdem lese ich gern deutsche Bücher, weil die Geschichten spannend sind. Ich lerne jeden Tag zwei Stunden. Am Wochenende habe ich mehr Zeit, deshalb mache ich dann den Test und schreibe Texte. Es ist anstrengend, aber es macht Spaß!' },
pr: { fr: 'Mélodie : dans « …, weil ich müde bin », la voix monte légèrement avant la virgule, puis descend à la fin de la phrase.', en: 'Melody: in “…, weil ich müde bin”, the voice rises slightly before the comma, then falls at the end of the sentence.',
  w: `
Überstunden | heures sup | overtime
Besprechung | réunion | meeting
anstrengend | fatigant | tiring
Feierabend | fin de journée | end of work
Ich bin müde, weil ich viel gearbeitet habe. | Je suis fatigué(e) parce que j’ai beaucoup travaillé. | I’m tired because I worked a lot.
Deshalb komme ich heute später. | C’est pourquoi j’arrive plus tard aujourd’hui. | That’s why I’m coming later today.
Ich lerne Deutsch, weil ich in Berlin arbeiten möchte. | J’apprends l’allemand parce que je veux travailler à Berlin. | I’m learning German because I want to work in Berlin.
` } },

/* ---------- 4 ---------- */
{ t: 'Freunde und Gefühle', fr: 'Amitié, sentiments ; les verbes pronominaux', en: 'Friendship, feelings; reflexive verbs',
sheet: `
# Les verbes pronominaux | Reflexive verbs
> Comme « se laver » : le verbe a un **pronom réfléchi**. | Like “to enjoy oneself”: the verb has a **reflexive pronoun**.
T: ~ | sich freuen | sich treffen
t: ich | freue **mich** | treffe **mich**
t: du | freust **dich** | triffst **dich**
t: er / sie / es | freut **sich** | trifft **sich**
t: wir | freuen **uns** | treffen **uns**
t: ihr | freut **euch** | trefft **euch**
t: sie / Sie | freuen **sich** | treffen **sich**
! **sich** avec er, sie, es, sie (pluriel) **et** Sie (poli). | **sich** with er, sie, es, sie (plural) **and** Sie (formal).
# Verbes + préposition | Verbs + preposition
t: sich freuen **auf** + Akk. (futur~future) | sich freuen **über** + Akk. (présent, passé~present, past) | sich ärgern **über** + Akk.
t: sich interessieren **für** + Akk. | sich kümmern **um** + Akk. | sich verlieben **in** + Akk.
= Ich **freue mich auf** das Wochenende. | Je me réjouis du week-end (à venir). | I’m looking forward to the weekend.
= Ich **freue mich über** dein Geschenk. | Je suis content(e) de ton cadeau. | I’m happy about your present.
= Er **ärgert sich über** den Lärm. | Le bruit l’énerve. | He’s annoyed about the noise.
# Position | Position
= Wir **treffen uns** heute um sechs. | On se retrouve aujourd’hui à six heures. | We’re meeting today at six.
= Heute **treffen wir uns** um sechs. | Aujourd’hui, on se retrouve à six heures. | Today we’re meeting at six.
* Le pronom réfléchi se place **juste après le verbe** (ou après le sujet s’il est derrière le verbe). | The reflexive pronoun goes **right after the verb** (or after the subject if it follows the verb).
# Sentiments | Feelings
t: glücklich | traurig | wütend | nervös | enttäuscht | überrascht
`,
w: `
der Freund (-e) | l’ami | friend
die Freundschaft (-en) | l’amitié | friendship
das Gefühl (-e) | le sentiment | feeling
sich freuen auf | se réjouir de (à venir) | to look forward to
sich freuen über | être content de | to be happy about
sich ärgern über | s’énerver de | to be annoyed about
sich treffen | se retrouver | to meet up
sich verstehen | s’entendre | to get on (with each other)
sich streiten | se disputer | to argue
sich entschuldigen | s’excuser | to apologise
sich verlieben in | tomber amoureux de | to fall in love with
sich interessieren für | s’intéresser à | to be interested in
sich kümmern um | s’occuper de | to take care of
sich langweilen | s’ennuyer | to be bored
glücklich | heureux | happy
traurig | triste | sad
wütend | furieux | angry
nervös | nerveux | nervous
enttäuscht | déçu | disappointed
überrascht | surpris | surprised
ehrlich | honnête, sincère | honest
zuverlässig | fiable | reliable
das Vertrauen | la confiance | trust
vermissen | manquer (qqn me manque) | to miss
`,
p: `
Ich freue mich auf die Ferien. | J’ai hâte d’être en vacances. | I’m looking forward to the holidays.
Ich freue mich sehr über deine Nachricht. | Ton message me fait très plaisir. | I’m very happy about your message.
Wann treffen wir uns? | Quand est-ce qu’on se retrouve ? | When shall we meet?
Wir verstehen uns sehr gut. | Nous nous entendons très bien. | We get on very well.
Ärgere dich nicht! | Ne t’énerve pas ! | Don’t be annoyed!
Ich muss mich bei ihr entschuldigen. | Je dois m’excuser auprès d’elle. | I have to apologise to her.
Interessierst du dich für Musik? | Tu t’intéresses à la musique ? | Are you interested in music?
Er kümmert sich um seine kranke Mutter. | Il s’occupe de sa mère malade. | He takes care of his sick mother.
Ein guter Freund ist ehrlich und zuverlässig. | Un bon ami est honnête et fiable. | A good friend is honest and reliable.
Ich vermisse dich. | Tu me manques. | I miss you.
Sie hat sich in einen Kollegen verliebt. | Elle est tombée amoureuse d’un collègue. | She fell in love with a colleague.
Ich war sehr enttäuscht. | J’étais très déçu(e). | I was very disappointed.
`,
g: `
Ich freue ___ auf das Wochenende. | mich | mich/mir/sich | J’ai hâte d’être au week-end. | I’m looking forward to the weekend.
Freust du ___ auch? | dich | dich/dir/sich | Tu te réjouis aussi ? | Are you looking forward to it too?
Er ärgert ___ über seinen Chef. | sich | sich/ihn/ihm | Il s’énerve à cause de son chef. | He’s annoyed with his boss.
Wir treffen ___ um acht Uhr. | uns | uns/sich/euch | On se retrouve à huit heures. | We’re meeting at eight.
Habt ihr ___ gestritten? | euch | euch/sich/uns | Vous vous êtes disputés ? | Did you argue?
Kümmern Sie ___ bitte um die Gäste. | sich | sich/Sie/Ihnen | Occupez-vous des invités, s’il vous plaît. | Please take care of the guests.
Ich freue mich ___ die Party am Samstag. | auf | auf/über/für | J’ai hâte d’être à la fête samedi. | I’m looking forward to the party on Saturday.
Ich freue mich ___ das schöne Geschenk. | über | auf/über/an | Je suis content(e) du joli cadeau. | I’m happy about the nice present.
Sie interessiert sich ___ Politik. | für | für/über/an | Elle s’intéresse à la politique. | She’s interested in politics.
Er hat sich ___ meine Schwester verliebt. | in | in/an/mit | Il est tombé amoureux de ma sœur. | He fell in love with my sister.
Morgen treffen wir ___ im Café. | uns | uns/sich/wir | Demain, on se retrouve au café. | Tomorrow we’re meeting at the café.
Ich habe mich bei ihm ___. | entschuldigt | entschuldigt/geentschuldigt/entschuldigen | Je me suis excusé(e) auprès de lui. | I apologised to him.
`,
r: { de: `Liebe Frau Dr. Sommer, ich habe ein Problem mit meiner besten Freundin Mia. Wir kennen uns seit der Schule und haben uns immer sehr gut verstanden. Aber seit drei Monaten hat sie einen neuen Freund und hat keine Zeit mehr für mich. Gestern hatten wir einen Termin im Kino, aber sie hat mich eine Stunde vorher angerufen und abgesagt. Ich habe mich sehr geärgert und war auch traurig. Soll ich mit ihr sprechen? Ich vermisse sie! Anna, 19`,
  fr: `Chère Docteure Sommer, j’ai un problème avec ma meilleure amie Mia. Nous nous connaissons depuis l’école et nous nous sommes toujours très bien entendues. Mais depuis trois mois, elle a un nouveau copain et n’a plus de temps pour moi. Hier, nous avions rendez-vous au cinéma, mais elle m’a appelée une heure avant et a annulé. J’étais très énervée et triste aussi. Dois-je lui parler ? Elle me manque ! Anna, 19 ans`,
  en: `Dear Dr Sommer, I have a problem with my best friend Mia. We’ve known each other since school and have always got on very well. But for three months she has had a new boyfriend and no longer has time for me. Yesterday we had a plan to go to the cinema, but she called me an hour before and cancelled. I was very annoyed and also sad. Should I talk to her? I miss her! Anna, 19`,
  q: `
Seit wann kennen sich Anna und Mia? | seit der Schule | seit drei Monaten | seit gestern
Warum hat Mia keine Zeit mehr? | Sie hat einen neuen Freund. | Sie arbeitet viel. | Sie ist krank.
Was ist gestern passiert? | Mia hat das Kino abgesagt. | Sie haben sich im Kino gestritten. | Anna hat Mia angerufen.
Wie hat sich Anna gefühlt? | verärgert und traurig | glücklich | überrascht
` },
d: `
Nora | Hey, du siehst traurig aus. Was ist los? | Hé, tu as l’air triste. Qu’est-ce qui se passe ? | Hey, you look sad. What’s wrong?
Sami | Ich habe mich mit Jonas gestritten. | Je me suis disputé avec Jonas. | I had an argument with Jonas.
Nora | Oh nein! Warum denn? | Oh non ! Mais pourquoi ? | Oh no! Why?
Sami | Er hat meinen Geburtstag vergessen. Ich habe mich sehr geärgert. | Il a oublié mon anniversaire. Ça m’a beaucoup énervé. | He forgot my birthday. I was really annoyed.
Nora | Hat er sich entschuldigt? | Il s’est excusé ? | Did he apologise?
Sami | Ja, heute Morgen. Er will sich am Samstag mit mir treffen. | Oui, ce matin. Il veut qu’on se voie samedi. | Yes, this morning. He wants to meet me on Saturday.
Nora | Das ist doch schön! Ihr versteht euch doch so gut. | Mais c’est bien ! Vous vous entendez si bien. | That’s nice! You two get on so well.
Sami | Du hast recht. Ich freue mich eigentlich schon darauf. | Tu as raison. En fait, j’ai déjà hâte. | You’re right. Actually I’m already looking forward to it.
`,
wr: { fr: 'Décris ton meilleur ami ou ta meilleure amie : depuis quand vous vous connaissez, ce que vous faites ensemble, pourquoi vous vous entendez bien, une dispute ou un beau moment.', en: 'Describe your best friend: how long you have known each other, what you do together, why you get on well, an argument or a lovely moment.', min: 60,
  req: ['kennen uns=kennen uns', '2 verbes pronominaux=(\\b(mich|dich|sich|uns|euch)\\b.*){2}', 'freuen auf/über=freue .*(auf|über);freuen .*(auf|über)', 'weil=weil'],
  model: 'Meine beste Freundin heißt Nour. Wir kennen uns seit zwanzig Jahren, denn wir waren zusammen in der Schule. Wir treffen uns jeden Freitag im Café und sprechen stundenlang. Wir verstehen uns so gut, weil sie ehrlich und lustig ist. Einmal haben wir uns gestritten, aber am nächsten Tag hat sie sich entschuldigt. Jetzt wohnt sie in Deutschland und ich vermisse sie. Ich freue mich schon auf ihren Besuch im Sommer.' },
pr: { fr: '« sich, mich, dich, euch » : le « ch » après i/eu est un souffle doux (comme « hiii » chuchoté). Ne dis pas « mik » ni « mich » avec un « ch » français !', en: '“sich, mich, dich, euch”: “ch” after i/eu is a soft hiss (like a whispered “hyee”). Not “k” and not “sh”!',
  w: `
mich | me | me
dich | te | you
sich | se | oneself
euch | vous | you (pl.)
glücklich | heureux | happy
enttäuscht | déçu | disappointed
Ich freue mich auf das Wochenende. | J’ai hâte d’être au week-end. | I’m looking forward to the weekend.
Wir verstehen uns sehr gut. | Nous nous entendons très bien. | We get on very well.
` } },

/* ---------- 5 ---------- */
{ t: 'Sport und Fitness', fr: 'Sport, santé ; comparatif et superlatif', en: 'Sport, health; comparative and superlative',
sheet: `
# Comparer | Comparing
T: ~ | Comparatif~Comparative | Superlatif~Superlative
t: schnell | schnell**er** | am schnell**sten**
t: schön | schön**er** | am schön**sten**
t: alt | **ä**lt**er** | am **ä**lt**esten**
t: groß | gr**ö**ß**er** | am gr**ö**ß**ten**
t: jung | j**ü**ng**er** | am j**ü**ng**sten**
t: warm | w**ä**rm**er** | am w**ä**rm**sten**
> Comparatif : **-er**. Superlatif : **am … -sten** (-esten après d, t, s, ß, z). Les mots courts en a/o/u prennent souvent un **tréma**. | Comparative: **-er**. Superlative: **am … -sten** (-esten after d, t, s, ß, z). Short words with a/o/u often take an **umlaut**.
# Irréguliers | Irregular
t: gut → **besser** → am **besten** | viel → **mehr** → am **meisten** | gern → **lieber** → am **liebsten**
t: hoch → **höher** → am **höchsten** | nah → **näher** → am **nächsten** |
# als ou wie ? | als or wie?
= Ich bin **größer als** mein Bruder. | Je suis plus grand(e) que mon frère. | I’m taller than my brother.
= Ich bin **so groß wie** mein Bruder. | Je suis aussi grand(e) que mon frère. | I’m as tall as my brother.
! Différent → **als**. Pareil → **so … wie**. (Pas « wie » après un comparatif !) | Different → **als**. Same → **so … wie**. (Never “wie” after a comparative!)
= Ich spiele **gern** Tennis, **lieber** Basketball und **am liebsten** Fußball. | J’aime le tennis, je préfère le basket et j’adore surtout le foot. | I like tennis, I prefer basketball and I like football best.
`,
w: `
der Sport | le sport | sport
trainieren | s’entraîner | to train
joggen | faire du jogging | to jog
wandern | faire de la randonnée | to hike
Ski fahren | faire du ski | to ski
das Fitnessstudio (-s) | la salle de sport | gym
der Verein (-e) | le club | club
die Mannschaft (-en) | l’équipe | team
das Spiel (-e) | le match, le jeu | game, match
gewinnen | gagner | to win
verlieren | perdre | to lose
fit | en forme | fit
gesund | sain | healthy
ungesund | malsain | unhealthy
schnell | rapide | fast
langsam | lent | slow
stark | fort | strong
schwach | faible | weak
besser | mieux, meilleur | better
am besten | le mieux | best
mehr | plus | more
lieber | plutôt (préférer) | rather (prefer)
als | que (comparaison) | than
die Bewegung | le mouvement, l’activité physique | exercise, movement
abnehmen | maigrir | to lose weight
`,
p: `
Welchen Sport machst du am liebsten? | Quel sport préfères-tu ? | Which sport do you like best?
Ich jogge lieber als ich schwimme. | Je préfère courir que nager. | I prefer jogging to swimming.
Ich gehe dreimal pro Woche ins Fitnessstudio. | Je vais à la salle de sport trois fois par semaine. | I go to the gym three times a week.
Mein Bruder ist schneller als ich. | Mon frère est plus rapide que moi. | My brother is faster than me.
Sie ist so groß wie ihre Mutter. | Elle est aussi grande que sa mère. | She’s as tall as her mother.
Wer hat das Spiel gewonnen? | Qui a gagné le match ? | Who won the game?
Unsere Mannschaft hat leider verloren. | Notre équipe a malheureusement perdu. | Unfortunately our team lost.
Ich möchte fitter werden. | Je voudrais être plus en forme. | I’d like to get fitter.
Wandern ist gesünder als Fernsehen. | La randonnée est plus saine que la télé. | Hiking is healthier than watching TV.
Das ist der höchste Berg in Deutschland. | C’est la plus haute montagne d’Allemagne. | That’s the highest mountain in Germany.
Am Wochenende trainiere ich mehr. | Le week-end, je m’entraîne plus. | At the weekend I train more.
Bewegung ist wichtig für die Gesundheit. | L’activité physique est importante pour la santé. | Exercise is important for your health.
`,
g: `
Ein Auto ist ___ als ein Fahrrad. | schneller | schneller/schnellste/mehr schnell | Une voiture est plus rapide qu’un vélo. | A car is faster than a bike.
Mein Vater ist ___ als meine Mutter. | älter | alter/älter/ältester | Mon père est plus âgé que ma mère. | My father is older than my mother.
Im Juli ist es ___ als im Mai. | wärmer | warmer/wärmer/wärmster | En juillet, il fait plus chaud qu’en mai. | In July it’s warmer than in May.
Tee finde ich gut, aber Kaffee finde ich ___. | besser | guter/besser/am besten | Je trouve le thé bon, mais je préfère le café. | I like tea, but I think coffee is better.
Ich trinke gern Tee, aber ___ trinke ich Kaffee. | lieber | lieber/gerner/mehr gern | J’aime le thé, mais je préfère boire du café. | I like tea, but I prefer coffee.
Im August ist es am ___. | heißesten | heißsten/heißesten/heißer | C’est en août qu’il fait le plus chaud. | It’s hottest in August.
Er ist größer ___ ich. | als | als/wie/dann | Il est plus grand que moi. | He’s taller than me.
Sie ist so alt ___ ich. | wie | als/wie/so | Elle a le même âge que moi. | She’s as old as me.
Wer läuft am ___? | schnellsten | schnellsten/schneller/schnellste | Qui court le plus vite ? | Who runs fastest?
Ich habe ___ Zeit als du. | mehr | mehr/vieler/meister | J’ai plus de temps que toi. | I have more time than you.
Die Zugspitze ist der ___ Berg Deutschlands. | höchste | hochste/höchste/höher | La Zugspitze est la plus haute montagne d’Allemagne. | The Zugspitze is Germany’s highest mountain.
Unsere Mannschaft hat das Spiel ___. | gewonnen | gewinnt/gewonnen/gegewinnt | Notre équipe a gagné le match. | Our team won the game.
`,
r: { de: `Umfrage: Wie fit sind die Deutschen? Jeder dritte Deutsche macht regelmäßig Sport. Am beliebtesten ist Radfahren, dann kommen Joggen und Schwimmen. Fußball spielen mehr Männer als Frauen, aber Yoga machen Frauen viel lieber als Männer. Junge Menschen gehen am liebsten ins Fitnessstudio. Ältere Menschen wandern lieber in der Natur. Ärzte sagen: Schon 30 Minuten Bewegung pro Tag sind gesünder als gar kein Sport.`,
  fr: `Sondage : à quel point les Allemands sont-ils en forme ? Un Allemand sur trois fait régulièrement du sport. Le plus populaire est le vélo, viennent ensuite le jogging et la natation. Plus d’hommes que de femmes jouent au foot, mais les femmes préfèrent bien plus le yoga que les hommes. Les jeunes préfèrent aller à la salle de sport. Les personnes plus âgées préfèrent randonner dans la nature. Les médecins disent : 30 minutes d’activité par jour, c’est déjà plus sain que pas de sport du tout.`,
  en: `Survey: how fit are the Germans? One in three Germans does sport regularly. The most popular is cycling, followed by jogging and swimming. More men than women play football, but women like yoga much more than men. Young people like going to the gym best. Older people prefer hiking in nature. Doctors say: even 30 minutes of exercise a day is healthier than no sport at all.`,
  q: `
Welcher Sport ist am beliebtesten? | Radfahren | Fußball | Yoga
Wer macht lieber Yoga? | Frauen | Männer | junge Männer
Was machen ältere Menschen am liebsten? | Sie wandern. | Sie gehen ins Fitnessstudio. | Sie spielen Fußball.
Was sagen die Ärzte? | 30 Minuten Bewegung pro Tag sind gut. | Man muss jeden Tag joggen. | Sport ist ungesund.
` },
d: `
Trainer | Hallo! Möchten Sie bei uns trainieren? | Bonjour ! Vous voulez vous entraîner chez nous ? | Hello! Would you like to train with us?
Sara | Ja, ich möchte fitter werden. Ich sitze zu viel im Büro. | Oui, je voudrais être plus en forme. Je suis trop assise au bureau. | Yes, I’d like to get fitter. I sit too much at the office.
Trainer | Was machen Sie lieber: Laufen oder Krafttraining? | Que préférez-vous : la course ou la musculation ? | What do you prefer: running or strength training?
Sara | Ich laufe lieber, aber am liebsten schwimme ich. | Je préfère courir, mais ce que j’aime le plus, c’est nager. | I prefer running, but I like swimming best.
Trainer | Unser Schwimmbad ist größer als das in der Stadt. Und es ist billiger! | Notre piscine est plus grande que celle de la ville. Et elle est moins chère ! | Our pool is bigger than the one in town. And it’s cheaper!
Sara | Super! Wie viel kostet ein Monat? | Super ! Combien coûte un mois ? | Great! How much is a month?
Trainer | Neunundzwanzig Euro. Am besten kommen Sie morgen zum Probetraining. | Vingt-neuf euros. Le mieux, c’est de venir demain pour une séance d’essai. | Twenty-nine euros. The best thing is to come tomorrow for a trial session.
`,
wr: { fr: 'Compare deux sports (ou deux villes, ou deux personnes de ta famille). Utilise au moins 3 comparatifs, « so … wie » et un superlatif.', en: 'Compare two sports (or two cities, or two family members). Use at least 3 comparatives, “so … wie” and one superlative.', min: 40,
  req: ['als=\\bals\\b', '2 comparatifs=(\\w+er als.*){2};(besser|mehr|lieber) als.*\\w+er als;\\w+er als.*(besser|mehr|lieber) als', 'so … wie=so \\w+ wie', 'superlatif=am \\w+(sten|esten)'],
  model: 'Ich vergleiche Joggen und Schwimmen. Joggen ist billiger als Schwimmen, weil man nur gute Schuhe braucht. Aber Schwimmen ist gesünder für den Rücken. Im Sommer ist Schwimmen schöner als Joggen, denn es ist nicht so heiß im Wasser. Joggen ist so anstrengend wie Schwimmen. Am liebsten schwimme ich im Meer, das ist am schönsten.' },
pr: { fr: 'Le superlatif « am …sten » : le « st » à l’intérieur du mot se dit « st » (pas « cht ») : am schönsten, am besten.', en: 'In the superlative “am …sten” the “st” inside the word is a plain “st” (not “sht”): am schönsten, am besten.',
  w: `
am schönsten | le plus beau | most beautiful
am besten | le mieux | best
schneller | plus rapide | faster
älter | plus âgé | older
Fitnessstudio | salle de sport | gym
Mannschaft | équipe | team
Ich bin größer als mein Bruder. | Je suis plus grand(e) que mon frère. | I’m taller than my brother.
Am liebsten schwimme ich im Meer. | Ce que je préfère, c’est nager dans la mer. | I like swimming in the sea best.
` } },

/* ---------- 6 ---------- */
{ t: 'Im Restaurant', fr: 'Au restaurant ; les terminaisons des adjectifs (1)', en: 'At the restaurant; adjective endings (1)',
sheet: `
# Adjectif devant un nom | Adjective before a noun
> Quand l’adjectif est **devant** le nom, il prend une **terminaison**. | When the adjective is **before** the noun, it takes an **ending**.
# Après der / die / das (article défini) | After der / die / das (definite)
T: ~ | masculin~masc. | féminin~fem. | neutre~neut. | pluriel~plural
t: Nom. | der rot**e** Wein | die warm**e** Suppe | das frisch**e** Brot | die neu**en** Gläser
t: Akk. | den rot**en** Wein | die warm**e** Suppe | das frisch**e** Brot | die neu**en** Gläser
t: Dat. | dem rot**en** Wein | der warm**en** Suppe | dem frisch**en** Brot | den neu**en** Gläsern
> Astuce : seulement **-e** ou **-en**. Les 5 cases en **-e** : nominatif singulier (3) + accusatif féminin et neutre. Tout le reste : **-en**. | Trick: only **-e** or **-en**. The 5 boxes with **-e**: nominative singular (3) + accusative feminine and neuter. Everything else: **-en**.
# Après ein / eine (article indéfini) | After ein / eine (indefinite)
T: ~ | masc. | fém. | neutre~neut.
t: Nom. | ein rot**er** Wein | eine warm**e** Suppe | ein frisch**es** Brot
t: Akk. | einen rot**en** Wein | eine warm**e** Suppe | ein frisch**es** Brot
t: Dat. | einem rot**en** Wein | einer warm**en** Suppe | einem frisch**en** Brot
! Après « ein » (qui ne montre pas le genre), l’adjectif **montre le genre** : ein klein**er** Salat (der), ein klein**es** Bier (das). | After “ein” (which doesn’t show gender), the adjective **shows the gender**: ein klein**er** Salat (der), ein klein**es** Bier (das).
= Ich nehme **den gemischten** Salat. | Je prends la salade mixte. | I’ll have the mixed salad.
= Ich hätte gern **ein großes** Wasser. | Je voudrais une grande eau. | I’d like a large water.
`,
w: `
die Speisekarte (-n) | la carte, le menu | menu
bestellen | commander | to order
der Kellner (-) | le serveur | waiter
die Kellnerin (-nen) | la serveuse | waitress
die Vorspeise (-n) | l’entrée | starter
das Hauptgericht (-e) | le plat principal | main course
die Nachspeise (-n) | le dessert | dessert
die Suppe (-n) | la soupe | soup
der Salat (-e) | la salade | salad
das Getränk (-e) | la boisson | drink
das Glas (Gläser) | le verre | glass
der Teller (-) | l’assiette | plate
die Gabel (-n) | la fourchette | fork
das Messer (-) | le couteau | knife
der Löffel (-) | la cuillère | spoon
die Rechnung (-en) | l’addition | bill
das Trinkgeld | le pourboire | tip
scharf | épicé | spicy
süß | sucré | sweet
salzig | salé | salty
kalt | froid | cold
vegetarisch | végétarien | vegetarian
reservieren | réserver | to book
sich beschweren | se plaindre | to complain
empfehlen | recommander | to recommend
`,
p: `
Ich möchte einen Tisch für vier Personen reservieren. | Je voudrais réserver une table pour quatre personnes. | I’d like to book a table for four.
Die Speisekarte, bitte. | La carte, s’il vous plaît. | The menu, please.
Was können Sie empfehlen? | Que pouvez-vous recommander ? | What can you recommend?
Ich nehme die Tomatensuppe als Vorspeise. | Je prends la soupe de tomates en entrée. | I’ll have the tomato soup as a starter.
Haben Sie auch vegetarische Gerichte? | Avez-vous aussi des plats végétariens ? | Do you also have vegetarian dishes?
Ist das Essen scharf? | Le plat est épicé ? | Is the food spicy?
Entschuldigung, die Suppe ist kalt. | Excusez-moi, la soupe est froide. | Excuse me, the soup is cold.
Ich habe ein sauberes Glas bestellt. | J’ai commandé un verre propre. | I ordered a clean glass.
Könnten wir bitte bezahlen? | Pourrions-nous payer, s’il vous plaît ? | Could we pay, please?
Zusammen oder getrennt? | Ensemble ou séparément ? | Together or separately?
Stimmt so. | C’est bon, gardez la monnaie. | Keep the change.
Das Essen war ausgezeichnet. | Le repas était excellent. | The meal was excellent.
`,
g: `
Der ___ Salat ist lecker. (gemischt) | gemischte | gemischte/gemischten/gemischter | La salade mixte est délicieuse. | The mixed salad is tasty.
Ich nehme den ___ Salat. (gemischt) | gemischten | gemischte/gemischten/gemischter | Je prends la salade mixte. | I’ll have the mixed salad.
Die ___ Suppe ist kalt. (scharf) | scharfe | scharfe/scharfen/scharfer | La soupe épicée est froide. | The spicy soup is cold.
Ich esse das ___ Brot. (frisch) | frische | frische/frischen/frisches | Je mange le pain frais. | I’m eating the fresh bread.
Mit dem ___ Messer kann ich nicht schneiden. (alt) | alten | alte/alten/altem | Je ne peux pas couper avec le vieux couteau. | I can’t cut with the old knife.
Die ___ Gläser sind schmutzig. (neu) | neuen | neue/neuen/neuer | Les nouveaux verres sont sales. | The new glasses are dirty.
Ich möchte einen ___ Tee. (heiß) | heißen | heißen/heißer/heiße | Je voudrais un thé chaud. | I’d like a hot tea.
Das ist ein ___ Restaurant. (gut) | gutes | gute/guter/gutes | C’est un bon restaurant. | That’s a good restaurant.
Er bestellt eine ___ Pizza. (groß) | große | große/großen/großer | Il commande une grande pizza. | He orders a large pizza.
Ein ___ Kaffee, bitte! (klein) | kleiner | kleine/kleinen/kleiner | Un petit café, s’il vous plaît ! | A small coffee, please!
Was können Sie ___? | empfehlen | empfehlen/empfiehlt/empfohlen | Que pouvez-vous recommander ? | What can you recommend?
Der Kellner ___ den Fisch. | empfiehlt | empfehlt/empfiehlt/empfiehl | Le serveur recommande le poisson. | The waiter recommends the fish.
`,
r: { de: `Bewertung: Restaurant „Zur alten Mühle“ ★★★☆☆. Am Samstag waren wir zu viert in diesem kleinen Restaurant. Die freundliche Kellnerin hat uns die vegetarische Lasagne empfohlen – sie war wirklich ausgezeichnet! Die scharfe Tomatensuppe war leider kalt. Wir haben uns beschwert und die Kellnerin hat sofort eine neue Suppe gebracht. Die Nachspeise war fantastisch, aber die Rechnung war ziemlich hoch: 98 Euro für vier Personen. Wir kommen trotzdem wieder!`,
  fr: `Avis : restaurant « Zur alten Mühle » ★★★☆☆. Samedi, nous étions quatre dans ce petit restaurant. La serveuse sympathique nous a recommandé les lasagnes végétariennes – elles étaient vraiment excellentes ! La soupe de tomates épicée était malheureusement froide. Nous nous sommes plaints et la serveuse a tout de suite apporté une nouvelle soupe. Le dessert était fantastique, mais l’addition était assez élevée : 98 euros pour quatre personnes. Nous reviendrons quand même !`,
  en: `Review: restaurant “Zur alten Mühle” ★★★☆☆. On Saturday four of us went to this small restaurant. The friendly waitress recommended the vegetarian lasagne – it was really excellent! Unfortunately the spicy tomato soup was cold. We complained and the waitress brought a new soup immediately. The dessert was fantastic, but the bill was quite high: 98 euros for four people. We’ll come back anyway!`,
  q: `
Was hat die Kellnerin empfohlen? | die vegetarische Lasagne | die Tomatensuppe | den Fisch
Was war das Problem? | Die Suppe war kalt. | Die Lasagne war scharf. | Die Kellnerin war unfreundlich.
Was hat die Kellnerin gemacht? | Sie hat eine neue Suppe gebracht. | Sie hat nichts gemacht. | Sie hat das Geld zurückgegeben.
Wie viel hat das Essen gekostet? | 98 Euro | 89 Euro | 48 Euro
` },
d: `
Kellner | Guten Abend! Haben Sie reserviert? | Bonsoir ! Vous avez réservé ? | Good evening! Do you have a reservation?
Amira | Ja, auf den Namen Ben Ali, für zwei Personen. | Oui, au nom de Ben Ali, pour deux personnes. | Yes, under the name Ben Ali, for two.
Kellner | Bitte schön, hier ist Ihr Tisch. Was möchten Sie trinken? | Voilà, voici votre table. Que désirez-vous boire ? | Here you are, this is your table. What would you like to drink?
Amira | Ein großes Wasser und einen frischen Orangensaft, bitte. | Une grande eau et un jus d’orange frais, s’il vous plaît. | A large water and a fresh orange juice, please.
Kellner | Und zum Essen? | Et à manger ? | And to eat?
Amira | Was können Sie empfehlen? Ich esse kein Fleisch. | Que pouvez-vous recommander ? Je ne mange pas de viande. | What can you recommend? I don’t eat meat.
Kellner | Der gegrillte Fisch mit Reis ist heute sehr gut. | Le poisson grillé avec du riz est très bon aujourd’hui. | The grilled fish with rice is very good today.
Amira | Dann nehme ich den gegrillten Fisch. Danke! | Alors je prends le poisson grillé. Merci ! | Then I’ll have the grilled fish. Thanks!
`,
wr: { fr: 'Écris un avis sur un restaurant ou un café (vrai ou inventé) : ce que tu as commandé, ce qui était bon ou mauvais, le service, le prix. Utilise au moins 5 adjectifs avec terminaison.', en: 'Write a review of a restaurant or café (real or invented): what you ordered, what was good or bad, the service, the price. Use at least 5 adjectives with endings.', min: 50,
  req: ['passé=\\b(habe|haben|war|waren|hatte|bin|sind)\\b', 'adj. après der/die/das=\\b(der|die|das|den|dem) \\w+(e|en) [A-ZÄÖÜ]', 'adj. après ein=\\b(ein|eine|einen|einem) \\w+(er|es|e|en) [A-ZÄÖÜ]', '5 adjectifs=(\\b\\w+(e|en|er|es) [A-ZÄÖÜ]\\w+.*){5}'],
  model: 'Letzten Freitag war ich mit meiner Familie im Restaurant „Sidi Bou“. Wir hatten einen schönen Tisch auf der großen Terrasse. Als Vorspeise habe ich eine scharfe Linsensuppe gegessen. Dann habe ich den gegrillten Fisch mit frischem Gemüse bestellt. Der Fisch war super, aber der grüne Salat war ein bisschen salzig. Der junge Kellner war sehr freundlich. Die Rechnung war nicht zu hoch. Ein tolles Restaurant!' },
pr: { fr: '« pf » se prononce en un seul coup : p + f (Apfel, Kopf). « qu » = « kv » (Quittung). « -ung » final : nasal, sans « g » (Rechnung).', en: '“pf” is one sound: p + f together (Apfel, Kopf). “qu” = “kv” (Quittung). Final “-ung” is nasal, no hard “g” (Rechnung).',
  w: `
Apfelsaft | jus de pomme | apple juice
Rechnung | addition | bill
Quittung | reçu | receipt
Vorspeise | entrée | starter
empfehlen | recommander | recommend
Löffel | cuillère | spoon
Was können Sie empfehlen? | Que recommandez-vous ? | What do you recommend?
Ich nehme den gemischten Salat. | Je prends la salade mixte. | I’ll have the mixed salad.
` } },

/* ---------- 7 ---------- */
{ t: 'Medien und Technik', fr: 'Médias, téléphone, internet ; « dass » et « wenn »', en: 'Media, phone, internet; “dass” and “wenn”',
sheet: `
# dass = que | dass = that
> Comme **weil** : le verbe conjugué va **à la fin**. Après : sagen, denken, glauben, finden, hoffen, wissen, es ist wichtig… | Like **weil**: the conjugated verb goes **to the end**. After: sagen, denken, glauben, finden, hoffen, wissen, es ist wichtig…
= Ich denke, **dass** das Handy zu teuer **ist**. | Je pense que le portable est trop cher. | I think that the phone is too expensive.
= Ich hoffe, **dass** du bald **kommst**. | J’espère que tu viens bientôt. | I hope that you come soon.
= Es ist wichtig, **dass** man Pausen **macht**. | Il est important de faire des pauses. | It’s important to take breaks.
# wenn = si / quand | wenn = if / when
> **wenn** = condition (si) ou habitude (chaque fois que). Verbe à la **fin**. | **wenn** = condition (if) or repeated event (whenever). Verb at the **end**.
= **Wenn** ich Zeit **habe**, lese ich die Nachrichten. | Quand j’ai le temps, je lis les infos. | When I have time, I read the news.
! Si la phrase **commence** par wenn, la principale commence par le **verbe** : Wenn ich Zeit habe, **lese** ich… (verbe, verbe !) | If the sentence **starts** with wenn, the main clause starts with the **verb**: Wenn ich Zeit habe, **lese** ich… (verb, verb!)
= Ich rufe dich an, **wenn** ich zu Hause **bin**. | Je t’appelle quand je suis à la maison. | I’ll call you when I’m home.
# Nebensatz : le schéma | Subordinate clause: the pattern
T: Principale~Main | , | Subordonnée~Subordinate (… verbe~verb)
t: Ich glaube | , | dass er heute **kommt**.
t: Ich bleibe zu Hause | , | weil ich krank **bin**.
t: Ich lese viel | , | wenn ich im Zug **sitze**.
`,
w: `
die Medien (Pl.) | les médias | media
das Internet | internet | internet
die Nachricht (-en) | le message ; l’information | message; news
die Nachrichten (Pl.) | les informations (journal) | the news
die Zeitung (-en) | le journal | newspaper
das Handy (-s) | le portable | mobile phone
der Laptop (-s) | l’ordinateur portable | laptop
die App (-s) | l’appli | app
das Passwort (Passwörter) | le mot de passe | password
herunterladen | télécharger | to download
speichern | enregistrer | to save
löschen | effacer | to delete
online | en ligne | online
das soziale Netzwerk | le réseau social | social network
posten | publier | to post
der Bildschirm (-e) | l’écran | screen
der Akku (-s) | la batterie | battery
aufladen | recharger | to charge
funktionieren | fonctionner | to work
kaputt | cassé, en panne | broken
glauben | croire | to believe, think
hoffen | espérer | to hope
wissen | savoir | to know
dass | que | that
wenn | si, quand | if, when
`,
p: `
Ich glaube, dass das Internet heute nicht funktioniert. | Je crois qu’internet ne marche pas aujourd’hui. | I think the internet isn’t working today.
Ich hoffe, dass du bald antwortest. | J’espère que tu réponds bientôt. | I hope that you reply soon.
Weißt du, dass Lena morgen Geburtstag hat? | Tu sais que c’est l’anniversaire de Lena demain ? | Do you know that it’s Lena’s birthday tomorrow?
Mein Akku ist fast leer. | Ma batterie est presque vide. | My battery is almost dead.
Kann ich hier mein Handy aufladen? | Je peux recharger mon portable ici ? | Can I charge my phone here?
Wenn ich Zeit habe, lese ich die Nachrichten. | Quand j’ai le temps, je lis les infos. | When I have time I read the news.
Ruf mich an, wenn du zu Hause bist. | Appelle-moi quand tu es à la maison. | Call me when you’re home.
Ich habe das Passwort vergessen. | J’ai oublié le mot de passe. | I forgot the password.
Hast du die Datei gespeichert? | Tu as enregistré le fichier ? | Did you save the file?
Mein Laptop ist kaputt. | Mon ordinateur portable est en panne. | My laptop is broken.
Ich finde, dass Kinder zu viel online sind. | Je trouve que les enfants sont trop en ligne. | I think that children are online too much.
Kannst du mir die App zeigen? | Tu peux me montrer l’appli ? | Can you show me the app?
`,
g: `
Ich glaube, dass er heute nicht ___. | kommt | kommt/kommen/ist kommen | Je crois qu’il ne vient pas aujourd’hui. | I think he isn’t coming today.
Sie sagt, dass das Handy kaputt ___. | ist | ist/sein/hat | Elle dit que le portable est en panne. | She says the phone is broken.
Ich hoffe, dass du die Prüfung ___. | bestehst | bestehst/besteht/bestehen | J’espère que tu réussis l’examen. | I hope you pass the exam.
Es ist wichtig, dass man das Passwort nicht ___. | vergisst | vergisst/vergessen/vergesst | Il est important de ne pas oublier le mot de passe. | It’s important not to forget the password.
Wenn ich Zeit habe, ___ ich ein Buch. | lese | lese/ich lese/liest | Quand j’ai le temps, je lis un livre. | When I have time, I read a book.
Wenn es regnet, ___ wir zu Hause. | bleiben | bleiben/wir bleiben/bleibt | Quand il pleut, nous restons à la maison. | When it rains, we stay at home.
Ich rufe dich an, wenn ich im Büro ___. | bin | bin/ist/sein | Je t’appelle quand je suis au bureau. | I’ll call you when I’m at the office.
Ich weiß, ___ du recht hast. | dass | dass/das/weil | Je sais que tu as raison. | I know that you’re right.
Ich mache das Licht aus, ___ ich schlafen gehe. | wenn | wenn/dass/denn | J’éteins la lumière quand je vais dormir. | I turn off the light when I go to sleep.
Er sagt, dass er die App ___ hat. | heruntergeladen | heruntergeladen/heruntergeladet/geherunterladen | Il dit qu’il a téléchargé l’appli. | He says he has downloaded the app.
Kannst du die Datei ___? | speichern | speichern/speicherst/gespeichert | Tu peux enregistrer le fichier ? | Can you save the file?
Ich finde, ___ Kinder kein Handy brauchen. | dass | dass/weil/wenn | Je trouve que les enfants n’ont pas besoin de portable. | I think children don’t need a phone.
`,
r: { de: `Forum: „Wie viel Zeit verbringt ihr am Handy?“ — Lukas, 17: „Ich bin ehrlich: fünf Stunden pro Tag. Ich glaube, dass das zu viel ist. Wenn ich lerne, lege ich das Handy jetzt in ein anderes Zimmer.“ — Maria, 42: „Ich lese die Nachrichten online, aber am Abend mache ich das Handy aus. Ich finde, dass man auch Zeit ohne Internet braucht.“ — Kemal, 68: „Ich habe erst seit einem Jahr ein Smartphone. Meine Enkelin hat mir alles gezeigt. Jetzt kann ich mit meiner Familie in der Türkei telefonieren, wenn ich will. Das ist toll!“`,
  fr: `Forum : « Combien de temps passez-vous sur votre portable ? » — Lukas, 17 ans : « Je suis honnête : cinq heures par jour. Je crois que c’est trop. Quand j’étudie, je mets maintenant le portable dans une autre pièce. » — Maria, 42 ans : « Je lis les infos en ligne, mais le soir j’éteins le portable. Je trouve qu’on a aussi besoin de temps sans internet. » — Kemal, 68 ans : « Je n’ai un smartphone que depuis un an. Ma petite-fille m’a tout montré. Maintenant, je peux appeler ma famille en Turquie quand je veux. C’est génial ! »`,
  en: `Forum: “How much time do you spend on your phone?” — Lukas, 17: “I’ll be honest: five hours a day. I think that’s too much. When I study, I now put my phone in another room.” — Maria, 42: “I read the news online, but in the evening I switch my phone off. I think you also need time without the internet.” — Kemal, 68: “I’ve only had a smartphone for a year. My granddaughter showed me everything. Now I can call my family in Turkey whenever I want. It’s great!”`,
  q: `
Was macht Lukas, wenn er lernt? | Er legt das Handy in ein anderes Zimmer. | Er macht das Handy aus. | Er telefoniert.
Was macht Maria am Abend? | Sie macht das Handy aus. | Sie liest die Nachrichten. | Sie ist fünf Stunden online.
Wer hat Kemal das Smartphone erklärt? | seine Enkelin | sein Sohn | Maria
Wie findet Kemal sein Smartphone? | toll | zu kompliziert | zu teuer
` },
d: `
Opa | Kannst du mir helfen? Mein Handy funktioniert nicht. | Tu peux m’aider ? Mon portable ne marche pas. | Can you help me? My phone isn’t working.
Lena | Klar, Opa. Ich glaube, dass der Akku leer ist. | Bien sûr, papy. Je crois que la batterie est vide. | Sure, Grandpa. I think the battery is dead.
Opa | Aber ich habe es gestern aufgeladen! | Mais je l’ai rechargé hier ! | But I charged it yesterday!
Lena | Wenn du viele Apps offen hast, ist der Akku schnell leer. | Quand tu as beaucoup d’applis ouvertes, la batterie se vide vite. | If you have lots of apps open, the battery runs down quickly.
Opa | Ach so. Und wie mache ich die Apps zu? | Ah bon. Et comment je ferme les applis ? | I see. And how do I close the apps?
Lena | Schau, so. Und wenn du ein Problem hast, ruf mich einfach an! | Regarde, comme ça. Et si tu as un problème, appelle-moi ! | Look, like this. And if you have a problem, just call me!
`,
wr: { fr: 'Donne ton avis : les enfants doivent-ils avoir un portable ? Utilise au moins 2 phrases avec « dass » et 2 phrases avec « wenn ».', en: 'Give your opinion: should children have a mobile phone? Use at least 2 sentences with “dass” and 2 with “wenn”.', min: 50,
  req: ['dass ×2=(dass.*){2}', 'wenn ×2=((W|w)enn.*){2}', 'opinion=Ich finde;Ich glaube;Ich denke;Meiner Meinung', 'weil / deshalb=weil;deshalb'],
  model: 'Ich finde, dass Kinder unter zehn Jahren kein Smartphone brauchen. Wenn Kinder zu viel online sind, spielen sie nicht mehr draußen. Ich glaube auch, dass das Internet für Kinder gefährlich sein kann. Aber ein einfaches Handy ist gut, weil die Eltern dann anrufen können. Wenn ein Kind allein zur Schule geht, ist das wichtig. Deshalb bin ich für ein Handy ohne Internet.' },
pr: { fr: '« dass » (que) et « das » (le/ce) se prononcent pareil ! Seule l’orthographe change. « ss » après voyelle courte, « ß » après voyelle longue (Fuß, weiß).', en: '“dass” (that, conjunction) and “das” (the/this) sound the same! Only the spelling differs. “ss” after a short vowel, “ß” after a long one (Fuß, weiß).',
  w: `
dass | que | that
das | le, ce | the, this
weiß | sais | know
Passwort | mot de passe | password
herunterladen | télécharger | download
funktionieren | fonctionner | to work
Ich glaube, dass er recht hat. | Je crois qu’il a raison. | I think he’s right.
Wenn ich Zeit habe, lese ich die Nachrichten. | Quand j’ai le temps, je lis les infos. | When I have time I read the news.
` } },

/* ---------- 8 ---------- */
{ t: 'Mit der Bahn', fr: 'Voyager en train ; demander poliment (würde, könnte, hätte)', en: 'Travelling by train; asking politely (würde, könnte, hätte)',
sheet: `
# Le conditionnel de politesse | Polite conditional
T: ~ | können | haben | werden (→ würde)
t: ich | **könnte** | **hätte** | **würde**
t: du | könntest | hättest | würdest
t: er / sie | könnte | hätte | würde
t: wir / Sie | könnten | hätten | würden
t: ihr | könntet | hättet | würdet
= **Könnten** Sie mir bitte helfen? | Pourriez-vous m’aider, s’il vous plaît ? | Could you help me, please?
= Ich **hätte** gern eine Fahrkarte nach Köln. | Je voudrais un billet pour Cologne. | I’d like a ticket to Cologne.
= **Würden** Sie bitte das Fenster schließen? | Pourriez-vous fermer la fenêtre, s’il vous plaît ? | Would you close the window, please?
> **würde + infinitif** (à la fin) = « je ferais » : pour les souhaits et la politesse. | **würde + infinitive** (at the end) = “I would do”: for wishes and politeness.
= Ich **würde** gern im Speisewagen **essen**. | J’aimerais bien manger au wagon-restaurant. | I’d like to eat in the dining car.
! Du plus direct au plus poli : Gib mir… → Kannst du mir… geben? → **Könntest du** mir… geben? → **Würden Sie** mir bitte… geben? | From direct to polite: Gib mir… → Kannst du mir… geben? → **Könntest du** mir… geben? → **Würden Sie** mir bitte… geben?
# À la gare | At the station
t: der Bahnsteig / das Gleis | einfach / hin und zurück | umsteigen | die Verspätung
t: Der Zug fährt von **Gleis** 4 ab. | Der Zug hat 20 Minuten **Verspätung**. | Sie müssen in Fulda **umsteigen**. | Der Zug fällt **aus**.
`,
w: `
die Bahn (-en) | le train, la compagnie ferroviaire | railway
der Zug (Züge) | le train | train
der Bahnhof (Bahnhöfe) | la gare | station
das Gleis (-e) | la voie | platform (track)
der Bahnsteig (-e) | le quai | platform
die Fahrkarte (-n) | le billet | ticket
einfach | aller simple | single (ticket)
hin und zurück | aller-retour | return
abfahren | partir | to depart
die Abfahrt (-en) | le départ | departure
ankommen | arriver | to arrive
die Ankunft (Ankünfte) | l’arrivée | arrival
umsteigen | changer (de train) | to change (trains)
die Verspätung (-en) | le retard | delay
ausfallen | être annulé | to be cancelled
der Anschluss (Anschlüsse) | la correspondance | connection
der Platz (Plätze) | la place | seat
reservieren | réserver | to reserve
der Fahrplan (Fahrpläne) | l’horaire | timetable
die Durchsage (-n) | l’annonce | announcement
das Gepäck | les bagages | luggage
könnte | pourrait | could
hätte | aurait | would have
würde | ferait (conditionnel) | would
`,
p: `
Eine Fahrkarte nach München, bitte. | Un billet pour Munich, s’il vous plaît. | A ticket to Munich, please.
Einfach oder hin und zurück? | Aller simple ou aller-retour ? | Single or return?
Von welchem Gleis fährt der Zug ab? | De quelle voie part le train ? | Which platform does the train leave from?
Muss ich umsteigen? | Je dois changer ? | Do I have to change?
Der Zug hat zwanzig Minuten Verspätung. | Le train a vingt minutes de retard. | The train is twenty minutes late.
Ich habe meinen Anschluss verpasst. | J’ai raté ma correspondance. | I missed my connection.
Könnten Sie mir bitte helfen? | Pourriez-vous m’aider, s’il vous plaît ? | Could you help me, please?
Ist dieser Platz noch frei? | Cette place est-elle encore libre ? | Is this seat free?
Würden Sie bitte Ihre Tasche wegnehmen? | Pourriez-vous enlever votre sac, s’il vous plaît ? | Would you please move your bag?
Ich hätte gern einen Platz am Fenster. | Je voudrais une place côté fenêtre. | I’d like a window seat.
Wann kommen wir in Berlin an? | Quand arrivons-nous à Berlin ? | When do we arrive in Berlin?
Ich würde gern in der ersten Klasse fahren. | J’aimerais bien voyager en première classe. | I’d like to travel first class.
`,
g: `
___ Sie mir bitte helfen? | Könnten | Könnten/Konnten/Können Sie | Pourriez-vous m’aider ? | Could you help me?
Ich ___ gern eine Fahrkarte nach Bonn. | hätte | hätte/hatte/habe gern | Je voudrais un billet pour Bonn. | I’d like a ticket to Bonn.
___ du mir das Salz geben? | Könntest | Könntest/Konntest/Könnte | Tu pourrais me passer le sel ? | Could you pass me the salt?
Ich ___ gern ans Meer fahren. | würde | würde/wurde/werde | J’aimerais bien aller à la mer. | I’d like to go to the seaside.
Würden Sie bitte leiser ___? | sprechen | sprechen/sprecht/gesprochen | Pourriez-vous parler moins fort ? | Would you please speak more quietly?
Wir ___ gern zwei Plätze reservieren. | würden | würden/würdet/würde | Nous aimerions réserver deux places. | We’d like to reserve two seats.
Der Zug fährt um 8:15 Uhr ___. | ab | ab/an/aus | Le train part à 8 h 15. | The train leaves at 8:15.
In Hannover muss ich ___. | umsteigen | umsteigen/steige um/umgestiegen | À Hanovre, je dois changer. | In Hanover I have to change trains.
Der Zug fällt heute ___. | aus | ab/aus/um | Le train est annulé aujourd’hui. | The train is cancelled today.
Wir kommen um 18 Uhr in Köln ___. | an | ab/an/um | Nous arrivons à Cologne à 18 h. | We arrive in Cologne at 6 pm.
Der Zug ___ 30 Minuten Verspätung. | hat | hat/ist/macht | Le train a 30 minutes de retard. | The train is 30 minutes late.
Ich bin in Fulda ___. | umgestiegen | umgestiegen/umsteigt/geumsteigt | J’ai changé à Fulda. | I changed trains in Fulda.
`,
r: { de: `Durchsage am Gleis 7: „Achtung, eine Information zu ICE 578 nach Hamburg, Abfahrt 14:32 Uhr. Dieser Zug hat heute etwa 25 Minuten Verspätung. Grund ist eine Reparatur an der Strecke. Reisende nach Kiel: Ihr Anschluss in Hamburg wartet leider nicht. Bitte nehmen Sie den nächsten Regionalzug um 17:05 Uhr. Wir bitten um Entschuldigung. Im Bordrestaurant bekommen Sie heute einen Kaffee gratis.“`,
  fr: `Annonce voie 7 : « Attention, une information concernant l’ICE 578 à destination de Hambourg, départ 14 h 32. Ce train a aujourd’hui environ 25 minutes de retard. La raison est une réparation sur la ligne. Voyageurs pour Kiel : votre correspondance à Hambourg n’attendra malheureusement pas. Veuillez prendre le prochain train régional à 17 h 05. Nous vous prions de nous excuser. Au wagon-restaurant, vous recevez aujourd’hui un café gratuit. »`,
  en: `Announcement at platform 7: “Attention, information about ICE 578 to Hamburg, departure 14:32. This train is running about 25 minutes late today. The reason is repair work on the line. Passengers for Kiel: unfortunately your connection in Hamburg will not wait. Please take the next regional train at 17:05. We apologise. In the on-board restaurant you get a free coffee today.”`,
  q: `
Wohin fährt der ICE 578? | nach Hamburg | nach Kiel | nach Köln
Wie viel Verspätung hat der Zug? | etwa 25 Minuten | 14 Minuten | 32 Minuten
Was sollen Reisende nach Kiel machen? | den Regionalzug um 17:05 Uhr nehmen | in Hamburg warten bis morgen | ein Taxi nehmen
Was gibt es heute gratis? | einen Kaffee | eine Fahrkarte | ein Essen
` },
d: `
Reisende | Entschuldigung, könnten Sie mir helfen? Ich muss nach Freiburg. | Excusez-moi, pourriez-vous m’aider ? Je dois aller à Fribourg. | Excuse me, could you help me? I need to get to Freiburg.
Bahnmitarbeiter | Gern. Der nächste Zug fährt um 10:12 Uhr von Gleis 3 ab. | Avec plaisir. Le prochain train part à 10 h 12 de la voie 3. | Of course. The next train leaves at 10:12 from platform 3.
Reisende | Muss ich umsteigen? | Je dois changer ? | Do I have to change?
Bahnmitarbeiter | Ja, in Mannheim. Sie haben dort zehn Minuten Zeit. | Oui, à Mannheim. Vous aurez dix minutes là-bas. | Yes, in Mannheim. You’ll have ten minutes there.
Reisende | Und wenn der Zug Verspätung hat? | Et si le train a du retard ? | And if the train is late?
Bahnmitarbeiter | Dann nehmen Sie einfach den nächsten Zug. Ihre Fahrkarte gilt. | Alors prenez simplement le train suivant. Votre billet reste valable. | Then just take the next train. Your ticket is valid.
Reisende | Ich hätte gern noch eine Platzreservierung. | Je voudrais aussi une réservation de place. | I’d also like a seat reservation.
Bahnmitarbeiter | Gern. Am Fenster oder am Gang? | Avec plaisir. Côté fenêtre ou côté couloir ? | Of course. Window or aisle?
`,
wr: { fr: 'Écris un e-mail poli au service client des chemins de fer : ton train avait du retard, tu as raté ta correspondance. Explique, et demande quelque chose poliment (avec könnten / würden).', en: 'Write a polite email to the railway customer service: your train was late, you missed your connection. Explain, and ask for something politely (with könnten / würden).', min: 50,
  req: ['Sehr geehrte=Sehr geehrte', 'Verspätung=Verspätung', 'Anschluss=Anschluss;umsteigen;verpasst', 'könnten / würden=könnten;würden;hätte gern', 'Mit freundlichen Grüßen=Mit freundlichen Grüßen'],
  model: 'Sehr geehrte Damen und Herren, am 12. März bin ich mit dem ICE 578 von Frankfurt nach Hamburg gefahren. Der Zug hatte 50 Minuten Verspätung. Deshalb habe ich meinen Anschluss nach Kiel verpasst und musste zwei Stunden warten. Ich bin sehr spät zu einem wichtigen Termin gekommen. Könnten Sie mir bitte einen Teil des Fahrpreises zurückzahlen? Meine Fahrkarte schicke ich Ihnen mit. Mit freundlichen Grüßen\nSara Ben Salah' },
pr: { fr: 'Distingue « wurde » (u, était devenu) et « würde » (ü, ferait), « hatte » (a) et « hätte » (ä). Arrondis bien les lèvres pour ü.', en: 'Distinguish “wurde” (u, became) and “würde” (ü, would), “hatte” (a, had) and “hätte” (ä, would have). Round your lips well for ü.',
  w: `
würde | ferait | would
wurde | devint | became
hätte | aurait | would have
hatte | avait | had
Verspätung | retard | delay
umsteigen | changer | change trains
Könnten Sie mir bitte helfen? | Pourriez-vous m’aider ? | Could you help me?
Ich hätte gern eine Fahrkarte nach Köln. | Je voudrais un billet pour Cologne. | I’d like a ticket to Cologne.
` } },
],

exam: {
  texts: [
    { de: `Neu in der Stadt – mein Blog
Seit zwei Monaten wohne ich jetzt in Leipzig. Ich bin umgezogen, weil ich hier eine Stelle als Grafikerin gefunden habe. Am Anfang war es schwer: Ich kannte niemanden und meine Wohnung war noch leer. Meine Möbel sind erst nach drei Wochen gekommen! Jetzt fühle ich mich schon wohler. Meine Kollegen sind nett und am Freitag gehen wir oft zusammen essen. Am Wochenende fahre ich mit dem Fahrrad durch die Parks. Leipzig ist kleiner als Berlin, aber ich finde, dass es hier gemütlicher ist. Nur das Wetter ist schlechter als zu Hause in Tunis!`,
      q: `
Warum ist die Autorin nach Leipzig gezogen? | Sie hat dort eine Stelle gefunden. | Sie studiert dort. | Ihre Familie wohnt dort.
Was war am Anfang ein Problem? | Ihre Möbel sind spät gekommen. | Ihre Kollegen waren unfreundlich. | Die Wohnung war zu teuer.
Was macht sie oft am Freitag? | Sie geht mit Kollegen essen. | Sie fährt Fahrrad. | Sie schreibt ihren Blog.
Wie findet sie Leipzig im Vergleich zu Berlin? | gemütlicher | größer | langweiliger
Was gefällt ihr in Leipzig nicht? | das Wetter | die Parks | die Arbeit
` },
    { de: `Fitnessstudio „Aktiv“ – Hausordnung
1. Bitte bringen Sie immer ein Handtuch mit und legen Sie es auf die Geräte.
2. In den Trainingsräumen darf man nur saubere Sportschuhe tragen.
3. Wenn Sie ein Gerät benutzt haben, machen Sie es bitte sauber.
4. Telefonieren ist in den Trainingsräumen nicht erlaubt. Bitte gehen Sie dafür in den Eingangsbereich.
5. Kinder unter 16 Jahren dürfen nur mit einem Erwachsenen trainieren.
Öffnungszeiten: Mo–Fr 6–23 Uhr, Sa und So 8–20 Uhr. An Feiertagen ist das Studio geschlossen.`,
      q: `
Was muss man immer mitbringen? | ein Handtuch | einen Erwachsenen | ein Handy
Was soll man nach dem Training an einem Gerät machen? | Es sauber machen. | Es in den Eingangsbereich stellen. | Ein Foto machen.
Wo darf man telefonieren? | im Eingangsbereich | in den Trainingsräumen | nirgends
Wer darf nicht allein trainieren? | Kinder unter 16 Jahren | Erwachsene | Senioren
Wann ist das Studio geschlossen? | an Feiertagen | am Samstag | am Montagmorgen
` },
  ],
  write: { fr: 'Tu as déménagé dans une nouvelle ville. Écris un e-mail à une amie : pourquoi tu as déménagé (weil), comment est ton appartement (où sont les choses), compare la nouvelle ville avec l’ancienne, et invite-la poliment.', en: 'You have moved to a new town. Write an email to a friend: why you moved (weil), what your flat is like (where things are), compare the new town with the old one, and invite her politely.', min: 70,
    req: ['Liebe=Liebe;Lieber', 'weil=weil', 'umgezogen=umgezogen', 'position (datif)=(steht|liegt|hängt)[^.]*\\b(auf|an|in|neben|vor|hinter|unter|über|zwischen) (dem|der)\\b', 'comparatif=\\w+er als', 'invitation polie=Hättest du;Würdest du;Könntest du;Möchtest du', 'Grüße=Grüße'],
    model: 'Liebe Nour, wie geht es dir? Ich bin letzten Monat nach Sfax umgezogen, weil ich hier eine neue Stelle gefunden habe. Meine Wohnung ist kleiner als die alte, aber sie ist heller. Im Wohnzimmer steht ein großes Sofa vor dem Fenster und an der Wand hängt ein Bild von dir und mir! Sfax ist ruhiger als Tunis und das Essen ist hier besser. Ich finde, dass die Leute sehr freundlich sind. Hättest du Lust, mich im Mai zu besuchen? Ich würde mich sehr freuen! Liebe Grüße\nSara' },
  speak: `
Wie war Ihre Kindheit? | war;habe;bin;musste;durfte | Meine Kindheit war schön. Ich bin in Tunis aufgewachsen. | Comment était votre enfance ? | What was your childhood like?
Warum lernen Sie Deutsch? | weil;denn | Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. | Pourquoi apprenez-vous l’allemand ? | Why are you learning German?
Welchen Sport machen Sie am liebsten? | am liebsten;gern;lieber | Am liebsten gehe ich schwimmen. | Quel sport préférez-vous ? | Which sport do you like best?
Wo steht Ihr Bett? | steht;an;neben;vor;in | Mein Bett steht an der Wand neben dem Fenster. | Où est votre lit ? | Where is your bed?
Worauf freuen Sie sich? | freue mich | Ich freue mich auf den Sommer. | De quoi vous réjouissez-vous ? | What are you looking forward to?
Was machen Sie, wenn Sie Zeit haben? | wenn;lese;gehe;treffe;mache | Wenn ich Zeit habe, treffe ich meine Freunde. | Que faites-vous quand vous avez le temps ? | What do you do when you have time?
Was finden Sie wichtig in einer Freundschaft? | dass;wichtig;ehrlich | Ich finde, dass Ehrlichkeit am wichtigsten ist. | Qu’est-ce qui est important pour vous dans une amitié ? | What do you think is important in a friendship?
Was bestellen Sie gern im Restaurant? | bestelle;nehme;esse | Ich bestelle gern einen frischen Fisch. | Que commandez-vous volontiers au restaurant ? | What do you like to order in a restaurant?
Wie fragen Sie höflich nach dem Weg? | Könnten;Würden;Entschuldigung | Entschuldigung, könnten Sie mir bitte helfen? | Comment demandez-vous poliment le chemin ? | How do you politely ask for directions?
`,
},
});
