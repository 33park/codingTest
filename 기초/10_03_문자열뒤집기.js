function solution(my_string, s, e) {
    let str = my_string.slice(s, e+1);
    let changed = [...str].reverse().join('');
    
    return my_string.replace(str, changed)
}

solution("Progra21Sremm3",6,12)
solution("Stanley1yelnatS",4,10)
