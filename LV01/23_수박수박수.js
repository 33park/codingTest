/**
 * 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성
*/
function solution(n) {
    return "".padEnd(n,'수박');
}

//다른 사람 풀이
var waterMelon = n =>'수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');