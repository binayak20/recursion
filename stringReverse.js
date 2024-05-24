function reverseString(s, ind = 0) {
  if (ind >= s.length) return "";
  return reverseString(s, ind + 1) + s.charAt(ind);
}
console.log(reverseString("123450"));
