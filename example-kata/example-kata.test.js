const assert = require('assert');
const { example } = require('./example-kata.js');

describe('Example', () => {
	it('Example tests', () => {
		assert.strictEqual(example(1), 1);
		assert.strictEqual(example(2), 2);
		assert.strictEqual(example(3), 3);
		assert.strictEqual(example(4), 4);
		assert.strictEqual(example(5), 5);
	});
});
