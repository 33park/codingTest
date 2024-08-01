function solution(str1, str2) {

    return [...str1].map((ele, idx)=> ele+str2[idx]).join('');
    // let str01 = [...str1];
    // let str02 = [...str2];
    // let res = '';

	// str01.forEach((ele,index) => {
    //     res+=ele+=str02[index]
    // });

    // return res

}

solution("aaaaa","bbbbb")