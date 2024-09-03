/**
 * 다른 사람의 풀이.
 * 이해되는 함수를 사용해서 이쪽이 조금 더 나아보인다.
*/
function solution01(arr) {
    let length = arr.length;
    let pow = 1;

    // 배열의 길이보다 큰 2의 거듭제곱을 찾는다
    while (pow < length) {
        pow *= 2;
    }

    // 필요한 0의 개수를 계산
    let fillLength = pow - length;

    // 0을 추가하여 배열의 길이를 맞춘다
    return [...arr, ...new Array(fillLength).fill(0)];
}

/**
 * arr의 길이가 2의 제곱근인지 아닌지 확인
 * 2의 제곱근이 아닌 경우 부족한 숫자 계산
 * fill(0)으로 채우기
 */
function getBaseLog(x, y) {
	return Math.log(y) / Math.log(x);
    //Math.log를 사용한 건 MDN에서 가장 의도에 가까운 함수로 생각되어...
    //더 간단하게는 Math.log2()가 있다

    /**
     * 로그는 기본적으로 특정 밑(base)에서 수의 크기를 나타내는 지표
    */
}

function solution(arr) {
	let check = getBaseLog(2, arr.length); // arr.length의 로그값을 구함
	let pow = Math.pow(2, Math.ceil(check)); // 가장 가까운 2의 제곱수를 구함
    let fillLength = pow - arr.length > 0 ? pow - arr.length : 0; // 부족한 0의 개수를 계산

	return [...arr, ...new Array(fillLength).fill(0)]; // 0을 채워 새로운 배열 반환
}

solution([1]); //2
solution([1, 2]); //1
solution([1, 2, 3]); //4
solution([1, 2, 3, 4, 5, 6]); //8
solution([1, 2, 3, 4, 5, 6, 7]); //8
solution([58, 172, 746, 89]); //4
