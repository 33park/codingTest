
function solution(seoul) {
    let idx = seoul.indexOf('Kim');

    return "김서방은" + idx + "에 있다"
}

function solution01(seoul) {

    const isKim = (e) => e == "Kim";
    const found = seoul.findIndex(isKim);

    return `김서방은 ${found}에 있다`
        
}

solution(["Jane", "Kim"])