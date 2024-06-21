function solution(my_string) {
    var answer = [...my_string].map((ele)=> 
        ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
    )
    return answer.join('') // join()만 사용하면 , 추가됨. join('')를 사용하여 배열을 다시 문자열로 변환
    
}
