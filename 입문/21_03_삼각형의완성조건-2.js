function solution(sides) {
	/**
	 * sides의 배열요소는 가장 긴 변이 될 수 있는 정수
	 * 가장 긴 변이 나머지 한변이 될 수 있는 최댓값
	 * 최소 값은 (가장 긴 변 + 1) - 나머지 변 값
	 */

	let answer = [];
	let [long, short] = sides.sort((a, b) => b - a);

	if (short == 1) {
		answer.push(long);
	} else {
		// 1. long이 가장 큰 변일 경우
		for (let i = long; i > long - short; i--) {
			answer.push(i);
		}
		// 2. 나머지 변이 가장 큰 변일 경우
		for (let j = long + 1; j < long + short; j++) {
			answer.push(j);
		}
	}

	return answer.length;
}
