function solution(num_list) {
	return num_list.sort((a, b) => a - b).slice(5);
	//slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
}
