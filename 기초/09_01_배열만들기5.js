/**
 * s번 인덱스에서 시작하는 길이 l짜리 문자열을 잘라내 정수로 변환.
 * 이때 변환한 정수 값이 k보다 크면 반환
 */

function solution(intStrs, k, s, l) {
	let arr = [];
	intStrs.forEach((ele) => {
		let str = ele.slice(s, s + l);
		if (Number(str) > k) arr.push(Number(str));
	});

	return arr;
}



// 다른사람 풀이
function solution(intStrs, k, s, l) {
	return intStrs
		.map((v) => +v.slice(s, s + l)) //잘라낸 문자열을 숫자로 변환 ( Number()과 + 가 동일하게 작동)
		.filter((v) => v > k);
}
solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5);