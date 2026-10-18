/* GermanTop v4 — engine.
   Content lives in data/*.js (one file per level, registered with DW.level()).
   Views: home → level → unit (9 steps) → quiz runner; level exam with 5 parts (90% each). */
'use strict';
(function () {
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const today = () => new Date().toISOString().slice(0, 10);
const dayDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);

/* ---------------- progress ---------------- */
const KEY = 'deutschweg.v4';
const DEF = () => ({ lang: null, start: null, units: {}, exams: {}, xp: 0, streak: 0, last: null, mistakes: {}, voice: '', rate: 0.92, updated: 0 });
let S = (() => { try { return Object.assign(DEF(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return DEF(); } })();
let cloud = null, saveTimer = 0;
function save() {
  S.updated = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* private window */ }
  if (cloud) { clearTimeout(saveTimer); saveTimer = setTimeout(() => cloud.set({ json: JSON.stringify(S), updated: S.updated }).catch(() => {}), 800); }
}
async function initCloud() {
  if (!window.claude || !window.claude.use) return;
  try {
    const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
    if (!db || !user) return;
    const id = await user.id(); if (!id) return;
    const ref = db.doc('data/users/' + id + '/progress4');
    const snap = await ref.get();
    if (snap.exists) {
      const d = snap.data();
      if (d && d.updated > S.updated) { S = Object.assign(DEF(), JSON.parse(d.json)); try { localStorage.setItem(KEY, d.json); } catch (e) {} render(); }
    }
    cloud = ref;
  } catch (e) { /* stay local */ }
}
let samplePromise = null;
const getSample = () => samplePromise || (samplePromise = (window.claude && window.claude.use) ? window.claude.use('sample').catch(() => null) : Promise.resolve(null));

function award(xp) {
  S.xp += xp;
  const d = today();
  if (S.last !== d) { S.streak = S.last && dayDiff(S.last, d) === 1 ? S.streak + 1 : 1; S.last = d; }
  if (!S.start) S.start = d;
}
const liveStreak = () => (S.last && dayDiff(S.last, today()) <= 1 ? S.streak : 0);

/* ---------------- language ---------------- */
const L = (fr, en) => (S.lang === 'en' ? en : fr);
const M = o => (S.lang === 'en' ? o.en : o.fr); // meaning of an item
const T = {
  home: ['Accueil', 'Home'], cont: ['Continuer', 'Continue'], start: ['Commencer', 'Start'], back: ['← Retour', '← Back'],
  check: ['Vérifier', 'Check'], next: ['Suivant', 'Next'], finish: ['Terminer', 'Finish'], again: ['Recommencer', 'Try again'],
  listen: ['Écouter', 'Listen'], slow: ['Lent', 'Slow'], locked: ['Verrouillé', 'Locked'], passed: ['Réussi', 'Passed'],
  units: ['Unités', 'Units'], exam: ['Examen', 'Exam'], settings: ['Réglages', 'Settings'], mistakes: ['Mes erreurs', 'My mistakes'],
  plan: ['Mon plan', 'My plan'], correct: ['Correct !', 'Correct!'], wrong: ['Pas tout à fait', 'Not quite'], answer: ['Réponse', 'Answer'],
  yourAns: ['Ta réponse', 'Your answer'], skip: ['Passer', 'Skip'], score: ['Score', 'Score'],
};
const t = k => L(T[k][0], T[k][1]);

/* ---------------- German helpers ---------------- */
const ONES = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
function numDe(n) {
  if (n < 20) return ONES[n];
  if (n < 100) { const o = n % 10, te = TENS[Math.floor(n / 10)]; return o ? (o === 1 ? 'ein' : ONES[o]) + 'und' + te : te; }
  if (n < 1000) { const h = Math.floor(n / 100), r = n % 100; return (h === 1 ? 'ein' : ONES[h]) + 'hundert' + (r ? numDe(r) : ''); }
  if (n < 1e6) { const th = Math.floor(n / 1000), r = n % 1000; return (th === 1 ? 'ein' : numDe(th)) + 'tausend' + (r ? numDe(r) : ''); }
  return String(n);
}
// spoken form: strip plural notes "(-n)", gaps, abbreviations
const spoken = s => String(s).replace(/\s*\([^)]*\)/g, '').replace(/_{2,}/g, '…').replace(/\bjdn\./g, 'jemanden').replace(/\bjdm\./g, 'jemandem').replace(/\betw\./g, 'etwas').replace(/\s+/g, ' ').trim();
function norm(s, keepCase) {
  s = spoken(s).replace(/[„“"”«»‚‘’'`´]/g, '').replace(/(\d+)/g, m => ' ' + numDe(+m) + ' ');
  s = s.replace(/[.,!?;:()\-–—…/€%]/g, ' ').replace(/\s+/g, ' ').trim();
  return keepCase ? s : s.toLowerCase();
}
const fold = s => s.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/Ä/g, 'Ae').replace(/Ö/g, 'Oe').replace(/Ü/g, 'Ue').replace(/ß/g, 'ss');
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let p = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const c = [i]; for (let j = 1; j <= n; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; }
  return p[n];
}
const ARTS = /^(der|die|das)\s+/i;
// Grade a typed German answer against accepted answers. exam = strict (no typo tolerance, capitals count).
const lcFirst = s => s.charAt(0).toLowerCase() + s.slice(1);
function gradeText(given, answers, exam) {
  const g = lcFirst(norm(given, true));
  if (!g || (/\d/.test(given) && !answers.some(x => /\d/.test(x)))) return { ok: false, best: answers[0] };
  let best = answers[0], bestD = 1e9;
  for (const a of answers) {
    const n = lcFirst(norm(a, true));
    if (g === n) return { ok: true, best: a };
    if (g.toLowerCase() === n.toLowerCase()) return exam ? { ok: false, best: a, note: 'caps' } : { ok: true, best: a, note: 'caps' };
    if (fold(g).toLowerCase() === fold(n).toLowerCase()) return { ok: true, best: a, note: 'umlaut' };
    const am = n.match(ARTS);
    if (am && g.toLowerCase() === n.slice(am[0].length).toLowerCase()) return { ok: false, best: a, note: 'article' };
    const gm = g.match(ARTS);
    if (am && gm && gm[1].toLowerCase() !== am[1].toLowerCase() && g.slice(gm[0].length).toLowerCase() === n.slice(am[0].length).toLowerCase()) return { ok: false, best: a, note: 'gender' };
    const d = lev(g.toLowerCase(), n.toLowerCase());
    if (d < bestD) { bestD = d; best = a; }
  }
  const n = lcFirst(norm(best, true));
  if (!exam && bestD <= Math.max(1, Math.floor(n.length / 14)) && n.length >= 6) return { ok: true, best, note: 'typo' };
  return { ok: false, best };
}
const NOTES = {
  caps: ['Attention aux majuscules : en allemand, tous les noms prennent une majuscule.', 'Watch the capitals: every German noun starts with a capital letter.'],
  umlaut: ['Accepté, mais écris les trémas : ä ö ü ß.', 'Accepted, but write the umlauts: ä ö ü ß.'],
  article: ['Il manque l’article (der / die / das). Apprends toujours le nom avec son article.', 'The article is missing (der / die / das). Always learn a noun with its article.'],
  gender: ['Mauvais article : le genre est faux.', 'Wrong article: the gender is wrong.'],
  typo: ['Presque : petite faute de frappe. Compare avec la réponse.', 'Almost: a small typo. Compare with the answer.'],
};
// word-level LCS score for speech recognition
function matchScore(said, target) {
  const a = fold(norm(said)).split(' ').filter(Boolean), b = fold(norm(target)).split(' ').filter(Boolean);
  if (!b.length) return { score: 0, hit: [] };
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  const hit = new Array(b.length).fill(false); let i = a.length, j = b.length;
  while (i && j) { if (a[i - 1] === b[j - 1]) { hit[j - 1] = true; i--; j--; } else if (dp[i - 1][j] >= dp[i][j - 1]) i--; else j--; }
  return { score: dp[a.length][b.length] / b.length, hit };
}

/* ---------------- voice ---------------- */
let VOICES = [];
function loadVoices() { if ('speechSynthesis' in window) VOICES = speechSynthesis.getVoices().filter(v => /^de([-_]|$)/i.test(v.lang)); }
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = () => { loadVoices(); if (V.view === 'settings') render(); }; }
const vRank = v => (/natural|neural/i.test(v.name) ? 0 : /online/i.test(v.name) ? 1 : /google/i.test(v.name) ? 2 : /premium|enhanced|siri/i.test(v.name) ? 3 : /anna|petra|markus|yannick|helena|katja|conrad|hedda|stefan|amala|seraphina|florian/i.test(v.name) ? 4 : /espeak|mbrola/i.test(v.name) ? 9 : 6) + (/de-DE/i.test(v.lang) ? 0 : 0.5);
function voice() { if (S.voice) { const v = VOICES.find(x => x.name === S.voice); if (v) return v; } return VOICES.slice().sort((a, b) => vRank(a) - vRank(b))[0] || null; }
let sayToken = 0;
function say(text, rate) {
  if (!('speechSynthesis' in window)) return Promise.resolve();
  speechSynthesis.cancel();
  const tok = ++sayToken;
  const parts = spoken(text).match(/[^.!?]+[.!?]*/g) || [spoken(text)]; // chunk per sentence (Chrome cuts long utterances)
  return parts.reduce((p, part) => p.then(() => tok !== sayToken ? null : new Promise(res => {
    const u = new SpeechSynthesisUtterance(part.trim()); u.lang = 'de-DE'; const v = voice(); if (v) u.voice = v; u.rate = rate || S.rate;
    u.onend = u.onerror = () => res(); speechSynthesis.speak(u);
  })), Promise.resolve());
}
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null, srBlocked = false; // srBlocked: the page may not use the microphone (e.g. inside claude.ai)
const canHear = () => !!SR && !srBlocked;
function hear() {
  return new Promise(res => {
    if (!SR) return res({ err: 'unsupported' });
    let done = false; const fin = v => { if (!done) { done = true; rec = null; res(v); } };
    try {
      rec = new SR(); rec.lang = 'de-DE'; rec.maxAlternatives = 5; rec.interimResults = false; rec.continuous = false;
      rec.onresult = e => fin({ alts: Array.from(e.results[0]).map(a => a.transcript) });
      rec.onerror = e => fin({ err: e.error }); rec.onend = () => fin({ alts: [] });
      speechSynthesis && speechSynthesis.cancel(); rec.start();
    } catch (e) { fin({ err: 'start' }); }
  });
}

