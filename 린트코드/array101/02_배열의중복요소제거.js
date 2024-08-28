var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; 

    //index = 0 의 숫자는 기본 시작임으로 i는 1부터 비교함
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { 
            nums[k] = nums[i]; 
            k++; 
        }
    }

    return k; 
};


removeDuplicates([1,1,2])
removeDuplicates([0,0,1,1,1,2,2,3,3,4])


/**
 * var removeDuplicates = function (nums) {
    let set = new Set(nums) // 제자리 수정 요구 조건을 만족하지 않음 

    return [...set]
};
*/