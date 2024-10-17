function solution(board, k) {
	//i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

	let res = 0;

    for(let i = k; i > 0; i--){
        for(let j = 0; j < k - i ; j++){
            if(i + j <= k) {
                res += board[i][j]
            }
        }
    }

	return res;
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