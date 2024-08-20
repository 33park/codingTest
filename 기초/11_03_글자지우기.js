/**
 * my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자
*/
function solution(my_string, indices) {
    return [...my_string].filter((_, i)=> !indices.includes(i)).join('')
    //인덱스를 통한 검사이기때문에 (_,i)로 처리. (요소 자체를 통해서 검사할 것이 아니기때문에 사용하지 않는 매개변수는 _언더스코어처리를 한다)
}

solution("apporoograpemmemprs",[1, 16, 6, 15, 0, 10, 11, 3])