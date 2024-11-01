const add = (a, b) => {
  if (isNaN(a)) {
    throw new Error('the first parameter should be of type number')
  }
  if (isNaN(b)) {
    throw new Error('the second parameter should be of type number')
  }
  return a + b;
}

const multiply = (a) => (b) => a * b;
