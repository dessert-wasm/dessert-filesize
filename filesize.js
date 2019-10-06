let wasm = require('dessert-filesize-core');

let filesize = wasm.filesize;
filesize.partial = opt => arg => filesize(arg, opt);
module.exports = filesize;