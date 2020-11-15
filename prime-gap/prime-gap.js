const prime = (n) => {
	let flag = true;
	for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
		if (n % i == 0) flag = false;
	return flag;
};

module.exports.gap = (size, s, e) => {
	let prev = null;
	for (let i = s; i < e; i++) {
		if (prime(i) && !prev) prev = i;
		else if (prime(i) && prev && i - prev == size) return [prev, i];
		else if (prime(i) && prev && i - prev != size) prev = i;
	}
	return null;
};
