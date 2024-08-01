function solution(a, b) {
	return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
	// let aBigger = Number(`${a}${b}`)
	// let bBigger = Number(`${b}${a}`)

	// if(aBigger === bBigger) return aBigger;

	// if(aBigger > bBigger) {
	//     return aBigger
	// } else {
	//     return bBigger
	// }
}
