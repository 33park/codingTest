//다른사람 풀이 참고
function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        while (s <= e) arr[s++]++;
    });
    return arr;
}


solution(
	[0, 1, 2, 3, 4],
	[
		[0, 1],
		[1, 2],
		[2, 3],
	]
); //	[1, 3, 4, 4, 4]

/**
 * slice로 변경될 array 만들고
 * splice로 바꿔넣기
 * 
 * success
 */

function solution01(arr, queries) {
	queries.forEach((ele) => {
		let [s, e] = ele;
        for(let i = s; i <= e; i++){
            arr[i]+=1;
        }
	});
    return arr
}