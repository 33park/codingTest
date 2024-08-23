function solution(names) {
	let answer = [];
    let copy = [...names]

	for (let i = 0; i < names.length; i++) {
        if(i % 5 === 0){
            answer.push(copy[i]);
        }
	}

    return answer
}

solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]);


function solution02(names) {
	return names.filter((_, i) => !(i % 5));
}