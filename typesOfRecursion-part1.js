// 1. Tail recursion 5 4 3 2 1
function printTail(n){
    if(n === 0) return;
    console.log(n)
    printTail(n-1); // Base case
}
console.log(printTail(5))

// 1. Head recursion 
//Error Maximum call stack size exceeded
function printHeadWrong(n){
    printHeadWrong(n-1);
    console.log(n)
    if(n === 0) return; //Base case will be sisuated according to recursive function
}
// 1. Head recursion 1 2 3 4 5
function printHead(n){
    if(n === 0) return; 
    printHead(n-1);
    console.log(n)
}
console.log(printTail(5))
// console.log(printHeadWrong(5))
console.log(printHead(5))