/* ---------------- content ---------------- */
const LEVELS = [];
const rows = s => String(s || '').trim().split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('//')).map(l => l.split('|').map(x => x.trim()));
window.DW = {
  level(lv) {
    lv.units.forEach((u, i) => {
      u.id = lv.id + '-' + (i + 1); u.n = i + 1; u.lv = lv;
      u.W = rows(u.w).map(r => ({ de: r[0], fr: r[1], en: r[2], uid: u.id }));
      u.P = rows(u.p).map(r => { const alts = r[0].split('¦').map(x => x.trim()); return { de: alts[0], alts, fr: r[1], en: r[2], uid: u.id }; });
      u.G = rows(u.g).map(r => ({ gap: r[0], ans: r[1], opts: r[2] ? r[2].split('/').map(x => x.trim()) : null, fr: r[3], en: r[4], full: r[0].replace('___', r[1]), uid: u.id }));
      u.D = rows(u.d).map(r => ({ who: r[0], de: r[1], fr: r[2], en: r[3], uid: u.id }));
      if (u.r) u.r.Q = rows(u.r.q).map(r => ({ q: r[0], a: r[1], opts: [r[1], ...r.slice(2)] }));
      u.PR = u.pr ? { fr: u.pr.fr, en: u.pr.en, items: rows(u.pr.w).map(r => ({ de: r[0], fr: r[1] || '', en: r[2] || r[1] || '' })) } : null;
    });
    if (lv.exam) {
      (lv.exam.texts || []).forEach(x => { x.Q = rows(x.q).map(r => ({ q: r[0], a: r[1], opts: [r[1], ...r.slice(2)] })); });
      lv.exam.SP = rows(lv.exam.speak).map(r => ({ q: r[0], re: r[1].replace(/;/g, '|'), model: r[2], fr: r[3], en: r[4] }));
    }
    LEVELS.push(lv);
  },
};
const unitById = id => { for (const lv of LEVELS) for (const u of lv.units) if (u.id === id) return u; return null; };
const levelById = id => LEVELS.find(l => l.id === id);
const US = id => (S.units[id] || (S.units[id] = { steps: {}, test: 0, review: false }));
const EX = id => (S.exams[id] || (S.exams[id] = { parts: {}, passed: false, tries: 0, flagged: [] }));
const UNIT_PASS = 85, EXAM_PASS = 90;

function levelOpen(i) { return i === 0 || EX(LEVELS[i - 1].id).passed; }
function unitOpen(u) { const i = u.n - 1; if (!levelOpen(LEVELS.indexOf(u.lv))) return false; return i === 0 || US(u.lv.units[i - 1].id).test >= UNIT_PASS; }
const unitDone = u => US(u.id).test >= UNIT_PASS && !US(u.id).review;
function examOpen(lv) { return levelOpen(LEVELS.indexOf(lv)) && lv.units.every(u => US(u.id).test >= UNIT_PASS); }
function nextThing() {
  for (const lv of LEVELS) {
    if (!levelOpen(LEVELS.indexOf(lv))) break;
    for (const u of lv.units) if (!unitDone(u) && unitOpen(u)) return { u };
    if (!EX(lv.id).passed) return { exam: lv };
  }
  return null;
}

/* ---------------- question builders ---------------- */
const STEPS = [
  { k: 'notes', fr: 'Notes', en: 'Notes', icon: '✎' },
  { k: 'words', fr: 'Mots', en: 'Words', icon: 'Aa' },
  { k: 'phrases', fr: 'Phrases', en: 'Phrases', icon: '“ ”' },
  { k: 'grammar', fr: 'Grammaire', en: 'Grammar', icon: '⚙' },
  { k: 'sounds', fr: 'Prononciation', en: 'Sounds', icon: '♪' },
  { k: 'read', fr: 'Lire', en: 'Read', icon: '¶' },
  { k: 'write', fr: 'Écrire', en: 'Write', icon: '✍' },
  { k: 'talk', fr: 'Conversation', en: 'Talk', icon: '⇄' },
  { k: 'test', fr: 'Test', en: 'Test', icon: '✓' },
];
const isNoun = w => ARTS.test(w.de);
function distract(pool, item, key, n) {
  const seen = new Set([key(item)]); const out = [];
  for (const x of shuffle(pool)) { const k = key(x); if (!k || seen.has(k)) continue; seen.add(k); out.push(k); if (out.length >= n) break; }
  return out;
}
// distractors only from units already reached (whole level if that is too small)
const lvPool = (u, kind) => { const a = u.lv.units.slice(0, u.n).flatMap(x => x[kind]); return a.length >= 8 ? a : u.lv.units.flatMap(x => x[kind]); };
function qMeaning(w, pool) { return { t: 'mc', uid: w.uid, kind: L('Que veut dire… ?', 'What does it mean?'), de: w.de, audio: w.de, opts: shuffle([M(w), ...distract(pool, w, M, 3)]), a: M(w) }; }
function qFromMeaning(w, pool) { return { t: 'mc', uid: w.uid, kind: L('Comment dit-on en allemand… ?', 'How do you say it in German?'), prompt: M(w), opts: shuffle([w.de, ...distract(pool, w, x => x.de, 3)]), a: w.de, deOpts: true }; }
function qTypeWord(w) { return { t: 'type', uid: w.uid, kind: isNoun(w) ? L('Écris le mot avec son article', 'Write the word with its article') : L('Écris en allemand', 'Write it in German'), prompt: M(w), ans: [spoken(w.de)], say: w.de }; }
function qListenWord(w, pool) { return { t: 'mc', uid: w.uid, kind: L('Écoute. Qu’est-ce que c’est ?', 'Listen. What is it?'), audio: w.de, hideDe: true, opts: shuffle([M(w), ...distract(pool, w, M, 3)]), a: M(w) }; }
function qDrill(g) {
  return g.opts
    ? { t: 'mc', uid: g.uid, kind: L('Complète la phrase', 'Complete the sentence'), gap: g.gap, sub: M(g), opts: shuffle(g.opts), a: g.ans, deOpts: true, say: g.full }
    : { t: 'type', uid: g.uid, kind: L('Complète la phrase (écris le mot qui manque)', 'Complete the sentence (type the missing word)'), gap: g.gap, sub: M(g), ans: g.ans.split('¦'), say: g.full, gapOnly: true };
}
const orderable = p => { const n = p.de.split(/\s+/).length; return n >= 3 && n <= 11; };
function qOrder(p) {
  const m = p.de.match(/^(.*?)([.!?…]*)$/); const punct = m[2];
  const toks = m[1].split(/\s+/); let sh = shuffle(toks.map((w, i) => ({ w, i }))); let guard = 0;
  while (sh.map(x => x.w).join(' ') === m[1] && guard++ < 6) sh = shuffle(sh);
  return { t: 'order', uid: p.uid, kind: L('Mets les mots dans le bon ordre', 'Put the words in the right order'), prompt: M(p), chips: sh.map(x => x.w), punct, ans: [p.de], say: p.de };
}
function qTranslate(p) { return { t: 'type', uid: p.uid, kind: L('Traduis en allemand', 'Translate into German'), prompt: M(p), ans: p.alts || [p.de], say: p.de, long: true }; }
function qDictation(p) { return { t: 'type', uid: p.uid, kind: L('Écoute et écris ce que tu entends', 'Listen and write what you hear'), audio: p.de, hideDe: true, ans: [p.de], say: p.de, long: true }; }
function qListenMeaning(p, pool) { return { t: 'mc', uid: p.uid, kind: L('Écoute. Que veut dire la phrase ?', 'Listen. What does the sentence mean?'), audio: p.de, hideDe: true, opts: shuffle([M(p), ...distract(pool, p, M, 3)]), a: M(p) }; }
function qSpeak(p, ctx) { return { t: 'speak', uid: p.uid, kind: ctx ? L('Réponds : dis ta réplique', 'Your turn: say your line') : L('Dis la phrase à voix haute', 'Say the sentence out loud'), target: p.de, sub: M(p), ctx, say: p.de }; }
function qRead(x, text, uid) { return { t: 'mc', uid, kind: L('Lis le texte et réponds', 'Read the text and answer'), text, prompt: x.q, opts: shuffle(x.opts), a: x.a, deOpts: true }; }
function qWrite(task, uid, pts) { return { t: 'write', uid, kind: L('Écris un texte', 'Write a text'), task, pts: pts || 4 }; }

function practiceFor(u, step) {
  const wp = lvPool(u, 'W'), pp = lvPool(u, 'P');
  if (step === 'words') return shuffle(u.W).slice(0, 14).map((w, i) => [qMeaning, qFromMeaning, qTypeWord, qListenWord][i % 4](w, wp));
  if (step === 'phrases') {
    const o = pick(u.P.filter(orderable), 3), r = pick(u.P.filter(p => !o.includes(p)), 3), l = pick(u.P, 2);
    return [...o.map(qOrder), ...r.map(qTranslate), ...l.map(p => qListenMeaning(p, pp))];
  }
  if (step === 'grammar') return shuffle(u.G).map(qDrill);
  if (step === 'sounds') return u.PR.items.map(it => qSpeak({ de: it.de, fr: it.fr, en: it.en, uid: u.id }));
  if (step === 'read') return u.r.Q.map(x => qRead(x, u.r.de, u.id));
  if (step === 'write') return [qWrite(u.wr, u.id, 4)];
  if (step === 'talk') {
    const me = (u.D.find(l => l.who !== u.D[0].who) || u.D[0]).who;
    return u.D.map((l, i) => l.who === me ? qSpeak(l, i > 0 ? u.D[i - 1] : null) : null).filter(Boolean);
  }
  return [];
}
function unitTest(u) {
  const wp = lvPool(u, 'W'), w = shuffle(u.W), p = shuffle(u.P);
  const ord = p.filter(orderable).slice(0, 3), rest = p.filter(x => !ord.includes(x));
  return [
    qMeaning(w[0], wp), qMeaning(w[1], wp), qFromMeaning(w[2], wp), qFromMeaning(w[3], wp), qTypeWord(w[4]), qTypeWord(w[5]),
    ...pick(u.G, 5).map(qDrill), ...ord.map(qOrder), ...rest.slice(0, 3).map(qTranslate), ...rest.slice(3, 5).map(qDictation),
    qSpeak(p[p.length - 1]),
  ];
}
const PARTS = [
  { k: 'hoeren', de: 'Hören', fr: 'Compréhension orale', en: 'Listening' },
  { k: 'lesen', de: 'Lesen', fr: 'Compréhension écrite', en: 'Reading' },
  { k: 'wg', de: 'Wortschatz & Grammatik', fr: 'Vocabulaire et grammaire', en: 'Vocabulary & grammar' },
  { k: 'schreiben', de: 'Schreiben', fr: 'Expression écrite', en: 'Writing' },
  { k: 'sprechen', de: 'Sprechen', fr: 'Expression orale', en: 'Speaking' },
];
function examPart(lv, k) {
  const W = lv.units.flatMap(u => u.W), P = lv.units.flatMap(u => u.P), G = lv.units.flatMap(u => u.G), D = lv.units.flatMap(u => u.D);
  const longP = P.filter(p => p.de.split(' ').length >= 4);
  if (k === 'hoeren') { const d = pick(longP, 5); return [...d.map(qDictation), ...pick([...P, ...D].filter(x => !d.includes(x)), 5).map(x => qListenMeaning(x, P))]; }
  if (k === 'lesen') return lv.exam.texts.flatMap(x => x.Q.map(q => qRead(q, x.de, null)));
  if (k === 'wg') return [...pick(W, 7).map((w, i) => i % 2 ? qTypeWord(w) : qFromMeaning(w, W)), ...pick(G, 8).map(qDrill)];
  if (k === 'schreiben') return [...pick(longP, 6).map(qTranslate), qWrite(lv.exam.write, null, 4)];
  if (k === 'sprechen') {
    const rep = pick([...longP, ...D.filter(x => x.de.split(' ').length >= 4)], 8).map(x => qSpeak(x));
    const ans = pick(lv.exam.SP, 2).map(s => ({ t: 'speak', uid: null, kind: L('Réponds à la question (phrase complète)', 'Answer the question (full sentence)'), ask: s.q, re: s.re, model: s.model, sub: M(s), say: s.q, open: true }));
    return [...rep, ...ans];
  }
  return [];
}

