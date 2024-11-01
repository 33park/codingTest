function solution(a, b) {
    let res = 0;
    for(let i = 0; i < a.length; i++){
        res += a[i] * b[i]
    }

    return res
}

//다른 사람 풀이
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}