function solution(n) {
	/**
	 * n이
	 * x의 제곱이라면 x + 1의 제곱을 리턴하고
	 * 아니라면 -1 리턴
	 */
	let x = Math.sqrt(n);
	console.log(x);

	return x % 1 === 0 ? Math.pow(x + 1, 2) : -1;
}

/**
 * Number.isInteger()
 * 주어진 값이 정수인지 판별하여 true false 값으로 값이 NaN이거나 infinity여도 false를 반환
*/

console.log(solution(121));
console.log(solution(3));

/**
 * 참고👓
 * 
 * 제곱근의 약수 개수는 항상 홀수
 * 소수의 제곱은 약수가개수가 항상 세 개. 
 * 소수는 1과 자신만을 약수로 가지는 수
 * 소수의 약수는 1과 자신, 총2개이며 곱했을 경우 1, 소수의 2제곱, 자기 자신(소수)만 약수로 가짐
 * for(let i = 1; i <= n; i++) {
        if(n % i === 0) arr.push(n / i);
    }
 * 나머지값이 없는 값(약수)을 찾아 배열에 넣고, 배열의 길이가 홀수라면(제곱수라면) 1을, 아니라면 2를 리턴
    출처: https://oliviakim.tistory.com/46 [ONE LIFE 2 LIVE:티스토리]
 * 
 * 
*/