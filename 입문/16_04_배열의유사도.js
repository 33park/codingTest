function solution(s1, s2) {
    let res = s1.filter(x => s2.includes(x));
    /**
     * includes를 통해 값 여부를 boolean으로 반환하여 true 값만 걸러낸 새로운 배열을 만든다
    */
    return res.length;
}

