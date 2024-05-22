function reverse(n, res = 0) {
  if (n === 0) return res;

  res = res * 10 + (n % 10);

  return reverse(Math.floor(n / 10), res);
}
console.log(reverse(543210));
