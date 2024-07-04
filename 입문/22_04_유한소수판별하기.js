/**
 * 최대공약수 구하고 b가 2나 5로 나눠지지 않으면 2리턴 기면 1리턴
 */
function getGcd(num1, num2) {
	let gcd = 1;

	for (let i = 2; i <= Math.min(num1, num2); i++) {
		if (num1 % i === 0 && num2 % i === 0) {
			gcd = i;
		}
	}

	return gcd;
}

function solution(a, b) {
    let divisor = getGcd(a,b);

    b = b / divisor; // 분모 / 최대공약수

    while(b%2 === 0) b /= 2; //더이상 2나 5로 나누어지지 않는지 확인
    while(b%5 === 0) b /= 5;
    /**
     * 나누기 할당 (/=)
     * 오른쪽 피연산자의 값으로 변수를 나눈 결과 다시 변수에 할당
    */
    
    return b === 1? 1 : 2; // 1이면 2와 5만 소인수, 그렇지 않으면 다른 소인수

}

console.log(solution(7, 20))
console.log(solution(1, 5))
console.log(solution(11, 22))
console.log(solution(12, 21))

// solution 1 60.4 , 70.8

// function solution(a, b) {
// 	let calculate = a / b;
// 	let res = calculate.toString();
// 	let leng = [...res].length;

// 	if ((res[leng - 1] == 5 || res[leng - 1] == 2) && (b % 2 == 0 || b % 5 == 0)) {
// 		return 1;
// 	} else {
// 		return 2;
// 	}
// }
