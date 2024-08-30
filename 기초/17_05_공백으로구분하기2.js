/**
 * 한칸 공백으로 arr 만들고
 * forEeach로 공백요소 삭제
 */
function solution(my_string) {
	let arr = my_string.split(" ");
    arr = arr.filter((str)=>{
        return str.length > 0
    })

    return arr
}

solution(" i    love  you");
solution("    programmers  ");


//다른사람 풀이
function solution01(my_string) {
    return my_string.split(' ').filter(v => v);
    /**
     * `v => v`에서 v는 배열의 각 요소를 의미하며, 자바스크립트에서는 조건문에서 아래와 같은 값들이 false로 평가
     * 

        false
        0
        "" (빈 문자열)
        null
        undefined
        NaN
        
    *   이외의 값들은 true로 평가
    */
}

function solution02(my_string) {
    return my_string.trim().split(/ +/);
}