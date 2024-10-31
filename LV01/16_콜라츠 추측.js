/**
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
    1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
    2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
 * 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
 * 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.
*/
function solution(num) {
    let answer = 0;
    while(num != 1 && answer  != 500) {
        num = num%2 == 0? num / 2 : num * 3 + 1;;
        answer++;
    }

    return num == 1 ? answer : -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));

function solution01(num) {
    let answer = 0;

    for (let i = 0; i < 500; i++){
      //최대 500회가 반복되는 반복문 생성
        if(num != 1){
            num = num%2 == 0? num / 2 : num * 3 + 1;
          // num이 1이 아닐때 실행되는 삼항연산자
        } else{
            return answer = i;
          // 이 외의 조건은 num 이 1이라는 것이므로 반복횟수 i를 리턴
        }
    }
    return answer = -1;
  //반복문이 모두 돌 때까지 1이 안나오면 -1을 리턴
}



const collatz = (ele) => {
	if (ele % 2 === 0) {
		return ele / 2;
	} else {
		return ele * 3 + 1;
	}
};
