function solution(num, total){
    let min = Math.ceil(total/num - Math.floor(num/2));
    /**
     * total/num 연속된 수의 평균, Math.floor(num/2) 는 연속된 수들의 중간값에서 몇 단계 전으로 가야할지 
     * 
    */
    let max = Math.floor(total/num + Math.floor(num/2));

    // 수열의 평균값 num/2 => 수열의 마지막에서 중앙까지 등차 계산 ceil와 floor 활용 (등차가 1이기 떄문)

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
                // 배열 의 길이, 생성된 배열의 모든 요소를 0으로 채운다. (배열 초기화 역할)
                // i+min은 min부터 시작하는 값을 생성.
}


solution(3,12)
solution(5,15)
solution(4,14)
solution(5,5)

/**
 * num 연속된 수
 * 연속된 수를 더한 값 total
 * total/=num 중간값구하고 거기서 +-한값을 더해서 total이 나오는지 확인
 * num이 홀수인 경우에는 1씩 빼면 되지만 num이 짝수인 경우에는 수가 하나 더 붙게 됨
 * 짝수인 경우의 sorting 에서 첫번째, 마지막 인덱스 수를 빼서 더한 값을 비교하는걸로...
*/

/**
 * function solution(num, total) {
    let middle = Math.floor(total/num);
    let arr = [];
    arr.push(middle)

    for(let i = 1; i <= num; i++){
        if(arr.length >= num) break;
        arr.push(middle-i)
        arr.push(middle+i)
    }
    
    let sorting = arr.sort((a,b)=> a-b);

    if(num%2 === 0) {
        let last = sorting.pop();
        let first = sorting.shift();

        let res1 = sorting.reduce((acc, cur)=> acc + cur);
        if ((res1+last) === total) {
            sorting.push(last)
            return sorting
        } else if((res1+first) === total){
            sorting.push(first)
        } else {
            console.error
        }
        sorting.sort((a,b)=>a-b);
        return sorting

    }else {
        return sorting;
    }
}
*/