function solution02(n) {
    const newN = n + "";
    const newArr = newN.split("").sort().reverse().join("");

    return Number(newArr)
}

function solution01(n) {
    /**
     * 각 자릿수를 큰것부터 작은 순으로 정렬한 재로운 정수로 리턴
    */
    let arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    let res = arr.sort((a,b)=> b-a).join("");

    return Number(res)
}

solution(118372) //873211