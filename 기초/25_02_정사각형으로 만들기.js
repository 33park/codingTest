/**
 * 행 > 열  열 0 추가
 * 열 < 행  행 0 추가
 * 
 * 
*/

function solution(arr) {
    let col = arr.length; //행
    let row = arr[0].length; //열
    let diff = Math.abs(col - row) // 차이

    // 5, 3
    if(col > row){
        for(let i = 0; i < diff; i++){
            arr.forEach(ele => ele.push(0));
        }

    } else if(col < row) {
        let newArr = new Array(row).fill(0);
        for(let i = 0; i < diff; i++) arr.push(newArr);

    } 

    return arr
    
}

/**
 * 코드 개선
*/

function solution(arr) {
    const col = arr.length; // 행의 개수
    const row = arr[0].length; // 열의 개수

    if (col > row) {
        // 행이 더 많은 경우: 열을 채운다
        arr.forEach(row => row.push(...new Array(col - row.length).fill(0)));
    } else if (col < row) {
        // 열이 더 많은 경우: 행을 채운다
        const newRow = new Array(row).fill(0);
        while (arr.length < row) arr.push([...newRow]);
    }
    // 독립적인 배열을 사용하기 위해 스프레드 연산자를 사용함.

    return arr;
}


console.log(solution([[1, 1, 1], [1, 1, 1]]))
//[[1, 1, 1], [1, 1, 1], [0, 0, 0]]

console.log(solution([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]]))
//[[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

console.log(solution([[57, 192, 534, 2], [9, 345, 192, 999]]))
//[[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]