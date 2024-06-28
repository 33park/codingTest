function solution(board) {
	const n = board.length;
	const dangerBoard = Array.from({ length: n }, () => Array(n).fill(0));

	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	const mines = [];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 1) {
				mines.push([i, j]);
				dangerBoard[i][j] = 1;
			}
		}
	}

	for (let [i, j] of mines) {
		for (let [dx, dy] of directions) {
			//새로운 위치 계산
			const x = i + dx;
			const y = j + dy;
			if (x >= 0 && x < n && y >= 0 && y < n) {
				dangerBoard[x][y] = 1;
			}
		}
	}

	let safeCount = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (dangerBoard[i][j] === 0) {
				safeCount++;
			}
		}
	}

	return safeCount;
}

// Example usage:
console.log(
	solution([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0],
	])
); // 16
console.log(
	solution([
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 1, 1, 0],
		[0, 0, 0, 0, 0],
	])
); // 13
console.log(
	solution([
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
	])
); // 0

/**
 *  failed code 1
 * 소스가 너무 길고 유지보수성에서 문제가 생김
 * 작성하는 시간이 길어져 스스로도 코드의 흐름을 읽을 수 없어 중도 종료
 * 
 * function spreadOnes(arr) {  
 *          1차원 배열에서만 작동하여 2차원 배열에 부적합
	let result = arr.slice();

	// Iterate through the array
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
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

	arr.forEach((element, index) => {
		if (element === 1) {
			indices.push(index);
		}
	});

	return indices;
}

function solution(board) {

// 불필요한 변수, 반복문 다수

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
		let indices;
		for (let i of bombArea) {
			let newArray = spreadOnes(board[i]);
            indices = getIndicesOfOnes(newArray)
		}

		//4. 폭탄 배열에 인접한 영역 인덱스 1로 변경 
        // 인접지역 계산 방식 변경 필요

		let indicesArr = [];

		let firstArr = bombArea[0];
		let lastArr = bombArea[bombArea.length - 1];

		let maxArr = Math.max(firstArr - 1, 0);
		let minArr = Math.min(lastArr + 1, arrAmount);

		for (let j = maxArr; j <= minArr; j++) {
			indicesArr.push(j);
		}

		//5. 인접 배열, 인접 인덱스 1로 변경
		for (let k of indicesArr) {
            for (let n = 0; n < indices.length; n++) {
                console.log(board[k])
                board[k].splice(indices[n], 1, 1)
            }
        }

        let sum = board.join('').match(/['0']/g); // 비효율적인 스크립트

        return sum.length

	} else {
		// 폭탄이 없을 경우
		return 0;
	}
}

 * 
*/
