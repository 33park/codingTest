/**
 * 내 풀이
 */
function solution(n) {
	let array = [];

	for (let i = 0; i < n; i++) {
		let j = i;

		let arr = new Array(n).fill(0);
		if (j == i) {
			arr[j] = 1;
		}

		array.push(arr);
		j++;
	}

	return array;
}

solution(3);

/**
 * 다른 사람의 풀이
 */

function solution(n) {
	const answer = Array.from(Array(n), () => Array(n).fill(0));

	for (let i = 0; i < n; i++) {
		answer[i][i] = 1;
	}

	return answer;
}

//Array.from(arrayLike, mapFn, thisArg)
