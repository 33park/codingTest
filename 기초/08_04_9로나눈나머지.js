//참고
const solution = (n) => BigInt(n) % 9n;
/**
 * `BigInt() 생성자`
 * BigInt(value);
 * └ 생성하는 객체에 할당할 숫자 값. 문자열 또는 정수를 사용할 수 있습니다.
 */

// 성공!!
function solution01(number) {
	let sum = 0;
	[...number].forEach((ele) => {
		let num = Number(ele);
		sum += num;
	});

	return sum % 9;
}

solution("123");
solution("78720646226947352489");
