/**
 * 최대한 많은 부서 지원
 * 신청 금액보다 적게 지원할 수 없음
 * d = 부서별 신청한 금액
 * budget = 예산 
*/

function solution(d, budget) {
    d.sort((a,b)=> a - b); // 금액이 적은 부서부터 지원, 오름차순
    let count = 0;

    for(let i = 0; i < d.length; i++) {
        if(d[i] > budget) break;

        budget -= d[i]; //현재 금액만큼 budget 줄이기
        count += 1;
    }

    return count;

}

console.log(solution([1,3,2,5,4],9)); //3
console.log(solution([2,2,3,3],10)); //4e