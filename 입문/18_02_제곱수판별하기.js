function solution(n) {
	// let sqrtNum = Math.sqrt(n);
	// return  n%sqrtNum === 0 ? 1 : 2  * 불필요한 연산을 발생시킨다

	return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
	// `Number.isInteger` 정수 여부 확인
}

/**
 * `Math.sqrt()` 함수는 숫자의 제곱근을 반환합니다.
 */
