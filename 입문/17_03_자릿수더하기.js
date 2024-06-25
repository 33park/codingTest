function solution(n) {
    /**
        * let answer = 0;
        * let str = n.toString().split('').map((ele)=> answer+=Number(ele));
        * 숫자> 문자 배열> 각각 요소 숫자 변경 후 answer에 더하기
        * 
        * `map` 배열을 순회하며 요소를 변환하는데, 변환 배열을 사용하지 않고 누적 합계를 구하는 것은 `map` 목적에 맞지 않게 사용됨 (비표준적)
        *
    */

    return n.toString().split('').reduce((acc, cur) => acc + Number(cur),0)
    /**
     * `reduce` 매서드는 누적계산에 최적화되어 있음
    */

}

