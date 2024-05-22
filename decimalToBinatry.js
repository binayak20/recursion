function convert(n) {
  if (n === 0) return;
  convert(Math.floor(n / 2));
  console.log(n % 2);
  //return n % 2;
}

console.log(convert(100));
