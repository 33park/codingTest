function solution(my_string, alp) {
    if(my_string.includes(alp)){
        let uw = alp.toUpperCase();
        return my_string.replaceAll(alp, uw);
    } else {
        return my_string
    }
}