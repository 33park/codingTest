
function solution02(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}

// function solution01(n, k) {
//     let i = 1;
//     let res = [];
    
// 	while(true){
//         let a = i * k;
//         if( a <= n ){
//             res.push(a)
//         } else {
//             break;
//         }
//         i++;
//     }

//     return res
// }


solution(10,3)