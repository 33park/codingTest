function solution(n, t) {
    return n * (2 ** t);
    /**
     * 시간마다 2배씩 증가하므로, t 시간 후의 세균 수는 `n * n^t`
     * `거듭제곱 (**)`
    */
}