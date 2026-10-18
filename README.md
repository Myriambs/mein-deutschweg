# Mein Deutschweg

A free German course from zero to B2 in 16 weeks, with explanations in French or English.

**Open it:** https://myriambs.github.io/mein-deutschweg/ (use Google Chrome or Microsoft Edge for the German voice and the microphone)

## What's inside

- 8 levels (A1.1 → B2.2), 8 units each: 64 units, about 1,600 words, 770 phrases, 766 grammar drills.
- Each unit has 9 steps: handwritten-style notes, words, phrases, grammar, pronunciation (microphone), reading, writing (corrected), conversation role-play (microphone), and a unit test (85% to continue).
- A Goethe-style exam after each level with 5 modules (Hören, Lesen, Wortschatz & Grammatik, Schreiben, Sprechen). You need 90% in every module. If you fail a module, the units where you made mistakes are marked for review. You must pass their tests again before you can retake that module.
- "My mistakes" notebook: every wrong answer comes back until you get it right twice.

## How it works

- `index.html`: page and styles. `app.js`: the engine. `data/*.js`: one file per level.
- Progress is saved in your browser (`localStorage`).
- Writing is corrected with the free LanguageTool API (on the claude.ai version, Claude corrects it).
- Audio uses your browser's German voice. Speaking uses the browser's speech recognition (Chrome / Edge).
