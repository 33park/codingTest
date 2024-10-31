// 다른 사람의 풀이
function solution(arr) {
	arr.splice(arr.indexOf(Math.min(...arr)), 1);
    /**
     * Math.min 스프레드 연산자에서 최솟값
     * indexOf() 주어진 요소를 찾을 수 있는 인덱스
     * splice() 배열의 기존 요소를 삭제 또는 교체
    */
	if (arr.length < 1) return [-1];
	return arr;
}

console.log(solution([10]));
console.log(solution([4, 3, 2, 1]));
console.log(solution([3, 8, 6, 2]));
/**
 * arr 길이가 1개면 [-1]
 * arr 오름차순 정렬해서 마지막 배열 제외하고 리턴
 * sort, slice
 */

/**
 * 1. 가장 작은 숫자 추출
 * 2. 가장 작은 숫자를 제외한 Array 생성
 */
function solution02(arr) {
	let min = Math.min.apply(null, arr);
    /**
     * Function.prototype.apply() 
     * 파라미터로 함수에서 사용할 'this 객체'와 호출하는 함수로 전달할 파라미터를 입력받음
     * apply 메소드의 2번재 파라미터는 배열형태로 입력
     * 
     * this 객체를 지정할 필요가 없어서 null 전달
     * 두번째 파라미터의 배열 arr 전달
     * 
     * ...arr 스프레드 연산자를 사용해도 됨
     * 
    */
	let list = arr.filter((x) => x > min);
	if (arr.length === 1) {
		return [-1];
	} else {
		return list;
	}
}

/**
 * function solution(arr) {
    if(arr.length === 1) {
        return [-1]
    } else {
        let list = [...arr].sort((a,b) => b - a);
        return list.slice(0, arr.length - 1)
    }
}
*/
