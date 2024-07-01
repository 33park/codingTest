function solution(n) {
	const arr = [];
	let num = 1;

	while (arr.length < n) {
        //3의 배수가 아니고, 3이 들어가지 않는 숫자를 배열로 반환
		if (num % 3 !== 0 && !num.toString().includes("3")) {
			arr.push(num);
		}
		num++;
	}

	return arr[n - 1]; // arr 배열 가장 마지막에 위치함으로 n-1
}

