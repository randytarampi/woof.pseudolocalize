# Text-to-ʕ•ᴥ•ʔ translations

[![npm versions](https://img.shields.io/npm/v/@randy.tarampi/pseudolocalize.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudolocalize) 
[![npm downloads](https://img.shields.io/npm/dt/@randy.tarampi/pseudolocalize.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudolocalize) 
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@randy.tarampi/pseudolocalize.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudolocalize) 
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@randy.tarampi/pseudolocalize.svg?style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudolocalize) 
[![npm license](https://img.shields.io/npm/l/@randy.tarampi/pseudolocalize.svg?registry_uri=https%3A%2F%2Fregistry.npmjs.com&style=flat-square)](https://www.npmjs.com/package/@randy.tarampi/pseudolocalize)
[![Build status](https://img.shields.io/travis/com/randytarampi/pseudolocalize.svg?style=flat-square)](https://travis-ci.com/randytarampi/pseudolocalize) 
[![Coverage status](https://img.shields.io/coveralls/randytarampi/pseudolocalize.svg?style=flat-square)](https://coveralls.io/github/randytarampi/pseudolocalize?branch=master) 
[![Maintainability status](https://img.shields.io/codeclimate/maintainability-percentage/randytarampi/pseudolocalize.svg?style=flat-square)](https://codeclimate.com/github/randytarampi/pseudolocalize/maintainability)  
[![Waffle.io board](https://badge.waffle.io/randytarampi/pseudolocalize.svg?columns=all&style=flat-square)](https://waffle.io/randytarampi/pseudolocalize) 
[![Analytics](https://ga-beacon.appspot.com/UA-50921068-1/beacon/github/randytarampi/me/tree/master/packages/pseudolocalize?flat&useReferrer)](https://github.com/igrigorik/ga-beacon)
[![Greenkeeper badge](https://badges.greenkeeper.io/randytarampi/pseudolocalize.svg)](https://greenkeeper.io/)

[![Install @randy.tarampi/pseudolocalize](https://nodeico.herokuapp.com/@randy.tarampi/pseudolocalize.svg)](https://www.npmjs.com/package/@randy.tarampi/pseudolocalize) 

Or, otherwise user defined pseudolocalizations...

## Usage

```javascript
let Pseudolocalizer = require("@randy.tarampi/pseudolocalize");

let pseudolocalizer = new Pseudolocalizer();
console.log(pseudolocalizer.pseudolocalize("ᴥ")); // "ʕつ•ᴥ•ʔつ"
console.log(pseudolocalizer.pseudolocalize("woof")); // "ʕつ•w•ʔつ"
console.log(pseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "ʕつ•woof woof woof woof woof•ʔつ"

let open = "\uFF5F";
let close = "\uFF60";

let CJKPadding = "纬横糸씨"; // From "纬", "横糸" and "씨"
let CJKPseudolocalizer = new Pseudolocalizer(0.8, open, close, CJKPadding, CJKPadding);
console.log(CJKPseudolocalizer.pseudolocalize("woof")); // "｟纬w纬｠"
console.log(CJKPseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "｟纬w纬｠"

let LCGPadding = "sгυ"; // From "subtegmine", "гав" and "υφάδι"
let LCGPseudolocalizer = new Pseudolocalizer(1.2, open, close, LCGPadding, LCGPadding);
console.log(LCGPseudolocalizer.pseudolocalize("woof")); // "｟sws｠"
console.log(LCGPseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "｟swoof woof woof woof woofs｠"

let AFBPadding = "نپব"; // From "نسيج" and "پود" and "বুনন"
let AFBPseudolocalizer = new Pseudolocalizer(1.5, open, close, AFBPadding, AFBPadding);
console.log(AFBPseudolocalizer.pseudolocalize("woof")); // "｟نwن｠"
console.log(AFBPseudolocalizer.pseudolocalize("woof woof woof woof woof")); // "｟نپবنپwoof woof woof woof woofنپবنپ｠"

```
