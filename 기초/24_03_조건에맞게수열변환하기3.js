function solution(arr, k) {
    if( k % 2 == 0) {
        return arr.map((ele)=> ele + k )
    } else {
        return arr.map((ele)=> ele * k )
    }
}

solution([1, 2, 3, 100, 99, 98],3)


/* 다른사람 풀이 참고 */

const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)
