/**
 * l이라면 왼쪽에 있는 문자열들을 순서대로 담은 리스트를
 * r이라면 오른쪽에 있는 문자열들을 순서대로 담음
 */





//fail
function solution(str_list) {
    let answer = [];

    for(let i = 0; i < str_list.length; i++){
        if (str_list[i] === "l") {
            answer = str_list.slice(0, i);
            break
        } else if (str_list[i] === "r"){
            answer = str_list.slice(i+1);
            break
        }
    }

    return answer
}

console.log(solution(["u", "u", "l", "r"]))
console.log(solution(["u", "r", "u", "l",]))
console.log(solution(["l"]))