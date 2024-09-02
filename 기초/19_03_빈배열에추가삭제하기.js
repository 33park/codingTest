/**
 * 다른 사람의 풀이. 참고용
 */
function solution(arr, flag) {
	return arr.reduce((prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)), []);
                                                                                                                    //초기값
                                                                                                                    
                                                    //참  : 거짓
                                        //배열 생성, 요소 채움
}

/**
 * false 값 먼저 체크해서
 */
function solution(arr, flag) {
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		// console.log(flag[i])
		if (flag[i]) {
			//true
			for (let j = arr[i] * 2; j > 0; j--) {
				res.push(arr[i]);
				// console.log(res)
			}
		} else {
			//false
			for (let k = arr[i]; k > 0; k--) {
				res.pop();
				// console.log(res)
			}
		}
	}

	return res;
}

solution([3, 2, 4, 1, 3], [true, false, true, false, false]);
