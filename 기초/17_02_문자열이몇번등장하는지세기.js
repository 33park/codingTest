function solution(myString, pat) {
	return myString.substring(0, myString.lastIndexOf(pat)) + pat;
	//ex) "AbC" + "dE"
	//`substring()` 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
}

/**
 * lastIndexOf로 index 가져오고
 * pat 길이에 따라 index 범위 확장
 * slice로 return
 */
function solution01(myString, pat) {
	let getIndex = myString.lastIndexOf(pat) + pat.length; //pat의 마지막 문자까지 포함한 길이에 맞게 끝나야한다.
	return myString.slice(0, getIndex);
}

solution("AbCdEFG", "dE");
solution("AAAAaaaa", "a");
