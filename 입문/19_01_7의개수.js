function solution(array) {
    /**
     * solution 1
     * 
     * var str = array.join('') //배열 -> 문자
     * let answer = [...str].filter(ele => ele.includes('7')); //문자 배열로 쪼갠뒤 7 포함 반환
     * return answer.length; //배열 총 길이
    */
    
    /**
     * solution2
    */

    return array.join("").match(/7/g)?.length || 0;
    // .match(/7/g) : 숫자 7을 전역검색하여 매칭된 결과를 `배열`로 반환 / 없으면 null
    // ?.length : '옵셔널 체이닝 연산자' 로 match 매서드 결과가 null 이 아니면 length 속성을 가져온다. / null이면 undefined를 반환
    
}

