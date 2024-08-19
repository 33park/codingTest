function solution(my_string) {
    let arr = [];
    for(let i = my_string.length; i > 0 ; i--){
        let ele = my_string.slice(-i);
        arr.push(ele);
    }

    return arr.sort();
}