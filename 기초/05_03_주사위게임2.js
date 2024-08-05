/**
 * Set 객체에 대해...
 * Set 객체는 값의 컬렉션입니다. S
 * et의 값은 한 번만 나타날 수 있으며, Set의 컬렉션에서는 고유한 값입니다.
*/

/**
 * solution 02
 */

const calculate = (inc, n = 1) => {
	const [a, b, c] = inc;
	let result = 1;
	for (let i = 1; i <= n; i++) {
		result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
                //Math.pow는 제곱한 값을 반환. 
	}

	return result;
};

const solution = (a, b, c) => {
	const set = new Set([a, b, c]);// a, b, c 값을 Set 객체로
    console.log(set)
	switch ([...set].length) {
        // Set 객체를 배열로 변환하고 길이에 따라 분기, Set 객체는 중복된 값을 제거한다.
        //중복값이 있는 배열을 Set객체로 만들면 중복이 제거가 되는데, 이를 다시 Spread Oprator를 활용하여 배열로 변환하면 처음 배열에서 중복값이 제거된 상태가 
		case 1:
			return calculate([a, b, c], 3);
		case 2:
			return calculate([a, b, c], 2);
		case 3:
			return calculate([a, b, c]);
	}
};

/**
 * solution 01
 * 같은 숫자만큼 ((a**=i) + (b**=i) + (c**=i)) 가 증가함
 *
 *  코드 계산이 너무 오래 걸림(2초)
 */
// function solution(a, b, c) {
// 	let res = 1;
// 	let count = 2;

// 	if (a == b && a == c) {
// 		count = 3;
// 	} else if (a != b && a != c && b != c) {
// 		count = 1;
// 	}

// 	console.log(count);

// 	for (let i = 1; i <= count; i++) {
// 		res *= a ** i + b ** i + c ** i;
// 	}

// 	return res
// }

solution(2, 6, 1);
solution(5, 3, 3);
solution(4, 4, 4);
