/**
 * count 증가
 * pat 길이만큼 끊어서 검색
 * slice 쓰기
 */
function solution02(myString, pat) {
	const reg = new RegExp(`(?=${pat})`, "g"); // `?=` 앞쪽일치, "g"는 정규식의 플래그, 전역
	return myString.match(reg)?.length || 0;
}

function solution01(myString, pat) {
	let count = 0;

	for (let i = 0; i < myString.length; i++) {
		let [start, end] = [i, i + pat.length];
		let str = myString.slice(start, end);
		if (str == pat) count++;
	}

	return count;
}

solution("banana", "ana");
