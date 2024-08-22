function solution02(num_list, n){
    return num_list.filter((_, i) => !(i % n))
}

function solution01(num_list, n) {
	let answer = [];
    let copy = [...num_list]

	for (let i = 0; i < num_list.length; i++) {
        if(i % n === 0){
            answer.push(copy[i]);
        }
	}

    return answer
}


solution([4, 2, 6, 1, 7, 6], 2)
solution([4, 2, 6, 1, 7, 6], 4)