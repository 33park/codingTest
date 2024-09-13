function solution(date1, date2) {
    let [a,b] = [date1.join(''),date2.join('')];
    return Number(a) < Number(b) ? 1 : 0
}

/**
 * 참고...
 * new Date(date1) < new Date(date2) ? 1 : 01
*/