/**
 * 아메리카노 4500
 * 카페라떼 5000
 * 아무거나 4500
 * 
 * 결제 금액 return
*/

function solution(order) {
    let a = 0;
    order.forEach((ele)=>{
        if(ele.includes('americano') || ele.includes('anything')){
            a += 4500
        } else if(ele.includes('latte')) {
            a += 5000
        }
    })

    return a
}

console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]))//19000
console.log(solution(["americanoice", "americano", "iceamericano"]))//13500

/**
 * 다른사람의 코드 참조
 * 
 * 라떼만 가격이 다르니까
*/

const solution = (order) => order.reduce((acc, cur) => acc + (cur.includes('latte') ? 5000 : 4500), 0)
