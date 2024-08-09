/**
 * 다른 사람의 풀이 참고
 * 숫자 5로 현혹시켰지만 사실 이건 이진수 문제임.
 * 훨씬 계산이 빠르다! 20배가량!!! 
*/
function* gen50() { //제네레이터 함수
    let i = 1;

    while(true) {
        yield Number(Number(i).toString(2)) * 5; //yield 키워드는 제너레이터 함수를 중지하거나 재개하는데 사용된다.
                                                // next() 메서드를 호출할 때마다 제너레이터는 다음 yield 지점까지 실행
                    //Number(i).toString(2) 로 변환하면 이진수 문자열이 된다.
    //while(true) 는 무한루프를 생성한다. 이 제네레이터는 계속해서 0과 5로만 이루어진 숫자를 생성한다.
        i++;
    }
}
function solution(l, r) {
    const n = gen50();
    let a = 0; // 제네레이터가 반환하는 숫자
    const arr = []; // 결과 저장 배열

    while(a < l) { a = n.next().value; } //a가 1이상 될때까지 숫자 생성
    while(a <= r) { arr.push(a); a = n.next().value; } // a가 r 이하인 동안 제네레이터 생성 숫자를 배열에 추가

    return arr.length ? arr : [-1];
}

/**
 * 숫자 0과 5로만 이루어진 모든 정수를 오름차순으로 지정
 * 모든 정수... 5의 배수만
 * 5의 배수에서 0과 5 이외의 숫자가 있다면 패스
 */

//solution 02 ... 성공! 범위의 문제였던듯.
function solution(l, r) {
    const regex = /^[05]+$/;
    let arr = [];

    for(let i = r; i >= l; i--) {
        let str = i.toString();
        if (str.match(regex)){
            arr.unshift(i)
        }
    }

    return arr.length > 0 ? arr : new Array(1).fill(-1)

}


solution(5, 555);
solution(10, 20);
solution(3, 132456);


/**
 * solution 01
    function solution(l, r) {
        let arr = [];
        let min = l % 5 === 0 ? l / 5 : l; // 문제의 의도와 맞지 않으며, 잘못된 범위설정
        let max = r % 5 === 0 ? r / 5 : r;
        const regex = /^[05]+$/; // ^ : 문자열의 시작, [05] : 0 또는 5, + : 앞의 패턴이 하나 이상 반복, $ : 문자열의 끝

        for (let i = min; i <= max; i++) {
            let j = (i * 5).toString(); // 가능한 숫자를 모두 고려하지 않는다.
            if(j.match(regex)) {
                arr.push(i * 5);
            }
        }

        return arr.length > 0 ? arr : new Array(1).fill(-1)

        
    }
 * 
*/

