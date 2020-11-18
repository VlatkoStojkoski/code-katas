const assert = require('assert');
const { descendingOrder } = require('./sort-number-descending-order');

it('Basic tests', () => {
	assert.deepStrictEqual(descendingOrder(0), 0);
	assert.deepStrictEqual(descendingOrder(1), 1);
	assert.deepStrictEqual(descendingOrder(123456789), 987654321);
});
