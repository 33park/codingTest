function solution(str) {
    let s = [...str]
    let center = Math.floor(s.length/2);
    // console.log(s, center)

    if(s.length % 2 != 0){
        return s[center]
    } else {
        return str.slice(center-1, center+1)
    }
}

console.log(solution("abcde"))
console.log(solution("qwer"))

//다른 사람 풀이
function solution(s){
    const mid = Math.floor(s.length/2);
    return s.length % 2 === 1 ? s[mid] : s[mid-1]+s[mid]
}