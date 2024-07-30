/**
 * 두번째 참고한 코드
 * 
 * function solution(A, B) {
    if (A === B) return 0;
    
    let double = B + B;
    return double.indexOf(A);
    // b를 두번 반복시킨 다음 a가 그 안에 있는지 찾아보면 밀었을 때 그 글자를 만들 수 있는지 알 수 있다. indexOf로 result 숫자를 반환해서 코드가 간결하나
    // 문제의 이해도에선 적합한지 잘 알 수 없다. 
    }

    solution("hello","ohell")
    solution("apple","elppa")
    solution("atat","tata")
    solution("abc","abc")
*/


/**
 * 첫번째 참고한 코드
 * 
*/

function solution(A, B) {
    let arr = [...A]
    for(let i = 0; i< arr.length; i++){
        // 왜 arr의 길이만큼 반복해서 arr.join과 B를 비교하는지 알 수 없음
        if(A === B)
            return i;
        else{
            arr.unshift(arr.pop())
            console.log(arr)
            if(arr.join('') === B)
                return i+1;
        }
    }
    return -1;
}

solution("hello","ohell")
solution("apple","elppa")
solution("atat","tata")
solution("abc","abc")


/**
 * 복사본 생성 (바꾼 문자열을 반환할거니까)
 * 마지막 문자 변수에 저장
    function solution(A, B) {
        let str = A.substring(0,A.length-1);
        let word = A[A.length-1];
        let newWord = ""

        if( A !== B ){
            
            newWord += word;
            newWord += str;

            if(newWord !== B) {
                return -1
            } else {
                return 1
            }
        } else {
            return 0
        }

    }
 * 
*/
