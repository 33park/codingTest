function solution(num, k) {
    /**
    * includes / indexOf 반환
    * 1. 처음에 (`${num}`) 을 사용하였으나 명시적 이유로 num.toString()으로 변경
    */
    // let checked = num.toString().includes(k) ? true : false;
    // let answer = checked === true ? num.toString().indexOf(k)+1 : -1;
    // checked 라는 중간상태를 저장하기에 코드가 길어진다

    //다른 사람의 풀이 참고
    // let answer = num.toString().split("").map((ele)=> Number(ele)).indexOf(k)+1 || -1;
            //숫자를 문자열로, 문자의 배열로, map으로 각각 숫자 변환, index 찾아서 인덱스 값+1을 반환하거나 -1을 반환함
            // 문자를 다시 변환하는 과정에서 연산이 복잡해지지 않나?
    /**
     * 개선
    */
    
    let str = num.toString();
    let answer = str.includes(k) ? str.indexOf(k)+1 : -1;

    
    return answer
}

