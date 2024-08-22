/**
 * n번재 원소 이후의 원소들
 * n번째까지의 원소들로 나눠
 * concat하기
*/

function solution(num_list, n) {
    let after = num_list.slice(n);
    let before = num_list.slice(0,n);
    return after.concat(before)
}