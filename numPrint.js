function numPrint(n){
    if(n === 0) return;

    //console.log(n)
    // numPrint(n - 1) //5 4 3 2 1 

    numPrint(n - 1)
    console.log(n) // 1 2 3 4 5
    
}
numPrint(5)


stack = [fun(5), fun(4), fun(3), fun(2), fun(1)]
// when return call go to the next step
// 1 2 3 4 5