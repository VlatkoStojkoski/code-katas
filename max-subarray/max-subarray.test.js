const assert = require('assert');
const { maxSubSlow, maxSubFast } = require('./max-subarray');

describe("Kadane's Algorithm", () => {
	it('should work on an empty array', () => {
		assert.deepStrictEqual(maxSubFast([]), 0);
	});
	it('basic test', () => {
		assert.deepStrictEqual(maxSubFast([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
	});
});

describe('Bruteforce', () => {
	it('should work on an empty array', () => {
		assert.deepStrictEqual(maxSubSlow([]), 0);
	});
	it('basic test', () => {
		assert.deepStrictEqual(maxSubSlow([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
	});
});
