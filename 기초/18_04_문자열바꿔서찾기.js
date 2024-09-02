/**
 *  1. myString 의 문자열 변경하기
 *  2. includes 찾기
 */

function solution(myString, pat) {
	let arr = [];

	myString.split("").map((ele) => {
		if (ele == "A") arr.push("B");
		if (ele == "B") arr.push("A");
        /**
         * .map(v => v === 'A' ? 'B' : 'A') 로 작성할 수도 있다
        */
	});

	return arr.join('').includes(pat) ? 1 : 0;
}

solution("ABBAA", "AABB");
