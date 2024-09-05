/**
 * ✨
*/
function solution(strArr) {
    const mappingTable = {};

    // 배열을 한 번 순회하면서 길이별로 그룹화
    strArr.forEach(item => {
        const len = item.length;
        mappingTable[len] = (mappingTable[len] || 0) + 1;
    });

    // 그룹 중 가장 큰 크기를 반환
    return Math.max(...Object.values(mappingTable));
}


/**
 * 요소 갯수 순으로 정렬
 * 2개수씩 끊기
 *
 */
function solution(strArr) {
    let mappingTable = {};
    let max_len = Math.max(...strArr.map(item => item.length));

    for(let i = 1; i <= max_len; i++){
        let data = strArr.filter(item => item.length === i);

        mappingTable[i] = data.length;
    }

    console.log(mappingTable)

    return Math.max(...Object.values(mappingTable))
}

solution(["a", "bc", "d", "efg", "jkl", "mno",  "qrstu", "hi"]);
