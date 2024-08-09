/**
 * 수열구간쿼리2를 참고하면  쉽다
*/
function solution(arr, queries) {
    queries.forEach(((query)=>{
        const [s, e, k] = query;
        for(let i = s; i <= e; i++) {
            if(i % k === 0){
                arr[i]+=1;
            }
        }
    }))

    return arr;
}

solution([0, 1, 2, 4, 3], [[0, 4, 1],[0, 3, 2],[0, 3, 3]])