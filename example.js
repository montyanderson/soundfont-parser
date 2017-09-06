const fs = require("fs");
const soundfontParser = require("./");

const file = fs.readFileSync(`${__dirname}/soundfont.sfz`, "utf8");

console.log(soundfontParser(file));
