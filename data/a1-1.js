DW.level({
id: 'a1-1', code: 'A1.1', weeks: '1–2',
title: { fr: 'Premiers pas', en: 'First steps' },
goal: { fr: 'Te présenter, compter, parler de ta famille, de ta maison, de tes repas, de ta journée et de tes loisirs.', en: 'Introduce yourself, count, talk about your family, home, meals, day and free time.' },
units: [
/* ---------- 1 ---------- */
{ t: 'Hallo! Ich bin …', fr: 'Saluer, se présenter, épeler son nom', en: 'Say hello, introduce yourself, spell your name',
sheet: `
# Se présenter | Introducing yourself
> En allemand, le verbe conjugué est toujours en **2e position**. | In German, the conjugated verb is always in **2nd position**.
= Ich **heiße** Karim. | Je m’appelle Karim. | My name is Karim.
= Ich **bin** Lena. | Je suis Lena. | I am Lena.
= Ich **komme** aus Tunesien. | Je viens de Tunisie. | I come from Tunisia.
= Ich **wohne** in Tunis. | J’habite à Tunis. | I live in Tunis.
# Mes 4 premiers verbes | My first 4 verbs
T: ~ | heißen | sein | kommen | wohnen
t: ich | heiß**e** | **bin** | komm**e** | wohn**e**
t: du | heiß**t** | **bist** | komm**st** | wohn**st**
t: er / sie | heiß**t** | **ist** | komm**t** | wohn**t**
t: Sie | heiß**en** | **sind** | komm**en** | wohn**en**
> Verbe régulier : on enlève **-en** et on ajoute : ich **-e**, du **-st**, er/sie **-t**, Sie **-en**. | Regular verb: drop **-en** and add: ich **-e**, du **-st**, er/sie **-t**, Sie **-en**.
! ==sein== est irrégulier : bin, bist, ist, sind. Par cœur ! Et « du heißt » (pas « heißst ») : le radical finit déjà par ß. | ==sein== is irregular: bin, bist, ist, sind. Learn it by heart! And "du heißt" (not "heißst"): the stem already ends in ß.
# du ou Sie ? | du or Sie?
* **du** = « tu » : amis, famille, enfants, jeunes. | **du** = informal "you": friends, family, children, young people.
* **Sie** = « vous » de politesse, toujours avec une **majuscule**. Le verbe prend **-en**. | **Sie** = formal "you", always with a **capital S**. The verb takes **-en**.
= Wie heißt **du**? | Comment tu t’appelles ? | What’s your name?
= Wie heißen **Sie**? | Comment vous appelez-vous ? | What’s your name? (formal)
# Les questions W | W-questions
T: Mot~Word | Sens~Meaning | Exemple~Example
t: wie | comment~how | Wie heißt du?
t: woher | d’où~where from | Woher kommst du?
t: wo | où~where | Wo wohnst du?
t: was | quoi, que~what | Was machst du?
> Mot W en 1re position, verbe en 2e, puis le sujet. | W-word in 1st position, verb 2nd, then the subject.
# Saluer | Greetings
* Guten Morgen (le matin) · Guten Tag (la journée) · Guten Abend (le soir) · Gute Nacht (au coucher). | Guten Morgen (morning) · Guten Tag (daytime) · Guten Abend (evening) · Gute Nacht (bedtime).
* Hallo / Tschüss = familier. Auf Wiedersehen = poli. | Hallo / Tschüss = casual. Auf Wiedersehen = polite.
# Lettres pièges | Tricky letters
T: Lettre~Letter | Se dit~Sounds like | Exemple~Example
t: E | « é » long~“ay” | Emma
t: I | « i » long~“ee” | Ina
t: J | « yott »~“yot” | ja
t: V | « faou »~“fow” | Vater
t: W | « vé »~“vay” | Wien
t: Z | « tsètt »~“tset” | Zürich
t: Ä | « è »~“eh” | Käse
t: Ö | « eu »~“ur” without r | schön
t: Ü | « u » français~French “u” | Tschüss
t: ß | « ess-tsètt »~“ess-tset” | heißen
`,
w: `
hallo | salut, bonjour | hello
guten Morgen | bonjour (le matin) | good morning
guten Tag | bonjour (la journée) | hello (daytime)
guten Abend | bonsoir | good evening
gute Nacht | bonne nuit | good night
tschüss | salut (au revoir) | bye
auf Wiedersehen | au revoir | goodbye
der Name (-n) | le nom | name
der Vorname (-n) | le prénom | first name
der Nachname (-n) | le nom de famille | surname
heißen | s’appeler | to be called
sein | être | to be
kommen | venir | to come
wohnen | habiter | to live (somewhere)
die Frau (-en) | la femme ; Madame | woman; Mrs
der Herr (-en) | le monsieur ; Monsieur | gentleman; Mr
ja | oui | yes
nein | non | no
danke | merci | thank you
bitte | s’il te plaît ; de rien | please; you’re welcome
gut | bien, bon | good, well
wie | comment | how
woher | d’où | where from
wo | où | where
und | et | and
auch | aussi | also, too
`,
p: `
Wie heißt du? | Comment tu t’appelles ? | What’s your name?
Wie heißen Sie? | Comment vous appelez-vous ? | What’s your name? (formal)
Ich heiße Karim. | Je m’appelle Karim. | My name is Karim.
Ich bin Lena. | Je suis Lena. | I am Lena.
Woher kommst du? | D’où viens-tu ? | Where are you from?
Ich komme aus Tunesien. | Je viens de Tunisie. | I come from Tunisia.
Wo wohnst du? | Où habites-tu ? | Where do you live?
Ich wohne in Tunis. | J’habite à Tunis. | I live in Tunis.
Wie geht es dir? | Comment vas-tu ? | How are you?
Wie geht es Ihnen? | Comment allez-vous ? | How are you? (formal)
Danke, gut. Und dir? ¦ Gut, danke. Und dir? | Bien, merci. Et toi ? | Fine, thanks. And you?
Freut mich! | Enchanté(e) ! | Nice to meet you!
Wie schreibt man das? | Comment ça s’écrit ? | How do you spell that?
Bis morgen! | À demain ! | See you tomorrow!
`,
g: `
Ich ___ Karim. | heiße | heiße/heißt/heißen | Je m’appelle Karim. | My name is Karim.
Wie ___ du? | heißt | heiße/heißt/heißen | Comment tu t’appelles ? | What’s your name?
Wie heißen ___? | Sie | Sie/du/ich | Comment vous appelez-vous ? | What’s your name? (formal)
Ich ___ Lena. | bin | bin/bist/ist | Je suis Lena. | I am Lena.
Du ___ Karim, oder? | bist | bin/bist/ist | Tu es Karim, non ? | You’re Karim, right?
Das ___ Frau Weber. | ist | bin/bist/ist | C’est Madame Weber. | This is Mrs Weber.
___ kommst du? | Woher | Wo/Woher/Wie | D’où viens-tu ? | Where are you from?
___ wohnen Sie? | Wo | Wo/Woher/Wie | Où habitez-vous ? | Where do you live?
Ich komme ___ Marokko. | aus | aus/in/von | Je viens du Maroc. | I come from Morocco.
Ich wohne ___ Berlin. | in | aus/in/an | J’habite à Berlin. | I live in Berlin.
Woher ___ Sie? | kommen | komme/kommst/kommen | D’où venez-vous ? | Where are you from? (formal)
Wo ___ du? | wohnst | wohne/wohnst/wohnt | Où habites-tu ? | Where do you live?
`,
r: { de: `Hallo! Ich heiße Karim Ben Ali. Ich komme aus Tunesien und ich wohne in Tunis. Das ist Lena. Lena kommt aus Deutschland. Sie wohnt in Berlin. Lena und ich lernen zusammen. Ich lerne Deutsch und Lena lernt Arabisch.`,
  fr: `Salut ! Je m’appelle Karim Ben Ali. Je viens de Tunisie et j’habite à Tunis. Voici Lena. Lena vient d’Allemagne. Elle habite à Berlin. Lena et moi, nous apprenons ensemble. J’apprends l’allemand et Lena apprend l’arabe.`,
  en: `Hello! My name is Karim Ben Ali. I come from Tunisia and I live in Tunis. This is Lena. Lena comes from Germany. She lives in Berlin. Lena and I learn together. I am learning German and Lena is learning Arabic.`,
  q: `
Woher kommt Karim? | aus Tunesien | aus Deutschland | aus Berlin
Wo wohnt Lena? | in Berlin | in Tunis | in Hamburg
Wie ist Karims Nachname? | Ben Ali | Karim | Lena
Was lernt Lena? | Arabisch | Deutsch | Englisch
` },
d: `
Lena | Hallo! Ich bin Lena. Und wer bist du? | Salut ! Je suis Lena. Et toi, tu es qui ? | Hi! I’m Lena. And who are you?
Karim | Hallo Lena! Ich heiße Karim. | Salut Lena ! Je m’appelle Karim. | Hi Lena! My name is Karim.
Lena | Freut mich, Karim! Woher kommst du? | Enchantée, Karim ! D’où viens-tu ? | Nice to meet you, Karim! Where are you from?
Karim | Ich komme aus Tunesien. Und du? | Je viens de Tunisie. Et toi ? | I come from Tunisia. And you?
Lena | Ich komme aus Hamburg. Wo wohnst du? | Je viens de Hambourg. Où habites-tu ? | I come from Hamburg. Where do you live?
Karim | Ich wohne jetzt in Berlin. | J’habite à Berlin maintenant. | I live in Berlin now.
Lena | Ich auch! Wie geht es dir? | Moi aussi ! Comment vas-tu ? | Me too! How are you?
Karim | Danke, gut. Tschüss, Lena! | Bien, merci. Salut, Lena ! | Fine, thanks. Bye, Lena!
`,
wr: { fr: 'Présente-toi : ton nom, d’où tu viens, où tu habites. Pose aussi une question.', en: 'Introduce yourself: your name, where you come from, where you live. Ask one question too.', min: 20,
  req: ['ich heiße=heiße;heisse;ich bin', 'ich komme aus=komme aus', 'ich wohne in=wohne in', '?=\\?'],
  model: 'Hallo! Ich heiße Sara. Ich komme aus Tunesien und ich wohne in Tunis. Ich lerne Deutsch. Und du? Wie heißt du? Woher kommst du? Tschüss!' },
pr: { fr: '« ei » se dit « aï » (heißen), « ie » se dit « i » long (Wien). Le « h » au début d’un mot se prononce : on souffle (hallo).', en: '“ei” sounds like “eye” (heißen), “ie” is a long “ee” (Wien). An “h” at the start of a word is breathed (hallo).',
  w: `
heißen | s’appeler | to be called
Wien | Vienne | Vienna
drei | trois | three
vier | quatre | four
hallo | salut | hello
Ich heiße Lena. | Je m’appelle Lena. | My name is Lena.
Wie geht es Ihnen? | Comment allez-vous ? | How are you?
Auf Wiedersehen! | Au revoir ! | Goodbye!
` } },

/* ---------- 2 ---------- */
{ t: 'Zahlen und Kontakte', fr: 'Compter jusqu’à 100, dire son âge et son numéro', en: 'Count to 100, give your age and phone number',
sheet: `
# Les nombres 0–12 | Numbers 0–12
t: 0 null | 1 eins | 2 zwei | 3 drei | 4 vier
t: 5 fünf | 6 sechs | 7 sieben | 8 acht | 9 neun
t: 10 zehn | 11 elf | 12 zwölf | |
# 13–19 : chiffre + zehn | 13–19: digit + zehn
= dreizehn, vierzehn, fünfzehn | 13, 14, 15 | 13, 14, 15
! 16 = sech**zehn** (pas de s) · 17 = sieb**zehn** (pas de -en). | 16 = sech**zehn** (no s) · 17 = sieb**zehn** (no -en).
# Les dizaines | The tens
t: 20 zwanzig | 30 drei**ß**ig | 40 vierzig | 50 fünfzig
t: 60 sech**z**ig | 70 sieb**z**ig | 80 achtzig | 90 neunzig
t: 100 (ein)hundert | 1000 (ein)tausend | |
# 21–99 : à l’envers ! | 21–99: backwards!
> On dit l’**unité d’abord**, puis **und**, puis la dizaine — tout en un mot. | You say the **unit first**, then **und**, then the ten — all in one word.
= einundzwanzig | 21 (un-et-vingt) | 21 (one-and-twenty)
= fünfundvierzig | 45 | 45
= achtundneunzig | 98 | 98
! 21 = **ein**undzwanzig (pas « eins »). | 21 = **ein**undzwanzig (not “eins”).
# Tous les pronoms | All the pronouns
T: ~ | lernen | arbeiten | sein
t: ich | lern**e** | arbeit**e** | bin
t: du | lern**st** | arbeit**est** | bist
t: er / sie / es | lern**t** | arbeit**et** | ist
t: wir | lern**en** | arbeit**en** | sind
t: ihr | lern**t** | arbeit**et** | seid
t: sie / Sie | lern**en** | arbeit**en** | sind
! Radical en **-t** ou **-d** (arbeit-, find-) : on ajoute un **e** : du arbeit**e**st, er arbeit**e**t. | Stem ending in **-t** or **-d** (arbeit-, find-): add an **e**: du arbeit**e**st, er arbeit**e**t.
* **sie** = elle / ils, elles · **Sie** = vous (poli). Le verbe te dit lequel. | **sie** = she / they · **Sie** = you (formal). The verb tells you which.
# L’âge et le numéro | Age and number
= Wie alt bist du? – Ich bin 25 Jahre alt. | Quel âge as-tu ? – J’ai 25 ans. | How old are you? – I’m 25.
! En allemand on **est** son âge : Ich **bin** 25 (pas « ich habe »). | In German you **are** your age: Ich **bin** 25.
= Meine Nummer ist 0171 23 45 67. | Mon numéro est le 0171 23 45 67. | My number is 0171 23 45 67.
`,
w: `
null | zéro | zero
eins | un | one
zwei | deux | two
sechs | six | six
sieben | sept | seven
zwölf | douze | twelve
sechzehn | seize | sixteen
siebzehn | dix-sept | seventeen
zwanzig | vingt | twenty
dreißig | trente | thirty
einundzwanzig | vingt et un | twenty-one
hundert | cent | hundred
die Zahl (-en) | le nombre, le chiffre | number
die Telefonnummer (-n) | le numéro de téléphone | phone number
das Handy (-s) | le portable | mobile phone
die Adresse (-n) | l’adresse | address
die E-Mail (-s) | l’e-mail | email
das Jahr (-e) | l’an, l’année | year
alt | vieux ; âgé de | old
jung | jeune | young
lernen | apprendre | to learn
arbeiten | travailler | to work
machen | faire | to do, to make
wir | nous | we
ihr | vous (plusieurs amis) | you (plural, informal)
`,
p: `
Wie alt bist du? | Quel âge as-tu ? | How old are you?
Ich bin dreißig Jahre alt. | J’ai trente ans. | I am thirty years old.
Wie alt sind Sie? | Quel âge avez-vous ? | How old are you? (formal)
Wie ist deine Telefonnummer? | Quel est ton numéro de téléphone ? | What’s your phone number?
Meine Nummer ist null eins sieben eins. | Mon numéro est zéro un sept un. | My number is zero one seven one.
Wie ist Ihre Adresse? | Quelle est votre adresse ? | What is your address?
Was machst du? | Qu’est-ce que tu fais ? | What do you do?
Ich arbeite in Tunis. | Je travaille à Tunis. | I work in Tunis.
Wir lernen Deutsch. | Nous apprenons l’allemand. | We are learning German.
Noch einmal, bitte. | Encore une fois, s’il vous plaît. | Once more, please.
Langsam, bitte. | Lentement, s’il vous plaît. | Slowly, please.
Wie bitte? | Pardon ? Comment ? | Sorry? Pardon?
`,
g: `
21 = ___ | einundzwanzig | | 21 | 21
45 = ___ | fünfundvierzig | | 45 | 45
16 = ___ | sechzehn | sechzehn/sechszehn/sechzig | 16 | 16
70 = ___ | siebzig | siebenzig/siebzig/siebzehn | 70 | 70
Wir ___ in Köln. | wohnen | wohnen/wohnt/wohnst | Nous habitons à Cologne. | We live in Cologne.
Ihr ___ aus Spanien. | kommt | kommen/kommt/kommst | Vous venez d’Espagne. | You come from Spain.
Er ___ in Berlin. | arbeitet | arbeitet/arbeitt/arbeiten | Il travaille à Berlin. | He works in Berlin.
Du ___ viel. | arbeitest | arbeitst/arbeitest/arbeitet | Tu travailles beaucoup. | You work a lot.
Wie alt ___ du? | bist | bin/bist/ist | Quel âge as-tu ? | How old are you?
Ihr ___ sehr nett. | seid | sind/seid/ist | Vous êtes très gentils. | You are very nice.
Wir ___ zwanzig Jahre alt. | sind | sind/seid/sein | Nous avons vingt ans. | We are twenty years old.
Ich bin dreißig Jahre ___. | alt | alt/jung/Jahr | J’ai trente ans. | I am thirty years old.
`,
r: { de: `Das ist Herr Schmidt. Er ist 52 Jahre alt und wohnt in Köln. Er arbeitet in einem Hotel. Seine Telefonnummer ist 0221 48 93 17. Seine Tochter Mia ist 17 Jahre alt. Sie lernt Englisch und Französisch.`,
  fr: `Voici Monsieur Schmidt. Il a 52 ans et habite à Cologne. Il travaille dans un hôtel. Son numéro de téléphone est le 0221 48 93 17. Sa fille Mia a 17 ans. Elle apprend l’anglais et le français.`,
  en: `This is Mr Schmidt. He is 52 years old and lives in Cologne. He works in a hotel. His phone number is 0221 48 93 17. His daughter Mia is 17. She is learning English and French.`,
  q: `
Wie alt ist Herr Schmidt? | 52 | 25 | 17
Wo arbeitet Herr Schmidt? | in einem Hotel | in einer Schule | in Berlin
Wie alt ist Mia? | 17 | 7 | 70
Was lernt Mia? | Englisch und Französisch | Deutsch | Arabisch und Englisch
` },
d: `
Frau Kaya | Guten Tag! Wie ist Ihr Name, bitte? | Bonjour ! Quel est votre nom, s’il vous plaît ? | Hello! What is your name, please?
Herr Haddad | Mein Name ist Youssef Haddad. | Je m’appelle Youssef Haddad. | My name is Youssef Haddad.
Frau Kaya | Woher kommen Sie, Herr Haddad? | D’où venez-vous, Monsieur Haddad ? | Where are you from, Mr Haddad?
Herr Haddad | Ich komme aus Jordanien, aber ich wohne in Bonn. | Je viens de Jordanie, mais j’habite à Bonn. | I come from Jordan, but I live in Bonn.
Frau Kaya | Danke. Und wie alt sind Sie? | Merci. Et quel âge avez-vous ? | Thank you. And how old are you?
Herr Haddad | Ich bin vierunddreißig Jahre alt. | J’ai trente-quatre ans. | I am thirty-four years old.
Frau Kaya | Wie ist Ihre Telefonnummer? | Quel est votre numéro de téléphone ? | What is your phone number?
Herr Haddad | Meine Nummer ist null eins fünf eins, zwei drei, vier fünf. | Mon numéro est 0151 23 45. | My number is 0151 23 45.
`,
wr: { fr: 'Écris une fiche sur toi : nom, âge, ville, numéro de téléphone (invente-le) et ce que tu apprends.', en: 'Write a profile about yourself: name, age, city, phone number (make one up) and what you are learning.', min: 25,
  req: ['Jahre alt=Jahre alt', 'ich wohne=wohne', 'Nummer=Nummer;Telefonnummer', 'ich lerne=lerne'],
  model: 'Ich heiße Sara Ben Salah. Ich bin dreißig Jahre alt und ich wohne in Tunis. Meine Telefonnummer ist null eins sieben eins, vier fünf, sechs sieben. Ich lerne Deutsch. Ich arbeite auch.' },
pr: { fr: '« z » se dit « ts » (zwei, zehn). « ch » après a/o/u se dit au fond de la gorge, comme le « kh » arabe (acht). Après e/i, c’est un souffle léger (sechzehn, ich).', en: '“z” sounds like “ts” (zwei, zehn). “ch” after a/o/u is made at the back of the throat, like Arabic “kh” (acht). After e/i it is a soft hiss (sechzehn, ich).',
  w: `
zwei | deux | two
zehn | dix | ten
zwanzig | vingt | twenty
acht | huit | eight
achtzig | quatre-vingts | eighty
sechzehn | seize | sixteen
ich | je | I
Ich bin vierunddreißig Jahre alt. | J’ai 34 ans. | I am 34.
` } },

/* ---------- 3 ---------- */
{ t: 'Länder und Sprachen', fr: 'Pays, langues, questions oui/non, la négation « nicht »', en: 'Countries, languages, yes/no questions, “nicht”',
sheet: `
# Pays et langues | Countries and languages
T: Pays~Country | Langue~Language | Habitant~Person
t: Deutschland | Deutsch | der Deutsche / die Deutsche
t: Tunesien | Arabisch | der Tunesier / die Tunesierin
t: Frankreich | Französisch | der Franzose / die Französin
t: Österreich | Deutsch | der Österreicher / die Österreicherin
t: die Schweiz | Deutsch, Französisch… | der Schweizer / die Schweizerin
t: die Türkei | Türkisch | der Türke / die Türkin
t: die USA | Englisch | der Amerikaner / die Amerikanerin
! Quelques pays ont un article : **aus der** Schweiz, **aus der** Türkei, **aus den** USA. La plupart n’en ont pas : aus Deutschland. | A few countries take an article: **aus der** Schweiz, **aus der** Türkei, **aus den** USA. Most have none: aus Deutschland.
* Les femmes : on ajoute souvent **-in** : der Lehrer → die Lehrer**in**. | Women: often add **-in**: der Lehrer → die Lehrer**in**.
# sprechen : e → i | sprechen: e → i
T: ~ | sprechen
t: ich | spreche
t: du | spr**i**chst
t: er / sie | spr**i**cht
t: wir / sie / Sie | sprechen
t: ihr | sprecht
> Le changement e → i ne touche que **du** et **er/sie/es**. | The e → i change only affects **du** and **er/sie/es**.
# Questions oui / non | Yes / no questions
> Le **verbe en 1re position**, le sujet ensuite. | The **verb goes first**, then the subject.
= **Sprichst** du Englisch? – Ja, ich spreche Englisch. | Tu parles anglais ? – Oui, je parle anglais. | Do you speak English? – Yes, I speak English.
= **Kommen** Sie aus Spanien? – Nein, ich komme aus Italien. | Vous venez d’Espagne ? – Non, je viens d’Italie. | Are you from Spain? – No, I’m from Italy.
# La négation nicht | Negation with nicht
> **nicht** se place souvent à la fin ou devant ce qu’on nie. | **nicht** usually goes at the end or before what you negate.
= Ich wohne **nicht** in Berlin. | Je n’habite pas à Berlin. | I don’t live in Berlin.
= Ich spreche **nicht** gut Deutsch. | Je ne parle pas bien allemand. | I don’t speak German well.
= Ich verstehe das **nicht**. | Je ne comprends pas ça. | I don’t understand that.
`,
w: `
das Land (Länder) | le pays | country
die Sprache (-n) | la langue | language
Deutschland | l’Allemagne | Germany
Österreich | l’Autriche | Austria
die Schweiz | la Suisse | Switzerland
Frankreich | la France | France
Tunesien | la Tunisie | Tunisia
die Türkei | la Turquie | Turkey
Deutsch | l’allemand | German
Englisch | l’anglais | English
Französisch | le français | French
Arabisch | l’arabe | Arabic
sprechen | parler | to speak
verstehen | comprendre | to understand
die Stadt (Städte) | la ville | town, city
die Hauptstadt (Hauptstädte) | la capitale | capital city
der Deutschkurs (-e) | le cours d’allemand | German course
die Lehrerin (-nen) | l’enseignante | teacher (female)
der Lehrer (-) | l’enseignant | teacher (male)
nicht | ne… pas | not
ein bisschen | un peu | a little
sehr gut | très bien | very well
oder | ou | or
aber | mais | but
`,
p: `
Welche Sprachen sprichst du? | Quelles langues parles-tu ? | Which languages do you speak?
Ich spreche Arabisch und Französisch. | Je parle arabe et français. | I speak Arabic and French.
Ich spreche ein bisschen Deutsch. | Je parle un peu allemand. | I speak a little German.
Sprechen Sie Englisch? | Parlez-vous anglais ? | Do you speak English?
Ich verstehe das nicht. | Je ne comprends pas ça. | I don’t understand that.
Kannst du das wiederholen? | Tu peux répéter ? | Can you repeat that?
Was heißt das auf Deutsch? | Comment dit-on ça en allemand ? | What is that in German?
Ich komme aus der Schweiz. | Je viens de Suisse. | I come from Switzerland.
Berlin ist die Hauptstadt von Deutschland. | Berlin est la capitale de l’Allemagne. | Berlin is the capital of Germany.
Kommst du aus Frankreich? | Tu viens de France ? | Are you from France?
Nein, ich komme nicht aus Frankreich. | Non, je ne viens pas de France. | No, I don’t come from France.
Ich lerne seit einem Monat Deutsch. | J’apprends l’allemand depuis un mois. | I have been learning German for a month.
`,
g: `
Du ___ gut Deutsch. | sprichst | sprechst/sprichst/spricht | Tu parles bien allemand. | You speak German well.
Sie ___ Arabisch. (= elle) | spricht | spricht/sprecht/sprechen | Elle parle arabe. | She speaks Arabic.
___ du Englisch? | Sprichst | Sprichst/Sprichs/Sprechen | Tu parles anglais ? | Do you speak English?
___ Sie aus Österreich? | Kommen | Kommen/Kommt/Kommst | Vous venez d’Autriche ? | Are you from Austria?
Ich komme aus ___ Türkei. | der | der/die/den | Je viens de Turquie. | I come from Turkey.
Ich komme aus ___ USA. | den | der/die/den | Je viens des États-Unis. | I come from the USA.
Ich wohne ___ in Paris. | nicht | nicht/nein/kein | Je n’habite pas à Paris. | I don’t live in Paris.
___, ich spreche kein Spanisch. | Nein | Nein/Nicht/Kein | Non, je ne parle pas espagnol. | No, I don’t speak Spanish.
Ihr ___ sehr gut Englisch. | sprecht | sprecht/sprichst/sprechen | Vous parlez très bien anglais. | You speak English very well.
Anna ist ___ (Lehrer, femme). | Lehrerin | Lehrer/Lehrerin/Lehrerinnen | Anna est enseignante. | Anna is a teacher.
Ich ___ das nicht. | verstehe | verstehe/versteht/verstehst | Je ne comprends pas ça. | I don’t understand that.
Wien ist die ___ von Österreich. | Hauptstadt | Hauptstadt/Stadt/Land | Vienne est la capitale de l’Autriche. | Vienna is the capital of Austria.
`,
r: { de: `Im Deutschkurs sind zwölf Personen. Die Lehrerin heißt Frau Wagner. Sie kommt aus Österreich und spricht Deutsch, Englisch und ein bisschen Spanisch. Amira kommt aus Tunesien. Sie spricht Arabisch und Französisch. Tom kommt aus den USA. Er spricht Englisch, aber er versteht nicht viel Deutsch. Er lernt erst seit zwei Wochen.`,
  fr: `Dans le cours d’allemand, il y a douze personnes. L’enseignante s’appelle Madame Wagner. Elle vient d’Autriche et parle allemand, anglais et un peu espagnol. Amira vient de Tunisie. Elle parle arabe et français. Tom vient des États-Unis. Il parle anglais, mais il ne comprend pas beaucoup l’allemand. Il apprend seulement depuis deux semaines.`,
  en: `There are twelve people in the German course. The teacher is called Mrs Wagner. She comes from Austria and speaks German, English and a little Spanish. Amira comes from Tunisia. She speaks Arabic and French. Tom comes from the USA. He speaks English, but he doesn’t understand much German. He has only been learning for two weeks.`,
  q: `
Woher kommt Frau Wagner? | aus Österreich | aus Deutschland | aus Spanien
Welche Sprachen spricht Amira? | Arabisch und Französisch | Deutsch und Englisch | Spanisch
Was ist richtig über Tom? | Er versteht nicht viel Deutsch. | Er kommt aus Tunesien. | Er spricht sehr gut Deutsch.
Wie viele Personen sind im Kurs? | zwölf | zwei | zwanzig
` },
d: `
Tom | Entschuldigung, sprichst du Englisch? | Excuse-moi, tu parles anglais ? | Excuse me, do you speak English?
Amira | Ja, ein bisschen. Aber ich spreche besser Französisch. | Oui, un peu. Mais je parle mieux français. | Yes, a little. But I speak French better.
Tom | Ich spreche kein Französisch. Woher kommst du? | Je ne parle pas français. D’où viens-tu ? | I don’t speak French. Where are you from?
Amira | Ich komme aus Tunesien. Und du? | Je viens de Tunisie. Et toi ? | I come from Tunisia. And you?
Tom | Aus den USA, aus Chicago. Was heißt „Kurs“ auf Englisch? | Des États-Unis, de Chicago. Comment dit-on « Kurs » en anglais ? | From the USA, from Chicago. What is “Kurs” in English?
Amira | „Course“. Wir lernen zusammen, okay? | « Course ». On apprend ensemble, d’accord ? | “Course”. Let’s learn together, okay?
`,
wr: { fr: 'Écris à un nouveau camarade de cours : d’où tu viens, quelles langues tu parles (et lesquelles tu ne parles pas), depuis quand tu apprends l’allemand.', en: 'Write to a new classmate: where you come from, which languages you speak (and which you don’t), since when you have been learning German.', min: 20,
  req: ['ich komme aus=komme aus', 'ich spreche=spreche', 'nicht / kein=nicht;kein', 'seit=seit'],
  model: 'Hallo Tom! Ich heiße Sara und ich komme aus Tunesien. Ich spreche Arabisch, Französisch und ein bisschen Englisch. Ich spreche nicht Spanisch. Ich lerne seit einem Monat Deutsch. Sprichst du Französisch? Bis morgen!' },
pr: { fr: '« sp » et « st » au début d’un mot se disent « chp » et « cht » (sprechen, Stadt). « sch » = « ch » français (Schweiz).', en: '“sp” and “st” at the start of a word sound like “shp” and “sht” (sprechen, Stadt). “sch” = English “sh” (Schweiz).',
  w: `
sprechen | parler | to speak
Stadt | ville | city
verstehen | comprendre | to understand
Schweiz | Suisse | Switzerland
Spanisch | espagnol | Spanish
Österreich | Autriche | Austria
Ich spreche ein bisschen Deutsch. | Je parle un peu allemand. | I speak a little German.
Ich verstehe das nicht. | Je ne comprends pas ça. | I don’t understand that.
` } },

/* ---------- 4 ---------- */
{ t: 'Meine Familie', fr: 'La famille, « haben », mon / ton / son', en: 'Family, “haben”, my / your / his / her',
sheet: `
# Le verbe haben | The verb haben
T: ~ | haben
t: ich | habe
t: du | ha**st**
t: er / sie / es | ha**t**
t: wir | haben
t: ihr | habt
t: sie / Sie | haben
! du **hast**, er **hat** : le « b » disparaît ! | du **hast**, er **hat**: the “b” disappears!
= Ich habe einen Bruder und zwei Schwestern. | J’ai un frère et deux sœurs. | I have one brother and two sisters.
= Hast du Kinder? – Nein, ich habe keine Kinder. | Tu as des enfants ? – Non, je n’ai pas d’enfants. | Do you have children? – No, I have no children.
# mein, dein, sein, ihr | my, your, his, her
T: ~ | der Vater (m) | die Mutter (f) | das Kind (n) | die Eltern (pl)
t: ich → | mein | mein**e** | mein | mein**e**
t: du → | dein | dein**e** | dein | dein**e**
t: er → | sein | sein**e** | sein | sein**e**
t: sie → | ihr | ihr**e** | ihr | ihr**e**
t: Sie → | Ihr | Ihr**e** | Ihr | Ihr**e**
> Féminin et pluriel : on ajoute **-e**. Masculin et neutre : rien. | Feminine and plural: add **-e**. Masculine and neuter: nothing.
! **sein** = son (à lui), **ihr** = son (à elle). Ça dépend du **possesseur**, pas de l’objet ! | **sein** = his, **ihr** = her. It depends on the **owner**, not on the thing!
= Das ist Karim. **Seine** Schwester heißt Amira. | Voici Karim. Sa sœur s’appelle Amira. | This is Karim. His sister is called Amira.
= Das ist Lena. **Ihr** Bruder heißt Max. | Voici Lena. Son frère s’appelle Max. | This is Lena. Her brother is called Max.
# Le pluriel des noms | Noun plurals
> Il n’y a pas une seule règle : apprends **toujours** le pluriel avec le mot. Au pluriel, l’article est **toujours die**. | There is no single rule: **always** learn the plural with the word. In the plural the article is **always die**.
T: Singulier~Singular | Pluriel~Plural | Note
t: der Bruder | die Br**ü**der | ¨ (tréma~umlaut)
t: die Schwester | die Schwester**n** | -n
t: das Kind | die Kind**er** | -er
t: der Sohn | die S**ö**hn**e** | ¨ + e
t: die Tochter | die T**ö**chter | ¨
t: das Foto | die Foto**s** | -s
`,
w: `
die Familie (-n) | la famille | family
die Eltern (Pl.) | les parents | parents
der Vater (Väter) | le père | father
die Mutter (Mütter) | la mère | mother
das Kind (-er) | l’enfant | child
der Sohn (Söhne) | le fils | son
die Tochter (Töchter) | la fille (de quelqu’un) | daughter
der Bruder (Brüder) | le frère | brother
die Schwester (-n) | la sœur | sister
die Geschwister (Pl.) | les frères et sœurs | siblings
der Opa (-s) | le papy | grandpa
die Oma (-s) | la mamie | grandma
der Mann (Männer) | l’homme ; le mari | man; husband
die Frau (-en) | la femme ; l’épouse | woman; wife
der Freund (-e) | l’ami ; le copain | friend; boyfriend
die Freundin (-nen) | l’amie ; la copine | friend; girlfriend
verheiratet | marié(e) | married
ledig | célibataire | single
geschieden | divorcé(e) | divorced
haben | avoir | to have
das Foto (-s) | la photo | photo
lieben | aimer | to love
klein | petit | small, little
groß | grand | big, tall
`,
p: `
Hast du Geschwister? | As-tu des frères et sœurs ? | Do you have siblings?
Ich habe einen Bruder und eine Schwester. | J’ai un frère et une sœur. | I have one brother and one sister.
Ich habe keine Geschwister. | Je n’ai pas de frères et sœurs. | I have no siblings.
Bist du verheiratet? | Es-tu marié(e) ? | Are you married?
Nein, ich bin ledig. | Non, je suis célibataire. | No, I am single.
Das ist meine Mutter. | C’est ma mère. | This is my mother.
Wie heißt dein Vater? | Comment s’appelle ton père ? | What is your father’s name?
Meine Eltern wohnen in Sousse. | Mes parents habitent à Sousse. | My parents live in Sousse.
Mein Bruder ist zwanzig Jahre alt. | Mon frère a vingt ans. | My brother is twenty years old.
Wie viele Kinder haben Sie? | Combien d’enfants avez-vous ? | How many children do you have?
Ich liebe meine Familie. | J’aime ma famille. | I love my family.
Das ist ein Foto von meiner Familie. | C’est une photo de ma famille. | This is a photo of my family.
`,
g: `
Ich ___ zwei Brüder. | habe | habe/hast/hat | J’ai deux frères. | I have two brothers.
___ du Kinder? | Hast | Habst/Hast/Hat | As-tu des enfants ? | Do you have children?
Sie ___ eine Tochter. (= elle) | hat | habt/hat/haben | Elle a une fille. | She has a daughter.
Ihr ___ ein Foto. | habt | habt/haben/hat | Vous avez une photo. | You have a photo.
Das ist ___ Mutter. (moi) | meine | mein/meine/meinen | C’est ma mère. | This is my mother.
Das ist ___ Vater. (moi) | mein | mein/meine/meiner | C’est mon père. | This is my father.
Wie heißt ___ Schwester? (toi) | deine | dein/deine/deinen | Comment s’appelle ta sœur ? | What is your sister’s name?
Karim und ___ Bruder (Karim) | sein | sein/seine/ihr | Karim et son frère | Karim and his brother
Lena und ___ Bruder (Lena) | ihr | sein/ihr/ihre | Lena et son frère | Lena and her brother
Lena und ___ Eltern (Lena) | ihre | ihr/ihre/seine | Lena et ses parents | Lena and her parents
der Bruder → die ___ | Brüder | Bruders/Brüder/Brudern | les frères | brothers
das Kind → die ___ | Kinder | Kinds/Kinden/Kinder | les enfants | children
`,
r: { de: `Ich heiße Amira und ich bin 28 Jahre alt. Ich bin verheiratet. Mein Mann heißt Sami. Wir haben eine Tochter. Sie heißt Lina und ist drei Jahre alt. Meine Eltern wohnen in Sfax. Ich habe zwei Geschwister: Mein Bruder Omar ist Lehrer und meine Schwester Nour studiert in Deutschland. Sie spricht sehr gut Deutsch!`,
  fr: `Je m’appelle Amira et j’ai 28 ans. Je suis mariée. Mon mari s’appelle Sami. Nous avons une fille. Elle s’appelle Lina et elle a trois ans. Mes parents habitent à Sfax. J’ai deux frères et sœurs : mon frère Omar est enseignant et ma sœur Nour fait ses études en Allemagne. Elle parle très bien allemand !`,
  en: `My name is Amira and I am 28. I am married. My husband is called Sami. We have a daughter. She is called Lina and she is three. My parents live in Sfax. I have two siblings: my brother Omar is a teacher and my sister Nour studies in Germany. She speaks German very well!`,
  q: `
Wie heißt Amiras Mann? | Sami | Omar | Lina
Wie alt ist Lina? | drei Jahre | achtundzwanzig Jahre | dreizehn Jahre
Wo wohnen Amiras Eltern? | in Sfax | in Deutschland | in Tunis
Was macht Nour? | Sie studiert in Deutschland. | Sie ist Lehrerin. | Sie wohnt in Sfax.
` },
d: `
Jonas | Ist das ein Foto von deiner Familie? | C’est une photo de ta famille ? | Is that a photo of your family?
Amira | Ja. Das sind meine Eltern und das ist mein Bruder Omar. | Oui. Ce sont mes parents et voici mon frère Omar. | Yes. These are my parents and this is my brother Omar.
Jonas | Und wer ist das? | Et qui est-ce ? | And who is that?
Amira | Das ist meine Schwester Nour. Sie wohnt in München. | C’est ma sœur Nour. Elle habite à Munich. | That’s my sister Nour. She lives in Munich.
Jonas | Toll! Hast du auch Kinder? | Super ! Tu as aussi des enfants ? | Great! Do you have children too?
Amira | Ja, eine Tochter. Sie ist drei. Und du? | Oui, une fille. Elle a trois ans. Et toi ? | Yes, a daughter. She is three. And you?
Jonas | Nein, ich habe keine Kinder. Ich bin ledig. | Non, je n’ai pas d’enfants. Je suis célibataire. | No, I don’t have children. I’m single.
`,
wr: { fr: 'Présente ta famille (ou une famille inventée) : qui, quel âge, où ils habitent, ce qu’ils font.', en: 'Introduce your family (or an invented one): who, how old, where they live, what they do.', min: 35,
  req: ['mein / meine=mein', 'ich habe=habe', 'Jahre alt=Jahre alt', 'sein / ihr=\\bsein;\\bseine;\\bihr;\\bihre'],
  model: 'Meine Familie ist nicht sehr groß. Mein Vater heißt Ali und er ist sechzig Jahre alt. Meine Mutter heißt Fatma. Ich habe einen Bruder. Er heißt Omar und seine Frau heißt Leila. Meine Eltern wohnen in Sousse. Ich liebe meine Familie.' },
pr: { fr: '« ü » : dis « i » en arrondissant les lèvres (= « u » français). « ö » : dis « é » avec les lèvres rondes (= « eu »). Le « r » final est presque un « a » (Vater = « fata »).', en: '“ü”: say “ee” with rounded lips (French “u”). “ö”: say “ay” with rounded lips (like “ur” without r). A final “r” sounds almost like “a” (Vater = “fah-ta”).',
  w: `
Brüder | frères | brothers
Söhne | fils (pl.) | sons
Töchter | filles | daughters
Mutter | mère | mother
Vater | père | father
Schwester | sœur | sister
Ich habe zwei Brüder. | J’ai deux frères. | I have two brothers.
Meine Töchter sind schön. | Mes filles sont belles. | My daughters are beautiful.
` } },

/* ---------- 5 ---------- */
{ t: 'Essen und Trinken', fr: 'der / die / das, ein / kein, « möchten », manger et boire', en: 'der / die / das, ein / kein, “möchten”, food and drink',
sheet: `
# Trois genres | Three genders
T: Genre~Gender | défini~definite | indéfini~indefinite | négatif~negative
t: masculin~masculine | {m:der} Apfel | {m:ein} Apfel | {m:kein} Apfel
t: féminin~feminine | {f:die} Banane | {f:eine} Banane | {f:keine} Banane
t: neutre~neuter | {n:das} Brot | {n:ein} Brot | {n:kein} Brot
t: pluriel~plural | {p:die} Äpfel | — | {p:keine} Äpfel
! Le genre ne se devine pas : ==apprends chaque nom avec son article== et sa couleur. | Gender can’t be guessed: ==learn every noun with its article== and its colour.
* Astuces : **-ung, -heit, -keit, -e** → souvent {f:die}. **-chen, -lein** → toujours {n:das}. | Tips: **-ung, -heit, -keit, -e** → often {f:die}. **-chen, -lein** → always {n:das}.
# kein = pas de | kein = no / not any
> **kein** nie un nom (ein → kein). **nicht** nie un verbe, un adjectif… | **kein** negates a noun (ein → kein). **nicht** negates a verb, an adjective…
= Das ist **kein** Kaffee, das ist Tee. | Ce n’est pas du café, c’est du thé. | That’s not coffee, it’s tea.
= Ich esse **kein** Fleisch. | Je ne mange pas de viande. | I don’t eat meat.
= Der Kaffee ist **nicht** heiß. | Le café n’est pas chaud. | The coffee is not hot.
# essen, möchten | essen, möchten
T: ~ | essen | möchten (= voudrais)
t: ich | esse | möchte
t: du | **isst** | möchte**st**
t: er / sie | **isst** | möchte
t: wir / sie / Sie | essen | möchten
t: ihr | esst | möchtet
! **möchte** : pas de -t à ich ni à er/sie ! | **möchte**: no -t with ich or er/sie!
= Ich **möchte** einen Kaffee, bitte. | Je voudrais un café, s’il vous plaît. | I’d like a coffee, please.
# gern = j’aime… | gern = I like…
= Ich trinke **gern** Tee. | J’aime boire du thé. | I like drinking tea.
= Ich esse **nicht gern** Fisch. | Je n’aime pas manger du poisson. | I don’t like eating fish.
= Was isst du **gern**? | Qu’est-ce que tu aimes manger ? | What do you like to eat?
`,
w: `
das Essen (-) | le repas, la nourriture | food, meal
essen | manger | to eat
trinken | boire | to drink
möchten | vouloir (poli) | would like
das Brot (-e) | le pain | bread
das Brötchen (-) | le petit pain | bread roll
der Käse | le fromage | cheese
die Butter | le beurre | butter
das Ei (-er) | l’œuf | egg
der Apfel (Äpfel) | la pomme | apple
die Banane (-n) | la banane | banana
das Obst | les fruits | fruit
das Gemüse | les légumes | vegetables
die Tomate (-n) | la tomate | tomato
das Fleisch | la viande | meat
der Fisch (-e) | le poisson | fish
der Reis | le riz | rice
die Kartoffel (-n) | la pomme de terre | potato
der Kaffee | le café | coffee
der Tee | le thé | tea
das Wasser | l’eau | water
die Milch | le lait | milk
der Saft (Säfte) | le jus | juice
der Kuchen (-) | le gâteau | cake
lecker | délicieux | tasty
gern | volontiers ; avec plaisir | gladly (I like to)
`,
p: `
Was isst du gern? | Qu’est-ce que tu aimes manger ? | What do you like to eat?
Ich esse gern Reis mit Gemüse. | J’aime manger du riz aux légumes. | I like eating rice with vegetables.
Ich esse kein Schweinefleisch. | Je ne mange pas de porc. | I don’t eat pork.
Ich möchte einen Kaffee, bitte. | Je voudrais un café, s’il vous plaît. | I’d like a coffee, please.
Möchtest du einen Tee? | Tu veux un thé ? | Would you like a tea?
Nein, danke. Ich möchte ein Wasser. | Non merci. Je voudrais une eau. | No, thanks. I’d like a water.
Ich trinke nicht gern Milch. | Je n’aime pas boire de lait. | I don’t like drinking milk.
Das schmeckt sehr gut! | C’est très bon ! | That tastes very good!
Der Kuchen ist lecker. | Le gâteau est délicieux. | The cake is tasty.
Ich habe Hunger. | J’ai faim. | I’m hungry.
Ich habe Durst. | J’ai soif. | I’m thirsty.
Guten Appetit! | Bon appétit ! | Enjoy your meal!
`,
g: `
___ Apfel ist rot. | Der | Der/Die/Das | La pomme est rouge. | The apple is red.
___ Banane ist gelb. | Die | Der/Die/Das | La banane est jaune. | The banana is yellow.
___ Brot ist frisch. | Das | Der/Die/Das | Le pain est frais. | The bread is fresh.
Das ist ___ Tomate. | eine | ein/eine/einen | C’est une tomate. | This is a tomato.
Das ist ___ Ei. | ein | ein/eine/einer | C’est un œuf. | This is an egg.
Das ist ___ Kaffee, das ist Tee. | kein | kein/keine/nicht | Ce n’est pas du café, c’est du thé. | That’s not coffee, it’s tea.
Ich esse ___ Fleisch. | kein | kein/keine/nicht | Je ne mange pas de viande. | I don’t eat meat.
Der Tee ist ___ heiß. | nicht | nicht/kein/keine | Le thé n’est pas chaud. | The tea is not hot.
Du ___ gern Fisch. | isst | esst/isst/esse | Tu aimes manger du poisson. | You like eating fish.
Er ___ einen Saft. | möchte | möchtet/möchte/möchtest | Il voudrait un jus. | He would like a juice.
___ ihr Kuchen? | Möchtet | Möchtet/Möchten/Möchtest | Vous voulez du gâteau ? | Do you want cake?
Ich trinke ___ Kaffee. (j’aime) | gern | gern/gut/viel | J’aime boire du café. | I like drinking coffee.
`,
r: { de: `Am Morgen esse ich gern Brot mit Butter und Käse. Ich trinke einen Kaffee mit Milch. Mein Mann trinkt keinen Kaffee, er trinkt Tee. Am Mittag essen wir oft Reis oder Kartoffeln mit Gemüse. Fleisch esse ich nicht so gern, aber Fisch finde ich lecker. Am Abend gibt es Salat und Obst.`,
  fr: `Le matin, j’aime manger du pain avec du beurre et du fromage. Je bois un café au lait. Mon mari ne boit pas de café, il boit du thé. À midi, nous mangeons souvent du riz ou des pommes de terre avec des légumes. Je n’aime pas trop la viande, mais je trouve le poisson délicieux. Le soir, il y a de la salade et des fruits.`,
  en: `In the morning I like eating bread with butter and cheese. I drink a coffee with milk. My husband doesn’t drink coffee, he drinks tea. At lunchtime we often eat rice or potatoes with vegetables. I don’t like meat that much, but I find fish tasty. In the evening there is salad and fruit.`,
  q: `
Was trinkt der Mann? | Tee | Kaffee | Milch
Was isst die Frau am Morgen? | Brot mit Butter und Käse | Reis mit Gemüse | Fisch
Wie findet sie Fisch? | lecker | nicht gut | zu teuer
Was gibt es am Abend? | Salat und Obst | Kartoffeln | Kuchen
` },
d: `
Kellner | Guten Tag! Was möchten Sie? | Bonjour ! Que désirez-vous ? | Hello! What would you like?
Lena | Ich möchte einen Tee, bitte. | Je voudrais un thé, s’il vous plaît. | I’d like a tea, please.
Kellner | Und was möchten Sie essen? | Et que voulez-vous manger ? | And what would you like to eat?
Lena | Ich esse kein Fleisch. Haben Sie Gemüse? | Je ne mange pas de viande. Vous avez des légumes ? | I don’t eat meat. Do you have vegetables?
Kellner | Ja, wir haben Reis mit Gemüse. Das ist sehr lecker. | Oui, nous avons du riz aux légumes. C’est très bon. | Yes, we have rice with vegetables. It’s very tasty.
Lena | Super, das nehme ich. Und ein Wasser, bitte. | Super, je prends ça. Et une eau, s’il vous plaît. | Great, I’ll take that. And a water, please.
Kellner | Gern. Guten Appetit! | Avec plaisir. Bon appétit ! | Of course. Enjoy your meal!
`,
wr: { fr: 'Écris ce que tu manges et bois un jour normal : le matin, à midi, le soir. Dis aussi ce que tu n’aimes pas.', en: 'Write what you eat and drink on a normal day: morning, lunch, evening. Also say what you don’t like.', min: 35,
  req: ['ich esse=esse', 'ich trinke=trinke', 'gern=gern', 'kein / nicht=kein;nicht'],
  model: 'Am Morgen esse ich ein Brötchen mit Käse und ich trinke einen Tee. Am Mittag esse ich gern Reis mit Gemüse oder Fisch. Am Abend esse ich Salat und Obst. Ich trinke viel Wasser. Ich esse nicht gern Fleisch und ich trinke keinen Kaffee.' },
pr: { fr: 'Voyelle longue ou courte ? Devant une seule consonne, elle est souvent longue (Brot, Tee). Devant deux consonnes, courte (essen, Butter). « ie » est long (Bier), « ss » rend la voyelle courte (isst).', en: 'Long or short vowel? Before one consonant it is often long (Brot, Tee). Before two consonants, short (essen, Butter). “ie” is long (Bier), “ss” makes the vowel short (isst).',
  w: `
Brot | pain | bread
Butter | beurre | butter
Tee | thé | tea
essen | manger | to eat
Käse | fromage | cheese
Apfel | pomme | apple
Guten Appetit! | Bon appétit ! | Enjoy your meal!
Ich möchte einen Kaffee, bitte. | Je voudrais un café. | I’d like a coffee.
` } },

/* ---------- 6 ---------- */
{ t: 'Mein Zuhause', fr: 'Pièces, meubles, couleurs ; er / sie / es pour les choses', en: 'Rooms, furniture, colours; er / sie / es for things',
sheet: `
# Les pièces | The rooms
t: {n:das} Wohnzimmer | {n:das} Schlafzimmer | {f:die} Küche
t: {n:das} Bad | {m:der} Flur | {m:der} Balkon
# Il / elle pour les choses | It for things
> En allemand, une chose garde le **genre de son article** : der → **er**, die → **sie**, das → **es**. | In German, a thing keeps the **gender of its article**: der → **er**, die → **sie**, das → **es**.
= Wie ist {m:der Tisch}? – **Er** ist neu. | Comment est la table ? – Elle est neuve. | How is the table? – It’s new.
= Wie ist {f:die Lampe}? – **Sie** ist modern. | Comment est la lampe ? – Elle est moderne. | How is the lamp? – It’s modern.
= Wie ist {n:das Sofa}? – **Es** ist bequem. | Comment est le canapé ? – Il est confortable. | How is the sofa? – It’s comfortable.
= Wie sind {p:die Stühle}? – **Sie** sind alt. | Comment sont les chaises ? – Elles sont vieilles. | How are the chairs? – They’re old.
! « der Tisch » = la table, mais **er** ! Ne traduis pas le genre du français. | “der Tisch” (table) is masculine → **er**. Never guess gender from another language.
# Adjectif après sein | Adjective after sein
> Après **sein**, l’adjectif ne change jamais : pas de terminaison. | After **sein**, the adjective never changes: no ending.
= Die Wohnung ist **groß** und **hell**. | L’appartement est grand et clair. | The flat is big and bright.
= Die Zimmer sind **klein**. | Les pièces sont petites. | The rooms are small.
# Contraires | Opposites
t: groß ↔ klein | neu ↔ alt | hell ↔ dunkel
t: teuer ↔ billig | schön ↔ hässlich | ruhig ↔ laut
! Avec **finden** (accusatif) : der Tisch → Ich finde **ihn** schön. die Lampe → **sie**, das Sofa → **es**. | With **finden** (accusative): der Tisch → Ich finde **ihn** schön. die Lampe → **sie**, das Sofa → **es**.
# Couleurs | Colours
t: rot | blau | grün | gelb | schwarz
t: weiß | grau | braun | rosa | orange
* **zu** = trop : Die Wohnung ist **zu** teuer. | **zu** = too: Die Wohnung ist **zu** teuer.
`,
w: `
die Wohnung (-en) | l’appartement | flat, apartment
das Haus (Häuser) | la maison | house
das Zimmer (-) | la pièce, la chambre | room
das Wohnzimmer (-) | le salon | living room
das Schlafzimmer (-) | la chambre à coucher | bedroom
die Küche (-n) | la cuisine | kitchen
das Bad (Bäder) | la salle de bain | bathroom
der Balkon (-e) | le balcon | balcony
der Tisch (-e) | la table | table
der Stuhl (Stühle) | la chaise | chair
das Sofa (-s) | le canapé | sofa
das Bett (-en) | le lit | bed
der Schrank (Schränke) | l’armoire | wardrobe, cupboard
die Lampe (-n) | la lampe | lamp
das Fenster (-) | la fenêtre | window
die Miete (-n) | le loyer | rent
neu | neuf, nouveau | new
hell | clair | bright
dunkel | sombre | dark
teuer | cher | expensive
billig | bon marché | cheap
schön | beau | beautiful, nice
ruhig | calme | quiet
laut | bruyant | loud, noisy
bequem | confortable | comfortable
`,
p: `
Ich wohne in einer Wohnung. | J’habite dans un appartement. | I live in a flat.
Die Wohnung hat drei Zimmer. | L’appartement a trois pièces. | The flat has three rooms.
Das Wohnzimmer ist groß und hell. | Le salon est grand et clair. | The living room is big and bright.
Die Küche ist leider klein. | La cuisine est malheureusement petite. | Unfortunately the kitchen is small.
Wie hoch ist die Miete? | Combien est le loyer ? | How much is the rent?
Die Miete ist zu teuer. | Le loyer est trop cher. | The rent is too expensive.
Das Sofa ist sehr bequem. | Le canapé est très confortable. | The sofa is very comfortable.
Der Schrank ist braun. | L’armoire est marron. | The wardrobe is brown.
Die Straße ist ruhig. | La rue est calme. | The street is quiet.
Wie findest du die Lampe? | Comment trouves-tu la lampe ? | What do you think of the lamp?
Ich finde sie schön. | Je la trouve belle. | I think it’s nice.
Gibt es einen Balkon? | Est-ce qu’il y a un balcon ? | Is there a balcony?
`,
g: `
Der Tisch ist neu. ___ ist schön. | Er | Er/Sie/Es | La table est neuve. Elle est belle. | The table is new. It’s nice.
Die Lampe ist alt. ___ ist hässlich. | Sie | Er/Sie/Es | La lampe est vieille. Elle est laide. | The lamp is old. It’s ugly.
Das Bett ist groß. ___ ist bequem. | Es | Er/Sie/Es | Le lit est grand. Il est confortable. | The bed is big. It’s comfortable.
Die Stühle sind neu. ___ sind teuer. | Sie | Er/Sie/Es | Les chaises sont neuves. Elles sont chères. | The chairs are new. They’re expensive.
Die Küche ist nicht groß, sie ist ___. | klein | klein/hell/neu | La cuisine n’est pas grande, elle est petite. | The kitchen isn’t big, it’s small.
Die Wohnung ist nicht billig, sie ist ___. | teuer | teuer/ruhig/dunkel | L’appartement n’est pas bon marché, il est cher. | The flat isn’t cheap, it’s expensive.
Das Zimmer ist nicht dunkel, es ist ___. | hell | hell/laut/alt | La pièce n’est pas sombre, elle est claire. | The room isn’t dark, it’s bright.
Wie findest du den Schrank? – Ich finde ___ schön. | ihn | ihn/sie/es | Comment trouves-tu l’armoire ? – Je la trouve belle. | What do you think of the wardrobe? – I think it’s nice.
Die Wohnung hat drei ___. | Zimmer | Zimmer/Zimmern/Zimmers | L’appartement a trois pièces. | The flat has three rooms.
Die Miete ist ___ teuer. (trop) | zu | zu/sehr/so | Le loyer est trop cher. | The rent is too expensive.
`,
r: { de: `Wohnung in Leipzig: Zwei Zimmer, Küche, Bad und Balkon. Die Wohnung ist 55 Quadratmeter groß, hell und ruhig. Das Wohnzimmer hat zwei große Fenster. Die Küche ist neu. Die Miete ist 520 Euro im Monat. Die Wohnung ist frei ab 1. März. Telefon: 0341 77 25 90.`,
  fr: `Appartement à Leipzig : deux pièces, cuisine, salle de bain et balcon. L’appartement fait 55 mètres carrés ; il est clair et calme. Le salon a deux grandes fenêtres. La cuisine est neuve. Le loyer est de 520 euros par mois. L’appartement est libre à partir du 1er mars. Téléphone : 0341 77 25 90.`,
  en: `Flat in Leipzig: two rooms, kitchen, bathroom and balcony. The flat is 55 square metres, bright and quiet. The living room has two big windows. The kitchen is new. The rent is 520 euros a month. The flat is free from 1 March. Phone: 0341 77 25 90.`,
  q: `
Wie viele Zimmer hat die Wohnung? | zwei | drei | fünf
Wie ist die Küche? | neu | alt | dunkel
Wie hoch ist die Miete? | 520 Euro | 55 Euro | 341 Euro
Wie ist die Wohnung? | hell und ruhig | dunkel und laut | klein und teuer
` },
d: `
Max | Hallo Sara! Wie ist deine neue Wohnung? | Salut Sara ! Comment est ton nouvel appartement ? | Hi Sara! What’s your new flat like?
Sara | Sie ist super! Sie hat zwei Zimmer und einen Balkon. | Il est super ! Il a deux pièces et un balcon. | It’s great! It has two rooms and a balcony.
Max | Ist sie hell? | Il est clair ? | Is it bright?
Sara | Ja, sehr hell. Das Wohnzimmer ist groß, aber die Küche ist klein. | Oui, très clair. Le salon est grand, mais la cuisine est petite. | Yes, very bright. The living room is big, but the kitchen is small.
Max | Und die Miete? | Et le loyer ? | And the rent?
Sara | Sie ist nicht so teuer: 480 Euro. | Il n’est pas si cher : 480 euros. | It’s not that expensive: 480 euros.
Max | Das ist gut! Ist die Straße laut? | C’est bien ! La rue est bruyante ? | That’s good! Is the street noisy?
Sara | Nein, sie ist sehr ruhig. Komm doch am Samstag! | Non, elle est très calme. Viens donc samedi ! | No, it’s very quiet. Come over on Saturday!
`,
wr: { fr: 'Décris ton logement : combien de pièces, comment elles sont, les meubles, la couleur, ce que tu aimes et n’aimes pas.', en: 'Describe your home: how many rooms, what they are like, the furniture, colours, what you like and don’t like.', min: 40,
  req: ['Zimmer=Zimmer', 'ist + adjectif=ist (groß;klein;hell;dunkel;neu;alt;schön;ruhig;laut;teuer;billig;bequem)', 'er / sie / es=\\ber\\b;\\bes\\b;\\bsie\\b', 'eine couleur=rot;blau;grün;gelb;schwarz;weiß;grau;braun;rosa'],
  model: 'Ich wohne in einer Wohnung in Tunis. Sie hat drei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist groß und hell. Dort steht ein Sofa. Es ist grau und sehr bequem. Mein Schlafzimmer ist klein, aber schön. Die Küche ist leider alt. Die Straße ist laut, aber ich finde die Wohnung toll.' },
pr: { fr: 'Le « r » allemand se fait au fond de la gorge, comme le « r » français (rot, Zimmer). En fin de syllabe, « -er » se dit presque « a » (Zimmer, teuer). « w » se dit « v » (Wohnung).', en: 'The German “r” is made at the back of the throat (rot). At the end of a syllable “-er” sounds almost like “a” (Zimmer, teuer). “w” sounds like English “v” (Wohnung).',
  w: `
rot | rouge | red
Zimmer | pièce | room
teuer | cher | expensive
Wohnung | appartement | flat
Fenster | fenêtre | window
ruhig | calme | quiet
Die Wohnung ist groß und hell. | L’appartement est grand et clair. | The flat is big and bright.
Wie hoch ist die Miete? | Combien est le loyer ? | How much is the rent?
` } },

/* ---------- 7 ---------- */
{ t: 'Mein Tag', fr: 'L’heure, les jours, les verbes séparables, l’inversion', en: 'Time, days, separable verbs, inversion',
sheet: `
# Quelle heure est-il ? | What time is it?
= Wie spät ist es? – Wie viel Uhr ist es? | Quelle heure est-il ? | What time is it?
T: Heure~Time | Officiel~Official | Courant~Everyday
t: 8:00 | acht Uhr | acht
t: 8:15 | acht Uhr fünfzehn | Viertel nach acht
t: 8:30 | acht Uhr dreißig | **halb neun** (!)
t: 8:45 | acht Uhr fünfundvierzig | Viertel vor neun
t: 8:10 | acht Uhr zehn | zehn nach acht
t: 8:50 | acht Uhr fünfzig | zehn vor neun
! **halb neun** = 8 h 30 (la moitié **vers** neuf), pas 9 h 30 ! | **halb neun** = 8:30 (half **towards** nine), not 9:30!
# Quand ? | When?
* **um** + heure : um 8 Uhr · **am** + jour : am Montag · **am** + moment : am Morgen, am Abend (mais **in der** Nacht). | **um** + clock time: um 8 Uhr · **am** + day: am Montag · **am** + part of day: am Morgen, am Abend (but **in der** Nacht).
t: Montag | Dienstag | Mittwoch | Donnerstag
t: Freitag | Samstag | Sonntag | das Wochenende
# Les verbes séparables | Separable verbs
> Le préfixe part **à la fin** de la phrase. Le verbe reste en position 2. | The prefix goes **to the end** of the sentence. The verb stays in position 2.
T: Infinitif~Infinitive | Phrase~Sentence
t: **auf**stehen | Ich stehe um 7 Uhr **auf**.
t: **ein**kaufen | Ich kaufe am Samstag **ein**.
t: **an**fangen | Der Kurs fängt um 9 Uhr **an**.
t: **fern**sehen | Am Abend sehe ich **fern**.
t: **an**rufen | Ich rufe meine Mutter **an**.
# L’inversion | Inversion
> Si la phrase commence par un temps (am Montag, um 8 Uhr…), le **verbe reste 2e** et le sujet passe **après**. | If the sentence starts with a time (am Montag, um 8 Uhr…), the **verb stays 2nd** and the subject comes **after** it.
= **Am Montag** arbeite **ich** bis 17 Uhr. | Le lundi, je travaille jusqu’à 17 h. | On Monday I work until 5 pm.
= **Um sieben Uhr** stehe **ich** auf. | À sept heures, je me lève. | At seven o’clock I get up.
! Jamais « Am Montag ich arbeite » ! | Never “Am Montag ich arbeite”!
`,
w: `
die Uhr (-en) | l’heure ; la montre | clock; o’clock
die Stunde (-n) | l’heure (durée) | hour
die Minute (-n) | la minute | minute
der Tag (-e) | le jour | day
die Woche (-n) | la semaine | week
das Wochenende (-n) | le week-end | weekend
der Morgen | le matin | morning
der Mittag | le midi | noon
der Abend (-e) | le soir | evening
die Nacht (Nächte) | la nuit | night
der Montag | lundi | Monday
der Mittwoch | mercredi | Wednesday
der Freitag | vendredi | Friday
der Sonntag | dimanche | Sunday
aufstehen | se lever | to get up
frühstücken | prendre le petit-déjeuner | to have breakfast
einkaufen | faire les courses | to go shopping
anfangen | commencer | to start
fernsehen | regarder la télé | to watch TV
anrufen | appeler (au téléphone) | to call
schlafen | dormir | to sleep
früh | tôt | early
spät | tard | late
immer | toujours | always
oft | souvent | often
dann | ensuite, puis | then
`,
p: `
Wie spät ist es? | Quelle heure est-il ? | What time is it?
Es ist halb acht. | Il est sept heures et demie. | It’s half past seven.
Es ist Viertel nach drei. | Il est trois heures et quart. | It’s quarter past three.
Ich stehe um sechs Uhr auf. | Je me lève à six heures. | I get up at six o’clock.
Dann frühstücke ich. | Ensuite je prends mon petit-déjeuner. | Then I have breakfast.
Am Samstag kaufe ich ein. | Le samedi je fais les courses. | On Saturday I go shopping.
Der Kurs fängt um neun Uhr an. | Le cours commence à neuf heures. | The course starts at nine o’clock.
Am Abend sehe ich fern. | Le soir je regarde la télé. | In the evening I watch TV.
Am Sonntag schlafe ich lange. | Le dimanche je dors longtemps. | On Sunday I sleep in.
Ich rufe dich morgen an. | Je t’appelle demain. | I’ll call you tomorrow.
Hast du am Freitag Zeit? | As-tu le temps vendredi ? | Do you have time on Friday?
Von Montag bis Freitag arbeite ich. | Je travaille du lundi au vendredi. | I work from Monday to Friday.
`,
g: `
Ich ___ um sieben Uhr auf. | stehe | stehe/stehst/aufstehe | Je me lève à sept heures. | I get up at seven.
Der Film fängt um acht Uhr ___. | an | an/auf/ein | Le film commence à huit heures. | The film starts at eight.
Am Samstag kaufe ich ___. | ein | an/ein/auf | Le samedi je fais les courses. | On Saturday I go shopping.
Er ___ am Abend fern. | sieht | seht/sieht/siehst | Il regarde la télé le soir. | He watches TV in the evening.
Wir treffen uns ___ 10 Uhr. | um | um/am/im | On se retrouve à 10 heures. | We meet at 10.
Ich arbeite ___ Montag. | am | um/am/im | Je travaille lundi. | I work on Monday.
Am Montag ___ ich bis fünf Uhr. | arbeite | arbeite/ich arbeite/arbeitest | Le lundi je travaille jusqu’à cinq heures. | On Monday I work until five.
Um acht Uhr frühstücke ___. | ich | ich/mich/mir | À huit heures je prends le petit-déjeuner. | At eight I have breakfast.
8:30 = halb ___ | neun | acht/neun/sieben | 8 h 30 | 8:30
9:15 = Viertel ___ neun | nach | nach/vor/um | 9 h 15 | 9:15
Du ___ deine Mutter an. | rufst | rufst/rufe/ruft | Tu appelles ta mère. | You call your mother.
Sie ___ lange. (= elle) | schläft | schlaft/schläft/schlafen | Elle dort longtemps. | She sleeps for a long time.
`,
r: { de: `Mein Tag: Von Montag bis Freitag stehe ich um halb sieben auf. Ich frühstücke schnell und trinke einen Tee. Um acht Uhr fängt meine Arbeit an. Am Mittag esse ich mit meinen Kollegen. Um fünf Uhr bin ich fertig. Dann kaufe ich ein oder ich gehe zum Sport. Am Abend koche ich und sehe ein bisschen fern. Am Wochenende schlafe ich lange!`,
  fr: `Ma journée : du lundi au vendredi, je me lève à six heures et demie. Je prends vite mon petit-déjeuner et je bois un thé. À huit heures, mon travail commence. À midi, je mange avec mes collègues. À cinq heures, j’ai fini. Ensuite je fais les courses ou je vais au sport. Le soir, je cuisine et je regarde un peu la télé. Le week-end, je dors longtemps !`,
  en: `My day: from Monday to Friday I get up at half past six. I have a quick breakfast and drink a tea. At eight o’clock my work starts. At lunchtime I eat with my colleagues. At five I’m done. Then I go shopping or I go to sport. In the evening I cook and watch a bit of TV. At the weekend I sleep in!`,
  q: `
Wann steht die Person auf? | um halb sieben | um sieben Uhr | um halb acht
Wann fängt die Arbeit an? | um acht Uhr | um fünf Uhr | am Mittag
Was macht die Person nach der Arbeit? | Sie kauft ein oder macht Sport. | Sie schläft. | Sie frühstückt.
Was macht sie am Wochenende? | Sie schläft lange. | Sie arbeitet. | Sie steht früh auf.
` },
d: `
Nina | Hast du am Samstag Zeit? Wir gehen ins Kino. | Tu as le temps samedi ? On va au cinéma. | Do you have time on Saturday? We’re going to the cinema.
Karim | Am Samstag? Am Vormittag kaufe ich ein. Wann fängt der Film an? | Samedi ? Le matin je fais les courses. Le film commence à quelle heure ? | Saturday? In the morning I go shopping. When does the film start?
Nina | Um halb acht. | À sept heures et demie. | At half past seven.
Karim | Perfekt, am Abend habe ich Zeit. Wo treffen wir uns? | Parfait, le soir j’ai le temps. On se retrouve où ? | Perfect, I’m free in the evening. Where shall we meet?
Nina | Vor dem Kino, um Viertel nach sieben. | Devant le cinéma, à sept heures et quart. | In front of the cinema, at quarter past seven.
Karim | Gut. Ich rufe dich am Freitag noch an. Bis dann! | D’accord. Je t’appelle encore vendredi. À plus ! | Good. I’ll call you on Friday. See you then!
`,
wr: { fr: 'Décris ta journée de travail ou d’étude, avec des heures. Utilise au moins deux verbes séparables et commence une phrase par une heure.', en: 'Describe your working or study day, with times. Use at least two separable verbs and start one sentence with a time.', min: 45,
  req: ['um … Uhr=um .{1,20}(Uhr|halb|Viertel)', 'aufstehen=stehe .*auf', 'un autre verbe séparable=kaufe .*ein;sehe .*fern;fängt .*an;rufe .*an;fange .*an', 'inversion=(Am|Um|Dann|Danach) \\S+ ich'],
  model: 'Von Montag bis Freitag stehe ich um sechs Uhr auf. Ich frühstücke und trinke einen Kaffee. Um halb acht fängt mein Kurs an. Am Mittag esse ich mit meiner Freundin. Am Nachmittag lerne ich zu Hause. Dann kaufe ich ein. Am Abend sehe ich fern und um elf Uhr schlafe ich.' },
pr: { fr: 'L’accent tonique est sur la 1re syllabe en général (Montag, Abend). Pour les verbes séparables, l’accent est sur le préfixe : AUFstehen, EINkaufen, ANrufen.', en: 'Stress usually falls on the first syllable (Montag, Abend). With separable verbs the stress is on the prefix: AUFstehen, EINkaufen, ANrufen.',
  w: `
aufstehen | se lever | to get up
einkaufen | faire les courses | to go shopping
anrufen | appeler | to call
Montag | lundi | Monday
Wochenende | week-end | weekend
Viertel nach acht | huit heures et quart | quarter past eight
Ich stehe um sieben Uhr auf. | Je me lève à sept heures. | I get up at seven.
Der Kurs fängt um neun Uhr an. | Le cours commence à neuf heures. | The course starts at nine.
` } },

/* ---------- 8 ---------- */
{ t: 'Freizeit und Hobbys', fr: 'Loisirs, l’accusatif (den / einen), le verbe « können »', en: 'Free time, the accusative (den / einen), the verb “können”',
sheet: `
# Le sujet et l’objet | Subject and object
> Le **nominatif** = le sujet (qui fait l’action). L’**accusatif** = l’objet direct (ce qu’on a, voit, achète…). | The **nominative** = the subject (who acts). The **accusative** = the direct object (what you have, see, buy…).
T: ~ | Nominatif~Nominative | Accusatif~Accusative
t: masculin~masculine | {m:der / ein / kein} | {m:==den== / ==einen== / ==keinen==}
t: féminin~feminine | {f:die / eine / keine} | {f:die / eine / keine}
t: neutre~neuter | {n:das / ein / kein} | {n:das / ein / kein}
t: pluriel~plural | {p:die / – / keine} | {p:die / – / keine}
! ==Seul le masculin change== à l’accusatif : der → **den**, ein → **einen**. | ==Only the masculine changes== in the accusative: der → **den**, ein → **einen**.
= **Der** Ball ist neu. → Ich kaufe **den** Ball. | Le ballon est neuf. → J’achète le ballon. | The ball is new. → I buy the ball.
= Ich habe **einen** Bruder. | J’ai un frère. | I have a brother.
= Ich habe **keinen** Hund. | Je n’ai pas de chien. | I don’t have a dog.
* Verbes + accusatif : haben, kaufen, sehen, lesen, spielen, brauchen, möchten, es gibt… | Verbs + accusative: haben, kaufen, sehen, lesen, spielen, brauchen, möchten, es gibt…
# können = pouvoir, savoir faire | können = can
T: ~ | können
t: ich | **kann**
t: du | **kannst**
t: er / sie | **kann**
t: wir / sie / Sie | können
t: ihr | könnt
> Le 2e verbe va **à la fin**, à l’infinitif. | The 2nd verb goes **to the end**, in the infinitive.
= Ich **kann** gut **schwimmen**. | Je sais bien nager. | I can swim well.
= **Kannst** du Gitarre **spielen**? | Tu sais jouer de la guitare ? | Can you play the guitar?
# Lire et voir : e → ie | Read and see: e → ie
t: lesen → du **liest**, er **liest** | sehen → du **siehst**, er **sieht** | fahren → du **fährst**, er **fährt**
`,
w: `
die Freizeit | le temps libre | free time
das Hobby (-s) | le loisir | hobby
spielen | jouer | to play
schwimmen | nager | to swim
lesen | lire | to read
das Buch (Bücher) | le livre | book
tanzen | danser | to dance
kochen | cuisiner | to cook
singen | chanter | to sing
fotografieren | photographier | to take photos
reisen | voyager | to travel
Rad fahren | faire du vélo | to cycle
der Fußball | le football | football
die Gitarre (-n) | la guitare | guitar
die Musik | la musique | music
der Film (-e) | le film | film
das Kino (-s) | le cinéma | cinema
der Sport | le sport | sport
der Hund (-e) | le chien | dog
die Katze (-n) | le chat | cat
können | pouvoir, savoir | can
kaufen | acheter | to buy
sehen | voir | to see
brauchen | avoir besoin de | to need
es gibt | il y a | there is, there are
toll | génial | great
langweilig | ennuyeux | boring
`,
p: `
Was machst du in deiner Freizeit? | Que fais-tu pendant ton temps libre ? | What do you do in your free time?
Ich lese gern Bücher. | J’aime lire des livres. | I like reading books.
Ich spiele gern Fußball. | J’aime jouer au foot. | I like playing football.
Kannst du schwimmen? | Tu sais nager ? | Can you swim?
Ich kann nicht gut tanzen. | Je ne sais pas bien danser. | I can’t dance well.
Ich habe einen Hund und eine Katze. | J’ai un chien et un chat. | I have a dog and a cat.
Ich brauche einen neuen Ball. | J’ai besoin d’un nouveau ballon. | I need a new ball.
Wir sehen heute einen Film. | Nous regardons un film aujourd’hui. | We are watching a film today.
Gibt es hier ein Kino? | Y a-t-il un cinéma ici ? | Is there a cinema here?
Das finde ich langweilig. | Je trouve ça ennuyeux. | I find that boring.
Am Wochenende fahre ich Rad. | Le week-end je fais du vélo. | At the weekend I go cycling.
Hast du Lust? | Ça te dit ? | Do you feel like it?
`,
g: `
Ich habe ___ Bruder. | einen | ein/einen/eine | J’ai un frère. | I have a brother.
Ich habe ___ Katze. | eine | ein/einen/eine | J’ai un chat. | I have a cat.
Ich kaufe ___ Buch. | ein | ein/einen/eine | J’achète un livre. | I buy a book.
Ich habe ___ Hund. | keinen | kein/keinen/keine | Je n’ai pas de chien. | I don’t have a dog.
Wir sehen ___ Film. | den | der/den/dem | Nous regardons le film. | We watch the film.
___ Film ist toll. | Der | Der/Den/Dem | Le film est génial. | The film is great.
Es gibt hier ___ Kino. | kein | kein/keinen/keine | Il n’y a pas de cinéma ici. | There’s no cinema here.
Ich ___ gut schwimmen. | kann | kann/kannst/können | Je sais bien nager. | I can swim well.
___ du Gitarre spielen? | Kannst | Kann/Kannst/Könnt | Tu sais jouer de la guitare ? | Can you play the guitar?
Er kann sehr gut ___. | kochen | kocht/kochen/kochst | Il sait très bien cuisiner. | He can cook very well.
Sie ___ ein Buch. (= elle) | liest | lest/liest/lesen | Elle lit un livre. | She is reading a book.
Du ___ den Film. | siehst | seht/siehst/sehst | Tu vois le film. | You see the film.
`,
r: { de: `Hallo, ich bin Jonas! In meiner Freizeit mache ich viel Sport. Ich spiele zweimal pro Woche Fußball und am Wochenende fahre ich Rad. Ich kann auch gut schwimmen. Meine Freundin Mia findet Sport langweilig. Sie liest gern und sie spielt Gitarre. Sie kann sehr schön singen! Zusammen sehen wir oft einen Film oder wir kochen für unsere Freunde.`,
  fr: `Salut, je suis Jonas ! Pendant mon temps libre, je fais beaucoup de sport. Je joue au foot deux fois par semaine et le week-end je fais du vélo. Je sais aussi bien nager. Mon amie Mia trouve le sport ennuyeux. Elle aime lire et elle joue de la guitare. Elle chante très bien ! Ensemble, nous regardons souvent un film ou nous cuisinons pour nos amis.`,
  en: `Hi, I’m Jonas! In my free time I do a lot of sport. I play football twice a week and at the weekend I cycle. I can swim well too. My girlfriend Mia finds sport boring. She likes reading and she plays the guitar. She can sing beautifully! Together we often watch a film or cook for our friends.`,
  q: `
Wie oft spielt Jonas Fußball? | zweimal pro Woche | jeden Tag | am Wochenende
Wie findet Mia Sport? | langweilig | toll | gut
Was kann Mia sehr gut? | singen | schwimmen | Fußball spielen
Was machen Jonas und Mia zusammen? | Sie sehen Filme oder kochen. | Sie spielen Fußball. | Sie fahren Rad.
` },
d: `
Mia | Was machst du am Wochenende? | Que fais-tu ce week-end ? | What are you doing at the weekend?
Sami | Am Samstag spiele ich Fußball. Spielst du auch? | Samedi je joue au foot. Tu joues aussi ? | On Saturday I’m playing football. Do you play too?
Mia | Nein, Fußball finde ich langweilig. Ich lese lieber. | Non, je trouve le foot ennuyeux. Je préfère lire. | No, I find football boring. I prefer reading.
Sami | Und am Sonntag? Es gibt einen neuen Film im Kino. | Et dimanche ? Il y a un nouveau film au cinéma. | And on Sunday? There’s a new film at the cinema.
Mia | Oh, toll! Hast du Lust? | Oh, génial ! Ça te dit ? | Oh, great! Do you feel like it?
Sami | Ja, gern! Ich kaufe die Karten. | Oui, volontiers ! J’achète les billets. | Yes, I’d love to! I’ll buy the tickets.
`,
wr: { fr: 'Écris un message à un nouvel ami : tes loisirs, ce que tu sais (ou ne sais pas) faire, et propose une activité pour le week-end.', en: 'Write a message to a new friend: your hobbies, what you can (or can’t) do, and suggest an activity for the weekend.', min: 40,
  req: ['gern=gern', 'können=kann;kannst', 'accusatif masc.=\\b(einen|den|keinen)\\b', 'question=\\?'],
  model: 'Hallo Jonas! In meiner Freizeit lese ich gern und ich koche sehr gern. Ich kann gut schwimmen, aber ich kann nicht tanzen. Ich habe einen Hund. Er heißt Rocky. Am Samstag gibt es einen neuen Film im Kino. Hast du Lust? Wir können zusammen gehen. Bis bald!' },
pr: { fr: '« ng » se dit en une seule consonne nasale, sans « g » à la fin (singen, langweilig). « -ig » final se dit « ich » (langweilig, ruhig).', en: '“ng” is one nasal sound, with no hard “g” at the end (singen, langweilig). Final “-ig” sounds like “ich” (langweilig, ruhig).',
  w: `
singen | chanter | to sing
langweilig | ennuyeux | boring
lesen | lire | to read
schwimmen | nager | to swim
Gitarre | guitare | guitar
Freizeit | temps libre | free time
Ich spiele gern Fußball. | J’aime jouer au foot. | I like playing football.
Kannst du gut singen? | Tu sais bien chanter ? | Can you sing well?
` } },
],

exam: {
  texts: [
    { de: `Liebe Sara,
ich heiße Petra Klein und ich bin deine Gastmutter in Freiburg. Ich bin 45 Jahre alt und arbeite in einer Bank. Mein Mann Thomas ist Lehrer. Wir haben zwei Kinder: Lukas ist zwölf und Emma ist acht. Wir haben auch eine Katze. Unser Haus ist nicht groß, aber es hat einen Garten. Dein Zimmer ist hell und ruhig. Am Morgen frühstücken wir um sieben Uhr. Isst du gern Brötchen? Am Wochenende fahren wir oft Rad. Kannst du Rad fahren?
Bis bald!
Petra`,
      q: `
Wo wohnt Petra? | in Freiburg | in Berlin | in einer Bank
Was ist Thomas von Beruf? | Lehrer | Bankkaufmann | Student
Wie alt ist Emma? | acht | zwölf | fünfundvierzig
Wie ist Saras Zimmer? | hell und ruhig | groß und laut | klein und dunkel
Was macht die Familie oft am Wochenende? | Sie fahren Rad. | Sie gehen ins Kino. | Sie arbeiten.
` },
    { de: `Sprachcafé im Kulturhaus
Jeden Mittwoch von 18:30 bis 20:00 Uhr
Sie lernen Deutsch und möchten sprechen? Kommen Sie ins Sprachcafé! Hier sprechen Menschen aus vielen Ländern zusammen Deutsch. Es gibt Kaffee, Tee und Kuchen. Der Eintritt kostet nichts. Am ersten Mittwoch im Monat gibt es einen Kochabend: Bringen Sie ein Essen aus Ihrem Land mit!
Kulturhaus, Bahnhofstraße 12, Telefon 0761 33 48 20`,
      q: `
Wann ist das Sprachcafé? | am Mittwoch | am Montag | am Samstag
Wann fängt es an? | um halb sieben | um acht Uhr | um sechs Uhr
Was kostet der Eintritt? | nichts | zwölf Euro | zwanzig Euro
Was ist am ersten Mittwoch im Monat? | ein Kochabend | ein Film | ein Deutschtest
Was gibt es zu trinken? | Kaffee und Tee | nur Wasser | Saft und Milch
` },
  ],
  write: { fr: 'Réponds à Petra, ta future mère d’accueil : présente-toi (nom, âge, pays, langues), parle de ta famille, de ce que tu aimes manger et de tes loisirs. Réponds à ses deux questions.', en: 'Reply to Petra, your future host mother: introduce yourself (name, age, country, languages), talk about your family, what you like to eat and your hobbies. Answer her two questions.', min: 60,
    req: ['Liebe Petra=Liebe Petra', 'âge=Jahre alt', 'langues=spreche', 'famille=Bruder;Schwester;Eltern;Mutter;Vater;Geschwister', 'Brötchen=Brötchen', 'Rad fahren=Rad', 'salutation finale=Viele Grüße;Liebe Grüße;Bis bald'],
    model: 'Liebe Petra, vielen Dank für deine E-Mail! Ich heiße Sara, ich bin dreißig Jahre alt und ich komme aus Tunesien. Ich spreche Arabisch, Französisch und ein bisschen Deutsch. Ich habe einen Bruder und eine Schwester. Meine Eltern wohnen in Sousse. Ja, ich esse sehr gern Brötchen! Ich trinke am Morgen gern Tee. In meiner Freizeit lese ich und ich koche gern. Ja, ich kann Rad fahren, aber nicht sehr gut. Liebe Grüße\nSara' },
  speak: `
Wie heißen Sie? | heiße;bin;Name | Ich heiße Sara. | Comment vous appelez-vous ? | What is your name?
Woher kommen Sie? | komme aus;aus | Ich komme aus Tunesien. | D’où venez-vous ? | Where are you from?
Wo wohnen Sie? | wohne | Ich wohne in Tunis. | Où habitez-vous ? | Where do you live?
Wie alt sind Sie? | Jahre;alt | Ich bin dreißig Jahre alt. | Quel âge avez-vous ? | How old are you?
Welche Sprachen sprechen Sie? | spreche | Ich spreche Arabisch und Französisch. | Quelles langues parlez-vous ? | Which languages do you speak?
Haben Sie Geschwister? | habe;keine | Ja, ich habe einen Bruder. | Avez-vous des frères et sœurs ? | Do you have siblings?
Was trinken Sie gern? | trinke | Ich trinke gern Tee. | Qu’aimez-vous boire ? | What do you like to drink?
Was machen Sie in Ihrer Freizeit? | gern;spiele;lese;koche;mache | In meiner Freizeit lese ich gern. | Que faites-vous pendant votre temps libre ? | What do you do in your free time?
Wann stehen Sie am Morgen auf? | stehe;auf;Uhr | Ich stehe um sieben Uhr auf. | À quelle heure vous levez-vous le matin ? | When do you get up in the morning?
`,
},
});
