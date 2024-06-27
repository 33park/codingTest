function solution(my_string) {
    /**
     * solution 1
     * 자연수 구하는 정규식으로 match 되는 것만 더함
    */
    let str = my_string.match(/\d+/g);
    let answer = 0;
    if(str){
        for(let i = 0; i < str.length; i++){
            answer += parseInt(str[i]);
        }
    }

    return answer

}
