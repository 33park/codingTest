function solution(numbers, n) {

    let answer = 0;
    let i = 0;

    //reduce 사용 참고
    // return numbers.reduce((acc,cur) => (acc <= n) ? acc + cur : acc)

    //while 사용 참고
    // while(answer <= n){
    //     answer += numbers[i++]
    // }


    for(let i = 0; i < numbers.length; i++){
        answer+=numbers[i];

        console.log(answer)
        if(answer > n){
            break;
        }
    }



    return answer
}

solution([34, 5, 71, 29, 100, 34], 123);
solution([58, 44, 27, 10, 100], 139);
