/**
 * 공백문자로 단어 구분
 * 각 단어의 짝수번째 알파벳은 대문자
 * 홀수번째 알파벳은 소문자로 바꿔
 * 문자열 리턴

*/

function solution(s){
    let answer = '';
    let words = s.split(' ');

    for( let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++){
            if(j % 2 === 0) {
                answer += words[i][j].toUpperCase();
            } else {
                answer += words[i][j].toLowerCase();
            }
        }
        if (i < words.length - 1) {
            answer += ' ';
        }

        console.log(answer)
    }

    return answer;
}

console.log(solution("try hello world")); //TrY HeLlO WoRlD"

// function changeStr(ele) {
//     let res = [...ele].map((e, i) => {
//         if (i % 2 == 0) return e.toLocaleUpperCase();
//         else return e.toLocaleLowerCase();
//     });

//     return res;
// }

// function solution(string) {
//     let result = string.split(" ");

//     let answer = result.map((ele, _) => {
//         if (ele == " ") {
//             return ele += " ";
//         } else {
//             let a = changeStr(ele);

//             return a.join('');
//         }   
    
//     });

//     return answer;
// }

// function solution(string) {
// 	let arr = [...string].map((ele, idx) => {
// 		let count = 0;

// 		if (ele == " ") count++;

// 		if (count % 2 === 0) {
//             if(idx != 0){
//                 count--;
//             } else {
//                 count++;
//             }
// 			return ele.toLocaleUpperCase();
// 		} else if (count % 2 != 0) {
// 			count++;
// 			return ele.toLocaleLowerCase();
// 		}

// 	});

// 	return arr;
// }


