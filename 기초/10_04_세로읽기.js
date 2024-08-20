// 다른 사람 풀이
function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join('');
    /**
     * _ 는 요소
     * i 는 index 
     * i % m === c - 1 의 계산이 직관적으로 다가오지 않아서
     * 유지보수에 어려움이 있지 않을까 함
    */
}

/**
 * m글자씩 나눠서 배열의 첫번째 글자를 문자열로 만들어서 return
 * 성공!
 */

function solution(my_string, m, c) {
    let count = Math.floor(my_string.length / m)
	let res = [];

    for(let i = 0; i < count; i++){
        let [start, end] = [i * m, (i * m) + m];
        let str = my_string.slice(start, end);
        res.push(str[c - 1])
    }

    return res.join('')
}

solution("ihrhbakrfpndopljhygc", 4, 2);
solution("programmers", 1, 1);
