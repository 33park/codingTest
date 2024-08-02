function solution(n) {
	if (n % 2 === 1) {
        //짝수일 때는 등차수열의 합 공식
        return ((n + 1) / 2) * ((n + 1) / 2);
    } else {
        // 홀수일 때는 자연수 거듭 제곱의 합을 구하는 공식
        return (n * (n + 1) * (n + 2)) / 6;
    }
}

/**
    function solution(n) {
        let arr = [];
        for(let i = 1; i <= n; i++) {
            arr.push(i)
        }
        let res = 0;
        
        if(n % 2 === 0) {
            arr.forEach((ele)=>{ 
                if(ele % 2 === 0) res+=(ele**2);
            })
            return res
        } else {
            arr.forEach((ele)=>{ 
                if(ele % 2 !== 0) res+=ele;
            })
            return res
        }
    }
 * 
*/
