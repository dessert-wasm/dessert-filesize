# Dessert Filesize

[![npm-badge]][npm-url]
[![license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/dessert-filesize.svg
[npm-url]: https://www.npmjs.org/package/dessert-filesize
[license-badge]: https://img.shields.io/github/license/dessert-wasm/dessert-filesize
[license]: LICENSE_MIT

> [filesize.js], but implemented with Rust and WebAssembly  
> [filesize.js] provides a simple way to get a human readable file size string from a number (float or integer) or string.

[filesize.js]: https://github.com/avoidwork/filesize.js

## Summary
* [Usage](#usage)
* [API](#api)
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)

## Usage

```js
const filesize = require('dessert-filesize');

filesize(500);                        // "500 B"
filesize(500, {bits: true});          // "4 Kb"
filesize(265318, {base: 10});         // "265.32 kB"
filesize(265318);                     // "259.1 KB"
filesize(265318, {round: 0});         // "259 KB"
filesize(265318, {output: "array"});  // [259.1, "KB"]
filesize(265318, {output: "object"}); // {value: 259.1, symbol: "KB"}
filesize(1, {symbols: {B: "Б"}});     // "1 Б"
filesize(1024);                       // "1 KB"
filesize(1024, {exponent: 0});        // "1024 B"
filesize(1024, {output: "exponent"}); // 1
filesize(265318, {standard: "iec"});  // "259.1 KiB"
filesize(265318, {standard: "iec", fullform: true}); // "259.1 kibibytes"
filesize(12, {fullform: true, fullforms: ["байтов"]}); // "12 байтов"
filesize(265318, {separator: ","});   // "259,1 KB"
filesize(265318, {locale: "de"});     // "259,1 KB"
```

## API

### filesize(bytes, options={})
Returns a human readable string from `bytes` (number)

`filesize()` accepts an optional descriptor Object as a second argument, so you can customize the output.

### base
_*(number)*_ Number base, default is `2`

### bits
_*(boolean)*_ Enables `bit` sizes, default is `false`

### exponent
_*(number)*_ Specifies the symbol via exponent, e.g. `2` is `MB` for base 2, default is `-1`

### fullform
_*(boolean)*_ Enables full form of unit of measure, default is `false`

### fullforms
_*(array)*_ Array of full form overrides, default is `[]`

### locale (overrides 'separator')

### output
_*(string)*_ Output of function (`array`, `exponent`, `object`, or `string`), default is `string`

### round
_*(number)*_ Decimal place, default is `2`

### separator
_*(string)*_ Decimal separator character, default is `.`

### spacer
_*(string)*_ Character between the `result` and `symbol`, default is `" "`

### standard
_*(string)*_ Standard unit of measure, can be `iec` or `jedec`, default is `jedec`; can be overruled by `base`

### symbols
_*(object)*_ Dictionary of SI/JEDEC/IEC symbols to replace for localization, defaults to english if no match is found

### unix
_*(boolean)*_ Enables unix style human readable output, e.g `ls -lh`, default is `false`


## Partial Application
### filesize.partial(options={})
`filesize.partial()` takes the second parameter of `filesize()` and returns a new function with the configuration applied 
upon execution. This can be used to reduce `Object` creation if you call `filesize()` without caching the `descriptor` 
in lexical scope.

```javascript
const size = filesize.partial({standard: "iec"});
size(265318); // "259.1 KiB"
```

## Installation
With [npm](https://npmjs.org/):
```shell
npm install dessert-filesize
```

With [yarn](https://yarnpkg.com/en/):
```shell
yarn add dessert-filesize
```

## License
This software is licensed under the MIT license (see [LICENSE](LICENSE_MIT)).


## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)