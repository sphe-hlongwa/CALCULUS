const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../assets/js/app.js');
let content = fs.readFileSync(file, 'utf8');

// Replace single-quoted strings containing ${Icons.xxx} with backtick strings
content = content.replace(/'(<span class="btn-icon-inner">\${Icons\.check}<\/span> Completed)'/g, '`$1`');
content = content.replace(/'(<span class="btn-icon-inner">\${Icons\.starOff}<\/span> Mark Complete)'/g, '`$1`');
content = content.replace(/'(<span class="btn-icon-inner">\${Icons\.check}<\/span> Chapter marked as complete!)'/g, '`$1`');
content = content.replace(/'(<span class="quick-ch-status"><span class="btn-icon-inner">\${Icons\.check}<\/span> Done<\/span>)'/g, '`$1`');
content = content.replace(/'(<span class="btn-icon-inner">\${Icons\.check}<\/span> Complete)'/g, '`$1`');

// Fix textContent to innerHTML for line 816 and line 822
content = content.replace(/textContent: `(<span class="btn-icon-inner">\${Icons\.check}<\/span> Completed)`/g, 'innerHTML: `$1`');
content = content.replace(/textContent: `(<span class="btn-icon-inner">\${Icons\.starOff}<\/span> Mark Complete)`/g, 'innerHTML: `$1`');

// Write back
fs.writeFileSync(file, content);
console.log('Fixed broken template literals.');
