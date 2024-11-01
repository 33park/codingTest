//다른 사람 풀이
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

/**
 * 범위 내의 숫자 배열 만들기
 * 배열에 있는 약수 갯수 구하기
 * 약수 갯수 홀짝 판별
*/

function solution(left, right) {
    let arr = new Array();
    //범위내의 숫자배열
    let checkCount = new Array();
    for(let i = left; i <= right; i++){
        //배열 내의 약수 
        let ele = [];
        for(let j = 1; j <= i; j++){
            if(i % j === 0) {
                ele.push(j)
            }
        }
        
        if(ele.length % 2 === 0){
            arr.push(i)
        } else {
            arr.push(i * -1)
        }
    }

    return arr.reduce((a,c) => a + c)

}

console.log(solution(13,17))
console.log(solution(24,27))