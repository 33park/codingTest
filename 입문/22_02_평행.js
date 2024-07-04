function solution(dots) {
    //아래 반복계산 함수로 변경
    function getSlope(dot1, dot2) {
        const [x1, y1] = dot1;
        const [x2, y2] = dot2;
        return (y2 - y1) / (x2 - x1);
    }


    const slopes = [
        getSlope(dots[0], dots[1]),
        getSlope(dots[0], dots[2]),
        getSlope(dots[0], dots[3]),
        getSlope(dots[1], dots[2]),
        getSlope(dots[1], dots[3]),
        getSlope(dots[2], dots[3])
    ];

    if (slopes[0] === slopes[5] || // dots[0]-dots[1] 평행 dots[2]-dots[3]
        slopes[1] === slopes[4] || // dots[0]-dots[2] 평행 dots[1]-dots[3]
        slopes[2] === slopes[3]) { // dots[0]-dots[3] 평행 dots[1]-dots[2]
        return 1;
    }

    return 0;



    /**
     * 이차원배열
     * 1. a-c / b-d 짝짓고 큰 숫자로 넓이 높이 반환 
     * 2. a-b / c-d 짝짓고 큰 숫자로 넓이 높이 반환
     * 3. 1,2가 동일하면 평행?
    */
    // let [dotA, dotB, dotC, dotD] = dots;

    // case 1
    // let acX = Math.abs(dotA[0]-dotC[0]);
    // let acY = Math.abs(dotA[1]-dotC[1]);

    // let bdX = Math.abs(dotB[0]-dotD[0]);
    // let bdY = Math.abs(dotB[1]-dotD[1]);

    // case 2
    // let abX = Math.abs(dotA[0]-dotB[0]);
    // let abY = Math.abs(dotA[1]-dotB[1]);

    // let cdX = Math.abs(dotC[0]-dotD[0]);
    // let cdY = Math.abs(dotC[1]-dotD[1]);


    // if(acX == bdX && acY == bdY){
    //     return 1
    // }else if(abX == cdX && abY == cdY){
    //     return 1
    // }else {
    //     return 0

    // }
}


// solution([[1, 4], [9, 2], [3, 8], [11, 6]]); //1
solution([[3, 5], [4, 1], [2, 4], [5, 10]]); //0