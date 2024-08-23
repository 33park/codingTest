/**
 * obj 사용법 참고
 * function solution(todo_list, finished) {
        const obj = {};
        
        for(let i = 0; i < todo_list.length; i++){
            obj[todo_list[i]] = finished[i];
        }

        const answer = Object.keys(obj).filter(ele => !obj[ele]);

        return answer

    }
*/


solution(["problemsolving", "practiceguitar", "swim", "studygraph"],[true, false, true, false])

function solution01(todo_list, finished) {
    let res = [];

    for(let i = 0; i < todo_list.length; i++){
        if(finished[i] === false){
            res.push(todo_list[i]);
        }
    }

    return res
}