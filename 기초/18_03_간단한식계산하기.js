//다른 사람 풀이 참고. 이렇게 작성하고 싶었다...!
const ops = {
	"+": (a, b) => a + b,
	"-": (a, b) => a - b,
	"*": (a, b) => a * b,
};

function solution(binomial) {
    const [a, op, b] = binomial.split(' ');
    return ops[op](+a, +b);
} 



function solution01(binomial) {
	let [a, calculate, b] = binomial.split(" ");

	if (calculate == "+") {
		return Number(a) + Number(b);
	} else if (calculate == "-") {
		return Number(a) - Number(b);
	} else if (calculate == "*") {
		return Number(a) * Number(b);
	}
}