/* ---------------- mistakes notebook ---------------- */
const qKey = q => q.t + ':' + (q.a || (q.ans && q.ans[0]) || q.target || '') + ':' + (q.prompt || q.gap || '');
function noteMistake(q, ok) {
  if (q.t === 'write' || q.open || !q.uid) return;
  const k = qKey(q);
  if (!ok) S.mistakes[k] = { q: JSON.parse(JSON.stringify(q)), n: 0, at: Date.now() };
  else if (S.mistakes[k] && ++S.mistakes[k].n >= 2) delete S.mistakes[k];
  const keys = Object.keys(S.mistakes);
  if (keys.length > 250) keys.sort((a, b) => S.mistakes[a].at - S.mistakes[b].at).slice(0, keys.length - 250).forEach(x => delete S.mistakes[x]);
}

/* ---------------- views ---------------- */
let V = { view: 'home' };
let RUN = null; // active quiz
function go(v) { if (rec) try { rec.abort(); } catch (e) {} if ('speechSynthesis' in window) speechSynthesis.cancel(); V = v; if (v.view !== 'quiz') RUN = null; render(); window.scrollTo(0, 0); }

function header() {
  return `<header class="top"><div class="wrap">
    <button class="logo" data-act="home">German<span>Top</span></button>
    <div class="hstats">
      <span class="pill" title="${L('Jours d’affilée', 'Day streak')}">🔥 ${liveStreak()}</span>
      <span class="pill" title="XP">${S.xp} XP</span>
      <button class="pill btnlike" data-act="lang">${S.lang === 'en' ? 'EN' : 'FR'}</button>
      <button class="pill btnlike icon" data-act="settings" aria-label="${t('settings')}" title="${t('settings')}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button>
    </div></div></header>`;
}
const sayBtn = (de, label) => `<button class="say" data-act="say" data-t="${esc(de)}" aria-label="${t('listen')}">🔊${label ? ' ' + esc(label) : ''}</button>`;
const slowBtn = de => `<button class="say slow" data-act="slow" data-t="${esc(de)}" aria-label="${t('slow')}">🐢</button>`;
const bar = p => `<div class="bar"><i style="width:${Math.max(0, Math.min(100, p))}%"></i></div>`;
const artClass = de => { const m = String(de).match(/^(der|die|das)\b/i); return m ? 'g-' + m[1].toLowerCase() : ''; };

function chooseLang() {
  return `<main class="wrap center-col"><div class="hello">
    <p class="eyebrow">GermanTop</p>
    <h1>Hallo! 👋</h1>
    <p class="lede">Choisis ta langue d’explication · Choose your explanation language</p>
    <div class="row"><button class="btn big" data-act="setlang" data-l="fr">Français</button><button class="btn big" data-act="setlang" data-l="en">English</button></div>
  </div></main>`;
}

function planInfo() {
  const total = LEVELS.reduce((n, l) => n + l.units.length + 1, 0);
  const done = LEVELS.reduce((n, l) => n + l.units.filter(unitDone).length + (EX(l.id).passed ? 1 : 0), 0);
  if (!S.start) return { total, done, day: 0, expect: 0 };
  const day = Math.max(0, dayDiff(S.start, today())) + 1;
  return { total, done, day, expect: Math.min(total, Math.floor(day * total / 112)) };
}

function homeView() {
  const nx = nextThing(); const pi = planInfo();
  let nextCard = '';
  if (nx && nx.u) {
    const u = nx.u, us = US(u.id), st = STEPS.find(s => !us.steps[s.k]) || STEPS[8];
    nextCard = `<section class="next"><p class="eyebrow">${L('Ta prochaine étape', 'Your next step')} · ${u.lv.code}</p>
      <h2>${L('Unité', 'Unit')} ${u.n} · ${esc(u.t)}</h2><p class="lede">${esc(M(u))}</p>
      ${us.review ? `<p class="warn">${L('À revoir : refais le test de cette unité (85 %) avant de repasser l’examen.', 'To review: pass this unit’s test again (85%) before retaking the exam.')}</p>` : ''}
      <div class="row"><button class="btn big" data-act="unit" data-id="${u.id}" data-step="${st.k}">${t('cont')} : ${L(st.fr, st.en)} →</button></div></section>`;
  } else if (nx && nx.exam) {
    nextCard = `<section class="next"><p class="eyebrow">${L('Grand examen', 'Big exam')} · ${nx.exam.code}</p><h2>${L('Examen', 'Exam')} ${nx.exam.code}</h2>
      <p class="lede">${L('5 parties : Hören, Lesen, Wortschatz & Grammatik, Schreiben, Sprechen. Il faut 90 % dans chaque partie.', '5 parts: Hören, Lesen, Wortschatz & Grammatik, Schreiben, Sprechen. You need 90% in every part.')}</p>
      <div class="row"><button class="btn big" data-act="exam" data-id="${nx.exam.id}">${L('Aller à l’examen', 'Go to the exam')} →</button></div></section>`;
  } else nextCard = `<section class="next"><h2>${L('Tout est terminé. Herzlichen Glückwunsch ! 🎓', 'Everything is done. Herzlichen Glückwunsch! 🎓')}</h2></section>`;
  const nm = Object.keys(S.mistakes).length;
  const behind = pi.expect - pi.done;
  const planLine = !S.start ? L('Ton plan de 16 semaines démarre à ta première réponse.', 'Your 16-week plan starts with your first answer.')
    : behind > 0 ? L(`Jour ${pi.day} sur 112 · ${behind} étape(s) de retard : fais-en 2 aujourd’hui.`, `Day ${pi.day} of 112 · ${behind} step(s) behind: do 2 today.`)
    : L(`Jour ${pi.day} sur 112 · tu es dans les temps. Bravo !`, `Day ${pi.day} of 112 · you are on track. Well done!`);
  return `<main class="wrap stack">
    <div class="title"><p class="eyebrow">${L('De zéro à B2 en 4 mois', 'From zero to B2 in 4 months')}</p><h1>${L('Ton chemin vers l’allemand', 'Your road to German')}</h1></div>
    ${nextCard}
    <section class="planrow"><div><b>${t('plan')}</b><span>${planLine}</span>${bar(pi.done / pi.total * 100)}</div>
      <div class="row"><button class="btn ghost" data-act="plan">${t('plan')}</button><button class="btn ghost" data-act="mistakes">${t('mistakes')} (${nm})</button><button class="btn ghost" data-act="tools">${L('Boîte à outils', 'Toolbox')}</button></div></section>
    <section class="path">${LEVELS.map((lv, i) => levelCard(lv, i)).join('')}</section>
  </main>`;
}
function levelCard(lv, i) {
  const open = levelOpen(i), ex = EX(lv.id), d = lv.units.filter(unitDone).length;
  const cls = ex.passed ? 'passed' : open ? '' : 'locked';
  return `<article class="lcard ${cls}"><div class="badge">${lv.code}</div>
    <div class="lc-body"><h3>${esc(M(lv.title))}</h3><div class="meta"><span>${L('Semaines', 'Weeks')} ${lv.weeks}</span><span>${d}/${lv.units.length} ${t('units').toLowerCase()}</span><span>${ex.passed ? '✓ ' + L('Examen réussi', 'Exam passed') : L('Examen : 90 % par partie', 'Exam: 90% per part')}</span></div>${bar(d / lv.units.length * 100)}</div>
    <div class="act">${open ? `<button class="btn ${ex.passed ? 'ghost' : ''}" data-act="level" data-id="${lv.id}">${ex.passed ? L('Revoir', 'Review') : t('cont')}</button>` : `<span class="lockt">🔒 ${t('locked')}</span>`}</div></article>`;
}
function levelView(lv) {
  const ex = EX(lv.id), eo = examOpen(lv);
  return `<main class="wrap stack"><button class="back" data-act="home">${t('back')}</button>
    <div class="title"><p class="eyebrow">${lv.code} · ${L('Semaines', 'Weeks')} ${lv.weeks}</p><h1>${esc(M(lv.title))}</h1><p class="lede">${esc(M(lv.goal))}</p></div>
    <section class="ulist">${lv.units.map(u => {
      const us = US(u.id), open = unitOpen(u), done = Object.keys(us.steps).length;
      const state = us.review ? 'review' : unitDone(u) ? 'done' : open ? 'open' : 'locked';
      return `<button class="ucard ${state}" ${open ? `data-act="unit" data-id="${u.id}"` : 'disabled'}>
        <span class="un">${u.n}</span><span class="ut"><b>${esc(u.t)}</b><small>${esc(M(u))}</small></span>
        <span class="us">${state === 'locked' ? '🔒' : state === 'review' ? L('À revoir', 'Review') : us.test ? us.test + ' %' : done + '/9'}</span></button>`;
    }).join('')}</section>
    <section class="examcard ${ex.passed ? 'passed' : ''}"><div><p class="eyebrow">${L('Grand examen', 'Big exam')} ${lv.code}</p>
      <h2>${ex.passed ? '✓ ' + L('Réussi', 'Passed') : L('5 parties · 90 % chacune', '5 parts · 90% each')}</h2>
      <div class="parts">${PARTS.map(p => `<span class="pt ${ex.parts[p.k] >= EXAM_PASS ? 'ok' : ex.parts[p.k] != null ? 'bad' : ''}">${p.de}${ex.parts[p.k] != null ? ' · ' + ex.parts[p.k] + ' %' : ''}</span>`).join('')}</div>
      <p class="lede">${eo ? '' : L('S’ouvre quand toutes les unités sont réussies (85 %) et révisées.', 'Opens when every unit is passed (85%) and reviewed.')}</p></div>
      <button class="btn big" ${eo ? `data-act="exam" data-id="${lv.id}"` : 'disabled'}>${ex.passed ? L('Revoir l’examen', 'See exam') : t('start')}</button></section>
  </main>`;
}

