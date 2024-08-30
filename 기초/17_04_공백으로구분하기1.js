function solution(strArr) {
	strArr = strArr.filter((x) => {
		// console.log(x.indexOf("ad"))
		return x.indexOf("ad") == -1; //일치하는 값이 없으면 -1을 반환합니다.
	});

	return strArr;
}

solution(["and", "notad", "abcd"]);

function solution01(strArr) {
	let res = [];

	strArr.forEach((ele) => {
		let condition = ele.includes("ad");
		if (!condition) {
			res.push(ele);
		}
	});

	return res;
}
