function solution(numbers) {
	const numMap = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};
	const regex = new RegExp(/zero|one|two|three|four|five|six|seven|eight|nine/g);
	/**
	 * 1.단어,숫자 객체화 연결
	 * 2.정규식으로 숫자이름 찾기
	 * 3. replace 치환
	 */
	let answer = numbers.replace(regex, (match) => numMap[match]);
	/**
	 * `match => numMap[match] `
	 * match는 `replace` 매소드에서 정규식에 의해 매치된 각 문자열. 문자열에서 숫자 이름들이 각각 할당됨
	 * numMap 객체에서 해당하는 속성을 찾아서 숫자 반환
	 */

	return parseInt(answer); // 문자열 숫자 반환
}
