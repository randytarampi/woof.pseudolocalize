#Text-to-ʕ•ᴥ•ʔ translations

[![Build Status](https://travis-ci.org/randytarampi/pseudolocalize.woof.svg?branch=master)](https://travis-ci.org/randytarampi/pseudolocalize.woof) [![Coverage Status](https://coveralls.io/repos/github/randytarampi/pseudolocalize.woof/badge.svg?branch=master)](https://coveralls.io/github/randytarampi/pseudolocalize.woof?branch=master) [![Backlog](https://badge.waffle.io/randytarampi/pseudolocalize.woof.svg?label=Backlog&title=Backlog)](http://waffle.io/randytarampi/pseudolocalize.woof) [![Ready](https://badge.waffle.io/randytarampi/pseudolocalize.woof.svg?label=Ready&title=Ready)](http://waffle.io/randytarampi/pseudolocalize.woof) [![In Progress](https://badge.waffle.io/randytarampi/pseudolocalize.woof.svg?label=In%20Progress&title=In%20Progress)](http://waffle.io/randytarampi/pseudolocalize.woof)

Or, otherwise user defined pseudolocalizations...

##Usage

```javascript
let Pseudolocalizer = require("pseudolocalize.woof");

let pseudolocalizer = new Pseudolocalizer();
console.log(pseudolocalizer.pseudolocalize("ᴥ")); // "ʕつ•ᴥ•ʔつ"
console.log(pseudolocalizer.pseudolocalize("woof")); // "ʕつ•w•ʔつ"
console.log(pseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "ʕつ•woof woof woof woof woof•ʔつ"

let open = "\uFF5F";
let close = "\uFF60";

let CJKPadding = "纬横糸씨"; // From "纬", "横糸", and "씨"
let CJKPseudolocalizer = new Pseudolocalizer(0.8, open, close, CJKPadding, CJKPadding);
console.log(CJKPseudolocalizer.pseudolocalize("woof")); // "｟纬w纬｠"
console.log(CJKPseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "｟纬w纬｠"

let LCGPadding = "sгυ"; // From "subtegmine", "гав", and "υφάδι"
let LCGPseudolocalizer = new Pseudolocalizer(1.2, open, close, LCGPadding, LCGPadding);
console.log(LCGPseudolocalizer.pseudolocalize("woof")); // "｟sws｠"
console.log(LCGPseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "｟swoof woof woof woof woofs｠"

let AFBPadding = "نپব"; // From "نسيج" and "پود" and "বুনন"
let AFBPseudolocalizer = new Pseudolocalizer(1.5, open, close, AFBPadding, AFBPadding);
console.log(AFBPseudolocalizer.pseudolocalize("woof")); // "｟نwن｠"
console.log(AFBPseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "｟نپবنپwoof woof woof woof woofنپবنپ｠"

```
