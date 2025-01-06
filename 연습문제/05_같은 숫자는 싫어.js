/**
 * [참고] https://hihiha2.tistory.com/176
 * 
 * 스택
 * 나중에 들어간 것이 가장 먼저 나오는 후입선출 형태의 데이터 저장 구조
 * 
*/
function solution(arr) {
    const stack = [];
    for( const num of arr) {
        // 인덱스를 통한 값의 비교를 하지 않아도 되고, 전체요소를 한바퀴 돌아야하기 때문에 for of 문 이용
        console.log(`num : ${num}`) 
            if(stack.length === 0 || stack[stack.length - 1] !== num) {
                /**
                 * stack.length===0 :: 스택이 비어있는 경우는 무조건 일단 담는다.
                 * 비어있지 않을 경우에는  stack[stack.length-1]!==num을 통해서 스택의 가장 위의 값과 현재요소를 비교한다. 
                 * 두개의 값이 다를때만 스택에 담는다.
                */
                stack.push(num);
            
        }
    }
    return stack;
}
solution([2,7,4,4,4,3,0,1,1,8,8,8]);


/**
 * 배열 arr 에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
 * 단, 제거 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야함
*/

function solution(arr) {
    const newArr = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

// failed 
/**
 *  1. 인덱스 조정 방식 때문에 반복문이 배열의 마지막 요소를 정확하게 처리하지 못함
*/
function solution(arr) {
    var answer = [];

    answer.push(arr[0]);

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) {
            i+=1;
        }

        answer.push(arr[i])
    }

    // console.log(answer)
    return answer
}

