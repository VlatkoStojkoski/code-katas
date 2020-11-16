module.exports.sumMultiples = (n) => {
	let sum = 0;
	let i = 1;
	while (i < n) {
		sum += i % 3 == 0 || i % 5 == 0 ? i : 0;
		i += Math.min(3 - (i % 3), 5 - (i % 5));
	}
	return sum;
};
