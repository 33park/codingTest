
//아마도 제출 의도.
function solution(num_list) {
    return num_list.findIndex(v => v < 0)
}

/**
 * `findIndex()`
 * 
 * Array 인스턴스의 findIndex() 메서드는 주어진 판별 함수를 
 * 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 
 * 만족하는 요소가 없으면 -1을 반환합니다.
*/

function solution01(num_list) {
	let answer = 0;
	let found = false;

	for (let i = 0; i < num_list.length; i++) {
        if(num_list[i] < 0){
            answer = i;
            found = true;
            break;
        }
    }

    return found ? answer : -1
}

solution([12, 4, 15, 46, 38, -2, 15]);
solution([13, 22, 53, 24, 15, 6]);
