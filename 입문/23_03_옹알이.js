
/**
 * 1. babbling[i]에서 saidWord[i] 빼고 문자열이 남아있으면 다시 saidWord[i] 실행
 * 2. 남지 않는 문자 갯수만 증가
 */
function solution(babbling) {
    let babyWord = ["aya", "ye", "woo", "ma"];
    /**
     * 더 간단하게 const regex = /^(aya|ye|woo|ma)+$/; 를 사용할 수 있다.\
     * '^' 는 문자열의 시작
     * (aya|ye|woo|ma) 는 그룹으로 내부 요소중 하나와 매칭됨을 의미. | 는 or 연산자.
     * '+'는 앞의 그룹이 한번 이상 반복될 수 있음
     * '$' 는 문자열의 끝으로 패턴이 문자열의 끝까지 매칭되도록한다.
    */
    let count = 0;

    babbling.forEach((ele) => {
        let res = ele;

        babyWord.forEach((word) => {
            if (res.includes(word)) {
                res = res.replace(word, ' ');
            }
        });

        if (res.split(' ').join('') === '') {
            count++;
        }
    });

    return count;
}


/**
 * solution 1 (uncorrected)
 * 
 * function solution(babbling) {
	let babyWord = ["aya", "ye", "woo", "ma"];
    let count = 0;

    babbling.forEach((ele)=>{
        let res = ele;

        babyWord.forEach((word)=>{
            const regex = new RegExp(word,'g'); // 정규식으로 할 경우 '순차적으로 연결' 된 경우를 계산하지 않아 count 오류가 발생함
            res = res.replace(regex,''); // ''부분을 ' ' 으로 만들어서 마지막에 trim 으로 없앨것
            console.log(`res : ${res}`)
        });

        if(res.length === 0) count++;
    })
    
    return count;
}


*/


