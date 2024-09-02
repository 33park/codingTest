/**
 * 1. 정규식 사용해서 자르기 // const regexp = /[a|b|c]/g;
 * 
 */
function solution(myStr) {
	const regexp = /[a|b|c]/g;
	let res = myStr.replaceAll(regexp, " ").trim().split(' ');

	res = res.filter((str) => {
		return str.length > 0;
	});

	return res.length > 0 ? res : ["EMPTY"];
}


//다른 사람 풀이(🥇)
/**
 * 결과 값
    문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 
    괄호 안에 캡처된 결과가 옵니다. 일치하는 것이 없으면 null이 반환됩니다.
*/
function solution(myStr){
    return myStr.match(/[^a-c]+/g)||['EMPTY'];
}

solution("baconlettucetomato");
solution("abcd");
solution("cabab");
solution("eeeabcdabcabee");
