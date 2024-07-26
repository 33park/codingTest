/**
 * 치킨 10마리당 서비스 치킨1개 / 서비스 치킨1개에도 쿠폰1개
 * 총 시킨 치킨 10 나누기, 10 마다 쿠폰 증가, 쿠폰이 10개면 치킨 1마리 추가
 * 최대 서비스 치킨의 수를 return
 * 쿠폰을 10으로 나눴을때 나머지도 계산해두어야함
 */

function solution(chicken) {
    let serviceChicken = 0; //서비스 치킨의 총 수
    let coupons = chicken;  // 현재 가지고 있는 쿠폰 수 (치킨 1마리 = 쿠폰 1개)

    while (coupons >= 10) { //쿠폰 수가 10장 이상인 동안 반복
        let newChickens = Math.floor(coupons / 10); //현재 쿠폰으로 받을 수 있는 서비스 치킨 수
            // console.log(`newChicken:${newChickens}`)
        serviceChicken += newChickens; // 서비스 치킨 수 업데이트 
            // console.log(`serviceChicken:${serviceChicken}`)
        coupons = (coupons % 10) + newChickens; 
                //남은 쿠폰 + 서비스 치킨(쿠폰 수) 업데이트
            // console.log(`coupons:${coupons}`)
    }

    return serviceChicken;
}

solution(100); //11
solution(1081); //120

/**
 * 예제에서만 정상작동... (X)
 * 
 * function solution(chicken) {
    let serviceChick = Math.floor(chicken/10); //서비스 받은 치킨
    let couponChick = Math.floor(serviceChick/10); // 서비스 받은 치킨으로 시킨 치킨
    let restCoupon = chicken % 10; //남은 쿠폰
    let sub = serviceChick - (couponChick * 10); // 서비스 받은 치킨에서 미사용 쿠폰
    let sub02 = Math.floor(couponChick/10);
    let sub03 = restCoupon + sub + sub02;
    
    if(chicken%10 === 0){
        return serviceChick + couponChick
    } else {
        let addedService = Math.floor(sub03/10);

        // console.log(
        //     `serviceChick,${serviceChick},
        //     couponChick,${couponChick},
        //     restCoupon,${restCoupon},
        //     sub,${sub},
        //     sub02,${sub02},
        //     sub03,${sub03},
        //     addedService,${addedService}`
        // )

        return serviceChick + couponChick + restCoupon + addedService

    }
}
*/