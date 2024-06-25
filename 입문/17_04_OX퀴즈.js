/**
 * second solution
 */
function decomposition(element) {
	const [calc, result] = element.split(" = "); //  X[연산자]Y=Z 구조 분해
	const sign = calc.includes("+") ? 1 : -1;
	const [a, b] = calc.split(sign === 1 ? " + " : " - ");
	return { a: Number(a), b: Number(b), sign, result: Number(result) }; //객체 반환
}

function evalDecom({ a, b, sign, result }) {
	return a + b * sign === result ? "O" : "X"; 
}

function solution(quiz) {
	return quiz.map((element) => {
		const parsed = decomposition(element); //quiz 요소를 객체반환 해서 o,x로 계산한 뒤
		return evalDecom(parsed);   // map 함수를 통해 배열
	});
}


solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
/**
 * 
 * fist solution
 * 
 * function calculateFn(element){
    let res = element.split(" ");
        if(res[1] === '+') return Number(res[0])+Number(res[2]) == Number(res[4]);
        else if(res[1] === '-') return Number(res[0])+parseInt(res[2]*-1) == Number(res[4]);

        //구조 분해 할당으로 변경
        
        let [a, op, b, , result] = element.split(" ");
            a = Number(a);
            b = Number(b);
            result = Number(result);

            return op === '+' ? a + b === result : a - b === result
        }

    function solution(quiz) {
         //quiz는 배열 / 각 배열 요소 분리 후 true false 확인,  false는 X, true는 O

        let arr = []
        let i = 0;
        while(i < quiz.length){
            let result = calculateFn(quiz[i]) ? 'O' : 'X';
            arr.push(result)
            i++;
        }

        `while`을 사용하여 split 및 Number 변환이 배열 요소마다 발생 / 함수 호출 오버헤드가 우류된다

        return arr
    }

*/
