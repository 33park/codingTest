function solution(num) {
    let result = []
    let index = 1;
    
    while (index <= num) {
        if (num % index === 0) result.push(index)
            // 나누는 값이 0
        index++;
            // index 값을 올리기
    }
    
    return result
}
