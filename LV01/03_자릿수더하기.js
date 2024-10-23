function solution(n){
    return (n+"").split("").reduce((acc, cur)=> acc + parseInt(cur),0)
    //parseInt : parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
}

solution(987)

function solution01(n) {
    let answer = [];
    [...String(n)].map(e => answer.push(Number(e)));

    return answer.reduce((a,c) => a + c)
    
}
