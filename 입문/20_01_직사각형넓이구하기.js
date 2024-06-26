/**
 * solution 2
*/

function solution(dots) {
    // 모든 x 좌표와 y 좌표를 추출하여 x좌표와 y좌표를 별도의 배열로 만든다.
    const xValues = dots.map(dot => dot[0]);
    const yValues = dots.map(dot => dot[1]);

    // x 좌표의 최대값과 최소값, y 좌표의 최대값과 최소값
    const xMax = Math.max(...xValues);
    const xMin = Math.min(...xValues);
    const yMax = Math.max(...yValues);
    const yMin = Math.min(...yValues);

    // 가로와 세로 길이를 계산합니다.
    const width = xMax - xMin;
    const height = yMax - yMin;

    // 직사각형의 넓이를 반환합니다.
    return width * height;
}


/**
 * solution 1
 * 
 * 직사각형의 x,y값을 구해서 넓이를 return 하려고 했다
 * 예제는 성공했지만 채점 코드에서 실패
 * 
 * function calculFn(a,b){
    let arr = [a,b]
    let res = arr.sort((a,b)=>b-a)
    return parseInt(res[0]-res[1])
    }

    1. 임의의 세 점 선택, 직사각형의 모든 경우에 대한 가로 세로를 계산할 수 없음.
    2. 두값의 차이를 계산하는데 불필요한 배열생성, 정렬을 사용해 효율성 떨어짐


    function solution(dots) {
        let topL = dots[1];
        let topR = dots[0];
        let botR = dots[2];
        
        let x = calculFn(topL[0],topR[0]);
        let y = calculFn(topL[1],botR[1]);
        
        return x*y
    }
*/
