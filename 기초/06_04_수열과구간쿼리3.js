function solution(arr, queries) {

    queries.forEach(([i,j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]] //구조분해할당
        // let [i,j] = ele;
        // let [a,b] = [arr[i], arr[j]];
        // arr[i] = b;
        // arr[j] = a; 
    });

    return arr
}

solution([0, 1, 2, 3, 4], [[0, 3],[1, 2],[1, 4]]) // [3, 4, 1, 0, 2]