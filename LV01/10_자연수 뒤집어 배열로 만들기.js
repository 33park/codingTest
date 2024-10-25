// 내 풀이
function solution(n) {
	let str = (n + "").split("");
	let arr = new Array(str.length).fill(0); // n은 10,000,000,000이하인 자연수로 문자열이 길어질 경우를 대비하여 빈 array 생성
    let idx = 0;

	for (let i = str.length - 1; i >= 0; i--) {
        arr[idx] = Number(str[i]);
        idx++;
    }

    return arr
}



//다른 사람의 풀이 참고 🎉
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        console.log(`arr.push(n%10) 의 ${n}`)
        n = Math.floor(n/10);
        console.log(`재할당된 ${n}`)
    } while (n>0);

    return arr;
}
solution(123456)