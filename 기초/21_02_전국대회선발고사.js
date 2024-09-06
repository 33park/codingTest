// 다른사람의풀이

function solution(rank, attendance) {
	const [a, b, c] = rank
		.map((r, i) => [r, i])
		.filter(([_, i]) => attendance[i])
		.sort(([a], [b]) => a - b);
	return 10000 * a[1] + 100 * b[1] + c[1];
}
solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);

/**
 * 1. 참여 가능한 학생의 등수
 * 2. 가장 등수가 높은 학생 sort 3등까지
 * 3. 계산식
 */
function solution(rank, attendance) {
	let newArr = [...rank]
		.filter((e, i) => {
			if (attendance[i]) return e;
		})
		.sort((a, b) => a - b)
		.slice(0, 3);

	// console.log(newArr);

	let idxArr = [];

	for (let i = 0; i < newArr.length; i++) {
		let num = rank.indexOf(newArr[i]);
		// console.log("num" + num);
		idxArr.push(num);
	}

	return 10000 * idxArr[0] + 100 * idxArr[1] + idxArr[2];
}

solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false]);
solution([1, 2, 3], [true, true, true]);
solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true]);
