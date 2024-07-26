function solution(id_pw, db) {
    let [inputId, inputPw] = id_pw;

    for(let [userId, userPw] of db) { //배열 구조 분해 할당
        if(userId === inputId) {
            return userPw === inputPw? "login" : "wrong pw"
        }
    }

    return "fail"

}

console.log(
	solution(
		["meosseugi", "1234"],
		[
			["rardss", "123"],
			["yyoom", "1234"],
			["meosseugi", "1234"],
		]
	)
); //login
console.log(
	solution(
		["programmer01", "15789"],
		[
			["programmer02", "111111"],
			["programmer00", "134"],
			["programmer01", "1145"],
		]
	)
); //wrong pw
console.log(
	solution(
		["rabbit04", "98761"],
		[
			["jaja11", "98761"],
			["krong0313", "29440"],
			["rabbit00", "111333"],
		]
	)
); //fail

/**
 * solution 1 
 * 코드 실행은 성공했으나 가독성 및 불필요한 호출이 있어서 다시 작성
 * 
function solution(id_pw, db) {
	let [inputId, inputPw] = id_pw;
	let arr = [];
	let answerArr = [];

	for (let [userId, userPw] of db) {
		arr.push([userId, userPw]); //불필요한 복사가 발생함
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i][0] != inputId) { // db로 접근했을 때 인덱싱오류가 발생했던 건 배열의 생성이 올바르지 않았을 수 있음
			answerArr.push("fail");
		} else {
			if (arr[i][1] == inputPw) {
				answerArr.push("login");
			} else {
				answerArr.push("wrong pw");
			}
		}
	}

	if (answerArr.includes("login")) {
		return "login";
	} else if (!answerArr.includes("login") && answerArr.includes("wrong pw")) {
		return "wrong pw";
	} else {
        return "fail"
    }
}
*/
