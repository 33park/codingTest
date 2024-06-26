function solution(array, n) {
    // filter 사용
    var answer = array.filter((e)=>e === n);
    return answer.length;
}