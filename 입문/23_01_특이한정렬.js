function solution(numlist, n) {
	/**
	 * n을 기준으로 n과 가까운 수부터 정렬
	 *
	 * n과 배열 요소 빼서 floor 값만 비교해서 arr에 보내기?
	 */

	return numlist.sort((a, b) => {
		console.log("a " + a + " b " + b);
		// b부터 index 0이 들어감

		const difA = Math.abs(a - n);
		const difB = Math.abs(b - n);

		if (difA === difB) {
			return b - a;
		}

		return difA - difB;
	});
}

solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30); //[36, 40, 20, 47, 10, 6, 7000, 10000]
