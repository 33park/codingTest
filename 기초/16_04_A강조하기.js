//나의 풀이

function solution(myString) {
    let str = [...myString]
    for(let i = 0; i < myString.length; i++){ // 문자가 길어질수록 성능저하
        if(str[i] != "A"){
            str[i] = str[i].toLowerCase();
        }
        if(str[i] === "a") {
            str[i] = str[i].toUpperCase();
        }
    }

    return str.join('') // 배열변환과 join 연산 추가로 수행하여 코드 복잡도가 높다
}


//다른 사람 풀이 (적합)
const solution=s=>s.toLowerCase().replaceAll('a','A');