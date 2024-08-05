/**
 * a = 첫째항 (ex) a=1, 수열 = 1...)
 * d = 공차 (이웃한 두 항의 변화량. 예를 들어 수열 10,11,12... 에서 공차는 1. 공차는 음수를 가질 수 있다)
 * included
*/
function solution(a, d, included) {
    // solution 01
    let res = 0;
    for(let i = 0; i < included.length; i++) {
        if(included[i] == true) {
            res+=(a+(i*d));
        }
    }
    // return res

    //solution 02
    return included.reduce((acc, flag, i) => {
        /**
         * acc : 누산기는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
         * flag가 true이면 현재 항목을 등차수열의 계산된 값과 합산합니다.
         * flag의 값은 reduce 함수의 콜백 함수 내에서 주어진 included 배열의 각 요소를 통해 판단
         * 등차수열의 i + 1항은 a + d * i로 계산됩니다.
        */
        return flag ? acc + a + d * i : acc
    }, 0)
}

solution(3,4,[true, false, false, true, true])
solution(7,1,[false, false, false, true, false, false, false])