/**
 *  다른 사람의 풀이
 * 
 * 가우스 공식 사용
 *  a ~ b까지의 숫자를 더한 합은? 
    처음 숫자와, 마지막 숫자를 더한 합 = ( a + b )
    더할 숫자의 개수 총합의 1/2 = ( b - a + 1) * 1/2
    = ( a + b ) *  ( b - a + 1) * 1/2 
*/

function solution(p, m, c) {
	const tmp = (p * c * (c + 1)) / 2 - m;
	return tmp > 0 ? tmp : 0;
}

/**
 * 기본 이용료 : price
 * N번째 이용 시 price * N
 * 놀이기구 타는 횟수 : count
 * 나한테 모자란 금액 / 부족하지 않으면 0
 */

function solution(price, money, count) {
	let start = 0;
	for (let i = 1; i <= count; i++) {
		start += price * i;
		console.log(start);
	}

	let answer = money - start;
	return answer > 0 ? 0 : answer * -1;
}

solution(3, 20, 4); //10
