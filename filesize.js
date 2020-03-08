let core = require('dessert-filesize-core');

let filesize = core.filesize;
filesize.partial = opt => arg => filesize(arg, opt);

module.exports = filesize;
