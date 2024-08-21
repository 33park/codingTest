/**
 * slicer의 요소에 맞춰... num_list를 slice하는 인덱스 시작과 끝이 변해야한다.
*/

function solution(n, slicer, num_list) {
    let [a, b, c] = slicer;
    let last = num_list.length;

    switch(n){
        case 1: return num_list.slice(0, b+1);
        case 2: return num_list.slice(a, last);
        case 3: return num_list.slice(a, b+1);
        case 4: return num_list.slice(a, b+1).filter((_, i)=> i % c === 0);
    }

    /**
     * slice() 메서드는 어떤 배열의 begin 부터 
     * end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
    */

}


solution(1,[1, 5, 2],[1, 2, 3, 4, 5, 6, 7, 8, 9]) //[2, 3, 4, 5, 6]
solution(2,[1, 5, 2],[1, 2, 3, 4, 5, 6, 7, 8, 9]) //[2, 3, 4, 5, 6]
solution(3,[1, 5, 2],[1, 2, 3, 4, 5, 6, 7, 8, 9]) //[2, 3, 4, 5, 6]
solution(4,[1, 5, 2],[1, 2, 3, 4, 5, 6, 7, 8, 9]) //[2, 4, 6]