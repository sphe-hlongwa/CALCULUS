const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../assets/js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const replacements = [
  [/📘 /g, '${Icons.book} '],
  [/📖 /g, '${Icons.book} '],
  [/⚠️ /g, '${Icons.alertTriangle} '],
  [/🧠 /g, '${Icons.brain} '],
  [/📐 /g, '${Icons.ruler} '],
  [/🌀 3D:/g, '${Icons.box} 3D:'],
  [/🎯 /g, '${Icons.target} '],
  [/🌿 /g, '${Icons.layers} '],
  [/🧩 /g, '<span class="btn-icon-inner">${Icons.puzzle}</span> '],
  [/🃏 /g, '<span class="btn-icon-inner">${Icons.layers}</span> '],
  [/✅ /g, '<span class="btn-icon-inner">${Icons.check}</span> '],
  [/○ /g, '<span class="btn-icon-inner">${Icons.starOff}</span> '],
  [/📝 /g, '${Icons.notes} '],
  [/🗺️ /g, '${Icons.target} '],
];

replacements.forEach(([regex, rep]) => {
  appJs = appJs.replace(regex, rep);
});
fs.writeFileSync(appJsPath, appJs);

const flashcardsJsPath = path.join(__dirname, '../assets/js/flashcards.js');
let flashcardsJs = fs.readFileSync(flashcardsJsPath, 'utf8');
flashcardsJs = flashcardsJs.replace(/🎉/g, '${Icons.partyPopper}');
flashcardsJs = flashcardsJs.replace(/★ /g, '${Icons.star} ');
flashcardsJs = flashcardsJs.replace(/☆ /g, '${Icons.starOff} ');
fs.writeFileSync(flashcardsJsPath, flashcardsJs);

console.log('Replaced all emojis!');
