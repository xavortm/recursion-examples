/**
 * The classic fibonaci function implementation
 */
function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
}

/**
  * A function to store the results from the fib call.
  *
  * Technically, it works with other function calls as long as they take one
  * number as input and output a number as result. A more generic memo function
  * can be implemented too.
  */
function memoNum(fn: Function): Function {
  const cache: number[] = [];

  return function(n: number) {

    // If the input was already calculated, output the result quicky.
    if (cache[n] !== undefined) {
      return cache[n];
    }

    // If not, run the provided function and store it's result.
    cache[n] = fn(n);

    return cache[n];
  }
}

// And let's test it:
console.log('fib(5) =', memoNum(fib)(5)); // 5
console.log('fib(10) =', memoNum(fib)(10)); // 34
console.log('fib(20) =', memoNum(fib)(20)); // 6765

// For visualization of how much simpler the memo calls are, see this link:
// https://quanticdev.com/tools/recursion-visualization/
