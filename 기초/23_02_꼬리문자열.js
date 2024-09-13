function solution(str_list, ex) {
	str_list = str_list.filter((e)=> !e.includes(ex));
    return str_list.join('')
}

solution(["abc", "def", "ghi"], "ef");
