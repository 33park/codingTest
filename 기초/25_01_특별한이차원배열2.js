function solution(arr) {
	let leng = arr[0].length;

    for (let i = 0; i < leng; i++) {
        for (let j = 0; j < leng; j++) {
            if (arr[i][j] != arr[j][i]) {
                return 0 // 대칭이 아닌 경우 즉시 0을 반환
            }
        }
        // return 1  // 잘못된 위치: 첫 번째 i 루프에서 결과가 반환됨
    }
    return 1 // 모든 반복이 끝나고 대칭인 경우 1을 반환
}

/**
 * 다른 사람의 풀이
*/

function solution(arr) {
    return arr.every(
        (r, i) => r.every((
            _, j) => arr[i][j] === arr[j][i]
        )) 
        ? 1 : 0;
    /**
     *  every() 메서드는 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트합니다. 이 메서드는 불리언 값을 반환
     *  복잡도나 구현은 내 풀이와 다른사람의 풀이가 비슷 (가독성은 이 풀이가 더 좋음)
    */
}

/**
 * 개선
*/

function solution(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        // i < j인 경우만 검사하므로 비교 횟수를 절반으로 줄임
        for (let j = i + 1; j < n; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0; // 대칭이 아닌 경우 즉시 0 반환
            }
        }
    }
    
    return 1; // 모든 조건을 만족하면 1 반환
}