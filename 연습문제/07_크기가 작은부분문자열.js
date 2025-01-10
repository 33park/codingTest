// 다른 사람 풀이 참고
function solution(t,p){
    let count = 0;
    for(let i = 0; i <= t.length - p.length; i++) {
        let val = t.slice(i, i + p.length);
        if( +p >= +val) count++;
        // 문자열 앞에 + 를 붙여서 바로 숫자형 변환. 자릿수가 같아서 숫자형으로 변환할 필요는 없음.
    }

    return count;
}


//success
/**
 *  p의 길이만큼 t를 slice 함
 * t[i] 와 p의 크기를 비교
 * p보다 작거나 같은 수가 나오는 횟수를 return
 */
function solution(t, p) {
	let arr = [];

	for (let i = 0; i < t.length; i++) {
		let [s, e] = [i, i + p.length];
		let str = t.slice(s, e);
		arr.push(str);

		if (e == t.length) {
			break;
		}
	}

	let result = 0;

	arr.map((ele, _) => {
		if (ele <= p) {
			result += 1;
		}
	});

	return result;
}

console.log(solution("3141592", "271")); //2
console.log(solution("500220839878", "7")); //8
console.log(solution("10203", "15")); //3
