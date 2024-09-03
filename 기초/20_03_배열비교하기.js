function solution(arr1, arr2) {
	let [leng01, leng02] = [arr1.length, arr2.length];

	if (leng01 == leng02) {
		//각배열 원소의 합
		let sum1 = arr1.reduce((a, c) => a + c);
		let sum2 = arr2.reduce((a, c) => a + c);

		if (sum1 == sum2) return 0;
		else if (sum1 < sum2) return -1;
		else return 1;
	} else {
		return leng01 > leng02 ? 1 : -1;
	}
}

solution([49, 13], [70, 11, 2]);

// 다른 사람 풀이

const solution = (arr1, arr2) => {
	return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
	if (option === "reduce") {
		a = a.reduce((acc, cur) => acc + cur);
		b = b.reduce((acc, cur) => acc + cur);
	}
	return a > b ? 1 : a < b ? -1 : 0;
};
