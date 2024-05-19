/**
 * To understand recursive calls, we need to clearly think about what it means to evaluate
 * an expression in JavaScript.
 *
 * First, each variable in an expression needs to be evaluated / substituted with a
 * primitive type like "number", "string" etc with which we can return a single value.
 *
 * In our case, that would be a + b being substituted with the variable values to be
 * 1 + 2. This can further be evaluated as it's not a single value and we have the +
 * operand to run, resulting in "3". There are no operands and it's a single value,
 * which we can't further evaluate/calculate, so we return it.
 *
 * The same way we evaluate a variable, we can evaluate a function (which can be
 * a variable on it's own as we know). So we need to run the function and result
 * in some kind of primitive value like number, string, array
 *
 * If a function is returned, that function will have to also be called in order
 * to be evaluated. Going down we reach to non-function primitive types. They are:
 * string. number. bigint. boolean. undefined. symbol. null. Any expression ends up
 * evaluated to one of these types. In our case, a + b is evaluated to 3 which is a
 * number.
 */

function sum(a: number, b: number): number {
  return a + b;
}

/**
 * This function evaluates the sum of two numbers.
 *
 * It's a showcase to understand how expressions are evaluated in JavaScript.
 *
 * @returns The sum of two numbers.
 */
export default function evaluation(): number {
  const a = 1;
  const b = 2;

  return sum(a, b);
}

// Inside evaluation:
// Define variables:
//    a <- 1
//    b <- 2
//
// On the return, we run the sum line:
//    return sum(a,b);
//
// Inside which, we evaluate a and b to 1 and 2:
//    return sum(1,2);
//
// Inside sum(), we reach the return line:
//    return a + b
//
// Where we evaluate a and b to 1 and 2:
//    return 1 + 2
//
// We evaluate the expression to 3 and return it:
//    return 3
//
// The returned value from sum(a,b) is evaluated to 3 and we return it.
//    return 3
