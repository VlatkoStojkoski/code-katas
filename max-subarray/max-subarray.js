const { time } = require('console');

// Bruteforce O(n^2)
module.exports.maxSubSlow = (arr) => {
	let max = -Infinity;
	for (let i = 0; i <= arr.length - 1; i++) {
		for (let j = 1; j <= arr.length - i; j++) {
			const currSum = [...arr].splice(i, j).reduce((acc, v) => acc + v);
			max = max < currSum ? currSum : max;
		}
	}
	return max == -Infinity || max < 0 ? 0 : max;
};

// Linear - Kadane's Algorithm O(n)
module.exports.maxSubFast = (arr) => {
	let maxGlobal = arr[0];
	let maxCurr = arr[0];
	for (let i = 1; i < arr.length; i++) {
		el = arr[i];
		maxCurr = Math.max(el, maxCurr + el);
		maxGlobal = Math.max(maxCurr, maxGlobal);
	}
	return maxGlobal;
};