/* ---- notes sheet (handwritten) ---- */
function inl(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/==(.+?)==/g, '<mark>$1</mark>').replace(/__(.+?)__/g, '<u class="pen">$1</u>')
    .replace(/\{([mfnp]):(.+?)\}/g, (_, g, x) => `<span class="g-${{ m: 'der', f: 'die', n: 'das', p: 'pl' }[g]}">${x}</span>`);
}
// "fr~en" picks a language; "(fr~en)" inside a cell picks only the bracketed part
const pickLang = c => {
  c = c.replace(/\(([^()~]*)~([^()]*)\)/g, (_, f, e) => '(' + (S.lang === 'en' ? e : f) + ')');
  const p = c.split('~'); return p.length > 1 ? (S.lang === 'en' ? p[1] : p[0]) : c;
};
function sheetHTML(src) {
  const lines = String(src).trim().split('\n').map(l => l.trim()).filter(Boolean);
  let out = '', tbl = null;
  const flush = () => { if (tbl) { out += `<div class="tscroll"><table class="htable">${tbl.map((r, i) => `<tr>${r.map(c => i === 0 && tbl.head ? `<th>${inl(pickLang(c))}</th>` : `<td>${inl(pickLang(c))}</td>`).join('')}</tr>`).join('')}</table></div>`; tbl = null; } };
  for (const l of lines) {
    const tag = l.slice(0, 2), body = l.slice(2).trim(), parts = body.split('|').map(x => x.trim());
    if (tag === 'T:' || tag === 't:') { if (!tbl || tag === 'T:') { flush(); tbl = []; tbl.head = tag === 'T:'; } tbl.push(parts); continue; }
    flush();
    if (tag === '# ') out += `<h3 class="sh">${inl(S.lang === 'en' ? parts[1] || parts[0] : parts[0])}</h3>`;
    else if (tag === '> ') out += `<p class="sp">${inl(S.lang === 'en' ? parts[1] || parts[0] : parts[0])}</p>`;
    else if (tag === '* ') out += `<p class="sb">• ${inl(S.lang === 'en' ? parts[1] || parts[0] : parts[0])}</p>`;
    else if (tag === '! ') out += `<div class="sticky"><b>${L('Attention !', 'Careful!')}</b> ${inl(S.lang === 'en' ? parts[1] || parts[0] : parts[0])}</div>`;
    else if (tag === '= ') out += `<p class="sx"><button class="say ink" data-act="say" data-t="${esc(parts[0].replace(/\*\*|==|__|\{[mfnp]:|\}/g, ''))}">🔊</button> <span class="de">${inl(parts[0])}</span> <span class="tr">→ ${inl(S.lang === 'en' ? parts[2] || parts[1] : parts[1])}</span></p>`;
  }
  flush();
  return out;
}

