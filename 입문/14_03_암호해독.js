function solution(cipher, code) {
	let arr = [...cipher]; //문자열 전개 연산자로 배열
	let str = "";
	for (let i = code - 1; i < arr.length; i += code) {
		//code 배수 할당
		str += arr[i]; // 문자연결
	}

	return str;
}
