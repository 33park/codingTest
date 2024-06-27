function spreadOnes(arr) {
	// Create a copy of the array to avoid modifying the original array while iterating
	let result = arr.slice();

	// Iterate through the array
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			// If the current element is 1, set the left and right neighbors to 1
			if (i > 0) {
				result[i - 1] = 1; // Set the left neighbor to 1 if it exists
			}
			if (i < arr.length - 1) {
				result[i + 1] = 1; // Set the right neighbor to 1 if it exists
			}
		}
	}

	return result;
}

function getIndicesOfOnes(arr) {
	let indices = [];

	// Iterate through the array
	arr.forEach((element, index) => {
		if (element === 1) {
			indices.push(index);
		}
	});

	return indices;
}

function solution(board) {
	/**
	 * solution 1
	 * 1이 있는지 여부 확인
	 */

	let arrAmount = board.length; // 폭탄이 없는 배열 반환
	let checkBomb = board.join("").includes("1");

	// 1. 배열의 폭탄 유무
	if (checkBomb) {
		let bombArea = []; //폭탄 있는 배열의 인덱스 저장
		let safeArea = 0; // 폭탄이 하나도 없는 배열

		// 2. 폭탄있는 배열 찾기
		board.forEach((arr, index) => {
			let res = arr.some((bomb) => bomb > 0); // 폭탄 배열 찾기
			if (res == false) {
				safeArea++;
			} else if (res == true) {
				bombArea.push(index);
			}
		});

		// 3. 폭탄 배열의 1 인접 인덱스 1로 변경
		let indices = [];
		for (let i of bombArea) {
			let newArray = spreadOnes(board[i]);
			board[i] = newArray;
			indices.push(getIndicesOfOnes(board[i]));
		}

		//4. 폭탄 배열에 인접한 영역 인덱스 1로 변경
		let indicesArr = [];

		let firstArr = bombArea[0];
		let lastArr = bombArea[bombArea.length - 1];

		let maxArr = Math.max(firstArr - 1, 0);
		let minArr = Math.min(lastArr + 1, arrAmount);

		for (let j = maxArr; j <= minArr; j++) {
			indicesArr.push(j);
		}

		//5. 인접 배열, 인접 인덱스 1로 변경

		for (let k = 0; k < indicesArr.length; k++) {}
	} else {
		// 폭탄이 없을 경우
		return 0;
	}
}

solution([
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0],
	[0, 0, 1, 1, 0],
	[0, 0, 0, 0, 0],
]);
