function solution(x, n) {
	return Array.from({ length: n }, (_, i) => x * (i + 1));
	/**
	 * for문보다 배열 생성에 최적화되어있어 조금 더 시간을 단축시킬 수 있음
	 * Array.from() 을 사용하면 메모리 할당과 배열 초기화에서 이점을 가짐!
	 * 지금처럼 길이가 큰 배열에서 조금더 빠르게 실행됨
	 *
	 * 약간의 최적화를 기대할 수 있으나 시간 복ㅈ바도는 O(n)을 벗어나기 어려움.
	 * */
}

//답은 나왔으나 런타임이 너무 길음
function solution(x, n) {
	var answer = [];

	for (let i = 1; i <= n; i++) {
		answer.push(i * x);
	}

	return answer;
}
