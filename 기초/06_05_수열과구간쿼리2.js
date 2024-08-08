/**
 *  another solution 03
 * 
 * 처음 의도했던 코드 작성법이나
 * 02처럼 작성하는 방법을 고려하는 것이 좋아보인다
 */
function solution(arr, queries) {
	return queries.map(
		([s, e, k]) =>
			arr
				.slice(s, e + 1)// 1과 동일하게 배열이 길수록 성능 저하 유발
				.filter((n) => n > k)// 1과 동일하게 배열이 길수록 성능 저하 유발
				.sort((a, b) => a - b)[0] || -1  // 1과 동일하게 배열이 길수록 성능 저하 유발
	);
}

/**
 * solution 02 (success)
 */

function solution(arr, queries) {
	const result = [];

	queries.forEach((query) => {
		const [s, e, k] = query;
		let minVal = Infinity; // 무한대로 초기화하여 'k'보다 크면서 가장 작은 값을 저장할 변수로 만듬
		let found = false;

		for (let i = s; i <= e; i++) {
			if (arr[i] > k && arr[i] < minVal) {
				minVal = arr[i];
				found = true;
			}
		}

		if (found) {
			result.push(minVal);
		} else {
			result.push(-1);
		}
	});

	return result;
}

solution(
	[0, 1, 2, 4, 3],
	[
		[0, 4, 2],
		[0, 3, 2],
		[0, 2, 2],
	]
);

/**
 * solution 01 (fail)
 * 
 * function solution(arr, queries) {
        let res = [];
        queries.forEach(([s, e, k]) => {
            let rage = arr.slice(s, e+1); // 배열이 길어질 수록 시간 복잡도가 커진다. slice로 복사본을 생성하니까.
            let a = rage.filter((ele)=> ele > k ); // 새로운 배열을 추가 생성한다.
            a.sort(); // 시간복잡도 증가. 최소값을 찾기 위해 재정렬하는것은 비효율적
            
            if(a.length < 1) {
                res.push(-1);
            } else {
                res.push(a[0]);
            }
        });

        return res
    }
*/
