/**
 * 두개의 정수 n과 m
 * 별(*) 문자를 이용해 가로길이가 n, 세로 길이가 m인 직사각형 형태를 출력
 * 
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for (let i = 0; i < b; i++) {
        let star = "";
        for (let j = 0; j < a; j++) {
            star = star + "*";
        }

        console.log(star)
    }
});

//별찍기
function squareTree(){
    for(let i = 0; i < 5; i++ ){
        for(let j = 0; j < 5; j++) {
            document.write('*');
        }
        document.write('<br/>');
    }
}

function triTree(){
    for(let i = 0; i < 5; i++ ){
        for(let j = 0; j <= i; j++) {
            document.write('*');
        }
        document.write('<br/>');
    }
}

squareTree();
triTree();

function triCenterTree(){
    for(let i = 0; i < 5; i++ ){
        for(let j = 4; j > i; j--) {
            document.write('&nbsp');
        }
        for(let j = 0; j <= i; j++) {
            document.write('★')
        }
        document.write('<br/>');
    }
}

triCenterTree();

function centerTriTree(){
    for(let i = 0; i < 5; i++) {
        for (let j = 4; j > i; j--) {
            document.write('-');
        }

        for(let j = 0; j <= i; j++) {
            document.write('*');
        }

        for(let j = 1; j<= i; j++) {
            document.write('+');
        }
        document.write('<br/>');
    }
}

centerTriTree();

function reverseTree(num){
    for(let i = 0; i < num; i++) {
        for(let j = 0; j < i; j++) {
            document.write('&nbsp')
        }
        for(let j = num; j > i; j--) [
            document.write('*')
        ]
        for(let j = num - 1; j > i; j--) {
            document.write('*')
        }
        document.write('<br/>')
    }

}

reverseTree(3);