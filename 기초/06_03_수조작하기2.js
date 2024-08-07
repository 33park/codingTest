solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]); //"wsdawsdassw"

//solution 2
function solution(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    // slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
    // numLog[0]에서 부터 시작하기 때문에 1부터... 
    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}

//solution 1
function solution(numLog) {

	let str = '';

	for (let i = 0 ; i < numLog.length; i++) {
        let a = numLog[i + 1] - numLog[i];
        if( a == 1) str+="w"
        else if ( a == -1) str+="s"
        else if ( a == 10 ) str+="d"
        else if ( a == -10 ) str+="a"
        else break;
	}

    return str

}


