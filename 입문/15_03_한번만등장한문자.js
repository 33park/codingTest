function solution(s) {
    // n, n으로 for문이 돌도록...

    // 문자 등장 횟수를 저장할 맵 객체를 생성
    const charCount = new Map();
    
    // 문자열의 각 문자를 순회하며 등장 횟수를 계산
    for (let char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
            /**
             * .set(key , value)
             * 존재하면 기존값에 1을 더하여 업데이트 
             * 존재하지 않으면 새로운 키-값 쌍을 설정
             */
        } else {
            charCount.set(char, 1);
        }
    }
    
    // 등장 횟수가 1인 문자만 필터링하여 배열로 변환
    const uniqueChars = [];
    for (let [char, count] of charCount) {
        if (count === 1) {
            uniqueChars.push(char);
        }
    }
    
    // 필터링된 문자를 사전 순으로 정렬
    uniqueChars.sort();
    
    // 배열을 문자열로 결합하여 반환
    return uniqueChars.join('');

    /**
     * 값은 나왔으나
     * n*n으로 for문이 돌아서 반려
     * 
    */
    // let arr = [...s].sort();
    // let res = [];
    
    // for(let i = 0; i < arr.length; i++){ // 배열순회
    //     if(arr[i] == arr[i+1]){ 
    //         while(i< arr.length -1 && arr[i] == arr[i+1]){
    //             i++;
    //         }
    //     }else{
    //         res.push(arr[i])
    //     }
    // }
    
    // return res.join('');
}
