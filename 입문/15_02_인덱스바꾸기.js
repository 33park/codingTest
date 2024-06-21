function solution(my_string, num1, num2) {
	let arr = [...my_string],
		temp1 = arr[num1],
		temp2 = arr[num2]; // ele[idx] 해당값 temp에 저장

	arr.splice(num2, 1, temp1); //splice 교체
	arr.splice(num1, 1, temp2);

	return arr.join("");

    /**
     * 다른 버전
     * 
     * [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]; 
     * 구조분해 재할당
    */
}
