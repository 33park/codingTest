function solution(arr, intervals) {
    let [arr1, arr2] = [[],[]];
    let [[a1, b1], [a2, b2]] = intervals;


    arr1 = arr.slice(a1,b1+1)
    arr2 = arr.slice(a2,b2+1)

    return [...arr1, ...arr2]
}