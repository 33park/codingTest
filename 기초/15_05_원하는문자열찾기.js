/**
 * 길이체크
 */

function solution(num_list) {
	if (num_list.length >= 11) {
		return num_list.reduce((acc, cur) => acc + cur);
	} else {
		return num_list.reduce((acc, cur) => acc * cur);
	}
}

//더 간략하게

const solution02 = (n) => n.reduce((a, v) => (n.length > 10 ? a + v : a * v));
