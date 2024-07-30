//좀 더 간단한 코드
function solution(common) {
	if (common[1] - common[0] == common[2] - common[1]) {
		return common.pop() + common[1] - common[0];
	} else {
		return (common.pop() * common[1]) / common[0];
	}
}

solution([1, 2, 3, 4]);
solution([2, 4, 8]);
solution([-1, 2, -4]); //8

/**
 * function solution(common) {
    let diff = common[1]-common[0];
    let ratio = common[1]/common[0];

    //등차수열
    let arithmetical = true;
    for(let i = 1; i < common.length; i++) {
        if(common[i] - common[i - 1] !== diff) {
            arithmetical = false;
            break;
        }
    }

    if(arithmetical) {
        //등차수열의 다음 항
        return common[common.length - 1] + diff
    } else {
        //등비수열
        let geometric = true ; 
        for(let i = 1; i < common.length; i++) {
            if(common[i - 1] === 0 || common[i] / common[i - 1] !== ratio) {
                geometric = false;
                break;
            }
        }

        if(geometric) {
            return common[common.length - 1] * ratio;
        } else {
            console.error
        }
    }
    

}

*/

/**
 * 음수일 경우가 고려되지 않음
 * function solution(common) {
    let diff = common[1]-common[0],
        ratio = common[1]/common[0];
        console.log(diff, ratio)
    //등차
    if( diff !== ratio ) {
        // return common[common.length-1]+diff
        console.log(common[common.length-1]+diff)
    } else {
    //등비
        // return common[0]**(common.length+1)
        console.log(ratio**(common.length+1))
    }
}
*/
