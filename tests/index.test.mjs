import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('strips red SGR sequence', () => {
  assert.equal(api.stripAnsi('\u001b[31mred\u001b[0m'), 'red');
});
test('strips cursor CSI command', () => {
  assert.equal(api.stripAnsi('a\u001b[2Db'), 'ab');
});
test('strips OSC terminated by BEL', () => {
  assert.equal(api.stripAnsi('a\u001b]0;title\u0007b'), 'ab');
});
test('strips OSC terminated by ST', () => {
  assert.equal(api.stripAnsi('a\u001b]0;title\u001b\\b'), 'ab');
});
test('leaves ordinary text', () => {
  assert.equal(api.stripAnsi('plain'), 'plain');
});
test('rejects non-string input', () => {
  assert.throws(() => api.stripAnsi(5), TypeError);
});
