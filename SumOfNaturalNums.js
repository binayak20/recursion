function naturalNums(n){
    if (n <= 0) return 0;
    return  n + naturalNums(n - 1);
}

console.log('Final Result:',naturalNums(6))