function unitView(u, stepK) {
  const us = US(u.id); const step = STEPS.find(s => s.k === stepK) || STEPS[0];
  const idx = STEPS.indexOf(step);
  const tabs = `<nav class="steps" aria-label="steps">${STEPS.map((s, i) => `<button class="stp ${s.k === step.k ? 'on' : ''} ${us.steps[s.k] ? 'done' : ''}" data-act="unit" data-id="${u.id}" data-step="${s.k}"><i>${us.steps[s.k] ? '✓' : i + 1}</i><span>${L(s.fr, s.en)}</span></button>`).join('')}</nav>`;
  let body = '';
  const practice = (label, n) => `<div class="row"><button class="btn big" data-act="practice" data-id="${u.id}" data-step="${step.k}">${label}${n ? ` (${n})` : ''} →</button></div>`;
  if (step.k === 'notes') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('Lis les notes. Clique 🔊 pour écouter chaque exemple. Répète à voix haute.', 'Read the notes. Click 🔊 to hear each example. Repeat out loud.')}</span></div>
      <article class="sheet"><p class="sheet-top"><span>${u.lv.code} · ${L('Unité', 'Unit')} ${u.n}</span><span>${esc(u.t)}</span></p>${sheetHTML(u.sheet)}<p class="sign">— ${L('tes notes, par', 'your notes, by')} Clo ✎</p></article>
      <div class="row"><button class="btn big" data-act="markstep" data-id="${u.id}" data-step="notes">${L('J’ai lu et répété', 'I read and repeated')} →</button>${!window.claude ? `<button class="btn ghost" data-act="print">${L('Imprimer', 'Print')}</button>` : ''}</div>`;
  else if (step.k === 'words') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('Écoute chaque mot et répète-le. Bleu = der, rouge = die, vert = das. Puis entraîne-toi.', 'Listen to each word and repeat it. Blue = der, red = die, green = das. Then practise.')}</span></div>
      <div class="wgrid">${u.W.map(w => `<div class="wcard">${sayBtn(w.de)}<div><b class="${artClass(w.de)}">${esc(w.de)}</b><small>${esc(M(w))}</small></div></div>`).join('')}</div>
      <div class="row"><button class="btn ghost" data-act="sayall" data-id="${u.id}" data-what="W">🔊 ${L('Tout écouter', 'Hear them all')}</button></div>${practice(L('S’entraîner', 'Practise'), 14)}`;
  else if (step.k === 'phrases') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('Ces phrases toutes faites sont à apprendre par cœur. Écoute, répète, puis construis-les toi-même.', 'Learn these ready-made phrases by heart. Listen, repeat, then build them yourself.')}</span></div>
      <div class="plist">${u.P.map(p => `<div class="prow">${sayBtn(p.de)}${slowBtn(p.de)}<div><b>${esc(p.de)}</b><small>${esc(M(p))}</small></div></div>`).join('')}</div>${practice(L('Construire des phrases', 'Build sentences'), 8)}`;
  else if (step.k === 'grammar') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('Relis la règle dans tes notes, puis complète chaque phrase.', 'Reread the rule in your notes, then complete each sentence.')}</span></div>
      <details class="minisheet"><summary>${L('Voir mes notes', 'Show my notes')}</summary><article class="sheet">${sheetHTML(u.sheet)}</article></details>${practice(L('Exercices de grammaire', 'Grammar drills'), u.G.length)}`;
  else if (step.k === 'sounds') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${esc(M(u.PR))}</span></div>
      <div class="plist">${u.PR.items.map(p => `<div class="prow">${sayBtn(p.de)}${slowBtn(p.de)}<div><b>${esc(p.de)}</b>${M(p) ? `<small>${esc(M(p))}</small>` : ''}</div></div>`).join('')}</div>
      ${micNote()}${practice(L('Dire au micro', 'Say it into the mic'), u.PR.items.length)}`;
  else if (step.k === 'read') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('Écoute le texte en lisant. Essaie de comprendre sans traduction, puis vérifie.', 'Listen while you read. Try to understand without the translation, then check.')}</span></div>
      <article class="reading"><div class="row"><button class="btn ghost" data-act="sayread" data-id="${u.id}">🔊 ${L('Écouter le texte', 'Listen to the text')}</button><button class="btn ghost" data-act="sayread" data-id="${u.id}" data-slow="1">🐢 ${t('slow')}</button></div>
      <div class="de-text">${u.r.de.split(/(?<=[.!?])\s+/).map(s => `<span class="sent" data-act="say" data-t="${esc(s)}">${esc(s)}</span>`).join(' ')}</div>
      <details><summary>${L('Voir la traduction', 'Show the translation')}</summary><p class="trans">${esc(M(u.r))}</p></details></article>${practice(L('Répondre aux questions', 'Answer the questions'), u.r.Q.length)}`;
  else if (step.k === 'write') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('Écris ton texte en allemand. Il sera corrigé : longueur, éléments demandés et fautes.', 'Write your text in German. It gets corrected: length, required points and mistakes.')}</span></div>
      <section class="task"><h3>${esc(M(u.wr))}</h3><p class="lede">${L('Minimum', 'At least')} ${u.wr.min} ${L('mots', 'words')}. ${L('Utilise', 'Use')} : ${u.wr.req.map(r => `<code>${esc(r.split('=')[0])}</code>`).join(' ')}</p></section>${practice(L('Écrire mon texte', 'Write my text'))}`;
  else if (step.k === 'talk') body = `<div class="todo"><b>${L('À faire', 'What to do')}</b><span>${L('1. Écoute le dialogue. 2. Joue ton rôle : l’ordinateur dit sa réplique, tu dis la tienne au micro.', '1. Listen to the dialogue. 2. Play your role: the computer says its line, you say yours into the mic.')}</span></div>
      <article class="dialog">${u.D.map((l, i) => `<div class="dl ${l.who === u.D[0].who ? 'a' : 'b'}" id="dl${i}"><span class="who">${esc(l.who)}</span><div><b data-act="say" data-t="${esc(l.de)}">${esc(l.de)}</b><small>${esc(M(l))}</small></div></div>`).join('')}</article>
      <div class="row"><button class="btn ghost" data-act="saydialog" data-id="${u.id}">🔊 ${L('Écouter le dialogue', 'Listen to the dialogue')}</button></div>${micNote()}${practice(L('Jouer mon rôle', 'Play my role'))}`;
  else if (step.k === 'test') {
    const ready = STEPS.slice(0, 8).every(s => us.steps[s.k]);
    body = `<section class="next"><h2>${L('Test de l’unité', 'Unit test')}</h2><p class="lede">${L('20 questions de tous types. Il faut 85 % pour ouvrir l’unité suivante.', '20 questions of every kind. You need 85% to open the next unit.')}</p>
      ${us.test ? `<p>${L('Meilleur score', 'Best score')} : <b>${us.test} %</b></p>` : ''}
      ${ready ? `<div class="row"><button class="btn big" data-act="test" data-id="${u.id}">${t('start')} →</button></div>` : `<p class="warn">${L('Termine d’abord les étapes 1 à 8.', 'Finish steps 1 to 8 first.')}</p>`}</section>`;
  }
  const prev = idx > 0 ? STEPS[idx - 1] : null, nxt = idx < 8 ? STEPS[idx + 1] : null;
  return `<main class="wrap stack"><button class="back" data-act="level" data-id="${u.lv.id}">← ${u.lv.code}</button>
    <div class="title"><p class="eyebrow">${u.lv.code} · ${L('Unité', 'Unit')} ${u.n}</p><h1>${esc(u.t)}</h1><p class="lede">${esc(M(u))}</p></div>
    ${tabs}<section class="stepbody stack">${body}</section>
    <div class="spread">${prev ? `<button class="btn ghost" data-act="unit" data-id="${u.id}" data-step="${prev.k}">← ${L(prev.fr, prev.en)}</button>` : '<span></span>'}${nxt ? `<button class="btn ghost" data-act="unit" data-id="${u.id}" data-step="${nxt.k}">${L(nxt.fr, nxt.en)} →</button>` : ''}</div></main>`;
}
const micNote = () => canHear() ? '' : `<p class="warn">${L('Ton navigateur ne peut pas t’entendre. Ouvre le site dans Google Chrome ou Microsoft Edge (avec un micro) pour la correction de la prononciation.', 'Your browser can’t hear you. Open the site in Google Chrome or Microsoft Edge (with a microphone) to get pronunciation feedback.')}</p>`;

/* ---------------- quiz runner ---------------- */
function startQuiz(o) { RUN = Object.assign({ i: 0, res: [], phase: 'ask', given: null, sel: [], plays: 0 }, o); V = { view: 'quiz' }; render(); window.scrollTo(0, 0); autoPlay(); }
function autoPlay() {
  const run = RUN, q = run && run.qs[run.i]; if (!q) return;
  setTimeout(() => { if (RUN !== run || run.qs[run.i] !== q || run.done) return; if (q.audio && q.hideDe) playQ(); else if (q.ctx) say(q.ctx.de); else if (q.ask) say(q.ask); }, 350);
}
function playQ(slow) {
  const q = RUN && RUN.qs[RUN.i]; if (!q || !q.audio) return;
  if (RUN.mode === 'exam' && q.hideDe) { if (RUN.plays >= 2) return; RUN.plays++; const b = $('#plays'); if (b) b.textContent = `${2 - RUN.plays}`; }
  say(q.audio, slow ? 0.7 : undefined);
}
function quizView() {
  const r = RUN, q = r.qs[r.i];
  if (!q) return resultsView();
  const exam = r.mode === 'exam', fb = r.phase === 'fb';
  let inner = '';
  const prompt = q.prompt ? `<p class="qprompt">${esc(q.prompt)}</p>` : '';
  const listen = q.audio ? `<div class="row">${q.hideDe ? `<button class="btn big ghost" data-act="playq">🔊 ${t('listen')}${exam ? ` <small>(<span id="plays">${2 - r.plays}</span>)</small>` : ''}</button>${exam ? '' : `<button class="btn ghost" data-act="playq" data-slow="1">🐢 ${t('slow')}</button>`}` : `${sayBtn(q.audio)}<b class="qde ${artClass(q.de)}">${esc(q.de)}</b>`}</div>` : '';
  const text = q.text ? `<article class="reading mini"><div class="de-text">${esc(q.text)}</div></article>` : '';
  const gap = q.gap ? `<p class="qgap">${esc(q.gap).replace('___', '<span class="gapline">____</span>')}</p>${q.sub ? `<p class="sub">${esc(q.sub)}</p>` : ''}` : '';
  if (q.t === 'mc') inner = `<div class="opts">${q.opts.map((o, i) => {
      let c = ''; if (fb && !exam) { if (o === q.a) c = 'right'; else if (r.given === o) c = 'wrongp'; } else if (r.given === o) c = 'sel';
      return `<button class="opt ${c} ${q.deOpts ? 'de' : ''}" data-act="pickopt" data-i="${i}" ${fb ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>`;
  else if (q.t === 'type') inner = `<div class="typebox"><${q.long ? 'textarea rows="2"' : 'input'} id="ans" class="ans" lang="de" autocomplete="off" autocapitalize="off" spellcheck="false" ${fb ? 'disabled' : ''} placeholder="${L('Écris en allemand…', 'Type in German…')}">${q.long ? esc(r.given || '') + '</textarea>' : ''}
      ${fb ? '' : `<div class="umlauts">${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => `<button data-act="ins" data-c="${c}" tabindex="-1">${c}</button>`).join('')}</div>`}</div>`;
  else if (q.t === 'order') inner = `<div class="built" id="built">${r.sel.map((ci, k) => `<button class="chip on" data-act="unchip" data-k="${k}" ${fb ? 'disabled' : ''}>${esc(q.chips[ci])}</button>`).join('') || `<span class="ph">${L('Touche les mots dans l’ordre…', 'Tap the words in order…')}</span>`}${q.punct && r.sel.length ? `<b class="punct">${esc(q.punct)}</b>` : ''}</div>
      <div class="chips">${q.chips.map((c, i) => `<button class="chip" data-act="chip" data-i="${i}" ${r.sel.includes(i) || fb ? 'disabled' : ''}>${esc(c)}</button>`).join('')}</div>`;
  else if (q.t === 'speak') inner = `${q.ctx ? `<div class="ctx">${sayBtn(q.ctx.de)}<span><b>${esc(q.ctx.de)}</b><small>${esc(M(q.ctx))}</small></span></div>` : ''}
      ${q.open ? `<div class="ctx">${sayBtn(q.ask)}<b>${esc(q.ask)}</b></div><p class="sub">${esc(q.sub)}</p>` : `<p class="qtarget">${esc(q.target)} ${sayBtn(q.target)}</p><p class="sub">${esc(q.sub)}</p>`}
      <div class="mic-area">${canHear() ? `<button class="mic ${r.listening ? 'live' : ''}" data-act="mic" ${fb ? 'disabled' : ''}>🎙</button><span>${r.listening ? L('J’écoute… parle maintenant', 'Listening… speak now') : L('Appuie et parle', 'Press and speak')}</span>`
        : `<p class="warn">${L('Le micro n’est pas disponible ici : dis la phrase à voix haute, écoute le modèle, puis note-toi honnêtement. Pour la correction automatique, ouvre myriambs.github.io/germantop dans Chrome.', 'The microphone isn’t available here: say it out loud, listen to the model, then mark yourself honestly. For automatic checking, open myriambs.github.io/germantop in Chrome.')}</p>${fb ? '' : `<div class="row"><button class="btn ghost" data-act="selfok">✓ ${L('Je l’ai bien dit', 'I said it right')}</button><button class="btn ghost" data-act="selfno">✗ ${L('J’ai fait des fautes', 'I made mistakes')}</button></div>`}`}</div>
      ${r.heard ? `<p class="heard">${L('Entendu', 'Heard')} : « ${esc(r.heard)} »</p>` : ''}`;
  else if (q.t === 'write') inner = `<section class="task"><h3>${esc(M(q.task))}</h3><p class="lede">${L('Minimum', 'At least')} ${q.task.min} ${L('mots', 'words')}. ${L('Points à inclure', 'Points to include')} : ${q.task.req.map(x => `<code>${esc(x.split('=')[0])}</code>`).join(' ')}</p></section>
      <textarea id="ans" class="ans big" lang="de" rows="8" spellcheck="false" ${fb || r.busy ? 'disabled' : ''} placeholder="${L('Écris ton texte en allemand…', 'Write your text in German…')}">${esc(r.given || '')}</textarea>
      <div class="spread"><div class="umlauts">${['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(c => `<button data-act="ins" data-c="${c}" tabindex="-1">${c}</button>`).join('')}</div><span class="wc" id="wc">0 ${L('mots', 'words')}</span></div>`;
  const fbBox = fb && !exam ? feedbackHTML(q, r.last) : (fb && exam ? `<div class="fb neutral">${L('Réponse enregistrée.', 'Answer saved.')}</div>` : '');
  const canCheck = q.t !== 'speak';
  const btn = fb ? `<button class="btn big" data-act="qnext" id="go">${r.i + 1 < r.qs.length ? t('next') : t('finish')} →</button>`
    : r.busy ? `<button class="btn big" disabled>${L('Correction…', 'Correcting…')}</button>`
    : canCheck ? `<button class="btn big" data-act="qcheck" id="go">${exam ? t('next') : t('check')}</button>`
    : `<button class="btn ghost" data-act="qskip">${exam ? L('Je ne peux pas (0 point)', 'I can’t (0 points)') : t('skip')}</button>`;
  return `<main class="wrap stack quiz"><div class="spread"><button class="back" data-act="quitquiz">✕ ${L('Quitter', 'Quit')}</button><span class="eyebrow">${esc(r.title)} · ${r.i + 1}/${r.qs.length}</span></div>
    ${bar(r.i / r.qs.length * 100)}
    <section class="qcard"><p class="qkind">${esc(q.kind)}</p>${text}${prompt}${listen}${gap}${inner}</section>
    ${fbBox}<div class="row end">${btn}</div></main>`;
}
function feedbackHTML(q, g) {
  if (!g) return '';
  const ok = g.score >= 1 || g.ok;
  let h = `<div class="fb ${ok ? 'good' : g.score > 0 ? 'part' : 'bad'}"><b>${ok ? t('correct') : t('wrong')}</b>`;
  if (g.note) h += `<p>${esc(L(NOTES[g.note][0], NOTES[g.note][1]))}</p>`;
  if (q.t === 'mc' && !ok) h += `<p>${t('answer')} : <b>${esc(q.a)}</b></p>`;
  if ((q.t === 'type' || q.t === 'order') && (!ok || g.note)) h += `<p>${t('answer')} : <b>${esc(q.gapOnly ? q.ans[0].split('¦')[0] : g.best)}</b>${q.say ? ' ' + sayBtn(q.say) : ''}</p>${q.gapOnly ? `<p class="sub">${esc(q.say)}</p>` : ''}`;
  if (q.t === 'speak' && g.hit) h += `<p class="hitline">${(q.open ? [] : spoken(q.target).split(/\s+/)).map((w, i) => `<span class="${g.hit[i] ? 'h-ok' : 'h-no'}">${esc(w)}</span>`).join(' ')}</p>
      <p>${q.open ? `${L('Exemple de réponse', 'Model answer')} : <b>${esc(q.model)}</b> ${sayBtn(q.model)}` : `${L('Mots reconnus', 'Words recognised')} : ${Math.round((g.raw || 0) * 100)} % ${g.hit.some(x => !x) ? '· ' + L('les mots en rouge n’ont pas été compris : écoute et réessaie', 'red words were not understood: listen and try again') : ''}`}</p>
      ${!ok && !q.open ? `<button class="btn ghost" data-act="retryspeak">↻ ${L('Réessayer', 'Try again')}</button>` : ''}`;
  if (q.t === 'write') h += g.html || '';
  if (q.say && q.t === 'mc' && q.gap) h += `<p class="sub">${esc(q.say)} ${sayBtn(q.say)}</p>`;
  if (q.t === 'mc' && q.audio && q.hideDe) h += `<p class="sub">${esc(q.audio)} ${sayBtn(q.audio)}</p>`;
  return h + '</div>';
}
// data regexes: ';' = alternation, \w also covers umlauts and ß
const rx = re => new RegExp(re.replace(/;/g, '|').replace(/\\w/g, '[\\wäöüßÄÖÜ]'), 'i');
function wordsOf(s) { return (s.trim().match(/[A-Za-zÄÖÜäöüß]+/g) || []).length; }
async function gradeWrite(q, text) {
  const task = q.task, words = wordsOf(text);
  const req = task.req.map(r => { const [label, re] = r.split('='); return { label, ok: rx(re || label).test(text) }; });
  const reqScore = req.filter(x => x.ok).length / req.length;
  let corr = null, html = '', errs = [];
  const sample = await getSample();
  if (sample && text.trim()) {
    try {
      const j = await sample.json(`You are a strict, kind German teacher. CEFR level of the student: ${q.uid ? unitById(q.uid).lv.code : RUN.title}.
Task given to the student (${S.lang === 'en' ? 'English' : 'French'}): ${M(task)}
Student text:
"""${text}"""
Correct grammar, spelling, word order and capitalisation. Ignore style if it is correct. Explanations must be in ${S.lang === 'en' ? 'English' : 'French'}, short.
Reply ONLY with JSON: {"accuracy": number 0-10 (10 = no mistakes), "corrected": "full corrected German text", "errors": [{"wrong": "...", "right": "...", "why": "..."}], "tip": "one sentence"}`, { modelTier: 'default' });
      corr = Math.max(0, Math.min(10, +j.accuracy || 0)) / 10;
      errs = (j.errors || []).map(e => ({ wrong: e.wrong, fix: e.right, msg: e.why }));
      html += `<p><b>${L('Texte corrigé', 'Corrected text')}</b></p><p class="de-text">${esc(j.corrected || '')}</p>${j.tip ? `<p class="sub">${esc(j.tip)}</p>` : ''}`;
    } catch (e) { /* fall back to LanguageTool */ }
  }
  if (corr == null && text.trim()) {
    try {
      const res = await fetch('https://api.languagetool.org/v2/check', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ text, language: 'de-DE' }) });
      const j = await res.json();
      errs = j.matches.filter(m => m.rule.issueType !== 'whitespace' && m.rule.issueType !== 'style').map(m => ({ wrong: text.substr(m.offset, m.length), fix: (m.replacements[0] || {}).value || '', msg: m.message }));
      const rate = errs.length / Math.max(words, 1);
      corr = rate <= 0.04 ? 1 : rate <= 0.1 ? 0.5 : 0;
    } catch (e) { corr = null; }
  }
  const pLen = words >= task.min ? 1 : words / task.min * 0.5;
  const pCorr = corr == null ? null : corr >= 0.85 ? 1 : corr >= 0.6 ? 0.5 : corr;
  const got = pLen + 2 * reqScore + (pCorr ?? 0), max = pCorr == null ? 3 : 4;
  const score = got / max;
  html = `<ul class="checks"><li class="${words >= task.min ? 'ok' : 'no'}">${words} / ${task.min} ${L('mots', 'words')}</li>${req.map(x => `<li class="${x.ok ? 'ok' : 'no'}">${esc(x.label)}</li>`).join('')}
    <li class="${pCorr == null ? '' : pCorr >= 1 ? 'ok' : 'no'}">${pCorr == null ? L('Correction en ligne indisponible (vérifie avec le modèle)', 'Online correction unavailable (compare with the model)') : errs.length ? errs.length + ' ' + L('faute(s) trouvée(s)', 'mistake(s) found') : L('Aucune faute trouvée', 'No mistakes found')}</li></ul>`
    + (errs.length ? `<ul class="errs">${errs.map(e => `<li><s>${esc(e.wrong)}</s> → <b>${esc(e.fix)}</b> <small>${esc(e.msg)}</small></li>`).join('')}</ul>` : '') + html
    + `<details ${score < 1 ? 'open' : ''}><summary>${L('Modèle de réponse', 'Model answer')}</summary><p class="de-text">${esc(task.model)}</p>${sayBtn(task.model)}</details>`;
  return { score: Math.min(1, score), ok: score >= 0.9, html };
}
function gradeQ(q, given) {
  if (q.t === 'mc') return { ok: given === q.a, score: given === q.a ? 1 : 0 };
  if (q.t === 'type') { const g = gradeText(given || '', q.ans, RUN.mode === 'exam'); return Object.assign(g, { score: g.ok ? 1 : 0 }); }
  if (q.t === 'order') { const ok = given === q.ans[0]; return { ok, score: ok ? 1 : 0, best: q.ans[0] }; }
  return { ok: false, score: 0 };
}
function record(g) {
  const r = RUN, q = r.qs[r.i];
  r.res[r.i] = { q, score: g.score, given: r.given };
  r.last = g; r.phase = 'fb';
  if (g.score >= 1) award(r.mode === 'exam' ? 3 : 2);
  if (r.mode !== 'exam') noteMistake(q, g.score >= 1);
  save();
  if (r.mode === 'exam' && q.t !== 'speak') return ACT.qnext(); // exams: no correction until the end
  render();
  if (q.say && q.t !== 'speak') say(q.say);
  setTimeout(() => { const b = $('#go'); b && b.focus(); }, 30);
}
async function doCheck() {
  const r = RUN, q = r.qs[r.i];
  if (q.t === 'type' || q.t === 'write') { const el = $('#ans'); r.given = el ? el.value : ''; }
  if (q.t === 'order') r.given = r.sel.map(i => q.chips[i]).join(' ') + (q.punct || '');
  if (q.t === 'mc' && r.given == null) return;
  if (q.t === 'write') {
    if (wordsOf(r.given) < 3) return;
    r.busy = true; render();
    const g = await gradeWrite(q, r.given); r.busy = false; record(g); return;
  }
  record(gradeQ(q, r.given));
}
async function doMic() {
  const r = RUN, q = r.qs[r.i];
  if (r.listening) { try { rec && rec.stop(); } catch (e) {} return; }
  r.listening = true; r.heard = ''; render();
  const res = await hear();
  r.listening = false;
  if (res.err && /not-allowed|service-not-allowed|audio-capture|start|unsupported/.test(res.err)) { srBlocked = true; r.heard = ''; render(); return; }
  if (res.err) { r.heard = res.err === 'not-allowed' ? L('Micro refusé : autorise le micro dans le navigateur.', 'Microphone blocked: allow it in your browser.') : res.err === 'no-speech' ? L('Je n’ai rien entendu. Réessaie plus près du micro.', 'I heard nothing. Try again closer to the mic.') : res.err; render(); return; }
  if (!res.alts.length) { r.heard = L('Je n’ai rien entendu.', 'I heard nothing.'); render(); return; }
  let g;
  if (q.open) {
    const best = res.alts.find(a => rx(q.re).test(a)) || res.alts[0];
    const ok = rx(q.re).test(best) && wordsOf(best) >= 3;
    r.heard = best; g = { ok, score: ok ? 1 : 0, hit: [] };
  } else {
    let best = null; for (const a of res.alts) { const m = matchScore(a, q.target); if (!best || m.score > best.score) best = Object.assign(m, { a }); }
    r.heard = best.a; const sc = Math.min(1, best.score / 0.85);
    g = { ok: best.score >= 0.85, score: best.score >= 0.85 ? 1 : sc, raw: best.score, hit: best.hit };
  }
  r.given = r.heard;
  if (RUN.mode !== 'exam' && !g.ok) { r.last = g; r.res[r.i] = { q, score: g.score, given: r.given }; r.phase = 'fb'; render(); return; } // allow retry
  record(g);
}
function finishQuiz() {
  const r = RUN; const tot = r.res.reduce((n, x) => n + (x ? x.score : 0), 0);
  r.pct = Math.round(tot / r.qs.length * 100);
  r.done = true; if (r.onDone) r.onDone(r.pct, r.res); save();
  V = { view: 'quiz' }; render(); window.scrollTo(0, 0);
}
function resultsView() {
  const r = RUN; const wrong = r.res.filter(x => x && x.score < 1);
  const pass = r.pass == null || r.pct >= r.pass;
  return `<main class="wrap stack"><div class="title"><p class="eyebrow">${esc(r.title)}</p><h1>${r.pct} %</h1>
    <p class="lede">${r.pass != null ? (pass ? L(`Réussi ! (il fallait ${r.pass} %)`, `Passed! (you needed ${r.pass}%)`) : L(`Pas encore : il faut ${r.pass} %. Revois les erreurs ci-dessous et réessaie.`, `Not yet: you need ${r.pass}%. Review the mistakes below and try again.`)) : L('Étape terminée.', 'Step finished.')}</p></div>
    ${r.extra || ''}
    ${wrong.length ? `<section class="review"><h3>${L('À revoir', 'To review')} (${wrong.length})</h3>${wrong.map(x => reviewLine(x)).join('')}</section>` : `<p class="fb good"><b>${L('Aucune erreur. Ausgezeichnet !', 'No mistakes. Ausgezeichnet!')}</b></p>`}
    <div class="row">${r.again ? `<button class="btn ghost" data-act="again">${t('again')}</button>` : ''}<button class="btn big" data-act="afterquiz">${t('cont')} →</button></div></main>`;
}
function reviewLine(x) {
  const q = x.q; let right = q.a || (q.ans && (q.gapOnly ? q.say : q.ans[0])) || q.target || q.model || '';
  if (q.t === 'write') right = q.task.model;
  const what = q.prompt || q.gap || q.ask || (q.hideDe ? '🔊 ' + q.audio : q.de) || q.target || M(q.task || {});
  return `<div class="rv"><span class="rq">${esc(what)}</span><span class="ry">${t('yourAns')} : <s>${esc(x.given == null ? '—' : x.given)}</s></span><span class="rr">${t('answer')} : <b>${esc(right)}</b> ${q.t !== 'mc' || q.deOpts ? sayBtn(q.say || right) : ''}</span></div>`;
}

