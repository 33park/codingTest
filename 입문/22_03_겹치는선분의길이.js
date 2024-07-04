// solution 2 

function solution(lines){
    const coordinate = new Array(201).fill(0) 
    // -100 <= lines 원소 =< 100
    // 인덱스로는 -100 이 0번째라 100은 201번이 되다

    function markPoint(start, end) {
        for (let i = start + 100; i < end + 100; i++){
            // i가 마이너스여도 start는 최소 0, end는 최대 200이다
            coordinate[i]++;
        }
    }

    for(let line of lines){
        markPoint(line[0],line[1]);
    }

    let over = 0;
    for( let i = 0; i < 201; i++){
        if(coordinate[i]>1){
            over++;
        }
    }

    return over;
}


// lines	result
solution([
	[-2, 1],
	[0, 2],
	[4, 5],
]); //1
solution([
	[0, 1],
	[2, 5],
	[3, 9],
]); //2
solution([
	[-1, 1],
	[1, 3],
	[3, 9],
]); //0
solution([
	[0, 5],
	[3, 9],
	[1, 10],
]); //8


// solution 1 정확도 70%

function solution(lines) {
	/**
	 * 각 배열이 차지하는 칸 arr에 전달
	 * arr에서 1개 이상 카운트 되는 변수
	 *
	 */

	const dupCount = new Map();
	let gArr = [];

	function getNumbers(start, end) {
		for (let i = start; i <= end; i++) {
			gArr.push(i);
		}
	}

	getNumbers(lines[0][0], lines[0][1]);
	getNumbers(lines[1][0], lines[1][1]);
	getNumbers(lines[2][0], lines[2][1]);

	for (let num of gArr) {
		if (dupCount.has(num)) {
			dupCount.set(num, dupCount.get(num) + 1);
		} else {
			dupCount.set(num, 1);
		}
	}

	let checkArr = [];  
    //연속된 부분을 찾는 방식이 부정확, 중복된 숫자들을 모두 포함하고 있으므로, 실제로 겹치는 길이를 계산하는 데 어려움
	for (let [key, value] of dupCount) {
		if (value > 1) {
			checkArr.push(key);
		}
	}

    let count = 0;
    for(let i = 0; i < checkArr.length; i++){
        if(checkArr[i] == (checkArr[i+1] - 1 )){
            count++;
        }
    }

    return count > 0 ? count : 0

}
