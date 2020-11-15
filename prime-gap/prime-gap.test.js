const assert = require('assert');
const { gap } = require('./prime-gap');

describe('Gap', () => {
	it('Basic tests', () => {
		assert.deepStrictEqual(gap(2, 100, 110), [101, 103]);
		assert.deepStrictEqual(gap(4, 100, 110), [103, 107]);
		assert.deepStrictEqual(gap(6, 100, 110), null);
		assert.deepStrictEqual(gap(8, 300, 400), [359, 367]);
		assert.deepStrictEqual(gap(10, 300, 400), [337, 347]);
	});
});
