function sum(a) {
  if (a === 0) {
    return 0;
  }

  return a + sum(a - 1);
}

console.log(sum(5));
