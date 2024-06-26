function solution(my_str, n) {
    let i = 0;
    let str = [...my_str]; //전개
    let answer = [];
    
    while( i < str.length ){
        let res = str.slice(i,i+n); //slice 범위 지정
        answer.push(res.join(''))//  push에는 문자열 합쳐서
        i+=n; // n만큼 증가
    }
    
    return answer

    // 정규식을 사용하는 방법도 있지만 이전 테스트에서 slice 사용이 없어서 이번 기회에 사용
}
