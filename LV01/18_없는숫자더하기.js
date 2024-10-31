//다른 사람 풀이
function solution(numbers) {
	return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

/**
 * numbers 배열 요소가 numArr에 있으면 패스
 */
function solution(numbers) {
	let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	return numArr.filter((x) => !numbers.includes(x)).reduce((a, c) => a + c, 0);
	// 교집합이 아닌 요소 구하기
	// 더하기
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
