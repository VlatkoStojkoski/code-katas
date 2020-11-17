module.exports.frequencySort = (arr) => {
	let occ = new Map();
	arr.forEach((num) => occ.set(num, occ.has(num) ? occ.get(num) + 1 : 1));
	return [].concat.apply(
		[],
		[...occ.entries()]
			.sort((a, b) => (b[1] == a[1] ? a[0] - b[0] : b[1] - a[1]))
			.map((occEl) => Array.from({ length: occEl[1] }).map((x) => occEl[0]))
	);
};
