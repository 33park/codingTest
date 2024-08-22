function solution(num_list, n) {
    return num_list.splice(n - 1);
    /**
     * 'n번째' 원소부터 '마지막' 원소까지
     * index는 0부터 시작하고 순서는 1부터 시작하기때문에 n - 1로 한다.
     * endIndex를 지정하지 않으면 'n - 1'부터 마지막까지 가져오니까.
    */
}