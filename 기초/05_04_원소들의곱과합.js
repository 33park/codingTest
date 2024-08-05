function solution(num_list) {
    //이 코드가 조금 더 빠름
    let accMul = 1
    let accSum = 0
    for (const num of num_list) {
        accMul *= num
        accSum += num 
        //계산을 한번의 for문에서 끝내서라고 예상
    }
    return accMul < accSum ** 2 ? 1 : 0

    // solution 01 
    // let a = [...num_list].reduce((acc,cur)=>acc * cur);
    // let b = [...num_list].reduce((acc,cur)=>acc + cur);
    
    // return Math.pow(b,2) > a ? 1 : 0
}