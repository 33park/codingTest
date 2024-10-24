function solution(n) {
    for (let x = 2; x <= Math.sqrt(n); x++) {  
        if (n % x === 1) {
            return x;
        }
    }
    return n - 1;  
}
