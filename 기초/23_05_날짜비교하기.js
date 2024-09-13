function solution(a, b) {
	//모두 홀수 X
	if (a % 2 == 0 && b % 2 == 0) {
		return Math.abs(a - b);
	}

	//하나만 홀수
	if (a % 2 == 0 || b % 2 == 0) {
		return 2 * (a + b);
	}

	//모두 홀수
	if (a % 2 != 0 && b % 2 != 0) {
		return Math.pow(a, 2) + Math.pow(b, 2);
	}
}

solution(3, 5);
