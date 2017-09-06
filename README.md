# soundfont-parser
JS parser for SoundFont files.

## Usage

``` javascript
const fs = require("fs");
const soundfontParser = require("soundfont-parser");

const file = fs.readFileSync(`${__dirname}/soundfont.sfz`, "utf8");

console.log(soundfontParser(file));
```

```
...
pitchlfo_freq: '8.176',
fil_type: 'lpf_2p',
cutoff: '19914' },
{ regions:
 [ [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object],
   [Object] ],
lokey: '0',
hikey: '127',
lovel: '0',
hivel: '127',
loop_mode: 'no_loop',
ampeg_attack: '0.001',
amplfo_freq: '8.176',
fillfo_freq: '8.176',
pitchlfo_freq: '8.176',
fil_type: 'lpf_2p',
cutoff: '19914' } ]
```
