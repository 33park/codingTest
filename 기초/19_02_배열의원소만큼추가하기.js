/**
 * 다른 사람의 풀이 
 * 
 * reduce 의 초기값 '[]' 빈 배열로 시작
 * list 현재까지 누적된 배열
 * 'num': 'arr' 배열의 현재 요소
 * new Array(num).fill(num): 길이가 num인 새로운 배열을 생성하고, 모든 요소를 num으로 채웁니다.
 * [...list, ...new Array(num).fill(num)]: 스프레드 연산자를 사용하여 
 * 기존 배열 list와 새로운 배열 new Array(num).fill(num)을 병합하여 새 배열을 만듭니다.
 * 
*/
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
                                                                            //초기값    
                                    //누적된값
                                                //새로운배열생성, 요소 채움

}
solution([5,1,4])
solution([6,6])
solution([1])


/**
 * 배열 요소의 숫자만큼 문자를 추가하는 스크립트
*/
function solution(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = arr[i]; j > 0; j--){
            res.push(arr[i])
        }
    }

    return res
}
solution([5,1,4])
solution([6,6])
solution([1])

