/* 
    forEach 이용해서 idx 맞춰 slice 리턴하고 빈 문자열에 더하기
*/

function solution(my_strings, parts) {
	let answer = "";

    my_strings.forEach((ele, idx)=>{
        let [s, e] = parts[idx];
        let str = ele.slice(s,e+1);
        console.log(str)
        answer+=str
    })

	return answer;
}

solution(
	["progressive", "hamburger", "hammer", "ahocorasick"],
	[
		[0, 4],
		[1, 2],
		[3, 5],
		[7, 7],
	]
);
