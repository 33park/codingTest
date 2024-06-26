function solution(numbers) {
    /**
     * solution 2
     * 굳이 음수와 양수 배열을 나눌 필요가 없음. 특히 -1 이하와 0초과로 나눌 필요가 없다. sort를 두번 실행할 필요도 없었음.
     * 
    */

    numbers.sort((a, b) => b - a);
    // 양수 최댓값을 계산합니다.
    let positiveMax = numbers[0] * numbers[1];

    // 음수 최댓값을 계산합니다.
    let n = numbers.length;
    let negativeMax = numbers[n - 1] * numbers[n - 2];

    // 두 값을 비교하여 더 큰 값을 반환합니다.
    return Math.max(positiveMax, negativeMax);
    //`Math.max()` 정적 메서드는 매개변수로 주어진 숫자 중 가장 큰 수를 반환하거나, 매개변수가 없을 경우 -Infinity를 반환


    /**
     * solution 1
     * 정수 배열 중 원소 두개 곱해 만들 수 있는 최댓값 return
     * 0 미만 수와 0초과 수 분리해서 가장 큰 수 곱셈 두개 만들어서 비교하기
     * map 사용해서 각각 배열 리턴하기
     * 
     *     let negativeArr = [];
            let positiveArr = [];
            let negativeNum = 0;
            let positiveNum = 0;
            
            let i = 0;
            while(i < numbers.length){
                if(numbers[i] <= -1) negativeArr.push(numbers[i])
                else if(numbers[i] >= 0) positiveArr.push(numbers[i])
                i++;
            }

            // 음수가 두개 이상
            if(negativeArr.length > 1){
                negativeArr.sort((a,b)=>{return a - b});
                negativeNum = negativeArr[0] * negativeArr[1]
            }else {
                negativeNum = 0;
            }

            positiveArr.sort((a,b)=>{return b - a});
            positiveNum = positiveArr[0] * positiveArr[1]


            return positiveNum > negativeNum ? positiveNum : negativeNum
    */



}
