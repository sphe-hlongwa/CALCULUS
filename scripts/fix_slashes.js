const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '../assets/js/app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// The lines we recently messed up are between 465 and 630.
// Let's just fix the whole file for safety: any single backslash before a letter 
// (e.g. \sum, \int, \frac, \left, \right, \lim, \to, \infty, \implies, \mu, \text, \partial)
// should be double backslashed.
// Wait, a single backslash followed by a letter on disk looks like `\s`.
// We can just use a regex to find a backslash that is followed by a letter, and replace it with two backslashes.
// But we must NOT replace if it's already two backslashes.

// Regex: lookbehind for NOT a backslash, match one backslash, lookahead for a letter.
// Wait, lookbehind is `(?<!\\)`, backslash is `\\`, lookahead is `(?=[a-zA-Z])`.
// So: /(?<!\\)\\(?=[a-zA-Z])/g
const regex = /(?<!\\)\\(?=[a-zA-Z])/g;
const regex2 = /(?<!\\)\\(\W)/g; // for things like \{ or \| or \. Wait, maybe just replace all single backslashes?

// Let's be very safe and just apply it to the specific chapter strings we touched (Chapters 11 and 12).
// Chapter 11 string starts around line 430: "11: () => `"
// Chapter 12 string starts around line 500: "12: () => `"
// We will split the file by lines, and for lines between 460 and 640, we replace `\` with `\\` where appropriate.

const lines = appJs.split('\n');
for (let i = 460; i <= 640; i++) {
    if (lines[i]) {
        // replace any single backslash with a double backslash
        // A single backslash on disk is represented as `\\` in regex.
        // We want to replace `\` with `\\`.
        // To avoid replacing `\\` with `\\\`, we use negative lookaround.
        lines[i] = lines[i].replace(/(?<!\\)\\(?!\\)/g, '\\\\');
    }
}

fs.writeFileSync(appJsPath, lines.join('\n'));
console.log('Fixed backslashes!');
