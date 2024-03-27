function perfectSquare(n) {
  let root = Math.sqrt(n);
  if (root % 1 !== 0) {
    return -1;
  }
  root++;
  return root * root;
}
console.log(perfectSquare(9)); // should print 16
console.log(perfectSquare(289)); // should print 324
console.log(perfectSquare(3000)); // should print -1
