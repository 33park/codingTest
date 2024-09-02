//다른 사람의 풀이(🎉)

function solution(arr, k) {
	const set = new Set(arr);
	return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
                            /**
                             * Array(num).fill(k) 은 num 길이의 배열을 생성하고, 모든 요소를 k로 채움
                             * [...set, ...Array] 는 두 배열을 병합한다
                            */
}

/**
 * 일정한 범위 내에서 무작위로 수를 뽑은 후, 나온 적이 없는 수면 배열 맨 뒤에 추가
 * 1. 중복 수 삭제하여 배열 리턴
 * 2. k보다 리컨값 길이가 작으면 -1로 배열 길이 채워서 리턴
 */

function solution01(arr, k) {
	let newArr = [];

	arr.forEach((ele) => {
		if (!newArr.includes(ele) && newArr.length < k) newArr.push(ele);
	});

	if (newArr.length < k) {
		while (newArr.length < k) {
			newArr.push(-1);
		}
	}
	return newArr;
}

solution([0, 1, 1, 2, 2, 3], 3);
solution([0, 1, 1, 1, 1], 4);
 