//다른 사람의 코드 참고

function gcdLcm(a, b) {
	let r;
	for (let ab = a * b; (r = a % b); a = b, b = r) {
		return [b, ab / b];
	}
}

// success
function getGCD(n1, n2) {
	let gcd = 1;

	for (let i = 2; i <= Math.min(n1, n2); i++) {
		if (n1 % i === 0 && n2 % i === 0) {
			gcd = i;
		}
	}

	return gcd;
}

function getLCM(n1, n2) {
	let lcm = 1;

	while (true) {
		if (lcm % n1 == 0 && lcm % n2 == 0) {
			break;
		}
		lcm++;
	}

	return lcm;
}

function solution(n, m) {
	let g = getGCD(n, m);
	let l = getLCM(n, m);

	return [g, l];
}
