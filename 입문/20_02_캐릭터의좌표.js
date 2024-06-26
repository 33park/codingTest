/**
 * solution 2
 * 각 방향키 입력에 따라 x와 y의 값을 증가 또는 감소.
 * 이동 후 현재 위치가 제한값을 넘지 않도록 Math.min과 Math.max를 사용하여 값 조정.
*/

function solution(keyinput, board) {
    
    let [xLimit, yLimit] = [Math.floor(board[0]/2),Math.floor(board[1]/2)];
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === 'left') x = Math.max(x - 1, -xLimit);
        else if (keyinput[i] === 'right') x = Math.min(x + 1, xLimit);
        else if (keyinput[i] === 'up') y = Math.min(y + 1, yLimit);
        else if (keyinput[i] === 'down') y = Math.max(y - 1, -yLimit);
    }
    
    return [x, y];

}

/**
 * 
 * solution 1
 * 
 * 정확도가 63%로 개선 필요
 * checkParse()의 불필요한 복잡도, 계산의 문제로 보임
 * 
 * function checkParse(num, maxPoint){
    if(Math.abs(num) > Math.floor(maxPoint/2)){
            if(num < 0){
                return num + 1
            }else {
                return num - 1
            }
        
    } else {
        return num
    }
    }

    function solution(keyinput, board) {
        // 배열에 뭐가 들어오는지 보고 값 반환
        // 위치에서 빼기
        let [xPoint, yPoint] = board;
        let x = 0;
        let y = 0;
        
        for(let i = 0; i < keyinput.length; i++){
            if(keyinput[i] === 'left') x-=1
            else if(keyinput[i] === 'right') x+=1
            else if(keyinput[i] === 'up') y+=1
            else if(keyinput[i] === 'down') y-=1
        }
        
        let lastX = checkParse(x, xPoint);
        let lastY = checkParse(y, yPoint);
        
        return [lastX,lastY]    
    }


*/