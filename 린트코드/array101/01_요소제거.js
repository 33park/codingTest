/**
 * 정수 배열 nums와 정수 val이 주어졌을 때, nums에서 val의 모든 발생을 제자리에서 제거하세요. 요소의 순서는 변경될 수 있습니다. 
 * 그런 다음 nums에서 val과 같지 않은 요소의 개수를 반환하세요.
 * nums에서 val과 같지 않은 요소의 개수를 k라고 가정하면, 문제를 해결하기 위해 다음과 같은 작업을 수행해야 합니다:
 * 배열 nums를 변경하여 nums의 첫 번째 k 요소가 val과 같지 않은 요소를 포함하도록 합니다. 나머지 요소는 중요하지 않으며 nums의 크기도 중요하지 않습니다.
 * k를 반환하세요.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;

    // let k = 0;

    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === val) {
    //         nums.splice(i,1);
    //     }else{
    //         k++;
    //     }
    // }

    // return k

};

removeElement([3,2,2,3], 3)