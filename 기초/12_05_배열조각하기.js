function solution(arr, query) {
    let res = [...arr]

    query.forEach((e, i)=>{
        if ( i % 2 === 0) {
            res.splice(query[i]+1);
        } else {
            res.splice(0, query[i]) // 범위지정
            /**
             * 맨 앞부터 query[i] - 1 번째 값까지 잘라야하기 떄문에
             * 총 잘라야하는 길이는 query[i]개
            */
        }
    })

    return res
}


solution([0, 1, 2, 3, 4, 5],[4, 1, 2])