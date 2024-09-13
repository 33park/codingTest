function solution(num_list, n) {
	for (let i = num_list.length; i > 0; i--) {
		if (num_list[i] == n) return 1;
	}

	return 0;
}
solution([1, 2, 3, 4, 5], 3);
