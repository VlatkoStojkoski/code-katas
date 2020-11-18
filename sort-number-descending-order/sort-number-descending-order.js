module.exports.descendingOrder = (n) =>
	parseInt(
		String(n)
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
