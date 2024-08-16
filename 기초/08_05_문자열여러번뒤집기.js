/**
 * 문자열 구조할당, forEach,slice(), 
 */

function solution(my_string, queries) {
    
    let arr = [...my_string];
    queries.forEach((([s,e])=>{
        const reverseSubArr = arr.slice(s,e+1).reverse(); // s부터 e까지의 부분 문자열을 뒤집음
        console.log(reverseSubArr);
        console.log(s, e-s+1)
        console.log(arr.splice(s,e - s + 1));
        arr.splice(s,e - s + 1, ...reverseSubArr);// 뒤집은 문자열을 원래 위치에 넣음
        
        /**
         * `splice` : splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
         * `slice` : slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
        */

    }))

    return arr.join('')

}



solution("rermgorpsam", [
	[2, 3],
	[0, 7],
	[5, 9],
	[6, 10],
]);
