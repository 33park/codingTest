function solution(n) {
    let sum = 0;

    for(let i = 1; i <= Math.sqrt(n); i++){
        if( n % i === 0) {
            sum += i;
            if(i !== n / i) {
                sum += n / i;
            }
        }
    }

    return sum
}

// 런타임 에러 발생

function solution01(n) {
    let result = []; // 배열 크기 증가가 메모리에 문제일 수 있다

    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            result.push(i);
            if(i * i != n) result.push(n / i);
        }
    }

    return result.reduce((a,c)=> a + c)
}

solution(5)


