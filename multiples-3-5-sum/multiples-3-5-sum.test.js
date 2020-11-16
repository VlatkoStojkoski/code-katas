const assert = require('assert');
const { sumMultiples } = require('./multiples-3-5-sum');

it('Basic test', () => {
	assert.deepStrictEqual(sumMultiples(10), 23);
});
