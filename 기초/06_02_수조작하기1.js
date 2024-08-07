//작성 의도는 solution 02에 더 가까우므로... 

// solution 02
//함수 호출 오버헤드가 있을 수 있다. reduce는 연산 후 누적값을 다시 반환하기때문에 
const operations = {
	w: (n) => n + 1, // 연산을 함수로 관리한다.
	s: (n) => n - 1,
	d: (n) => n + 10,
	a: (n) => n - 10,
};

function solution(n, control) {
	return [...control].reduce((prev, op) => operations[op](prev), n);
}

// solution 01 / 이 코드가 2초정도 빠르다
const translate = {
	w: 1, // 연산을 직접 정의하고 있다
	s: -1,
	d: 10,
	a: -10,
};

function solution(n, control) {
	let sum = n;
	[...control].forEach((ele) => {
		sum += translate[ele]; // 단순 누적값이기 때문에 이렇게 작성했다
	});

	return sum;
}

solution(0, "wsdawsdassw");
