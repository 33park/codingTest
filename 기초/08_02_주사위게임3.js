function solution(a, b, c, d) {
	const dice = [a, b, c, d];
	const counts = {};

	dice.forEach((num) => {
		counts[num] = (counts[num] || 0) + 1;
	});

    const uniqueVal = Object.keys(counts).map(Number);
    const frequencies = Object.values(counts);

    console.log(uniqueVal, frequencies)
}
solution(2, 2, 2, 2); //2222
solution(4, 1, 4, 4); //1681
solution(6, 3, 3, 6); //27
solution(2, 5, 2, 6); //30
solution(6, 4, 2, 5); //2



/**
 * solution 01
 * set으로 중복값 제거, set 길이로 결과값,
 * obj으로
 * (p,q,r)
 */
function solution02(a, b, c, d) {
	let arr = [a, b, c, d];
	const set = new Set([a, b, c, d]); // 중복제거
	const setList = [...set];
	const objList = new Object();

	arr.forEach((x) => {
		objList[x] = (objList[x] || 0) + 1;
	});

	//최다빈도 숫자, 빈도 갯수 구함
	let [maxKey, maxValue] = Object.entries(objList).reduce(
		(max, entry) => {
			const [key, value] = entry;
			return value > max[1] ? entry : max;
		},
		["", -Infinity]
	);

	let maxNumber = Number(maxKey);

	let divideArray = (p, q, r) => {};

	switch ([...set].length) {
		case 1:
			return 1111 * maxNumber;
		case 2:
			return 1;
		case 3:
			return 1;
		case 4:
			return arr.sort((a, b) => a - b)[0];
	}
}

