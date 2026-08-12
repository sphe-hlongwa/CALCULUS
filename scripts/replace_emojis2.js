const fs = require('fs');
const path = require('path');

const replacements = {
  '📈': '${Icons.trendingUp}',
  '💡': '${Icons.bulb}',
  '📊': '${Icons.barChart}',
  '🔄': '${Icons.refresh}',
  '📚': '${Icons.book}',
  '🃏': '${Icons.layers}',
  '🔥': '${Icons.flame}',
  '📌': '${Icons.pin}',
  '🔢': '${Icons.hash}',
  '🧩': '${Icons.puzzle}',
  '🏆': '${Icons.trophy}',
  '👍': '${Icons.thumbsUp}',
  '💪': '${Icons.dumbbell}'
};

// Also for index.html which doesn't evaluate template literals, we need the raw SVGs.
// Since Icons isn't evaluated, I'll inject the Icons manually into the strings for index.html.
const icons = {
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ui-icon" style="flex-shrink:0"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  barChart: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ui-icon" style="flex-shrink:0"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
  puzzle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ui-icon" style="flex-shrink:0"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 0-.201 1.066c.264.676.4 1.378.4 2.115 0 3.314-2.686 6-6 6-.737 0-1.439-.136-2.115-.4a.98.98 0 0 0-1.066.201l-1.611 1.611c-.47.47-1.087.706-1.704.706s-1.233-.235-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.878-.289c-.58.085-1.17.085-1.75 0C1.865 22.04 0 20.174 0 17.854c0-.737.136-1.439.4-2.115a.98.98 0 0 0-.201-1.066L-1.412 13.06c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.568-1.568a1.026 1.026 0 0 0 .289-.878c-.085-.58-.085-1.17 0-1.75 0 0 0 0 0 0C.535 2.19 2.401.325 4.721.325c.737 0 1.439.136 2.115.4a.98.98 0 0 0 1.066-.201l1.611-1.611c.47-.47 1.087-.706 1.704-.706s1.233.235 1.704.706l1.568 1.568c.23.23.556.338.878.289.58-.085 1.17-.085 1.75 0 2.32.34 4.186 2.206 4.186 4.526 0 .737-.136 1.439-.4 2.115a.98.98 0 0 0 .201 1.066l1.611 1.611c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.568 1.568c-.23.23-.338.556-.289.878.085.58.085 1.17 0 1.75-1.175 4.381-5.59 7.037-9.97 5.86-1.542-.41-2.92-1.32-3.86-2.54z" transform="scale(0.85) translate(3,3)"/></svg>`
};

const htmlReplacements = {
  '🃏': icons.layers,
  '📊': icons.barChart,
  '🧩': icons.puzzle
};

const files = [
  '../assets/js/app.js',
  '../assets/js/math.js',
  '../assets/js/quizzes.js',
  '../index.html'
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const isHtml = fullPath.endsWith('.html');
    const map = isHtml ? htmlReplacements : replacements;
    
    for (const [emoji, replacement] of Object.entries(map)) {
      // Create a global regex for the emoji
      const regex = new RegExp(emoji, 'g');
      content = content.replace(regex, replacement);
    }
    
    // One specific replacement for emojis dynamically built in JS strings, without template literals.
    // e.g. `const emoji = pct === 100 ? '🏆' : ...`
    if (!isHtml) {
      // Convert the string literals to template literals for the icons in quizzes.js
      content = content.replace(/'🏆'/g, 'Icons.trophy');
      content = content.replace(/'👍'/g, 'Icons.thumbsUp');
      content = content.replace(/'📚'/g, 'Icons.book');
      content = content.replace(/'💪'/g, 'Icons.dumbbell');
    }

    fs.writeFileSync(fullPath, content);
  }
});

console.log('Emojis replaced.');
