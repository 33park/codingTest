function solution(order) {
	/**
	 * order split 으로 쪼개서 %3 === 0  확인하고 갯수 반환
	 */
    //1차
	// let rule = ["3", "6", "9"];
	// let arr = [...order.toString()];
	// let answer = 0;

	// for (let num of arr) {
	// 	for (let i of rule) {
	// 		if (num === i) answer++;
	// 	}
	// }

    let answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    /**
     * matchAll() 메서드는 정규식에 따라 문자열에서 일치하는 모든 결과를 반복 가능한(iterable) 객체로 반환
    */

	return answer;
}