/* ---------------- exam flow ---------------- */
function examView(lv) {
  const ex = EX(lv.id);
  const missing = [...new Set(ex.flagged)].map(unitById).filter(u => u && US(u.id).review);
  return `<main class="wrap stack"><button class="back" data-act="level" data-id="${lv.id}">← ${lv.code}</button>
    <div class="title"><p class="eyebrow">${L('Grand examen', 'Big exam')}</p><h1>${lv.code} · ${esc(M(lv.title))}</h1>
    <p class="lede">${L('Comme le Goethe-Zertifikat : 5 modules. Il faut 90 % dans chaque module. Un module réussi reste réussi. Pas d’aide pendant l’examen. À l’écoute, chaque audio ne passe que 2 fois.', 'Like the Goethe-Zertifikat: 5 modules. You need 90% in each one. A passed module stays passed. No help during the exam. In listening, each audio plays only twice.')}</p></div>
    ${missing.length ? `<p class="warn">${L('Avant de repasser : refais le test de ces unités', 'Before retaking: pass the test of these units again')} — ${missing.map(u => `<button class="linkbtn" data-act="unit" data-id="${u.id}" data-step="test">${u.lv.code} · ${u.n} ${esc(u.t)}</button>`).join(', ')}</p>` : ''}
    <section class="partlist">${PARTS.map(p => {
      const sc = ex.parts[p.k], ok = sc >= EXAM_PASS;
      const blocked = missing.length > 0 && sc != null && !ok; // only a failed module waits for the review
      return `<div class="prt ${ok ? 'ok' : sc != null ? 'bad' : ''}"><div><b>${p.de}</b><small>${L(p.fr, p.en)}${sc != null ? ` · ${L('meilleur', 'best')} ${sc} %` : ''}</small></div>
        ${ok ? '<span class="okmark">✓ 90 %+</span>' : `<button class="btn" ${blocked ? 'disabled' : `data-act="exampart" data-id="${lv.id}" data-p="${p.k}"`}>${sc != null ? L('Repasser', 'Retake') : t('start')}</button>`}</div>`;
    }).join('')}</section>
    ${ex.passed ? `<p class="fb good"><b>${L('Niveau réussi ! Le niveau suivant est ouvert.', 'Level passed! The next level is open.')}</b></p>` : ''}</main>`;
}
function startExamPart(lv, k) {
  const part = PARTS.find(p => p.k === k);
  if (k === 'sprechen' && !SR) { /* self-graded fallback is offered inside the quiz */ }
  startQuiz({
    title: `${lv.code} · ${part.de}`, qs: examPart(lv, k), mode: 'exam', pass: EXAM_PASS,
    onDone(pct, res) {
      const ex = EX(lv.id); ex.tries++;
      ex.parts[k] = Math.max(ex.parts[k] || 0, pct);
      if (pct < EXAM_PASS) {
        const uids = [...new Set(res.filter(x => x && x.score < 1 && x.q.uid).map(x => x.q.uid))];
        uids.forEach(id => { US(id).review = true; }); ex.flagged = [...new Set([...ex.flagged, ...uids])];
        RUN.extra = uids.length ? `<p class="warn">${L('Unités à revoir avant de repasser ce module', 'Units to review before retaking this module')} : ${uids.map(id => { const u = unitById(id); return `${u.n}. ${esc(u.t)}`; }).join(' · ')}</p>` : '';
      }
      if (PARTS.every(p => ex.parts[p.k] >= EXAM_PASS)) { ex.passed = true; award(50); }
    },
    back: { view: 'exam', id: lv.id },
  });
}

