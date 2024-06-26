function solution(array, height) {
    //filter
    return array.filter(value => value > height).length;
}