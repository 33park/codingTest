function solution(arr, delete_list) {
	for (let i = 0; i < delete_list.length; i++) {
		let getIdx = arr.indexOf(delete_list[i]);
		if (getIdx != -1) {
            arr.splice(getIdx, 1);
		}
	}

    return arr
}

solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]);

function solution(arr,dels){
    return arr.filter(ele => !dels.includes(ele))
}