function solution(arr) {
    return arr.reduce((a,c)=> a + c)/ arr.length;
}

solution([-1000,-200,1,150])