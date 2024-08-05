/**
 * 문제 설명
    문자열 code가 주어집니다.
    code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

    mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 code[idx]의 값에 따라 다음과 같이 행동합니다.

    mode가 0일 때
        code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
        code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.
    mode가 1일 때
        code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
        code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.

    --> 조건 정리
        1. code[idx]가 "1"이면 // code[idx]가 "1"이 아니면 idx가 짝홀수일 때만 (i % 2 === mode)
        2. mode 상태 토글
    문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

    단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다
*/

function solution(code) {
	let answer = "";
	let mode = 0;

        //굳이 스프레드문으로 만들지 않아도 길이 확인 가능
	for (let i = 0; i < code.length; i += 1) {
		if (Number(code[i]) === 1) {
			mode = mode === 1 ? 0 : 1;
		}
		if (Number(code[i]) !== 1 && i % 2 === mode) {
			answer += code[i];
		}
	}
	return answer.length > 0 ? answer : "EMPTY";
}

/**
 * solution - 1
 * mode는 boolean으로, code는 스프레드문으로, for문 사용해서
    function solution(code) {
        let ret = [];
        let mode = false; //0
        let arr = [...code];

        for (let idx = 0; idx < arr.length; idx++) {
            if (mode == false) {
                if (arr[idx] != "1") {
                    if (idx % 2 == 0) ret.push(arr[idx]);
                } else if (arr[idx] == "1") {
                    mode = !mode;
                }
            } else {
                if (arr[idx] != "1") {
                    if (idx % 2 != 0) ret.push(arr[idx]);
                } else if (arr[idx] == "1") {
                    mode = !mode;
                }
            }
        }

        let answer = ret.join("").trim();
        
        return answer == "" ?  "EMPTY" : answer

    }

    solution("abc1abc1abc");
 */
