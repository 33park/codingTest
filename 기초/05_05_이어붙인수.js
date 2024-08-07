// 결론 : 들어오는 data가 단순 array이기 때문에 forEach가 더 빠르게 진행된다. 

/**
 *  solution 01
 *  계산 속도는 이 스크립트가 훨씬 빠르다. 하지만...
*/
    function solution(num_list) {
        let even = '', 
            odd = '';

        num_list.forEach((ele)=>{
            if(ele % 2 === 0)  even+=ele.toString() // 반복문 내에서 문자열을 계속해서 생성하기 때문에 성능이 02보다 좋지 않다
            else  odd+=ele.toString()
        })
        // forEach를 사용하여 방법도 내부 조건문 처리도 간단.

        return Number(even)+Number(odd)
    }


/**
 * solution 02
*/
function solution(num_list) {
    const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
        // reduce를 사용하여 배열 순회, 결과를 객체에 모은다.
        // reduce는 배열을 한번만 ㅅ수회하면서 여러가지를 동시에 처리할 수 있는 장점이 있으나 'push'연산이 빈번하게 일어나므로 성능에 영향을 줌.
        if (num % 2 === 0) {
            evens.push(num)
        } else {
            odds.push(num)
        }
        return { odds, evens }
    }, { odds: [], evens: [] })
    return Number(odds.join('')) + Number(evens.join('')) // 배열에 요소를 추가하는 작업은 상대적으로 빠르며 마지막에 join()하기때문에 01보다 효율적
}

solution([3, 4, 5, 2, 1])
solution([5, 7, 8, 3])