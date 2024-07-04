function solution(score) {
    /**
     * 1. 각 학생의 평균 점수를 계산합니다.
     * 2. 평균 점수를 기준으로 학생들을 정렬합니다.
     * 3. 정렬된 평균 점수에 따라 등수를 매깁니다.
    */

    let average = score.map(([e,m])=> (e+m) / 2 );
    let sortArr = [...average].sort((a, b) => b - a);
                //[...average] 로 배열의 복사본을 만들어서 원본 배열이 변경되지 않도록 함
    let ranks = average.map(avg => sortArr.indexOf(avg) + 1);

    return ranks

}
solution([
	[80, 70],
	[70, 80],
	[30, 50],
	[90, 100],
	[100, 90],
	[100, 100],
	[10, 30],
]);




// failed solution 

// function solution(score) {
// 	let total = score.length;
// 	let averageArr = [];
// 	let lankArr = [];

// 	for (let s of score) {
// 		let average = s[0] + s[1];
// 		averageArr.push(average);
// 		lankArr.push(average);
// 	}

// 	let sortArr = lankArr.sort((a, b) => b - a);

// 	let res = [];
// 	for (let i = 0; i < total; i++) {
// 		let j = 1;
// 		if (averageArr[i] == sortArr[0]) {
// 			res.push(j);
// 		} else if (sortArr[total - 1] <= averageArr[i] && averageArr[i] < averageArr[i + 1]) {
// 			j++;
// 			res.push(j);
// 		} else if (sortArr[total - 1] <= averageArr[i] && averageArr[i] > averageArr[i + 1]) {
// 			j--;
// 			res.push(j);
// 		}
// 	}

// 	console.log(res);
// }

