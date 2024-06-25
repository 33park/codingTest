function solution(n, numlist) {
	return numlist.filter((ele) => ele % n === 0);
	/**
	 * map 말고 filter를 사용한 이유는 false를 반환해서 버리고 싶으므로
	 */
}
