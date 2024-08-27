/**
 * map?
 */
function solution(arr){ 
    return arr.map(num => {
        if(num >= 50 && !(num % 2)) return num / 2;
        if(num < 50 && num % 2) return num * 2;

        return num
    })
}
solution([1, 2, 3, 100, 99, 98]);

//res에 push하면서 불필요한 계산 발생.
// function solution01(arr) {

//     let res = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] >= 50 && arr[i] % 2 === 0) {
// 			arr[i] = arr[i] / 2;
// 		} else if (arr[i] < 50 && arr[i] % 2 != 0) {
// 			arr[i] = arr[i] * 2;
// 		}

//         res.push(arr[i])
// 	}

//     return res
// }

// solution([1, 2, 3, 100, 99, 98]);
