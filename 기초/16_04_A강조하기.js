function solution(strArr) {
	for (let i = 0; i < strArr.length; i++) {
		if (i % 2 === 0) {
			strArr[i] = strArr[i].toLowerCase();
		}
		if (i % 2 != 0) {
			strArr[i] = strArr[i].toUpperCase();
		}
	}

	return strArr;
}

solution(["AAA", "BBB", "CCC", "DDD"]);
solution(["aBc", "AbC"]);

//다른 사람의 풀이

const solution02 = (strArr) => {
	return strArr.map((v, i) => (i % 2 === 0 ? v.toLowerCase() : v.toUpperCase));
};
