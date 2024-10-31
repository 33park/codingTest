
/* 다른 사람 풀이 참고 */
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
console.log(solution([4,7,12],	[true,false,true]))
console.log(solution([1,2,3],	[false,false,true]))

/* 내풀이 */
function solution(absolutes, signs) {
    let res = 0;

    for(let i = 0; i < absolutes.length; i++){
        if(signs[i]) res += absolutes[i]
        else res -= absolutes[i]
    }

    return res
}

