//solution 02
// 다른 사람의 풀이. 콜라츠 수열의 목적은 여기에 가까운 것 같아서 기록...
function solution(n, arr = []) {
    console.log(n, arr)
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}



//solution 01
function solution(n) {
    let arr = [];

    do {
        if(n % 2 === 0) {
            arr.push(n)
            n = n / 2;
        } else {
            arr.push(n)
            n = 3 * n + 1;
        }
    } while( n !== 1 ) {
        if (n == 1) arr.push(n);
    }

    return arr
}
