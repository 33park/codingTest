/**
 * mode 는 boolean 으로
 */

function solution(code) {
	let ret = [];
	let mode = false;
	let arr = [...code];

    for(let i = 0; i < arr.length; i++){
        
        if(mode === false) {
            if(arr[i] != "1" && i % 2 === 0 ){
                ret.push(ele)
            }
        } else {
            if(arr[i] != "1" && i % 2 !== 0 ){
                ret.push(arr[i])
            }
        }
        
        if(arr[i] === "1") i++;

        ret.push(arr[i])
    }

    console.log(ret.join())
}

solution("abc1abc1abc"); //"acbac"
