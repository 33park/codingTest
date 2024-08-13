/**
 * 재귀함수를 참고해서 만들려고 했지만... 어렵다
 * 
*/

function solution(arr) {
    let i = 0;
    let stk = [];

    while(i < arr.length){
        let stkN = stk.length;
        if(stkN <= 0) {
            stk.push(arr[i]);
            i++;
        }

        if(stkN > 0) {
            let last = stk[stkN - 1];
            if(last < arr[i]){
                stk.push(arr[i]);
                i++;
            } 
            
            if (last >= arr[i]){
                stk.pop(last);
            } 
        }
    }
    return stk
    // console.log(i, stk.length, arr.length, 'stk', stk)
}

solution([1, 4, 2, 5, 3])