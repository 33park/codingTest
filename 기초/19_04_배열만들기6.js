// 다른 사람의 풀이(🎉)
function solution(arr) {
	let stk = [];
	arr.forEach((x) => {
		if (x !== stk[stk.length - 1]) { // 현재 요소가 stk 마지막 요소와 같지 않다면 추가, stk.length가 비어있다면 요소와 같지 않으니 추가하는 것과 동일하다
			stk.push(x);
		} else {
			stk.splice(-1); // 같다면 stk 마지막 요소 제거 (`splice(-1)`로 마지막 요소 제거)
		}
	});

	if (stk.length == 0) {
		stk = [-1];
	}
	return stk;
}

//내 풀이

function solution(arr) {
	let str = [];
	let i = 0;
	while (i < arr.length) {
		if (str.length <= 0) {
			str.push(arr[i]);
			i++;
		} else {
			if (str[str.length - 1] == arr[i]) {
				str.pop();
				i++;
			} else {
				str.push(arr[i]);
				i++;
			}
		}
	}

	return str.length > 0 ? str : [-1];
}


solution([0, 1, 1, 1, 0]);
solution([0, 1, 0, 1, 0]);
solution([0, 1, 1, 0]);