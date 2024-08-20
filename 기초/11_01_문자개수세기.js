

/**
 * 대소문자 알파벳을 각각 다른 문자로 인식해야한다.
 */

function solution(my_string) {
	let arr = new Array(52).fill(0);
    my_string.split("").forEach((e) => {
		const word = e.codePointAt(); //유니코드 값을 이용 65~90 대문자 97~122 소문자
        if(word >= 97) { // 소문자 조건문. 인덱스의 최소값은 26임으로 "a" 부터 시작
            arr[word - 71] += 1
        } else {
            arr[word - 65] += 1
        }

        /**
         * 가독성 개선
         * const code = e.codePointAt(0);
            if (code >= 97 && code <= 122) {  // 소문자 범위
                arr[code - 97 + 26] += 1;  // 소문자는 26~51 인덱스
            } else if (code >= 65 && code <= 90) {  // 대문자 범위
                arr[code - 65] += 1;  // 대문자는 0~25 인덱스
            }
        */
	});

    return arr;

/**
 * 	let alpha = [
		"A", //65
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z", //90
	];

    let alpha02 = [		
        "a", //97
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z" // 122
        ]

    alpha.forEach( e => {
        console.log(e.codePointAt());
    })
    alpha02.forEach( e => {
        console.log(e.codePointAt());
    })
*/

}

solution("Programmers");


// 01 처음 구상
function solution01(my_string) {
    // 알파벳 개수를 카운트할 오브젝트 생성 <- 그러나 오브젝트가 클 수록 메모리 사용 증가
    let obj = {
        'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'F': 0, 'G': 0, 'H': 0, 'I': 0, 'J': 0, 'K': 0, 
        'L': 0, 'M': 0, 'N': 0, 'O': 0, 'P': 0, 'Q': 0, 'R': 0, 'S': 0, 'T': 0, 'U': 0, 'V': 0, 
        'W': 0, 'X': 0, 'Y': 0, 'Z': 0,
        'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 
        'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 
        'w': 0, 'x': 0, 'y': 0, 'z': 0
    };
    // 문자열에서 각 문자에 대해 오브젝트에서 카운트 증가
    for (let char of my_string) {
        if (obj.hasOwnProperty(char)) {
            obj[char]++;
        }
    }
    // 오브젝트의 값들을 배열로 변환하여 반환
    let result = [];
    for (let key in obj) {
        result.push(obj[key]);
    }

    return result;
}

// 예시 실행
console.log(solution01("Hello World!")); 

