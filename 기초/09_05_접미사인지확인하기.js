
//다른 사람의 풀이
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0;
/**
 * String.prototype.endsWith()
 * String 값의 endsWith() 메서드는 문자열이 이 문자열의 문자로 끝나는지 여부를 결정하여 적절하게 true 또는 false를 반환합니다.
 * /

//성공
function solution(my_string, is_suffix) {
	let found = false;

	for (let i = my_string.length; i > 0; i--) {
		let str = my_string.slice(-i);
		if (str == is_suffix) {
			found = true;
		}
	}

	return found ? 1 : 0;
}

solution("banana", "ana");
solution("banana", "nan");
solution("banana", "wxyz");
solution("banana", "abanana");
