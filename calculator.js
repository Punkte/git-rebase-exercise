function modulo(a, b) {
  return a % b;
}
// I'm a junior developer so I always add useless comment that are ovious like the following one
/**
 * Add two numbers
 * @param {number} a the first number to add 
 * @param {number} b the second number to add
 * @returns {number}
 */
const add = (a, b) => {
  if (isNaN(a)) {
    throw new Error('the first parameter should be of type number')
  }
  if (isNaN(b)) {
    throw new Error('the second parameter should be of type number')
  }
  return a + b;
}
function substract(a, b) {
  return a - b;
}
