/**
 * require() 함수
 * Node.JS에서는 require 매서드를 통해 외부 모듈을 가져올 수 있다.
 * require 매서드는 node가 local object에 추가한 매서드로서 다음과ㅓ 같이 파라미터로 추가할 모듈의 파일 경로값을 받는다.
 * 
*/
function fnAb(){
    const readline = require('readline'); //모듈가져오기
    const rl = readline.createInterface({ //입출력을 위한 인터페이스 객체 생성
        input: process.stdin, 
        output: process.stdout
    });
    
    let input = [];
    
    rl.on('line', function (line) {
        // 입력 받은 값을 처리하는 코드 
        input = [line];
    }).on('close',function(){
      // close가 없으면 무한하게 입력 받으니 주의
        str = input[0];
        console.log(str)
    });
    
}

fnAb();