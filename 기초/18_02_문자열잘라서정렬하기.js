function solution01(myString) {
    let a =  myString.split('x').filter(v => v);
    return a.sort()
}

solution("axbxcxdx")
solution("dxccxbbbxaaaa")