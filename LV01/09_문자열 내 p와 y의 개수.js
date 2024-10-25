/**
 *  s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution
 * 하나도 없어도 true
 * 
 * 1. s를 문자열
 * 2. P 개수와 y개수에 따라 값
 * 3. 대소문자는 구분하지 않음
*/

function solution(s){
    let pc = 0;
    let yc = 0;
    [...s].map((e,_ )=>{
        if(e == 'p' || e == 'P') pc+=1;
        if(e == 'y' || e == 'Y') yc+=1;
    })

    return pc == yc || pc + yc == 0 ? true : false;
}


//참고

function solution01(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}