/**
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성되어있는지 확인하는 함수
 * 
*/

function solution(s) {
    const regex = /^\d+$/;
    //다른 사람의 풀이 : var regex = /^\d{6}$|^\d{4}$/;
    /**
     * ^와 $ 문자열의 시작과 끝
     * \d+ 하나 이상의 숫자로 구성된 문자열
    */

    if(s.length === 4 || s.length === 6){
        return regex.test(s);
    }

    return false
}