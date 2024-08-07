// solution 01 (이쪽이 더 빠르다)
function solution(num_list) {
    let last = num_list.length-1;
    if(num_list[last] > num_list[last-1]){
            num_list.push(num_list[last] - num_list[last-1])
        } else {
            num_list.push(num_list[last]*2)
        }
    
    return num_list
}

//solution 02
function solution(num_list) {
    const [a, b] = [...num_list].reverse(); //배열을 복사하고 역순으로 변환하는 작업이 추가되어 코드가 다소 복잡해진다. (성능 저하) 그러나 역순 변환으로 가독성을 높일 순 있따.
    return [...num_list, a > b ? (a-b):a*2];
}
