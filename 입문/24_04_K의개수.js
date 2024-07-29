function solution(i, j, k) {
    let a = '';
    for(i; i <=j; i++) {
        a+=i;
    }

    console.log(a)
    console.log(a.split(k))
    console.log(a.split(k).length-1)
}


solution(1,13,1) //6
solution(10,50,5) //5
solution(3,10,2) //0

/**
 * solution 1
 * i부터 j 숫자를 array에 문자열로 넣어서 k를 포함하면 count++;

    function solution(i, j, k) {

        let count = 0;
        let array = '';

        for(let a = i; a <= j; a++){
            array+=`${a}`;
        }

        [...array].filter((ele)=>{
            if(ele === `${k}`) count++;
        })

        return count;
    }
*/
