function solution(polynomial) {
    /**
     * solution 2
     * 
     * filter, map을 중복해서 쓰는 것보다 이 편이 절차를 확인하기 쉽다
    */
    let answer = '';
    let xGroup = 0;
    let numGroup = 0;
    let arr = polynomial.split(" + ");

    arr.forEach((ele) => { //forEach로 절차를 한번만 사용
        if(ele.includes("x")) {
            let num = ele.split("x")[0];
            if(num === '') {
                num = 1; //계수가 없는 경우 1처리
            }
            xGroup += parseInt(num)
        } else {
            numGroup += parseInt(ele);
        }
    });

    if(xGroup !== 0){
        answer += (xGroup === 1) ?'x' : `${xGroup}x`; //결과문자열
    }


    if(numGroup !== 0){
        if(xGroup !== 0){
            answer += ' + '
        }
        answer += numGroup; 
    }

    if(xGroup === 0 && numGroup === 0) {
        answer = '0'
    }

    return answer

    /**
     * solution 1 (failed)
     * 
     * 정확성이 50%로 개선 필요
     * 
     * 1. " + " 기준으로 배열 쪼개고
     * 2. 정규식으로 숫자,  x들어가는 요소 나누기
     *     
     * let answer = '';
        let xGroup = 0;
        let numGroup = 0;
        let arr = polynomial.split(" + ");
        
        arr.forEach((ele)=>{
                if(ele.includes("x")){
                    let [num, char] = ele.split("x");
                    if(num === '') num = 1;
                    xGroup+=parseInt(num);
                }else if(!ele.includes("x")){
                    numGroup+=parseInt(ele);
                }
            }
        )

        answer+=(`${xGroup}x`)
        if(numGroup > 0){
            answer+=(` + ${numGroup}`)
        }

        return answer
    */



}


