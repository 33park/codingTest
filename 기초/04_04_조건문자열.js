//operations 객체의 key값에 해당하는 value가 매개변수 2개(n,m) 받는 함수 
const operations = {
	">=": (n, m) => n >= m,
	"<=": (n, m) => n <= m,
	">!": (n, m) => n > m,
	"<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
	const op = operations[ineq + eq];
    console.log(op)
	return Number(op(n, m)); //Number(true)->1, Number(false)->0
} 

/**
 *  solution 01
 * 
    function solution(ineq, eq, n, m) {
        if(eq === "!") {
            if(ineq === ">") return n > m ? 1 : 0;
            else return n < m ? 1 : 0;
        } else {
            if(ineq === ">") return n >= m ? 1 : 0;
            else return n <= m ? 1 : 0;
        }
    }
*/
