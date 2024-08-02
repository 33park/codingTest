function solution(n) {
    let table = Array.from({ length: n }, () => Array(n).fill(0));

    let directions = [[0,1],[1,0],[0,-1],[-1,0]]; //방향설정 (우, 하, 좌, 상)
    let directionIndex = 0; // 현재 방향의 인덱스 (우)
    let row = 0, col = 0; //현재 위치
    let num = 1 // 현재 넣을 숫자

    for (let i = 0; i < n*n; i++) {
        // console.log(`table[${row}][${col}]`)
        table[row][col] = num;
        num++;

        let nextRow = row + directions[directionIndex][0];
        let nextCol = col + directions[directionIndex][1];

        //위치가 범위를 벗어나거나 이미 값이 채워져있는 경우 방향 전환
        if(
            nextRow < 0 || nextRow >= n ||
            nextCol < 0 || nextCol >= n ||
            table[nextRow][nextCol] !== 0
        ){
            directionIndex = (directionIndex + 1)%4 // 방향전환
            /**
             * 처음 directionIndex는 0 (우)
                (0 + 1) % 4 = 1 (하)
                (1 + 1) % 4 = 2 (좌)
                (2 + 1) % 4 = 3 (상)
                (3 + 1) % 4 = 0 (우) → 다시 처음으로 
            */
            console.log(`${directionIndex} : 방향전환`)
            nextRow = row + directions[directionIndex][0];
            nextCol = col + directions[directionIndex][1];

        }

        //현재위치 갱신
        row = nextRow;
        col = nextCol;
    }

    return table
    
}
solution(5)

/**
 // table[0][0] ~ table[0][n] start++
 // table[1][n] ~ table[n][n] start++
 // table[n][n-1] ~ table[n][0] start++
 // table[n-1][0] ~ table[1][0] start++

 // table[1][1] ~ table[1][n-1] start++
 // table[n-1][n-1] ~ table[n-1][1] start++;

 // table [n-2][1]
 * 첫번째 행의 열 증가
 * 첫번째 행 마지막 열 기준으로 행 마지막 열 증가
 * 마지막 행 마지막 열부터 첫번째 열 증가
 * 마지막 행 첫번째 열 기준 위로 열 증가
 * ... 반복
    function solution(n) {
        let table = Array.from({ length: n }, () => Array(n).fill(""));
        let last = n - 1;
        let recent = 1;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0) {
                    table[0][j] = recent++;
                }

                if (table[i][last] == "" && i > 0) {
                    table[i][last] = recent++;
                }

                if(i === last ){
                    if(j > 0){
                        table[last][last - j] = recent++; 
                    }
                }
            }
        }

        console.log(table)
    }

    solution(5);
 */

