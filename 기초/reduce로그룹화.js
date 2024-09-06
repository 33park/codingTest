function groupByValue(arr) {
	return arr.reduce((acc, curr) => {
		// 현재 요소의 value를 가져옵니다
		const value = curr.value;

		// 2.acc 객체에 value에 해당하는 배열이 존재하면, 현재 요소를 추가합니다
		if (acc[value]) {
			acc[value].push(curr);
		} else {
			// 존재하지 않으면 새 배열을 만들어서 현재 요소를 추가합니다
			acc[value] = [curr];
		}

		return acc; // 3
	}, {}); // 1.초기값은 빈 객체입니다
}

const grouped = groupByValue(items);
console.log(grouped);
