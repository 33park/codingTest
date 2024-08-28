/**
 * count 변수 만들어서 1이 나오면 카운트 증가
 * for로 각 정수 체크
 */

function solution(num_list) {
	let count = 0;

	for (let i = 0; i < num_list.length; i++) {
		let num = num_list[i];
		while (num != 1) {
			if (num % 2 == 0) {
				num /= 2;
			} else {
				num = (num - 1) / 2;
			}
			count++;
		}
	}

	return count;
}

solution([12, 4, 15, 1, 14]);

/**
 * 다른 사람의 풀이
 * toString(2)의 이진수로 바꾸는 방법도 있으나...
 * 확장성과 가독성이 부족하다
 *
 */
