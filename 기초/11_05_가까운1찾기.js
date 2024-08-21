function solution02(arr, idx) {
    return arr.indexOf(1, idx);
    /**
     * Array 인스턴스의 `indexOf() 메서드`는 
     * 배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고, 
     * 찾을 수 없는 경우 -1을 반환합니다.
     * 
     * ===
     * indexOf()로 특정 값의 인덱스를 찾을 때 시작점(fromIndex)을 지정할 수 있다.
        
        indexOf(searchElement, fromIndex)
    */
    
}


/**
 * 테스트케이스 3에서 오류가 발생했다.
*/
function solution01(arr, idx) {

    let answer;
    for(let i = idx; i < arr.length; i++){
        if(arr[i] === 1) {
            answer = i
            break;
        }
    }

    // console.log(answer > 1 ? answer : -1)
    return answer > 1 ? answer : -1
    
}

solution([0, 0, 0, 1], 1);
solution([1, 0, 0, 1, 0, 0], 4);
solution([1, 1, 1, 1, 0], 3);
