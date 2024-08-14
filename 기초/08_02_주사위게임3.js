/**
 * 다른 사람의 풀이에서 가독성이 좋은 코드.
 * 노가다지만 3번째 풀이보다 빠르고, 가독성도 훨씬 좋다...
 */ 
function solution(a, b, c, d) {
    if (a === b && a === c && a === d) return 1111 * a

    if (a === b && a === c) return (10 * a + d) ** 2
    if (a === b && a === d) return (10 * a + c) ** 2
    if (a === c && a === d) return (10 * a + b) ** 2
    if (b === c && b === d) return (10 * b + a) ** 2

    if (a === b && c === d) return (a + c) * Math.abs(a - c)
    if (a === c && b === d) return (a + b) * Math.abs(a - b)
    if (a === d && b === c) return (a + b) * Math.abs(a - b)

    if (a === b) return c * d
    if (a === c) return b * d
    if (a === d) return b * c
    if (b === c) return a * d
    if (b === d) return a * c
    if (c === d) return a * b

    return Math.min(a, b, c, d)
}


// 이 코드는 성공했으나 가독성이 좋지 않다.
function solution(a, b, c, d) {
    const counts = {}; //객체초기화
    const dice = [a, b, c, d];// 배열 저장

    // 주사위 값의 빈도 계산
    dice.forEach((num) => {
        counts[num] = (counts[num] || 0) + 1;
        /**
         * forEach로 `dice` 배열의 각 요소를 순회하면서 `counts` 객체에 해당 값이 몇번 나왔는지 기록한다.
         * `num`은 `dice`배열의 각 요소다
         */
    });

    const uniqueValues = Object.keys(counts).map(Number);
    const frequencies = Object.values(counts).sort((x, y) => y - x);

    // 조건에 따라 점수 계산
    if (frequencies[0] === 4) {
        // 네 주사위 숫자가 모두 같은 경우
        return 1111 * uniqueValues[0];
    } else if (frequencies[0] === 3 && frequencies[1] === 1) {
        // 세 개의 주사위 숫자가 같고, 나머지 하나가 다를 때
        const p = uniqueValues.find((key) => counts[key] === 3);
        const q = uniqueValues.find((key) => counts[key] === 1);
        return Math.pow(10 * p + q, 2);
    } else if (frequencies[0] === 2 && frequencies[1] === 2) {
        // 두 개씩 같은 숫자가 두 쌍 있을 때
        const [p, q] = uniqueValues;
        return (p + q) * Math.abs(p - q);
    } else if (frequencies[0] === 2 && frequencies[1] === 1 && frequencies[2] === 1) {
        // 두 주사위가 같은 숫자, 나머지 두 주사위가 서로 다른 숫자
        const p = uniqueValues.find((key) => counts[key] === 2);
        const remaining = uniqueValues.filter((key) => counts[key] === 1);
        return remaining[0] * remaining[1];
    } else {
        // 네 개의 주사위 숫자가 모두 다를 때
        return Math.min(...uniqueValues);
    }
}


// solution 03  속도는 빠르나 정확도가 80. fail
function solution03(a, b, c, d) {
	const dice = [a, b, c, d].sort((x, y) => x - y);

	// 모든 경우를 순차적으로 검사합니다.
	// 네 주사위 숫자가 모두 같은 경우
	if (dice[0] === dice[3]) {
		return 1111 * dice[0];
	}

	// 세 주사위가 같은 경우
	if (dice[0] === dice[2] || dice[1] === dice[3]) {
		const p = dice[1];
		const q = dice[0] === dice[2] ? dice[3] : dice[0];
		return Math.pow(10 * p + q, 2);
	}

	// 두 개씩 같은 숫자가 나온 경우
	if (dice[0] === dice[1] && dice[2] === dice[3]) {
		return (dice[0] + dice[2]) * Math.abs(dice[0] - dice[2]);
	}

	// 두 주사위가 같은 경우
	if (dice[0] === dice[1] || dice[1] === dice[2] || dice[2] === dice[3]) {
		const p = dice[1] === dice[2] ? dice[1] : dice[0];
		const remaining = dice.filter((num) => num !== p);
		return remaining[0] * remaining[1];
	}

	// 모든 주사위 숫자가 다를 경우
	return dice[0];
}

// solution 02   의도했던 코드...지만 정확도 50%로 fail
function solution01(a, b, c, d) {
	const dice = [a, b, c, d];
	const counts = {};

	dice.forEach((num) => {
		counts[num] = (counts[num] || 0) + 1; // 여기서 중복제거
	});

	const uniqueVal = Object.keys(counts).map(Number);
	// `Object.keys()` 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환

	const frequencies = Object.values(counts);
	/**
	 *  Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다.
	 * 이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)
	 */

	// console.log(counts, uniqueVal, frequencies)
	// 객체화해서, 중복 숫자 제거하고, 반복횟수 배열화

	switch (uniqueVal.length) {
		case 1:
			return 1111 * uniqueVal[0];
		case 2:
			if (frequencies.includes(3)) {
				const p = uniqueVal.find((key) => counts[key] === 3);
				const q = uniqueVal.find((key) => counts[key] === 1);
				return Math.pow(10 * p + q, 2);
			} else {
				const [p, q] = uniqueVal;
				return (p + q) * Math.abs(p - q);
			}
		case 3:
			0;
		case 4:
			return Math.min(...uniqueVal);
	}
}
solution(2, 2, 2, 2); //2222
solution(4, 1, 4, 4); //1681
solution(6, 3, 3, 6); //27
solution(2, 5, 2, 6); //30
solution(6, 4, 2, 5); //2

/**
 * solution 01
 * set으로 중복값 제거, set 길이로 결과값,
 * obj으로
 * (p,q,r)
 */
function solution02(a, b, c, d) {
	let arr = [a, b, c, d];
	const set = new Set([a, b, c, d]); // 중복제거
	const setList = [...set];
	const objList = new Object();

	arr.forEach((x) => {
		objList[x] = (objList[x] || 0) + 1;
	});

	//최다빈도 숫자, 빈도 갯수 구함
	let [maxKey, maxValue] = Object.entries(objList).reduce(
		(max, entry) => {
			const [key, value] = entry;
			return value > max[1] ? entry : max;
		},
		["", -Infinity]
	);

	let maxNumber = Number(maxKey);

	let divideArray = (p, q, r) => {};

	switch ([...set].length) {
		case 1:
			return 1111 * maxNumber;
		case 2:
			return 1;
		case 3:
			return 1;
		case 4:
			return arr.sort((a, b) => a - b)[0];
	}
}
