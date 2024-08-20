// 4번 풀이와 같은 문제
function solution(q, r, code) {
    let res = '';
    [...code].forEach((ele, idx)=>{
        if(idx % q === r){
            res+=ele
        }
    })

    return res
}

solution(3,1,'qjnwezgrpirldywt')
solution(1,0,'programmers')