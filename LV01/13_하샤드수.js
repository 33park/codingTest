/**
 * 하샤드 수
 * x의 자릿수 합으로 x가 나뉘어져야한다
 * 하샤드 수인지 아닌지 boolean 으로
 */
function solution(x) {
    let set = x;
	let arr = [];

	do {
		arr.push(set % 10);
		set = Math.floor(set / 10);
	} while (set > 0);

	let sum = arr.reduce((a, c) => a + c);

	return x % sum == 0 ? true : false
}

console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
