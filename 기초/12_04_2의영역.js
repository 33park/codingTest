/**
 * 이 편이 당연히... 훨씬 간단하다...
 * 나는 무엇을 위해...
*/

function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}


/**
 * 2로 시작하고 2로 끝나는 index를 찾아서 slice로 뱉기
 */

function solution01(arr) {
	let found = arr.includes(2);

    if (found) {
        let list = [];

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 2) {
                let [ele, idx] = [arr[j], j];
                list.push([ele, idx]);
            }
        }
    
        let narr;
        if(list.length > 0 ){
            let first = list[0][1];
            let max = list.length-1;
            let last = list[max][1];
        
            narr = arr.slice(first, last + 1);
        }

        return narr
    
    } else {
        return [-1]
    }




}

solution([1, 2, 1, 2, 1, 10, 2, 1])