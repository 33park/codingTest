function solution(my_string, index_list) {
    var answer = index_list.map((ele)=>{
        return [...my_string][ele] // 구조분해할당!
    });
    return answer.join('');
}