//다른사람 풀이

function solution(s) {
	// return s.split("").sort().reverse().join("");
    console.log(s.split(""))
    console.log(s.split("").sort())
    console.log(s.split("").sort().reverse())
    console.log(s.split("").sort().reverse().join(""))
    /**
     * 알파벳은 sort()를 할 경우, 자동으로 대문자가 먼저 A부터 Z로 정렬되고, 
     * 소문자가 a->z 로 정렬된다
    */
}


//내 풀이
/**
 * 오브젝트 만들어서
 * 문자와 문자의 정수 charCodeAt() 키,값 쌍으로 묶기
 * 정수 sort
 * 해당 정수에 해당하는 키값으로 교체?
 */

function solution(s) {
	let str = [...s];
	let numArr = [];
	let obj = new Object();
	for (let i = 0; i < str.length; i++) {
		obj[str[i].charCodeAt()] = str[i];
		numArr.push(str[i].charCodeAt());
	}

	let res = "";

	numArr.sort((a, b) => b - a).forEach((e) => {
		res += obj[e];
	});

	return res;
}

console.log(solution("Zbcdefg"));
