function solution(arr, divisor) {
	let res = arr.filter((e) => e % divisor == 0);

	return res.length == 0 ? [-1] : res.sort((a, b) => a - b);

	console.log(res);
}
console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));

function solution01(arr, divisor) {
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % divisor == 0) res.push(arr[i]);
	}

	return res.length > 0 ? res.sort((a, b) => a - b) : [-1];
}
