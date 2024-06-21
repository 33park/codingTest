function solution(array, n) {
    array.push(n);
    array.sort((a,b)=> {return a - b});
    let nIndex = array.indexOf(n);
    
    // 1차
    // let sIndex = Math.abs(array[nIndex]-array[nIndex-1]);
    // let bIndex = Math.abs(array[nIndex+1]-array[nIndex]);
    /**
     * `Math.abs` 는 숫자의 절대값을 반환하며 숫자 연산에 사용
     * `parseInt`는 문자열을 정수로 ㅂ변환하며, 문자열에서 숫자를 추출하는데 사용
     * */    
    // if(array[0] === n) {
    //     return array[nIndex+1]
    // }else if (array[array.length-1] === n){
    //     return array[nIndex-1]
    // }else {
    //     return Math.min(sIndex,bIndex) === sIndex ? array[nIndex-1] : array[nIndex+1]
    // }
    /**
     * `Math.min()` 함수는 주어진 숫자들 중 가장 작은 값을 반환합니다.
    */

    //2차
    let leftDif = nIndex > 0 ? Math.abs(n - array[nIndex-1]) : Infinity;
    let rightDif = nIndex < array.length-1 ? Math.abs(n - array[nIndex+1]) : Infinity;
    /**
     *  `Infinity`를 사용하여 배열의 첫번째, 마지막 요소에 대한 처리를 피함. `Infinity`는 경계조건
    */
    
    if(leftDif === Infinity){
        return array[nIndex+1]
    }else if(rightDif === Infinity){
        return array[nIndex-1]
    }else {
        return leftDif <= rightDif ? array[nIndex-1] : array[nIndex+1]
    }
    /**
     * `Infinity` 전역 속성은 무한대를 나타내는 숫자 값입니다.
    */
}
