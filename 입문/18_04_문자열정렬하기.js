function solution(my_string) {
    let str = my_string.toLowerCase(); // 소문자
    return [...str].sort().join(''); // 배열로 만들어서 알파벳순정렬 문자열로 합침
}

