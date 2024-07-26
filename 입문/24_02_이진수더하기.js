function solution(bin1, bin2) {
    /**
     * parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
    */
    let decimal1 = parseInt(bin1, 2);
    let decimal2 = parseInt(bin2, 2);
    
    let sumDecimal = decimal1 + decimal2;
    
    //toString() 메서드는 특정한 Number 객체를 나타내는 문자열을 반환
    let resultBin = sumDecimal.toString(2);

    return resultBin;
}

