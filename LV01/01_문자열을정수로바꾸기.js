/**
 * return Number(s);
 * 문자열을 숫자로 변환하는 표준적인 방식
 * 숫자로 변환할 수 없는 문자의 경우 NaN 반환
 * 
 * return s/1
 * '암묵적 타입변환'을 이용함
 * 숫자로 변환할 수 없는 문자의 경우 NaN 반환
 * 코드의 의도가 명확히 전달되지 않고 직관적이지 않는 단점
 * 
 * return parseInt(s)
 * 문자열에 숫자가 아닌 문자가 포함되어 있어도, 맨 앞에서부터 숫자를 찾아 변환 
 * 즉, 첫 번째 숫자 부분까지만 변환하고, 그 이후 문자는 무시
 * 
 * 정수만 필요할 때 사용할 수 있음. 실수를 처리할 수 없으며 소수점이 있는 숫자라면 소숫점 이하는 무시함
 */
function solution(s) {
    return Number(s);
}