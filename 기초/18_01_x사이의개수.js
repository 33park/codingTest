function solution(myString) {
	let strArr = myString.split("x").map((str) => str.length);
	return strArr;
}
