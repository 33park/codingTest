function solution(a, b) {
	let result = 0;
	return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

/**
 * 제한 조건
    a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
    a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
    a와 b의 대소관계는 정해져있지 않습니다.
*/

function solution01(a, b) {
	let answer = 0;

	if (a < b) {
		for (let i = b; i >= a; i--) {
			answer += i;
		}
		return answer;
	} else if (a > b) {
		for (let i = a; i >= b; i--) {
			answer += i;
		}
		return answer;
	} else {
		return a;
	}
}
