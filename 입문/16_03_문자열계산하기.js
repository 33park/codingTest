function solution(my_string) {
    let arr = my_string.split(' ');
        
    let start = arr[0] * 1;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '+'){
            start += arr[i+1]*1;
        }else if(arr[i] === '-'){
            start -= arr[i+1]*1;
        }else{
            continue;
            /**
             * continue 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 
             * 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행
             * 
             * `for` 루프에서는 업데이트 표현식으로 점프합니다.
            */
        }
    }
    
    return start;
    

    /**
     * eval()의 경우 해킹의 위협이 있음.
     * 
    */
}
