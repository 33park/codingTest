//다른 사람 풀이
function hide_numbers(s){
    // return s.replace(/\d(?=\d{4})/g,"*");
    /**
     * \d는 숫자를 의미하고, {} 안의 숫자는 갯수를 의미한다.
     * (?=) 앞쪽 일치
     * /g 문자열 내의 모든 패턴 
     * 
     * \d(?=\d{4}) :  \d{4} => 다음에 숫자가 4개 온다.
     * 전/후방 탐색 (?=g) : 특정 문자 앞까지만 조회 (모든 문자열 3개를 선택할 건데 g앞에 붙은 것만 조회)
     * 이 경우 뒤의 4자리 앞까지만 조회.
    */

    const regex1 = /\d{4}/g; // 숫자를 4개 단위로 나눈다 (ex ['0103','3334'])
    const regex2 = /\d(?=\d{4})/g; //전역 검색 플래그가 있는 경우에는 모든 검색 결과를 배열로 반환
    console.log(s.match(regex1))
    console.log(s.match(regex2))
}
console.log(hide_numbers("01033334444"))
console.log(hide_numbers("027778888"))

//내 풀이
function solution(phone_number) {
    const phoneNum = [...phone_number]
    let secretArr = new Array(phoneNum.length - 4).fill('*')
    let lastNum = phoneNum.slice(-4) 

    return secretArr.concat(lastNum).join("")
}