function planView() {
  const pi = planInfo(); let w = 1;
  return `<main class="wrap stack"><button class="back" data-act="home">${t('back')}</button>
    <div class="title"><p class="eyebrow">${L('16 semaines', '16 weeks')}</p><h1>${t('plan')}</h1>
    <p class="lede">${L('Un niveau toutes les 2 semaines, soit environ 4 unités par semaine. Pour arriver vraiment à B2 en 4 mois, il faut environ 3 heures par jour, tous les jours. Avec 1 h 30 par jour, vise B1 en 4 mois : c’est déjà un très bon résultat.', 'One level every 2 weeks, about 4 units a week. To truly reach B2 in 4 months you need about 3 hours a day, every day. With 1.5 hours a day, aim for B1 in 4 months: that is already a great result.')}</p></div>
    <section class="routine"><h3>${L('Ta journée type (3 h)', 'Your typical day (3 h)')}</h3><ol>
      <li><b>20 min</b> — ${L('« Mes erreurs » + relire les notes d’hier', '“My mistakes” + reread yesterday’s notes')}</li>
      <li><b>70 min</b> — ${L('nouvelle unité : notes, mots, phrases, grammaire', 'new unit: notes, words, phrases, grammar')}</li>
      <li><b>30 min</b> — ${L('prononciation + conversation à voix haute', 'sounds + conversation out loud')}</li>
      <li><b>30 min</b> — ${L('lire + écrire ton texte', 'read + write your text')}</li>
      <li><b>30 min</b> — ${L('écouter de l’allemand réel (podcast, série avec sous-titres allemands)', 'real German listening (podcast, series with German subtitles)')}</li></ol></section>
    <section class="weeks">${LEVELS.map(lv => `<div class="wk ${EX(lv.id).passed ? 'ok' : ''}"><span>${L('Semaines', 'Weeks')} ${lv.weeks}</span><b>${lv.code}</b><small>${esc(M(lv.title))}</small></div>`).join('')}</section>
    <p class="lede">${S.start ? L(`Démarré le ${S.start}. Progression : ${pi.done}/${pi.total} étapes.`, `Started on ${S.start}. Progress: ${pi.done}/${pi.total} steps.`) : ''}</p></main>`;
}
function mistakesView() {
  const list = Object.values(S.mistakes).sort((a, b) => b.at - a.at);
  return `<main class="wrap stack"><button class="back" data-act="home">${t('back')}</button>
    <div class="title"><h1>${t('mistakes')}</h1><p class="lede">${L('Chaque erreur revient ici. Réponds juste 2 fois pour l’effacer.', 'Every mistake comes back here. Answer it right twice to clear it.')}</p></div>
    ${list.length ? `<div class="row"><button class="btn big" data-act="drillmistakes">${L('M’entraîner sur mes erreurs', 'Practise my mistakes')} (${Math.min(15, list.length)}) →</button></div>
    <section class="review">${list.slice(0, 60).map(m => reviewLine({ q: m.q, given: null })).join('')}</section>` : `<p class="fb good">${L('Aucune erreur pour l’instant.', 'No mistakes for now.')}</p>`}</main>`;
}
function toolsView() {
  const X = window.DW.tools; if (!X) return '';
  const tab = V.tab || 'sounds';
  const tabs = [['sounds', L('Prononciation', 'Pronunciation')], ['models', L('Modèles de textes', 'Writing models')], ['res', L('Ressources gratuites', 'Free resources')]];
  let body = '';
  if (tab === 'sounds') body = `<section class="set"><h3>${L('Lire n’importe quel texte allemand', 'Read any German text aloud')}</h3>
      <textarea id="readbox" class="ans" lang="de" rows="3">Guten Morgen! Ich heiße Sara und komme aus Tunesien. Ich lerne Deutsch, weil ich später in Deutschland arbeiten möchte.</textarea>
      <div class="row"><button class="btn" data-act="readbox">🔊 ${L('Lire', 'Read aloud')}</button><button class="btn ghost" data-act="readbox" data-slow="1">🐢 ${t('slow')}</button></div></section>
    <div class="tgrid">${X.sounds.map(x => `<article class="tcard"><div class="spread"><h3>${esc(x.s)}</h3><code>${esc(x.ipa)}</code></div><p>${esc(M(x))}</p><div class="chips">${x.w.map(w => `<button class="chip" data-act="say" data-t="${esc(w)}">🔊 ${esc(w)}</button>`).join('')}</div></article>`).join('')}</div>
    <h3>${L('Paires de mots presque identiques', 'Word pairs that sound almost the same')}</h3>
    <div class="tgrid">${X.pairs.map(x => `<article class="tcard"><span class="eyebrow">${esc(L(x[0], x[1]))}</span><div class="chips"><button class="chip" data-act="say" data-t="${esc(x[2])}">🔊 ${esc(x[2])}</button><button class="chip" data-act="say" data-t="${esc(x[3])}">🔊 ${esc(x[3])}</button></div></article>`).join('')}</div>`;
  else if (tab === 'models') body = X.models.map(m => `<details class="task"><summary>${m.lvl} · ${esc(M(m))}</summary><ol>${(S.lang === 'en' ? m.steps.en : m.steps.fr).map(x => `<li>${esc(x)}</li>`).join('')}</ol><p class="de-text letter">${esc(m.text)}</p><div class="row"><button class="btn ghost" data-act="say" data-t="${esc(m.text)}">🔊 ${t('listen')}</button></div></details>`).join('');
  else body = X.res.map(g => `<h3>${esc(M(g))}</h3><div class="tgrid">${g.list.map(r => `<article class="tcard"><div class="spread"><h3><a href="${r[1]}" target="_blank" rel="noopener">${esc(r[0])}</a></h3><code>${esc(r[2])}</code></div><p>${esc(S.lang === 'en' ? r[4] : r[3])}</p></article>`).join('')}</div>`).join('');
  return `<main class="wrap stack"><button class="back" data-act="home">${t('back')}</button><div class="title"><h1>${L('Boîte à outils', 'Toolbox')}</h1></div>
    <nav class="row">${tabs.map(([k, n]) => `<button class="btn ${k === tab ? '' : 'ghost'}" data-act="tools" data-tab="${k}">${n}</button>`).join('')}</nav>${body}</main>`;
}
function settingsView() {
  const v = voice();
  return `<main class="wrap stack"><button class="back" data-act="home">${t('back')}</button><div class="title"><h1>${t('settings')}</h1></div>
    <section class="set"><h3>${L('Langue des explications', 'Explanation language')}</h3><div class="row"><button class="btn ${S.lang === 'fr' ? '' : 'ghost'}" data-act="setlang" data-l="fr">Français</button><button class="btn ${S.lang === 'en' ? '' : 'ghost'}" data-act="setlang" data-l="en">English</button></div></section>
    <section class="set"><h3>${L('Voix allemande', 'German voice')}</h3>
      ${VOICES.length ? `<select id="voice">${VOICES.slice().sort((a, b) => vRank(a) - vRank(b)).map(x => `<option value="${esc(x.name)}" ${v && v.name === x.name ? 'selected' : ''}>${esc(x.name)} (${x.lang})</option>`).join('')}</select>` : `<p class="warn">${L('Aucune voix allemande trouvée. Utilise Chrome ou Edge.', 'No German voice found. Use Chrome or Edge.')}</p>`}
      ${v && /espeak/i.test(v.name) ? `<p class="warn">${L('Cette voix est robotique. Dans Chrome ou Edge, tu auras une voix naturelle (Google Deutsch / Microsoft Katja).', 'This voice sounds robotic. Chrome or Edge give you a natural voice (Google Deutsch / Microsoft Katja).')}</p>` : ''}
      <label class="lbl" for="rate">${L('Vitesse', 'Speed')} : <b id="rv">${S.rate}</b></label><input id="rate" type="range" min="0.6" max="1.2" step="0.02" value="${S.rate}">
      <div class="row"><button class="btn ghost" data-act="say" data-t="Hallo! Ich heiße Clo. Schön, dass du Deutsch lernst.">🔊 ${L('Tester', 'Test')}</button></div></section>
    <section class="set"><h3>${L('Micro', 'Microphone')}</h3><p>${SR ? L('La reconnaissance vocale est disponible.', 'Speech recognition is available.') : L('Non disponible dans ce navigateur. Utilise Google Chrome ou Microsoft Edge.', 'Not available in this browser. Use Google Chrome or Microsoft Edge.')}</p></section>
    <section class="set"><h3>${L('Progression', 'Progress')}</h3><p class="sub">${L('Enregistrée dans ce navigateur', 'Saved in this browser')}${cloud ? L(' et dans ton compte Claude', ' and in your Claude account') : ''}.</p>
      ${V.confirm ? `<p class="warn">${L('Tout effacer ? Impossible d’annuler.', 'Erase everything? This cannot be undone.')}</p><div class="row"><button class="btn danger" data-act="reset">${L('Oui, tout effacer', 'Yes, erase all')}</button><button class="btn ghost" data-act="settings">${L('Annuler', 'Cancel')}</button></div>` : `<button class="btn ghost" data-act="askreset">${L('Remettre à zéro', 'Reset progress')}</button>`}</section></main>`;
}

