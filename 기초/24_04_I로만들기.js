/* 내 풀이 */
function solution(myString) {
    let res = [...myString].map((e)=>{
        if( e.charCodeAt() < 108 ) {
            return e = 'l'
        } else {
            return e
        }
    })

    return res.join('');
}

solution("abcdevwxyz")


/* 다른 사람 풀이 참고 */
const solution = myString => myString.replace(/[a-k]/g,'l')
