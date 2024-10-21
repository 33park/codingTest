function solution(board, k) {
    let sum = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (i + j <= k) {
                sum += board[i][j];
            }
        }
    }

    return sum;
}

// 너무 어렵게 생각하지말자...


/**
 * i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.
 * i + j <= k가 나올 수 있는 숫자 [i, j] 숫자 배열을 만들기
 * 해당하는 요소 더하기
 *
 * 모든 열의 갯수는 같음
 *  0 <= k <= board의 길이 + board[i]의 길이
 */
function solution(board, k) {
	const min = Math.min(board[0].length, board.length, k);
    let arr = new Array();

	for (let i = 0; i <= min; i++) {
		for (let j = 0; j <= min - i; j++) {
            arr.push(board[i][j]);
		}
	}

    return arr.reduce((acc,cur)=> acc + cur)
}

solution(
	[
		[0, 1, 2],
		[1, 2, 3],
		[2, 3, 4],
		[3, 4, 5],
	],
	2
); //8

/**
 * 1회차- 런타임 에러 발생, for문에 for가 중복되어 생긴것으로 보임
 */
