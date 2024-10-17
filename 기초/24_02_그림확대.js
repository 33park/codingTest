/**
 * 1. 배열 하나의 문자 요소 k 값만큼 반복
 * 2. 배열 또한 k값만큼 반복
 */

/**
 * 내 풀이
*/

function solution(picture, k) {
	let res = [];

	picture.forEach((str) => {
		let col = "";

		[...str].forEach((e) => {
			let i = e.repeat(k);
			col += i;
		});
		for (let i = 0; i < k; i++) {
			res.push(col);
		}
	});

	return res;
}

/**
 * 다른사람 풀이 참고
 */

function solution(picture, k) {
	var answer = [];

	picture.forEach((line) => {
        const expanded = [...line].reduce((acc, cur) => (acc + cur.repeat(k)), "");
        /**
         * array.reduce(callback[, initialValue]);
         * callback: 콜백함수는 배열의 각 요소에 대해 실행되며, 아래 4가지 인수를 가지고 있습니다.
                accumulator: 이전 콜백 실행의 누적 결과 (콜백 함수의 반환 값을 누적한 값)
                currentValue: 배열의 현재 요소
                currentIndex(선택 사항): 현재 처리 중인 요소의 인덱스
                array (선택 사항): 호출한 배열

         * initialValue(선택사항): 콜백함수의 첫 번째 호출에 대한 첫 번째 인수로 사용하는 값입니다. 초기 값이 제공되지 않으면 배열의 첫 번째 요소가 사용됩니다.
         * ※ 객체를 reduce 함수로 처리할 때는 초기값을 반드시 명시해주어야 합니다
         * 
         * ※ 해당 요소의 값을 기반으로 배열에서 새로운 단일 값을 파생해야 할 때 유용
        */
		for (let i = 0; i < k; i++) answer.push(expanded);
	});

	return answer;
}

solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."],2)