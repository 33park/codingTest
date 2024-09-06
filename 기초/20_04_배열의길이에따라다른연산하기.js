// 더 간략하게!
function solution(arr, n) {
	return arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
}

function solution(arr, n) {
	if (arr.length % 2 == 0) {
		return (arr = arr.map((v, idx) => {
			if (idx % 2 != 0) return (v = v + n);
			else return (v = v);
		}));
	} else {
		return (arr = arr.map((v, idx) => {
			if (idx % 2 == 0) return (v = v + n);
			else return (v = v);
		}));
	}
}

solution([49, 12, 100, 276, 33], 27);
solution([444, 555, 666, 777], 100);
