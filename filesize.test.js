const filesize = require('./filesize');

test('no options', () => {
  expect(filesize(500)).toBe('500 B');
});

test('string parameter', () => {
  expect(filesize('500')).toBe('500 B');
});

test('base', () => {
  expect(filesize(5000, { base: 10 })).toBe('5 kB');
});

test('spacer', () => {
  expect(filesize(500, { spacer: '   ' })).toBe('500   B');
});

test('exponent', () => {
  expect(filesize(500000000, { exponent: 2 })).toBe('476.84 MB');
});

test('fullform', () => {
  expect(filesize(500, { fullform: true })).toBe('500 bytes');
});

test('fullforms', () => {
  expect(filesize(500, { fullform: true, fullforms: ['oui'] })).toBe('500 oui');
});

test('round', () => {
  expect(filesize(50000, { round: 5 })).toBe('48.82813 KB');
});

test('separator', () => {
  expect(filesize(50000, { separator: 'oui' })).toBe('48oui83 KB');
});

test('standard', () => {
  expect(filesize(5000, { standard: 'iec' })).toBe('4.88 KiB');
});

test('unix', () => {
  expect(filesize(500, { unix: true })).toBe('500');
});