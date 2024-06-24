function solution(array) {
    let num;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] < array[i+1]){
            //이전보다 큰 수만 num에 전달
            num = array[i+1]
        }
    }
    
    return [num, array.indexOf(num)]
            //array 에서 num을 가진 숫자의 인덱스!
}