function render() {
  document.documentElement.lang = S.lang || 'fr';
  const app = $('#app');
  if (!S.lang) { app.innerHTML = chooseLang(); return; }
  let main = '';
  if (V.view === 'home') main = homeView();
  else if (V.view === 'level') main = levelView(levelById(V.id));
  else if (V.view === 'unit') main = unitView(unitById(V.id), V.step);
  else if (V.view === 'quiz') main = RUN.done ? resultsView() : quizView();
  else if (V.view === 'exam') main = examView(levelById(V.id));
  else if (V.view === 'plan') main = planView();
  else if (V.view === 'mistakes') main = mistakesView();
  else if (V.view === 'settings') main = settingsView();
  else if (V.view === 'tools') main = toolsView();
  app.innerHTML = header() + main;
  const ans = $('#ans');
  if (ans && RUN && RUN.phase === 'ask' && !RUN.busy) {
    if (ans.tagName === 'INPUT' && RUN.given) ans.value = RUN.given;
    ans.focus();
    const wc = $('#wc'); if (wc) { const upd = () => { wc.textContent = wordsOf(ans.value) + ' ' + L('mots', 'words'); }; ans.addEventListener('input', upd); upd(); }
  }
}

/* ---------------- actions ---------------- */
const ACT = {
  home: () => go({ view: 'home' }),
  lang: () => { S.lang = S.lang === 'en' ? 'fr' : 'en'; save(); render(); },
  setlang: d => { S.lang = d.l; save(); render(); },
  settings: () => go({ view: 'settings' }),
  askreset: () => { V.confirm = true; render(); },
  reset: () => { const keep = { lang: S.lang, voice: S.voice, rate: S.rate }; S = Object.assign(DEF(), keep); save(); go({ view: 'home' }); },
  plan: () => go({ view: 'plan' }),
  mistakes: () => go({ view: 'mistakes' }),
  tools: d => go({ view: 'tools', tab: d.tab }),
  readbox: d => { const b = $('#readbox'); if (b) say(b.value, d.slow ? 0.7 : undefined); },
  level: d => go({ view: 'level', id: d.id }),
  exam: d => go({ view: 'exam', id: d.id }),
  unit: d => { const u = unitById(d.id); const us = US(u.id); go({ view: 'unit', id: d.id, step: d.step || (STEPS.find(s => !us.steps[s.k]) || STEPS[8]).k }); },
  say: d => say(d.t), slow: d => say(d.t, 0.7),
  print: () => window.print(),
  sayall: d => { const u = unitById(d.id); say(u[d.what].map(x => spoken(x.de)).join('. ') + '.'); },
  sayread: d => { const u = unitById(d.id); say(u.r.de, d.slow ? 0.72 : undefined); },
  saydialog: async d => {
    const u = unitById(d.id); const tok = ++sayToken;
    for (let i = 0; i < u.D.length; i++) {
      document.querySelectorAll('.dl').forEach(e => e.classList.remove('live')); const el = $('#dl' + i); el && el.classList.add('live');
      await say(u.D[i].de); if (sayToken !== tok + i + 1) return; // stopped by another play
    }
    document.querySelectorAll('.dl').forEach(e => e.classList.remove('live'));
  },
  markstep: d => { US(d.id).steps[d.step] = true; award(5); save(); const i = STEPS.findIndex(s => s.k === d.step); go({ view: 'unit', id: d.id, step: STEPS[i + 1].k }); },
  practice: d => {
    const u = unitById(d.id), st = STEPS.find(s => s.k === d.step);
    startQuiz({ title: `${u.lv.code} · ${u.n} · ${L(st.fr, st.en)}`, qs: practiceFor(u, d.step), mode: 'practice', again: true,
      onDone() { US(u.id).steps[d.step] = true; award(5); }, back: { view: 'unit', id: u.id, step: STEPS[STEPS.indexOf(st) + 1].k }, src: d });
  },
  test: d => {
    const u = unitById(d.id);
    startQuiz({ title: `${u.lv.code} · ${u.n} · Test`, qs: unitTest(u), mode: 'test', pass: UNIT_PASS, again: true,
      onDone(pct) { const us = US(u.id); us.test = Math.max(us.test, pct); if (pct >= UNIT_PASS) { us.review = false; award(20); } }, back: { view: 'level', id: u.lv.id }, src: d });
  },
  exampart: d => startExamPart(levelById(d.id), d.p),
  drillmistakes: () => {
    const qs = Object.values(S.mistakes).sort((a, b) => a.at - b.at).slice(0, 15).map(m => Object.assign({}, m.q, { opts: m.q.opts ? shuffle(m.q.opts) : m.q.opts }));
    startQuiz({ title: t('mistakes'), qs, mode: 'practice', back: { view: 'mistakes' } });
  },
  again: () => { const r = RUN; if (r.src) ACT[r.src.step === 'test' || !r.src.step ? 'test' : 'practice'](r.src); },
  afterquiz: () => { const b = RUN.back || { view: 'home' }; go(b); },
  quitquiz: () => { const b = RUN.back || { view: 'home' }; go(b); },
  playq: d => playQ(!!d.slow),
  pickopt: d => { if (RUN.phase !== 'ask') return; RUN.given = RUN.qs[RUN.i].opts[+d.i]; render(); },
  chip: d => { RUN.sel.push(+d.i); render(); },
  unchip: d => { RUN.sel.splice(+d.k, 1); render(); },
  ins: d => { const a = $('#ans'); if (!a) return; const s = a.selectionStart ?? a.value.length; a.value = a.value.slice(0, s) + d.c + a.value.slice(a.selectionEnd ?? s); a.focus(); a.selectionStart = a.selectionEnd = s + 1; a.dispatchEvent(new Event('input')); },
  qcheck: () => doCheck(),
  mic: () => doMic(),
  retryspeak: () => { RUN.phase = 'ask'; RUN.heard = ''; RUN.last = null; render(); },
  selfok: () => { RUN.given = L('(auto-évalué)', '(self-marked)'); record({ ok: true, score: 1, hit: [] }); },
  selfno: () => { RUN.given = L('(auto-évalué)', '(self-marked)'); record({ ok: false, score: 0, hit: [] }); },
  qskip: () => { RUN.given = null; record({ ok: false, score: RUN.mode === 'practice' ? 1 : 0, skipped: true }); if (RUN.mode !== 'exam') ACT.qnext(); },
  qnext: () => {
    const r = RUN; if (r.mode === 'exam' && r.phase === 'ask') return;
    r.i++; r.phase = 'ask'; r.given = null; r.sel = []; r.heard = ''; r.last = null; r.plays = 0;
    if (r.i >= r.qs.length) return finishQuiz();
    render(); window.scrollTo(0, 0); autoPlay();
  },
};
document.addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
  const f = ACT[b.dataset.act]; if (f) { e.preventDefault(); f(b.dataset, b); }
});
document.addEventListener('keydown', e => {
  if (V.view !== 'quiz' || !RUN || RUN.done) return;
  const q = RUN.qs[RUN.i];
  if (e.key === 'Enter' && !e.shiftKey && !(q && q.t === 'write' && RUN.phase === 'ask')) {
    e.preventDefault();
    if (RUN.phase === 'fb') ACT.qnext(); else if (q.t !== 'speak') doCheck();
  } else if (RUN.phase === 'ask' && q && q.t === 'mc' && /^[1-4]$/.test(e.key) && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
    RUN.given = q.opts[+e.key - 1]; render();
  }
});
document.addEventListener('change', e => {
  if (e.target.id === 'voice') { S.voice = e.target.value; save(); say('Hallo! Das ist meine Stimme.'); }
});
document.addEventListener('input', e => {
  if (e.target.id === 'rate') { S.rate = +e.target.value; const rv = $('#rv'); if (rv) rv.textContent = S.rate; save(); }
  if (e.target.id === 'ans' && RUN) RUN.given = e.target.value;
});

window.addEventListener('DOMContentLoaded', () => { render(); initCloud(); });
// test hook (only with #dev in the address)
if (location.hash === '#dev') window.__dw = { LEVELS, practiceFor, unitTest, examPart, sheetHTML, gradeText, matchScore, STEPS, PARTS, rx, go: v => go(v), startExamPart, unitById };
})();
