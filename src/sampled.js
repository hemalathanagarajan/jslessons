/* eslint no-use-before-define: "error" */
function addNumbers (a, b) {
  return a + b
}
console.log(`2 + 3 => ${addNumbers(2, 3)}`)
// console.log(`${multiplyNumbers(20,3)}`)
function multiplyNumbers (a, b) {
  return a * b
}
// eslint-disable-next-line semi
console.log(`2 * 3 => ${multiplyNumbers(2, 3)}`);
// bad coding without declaring value cant assign to function eventhough it displays o/p

// dog = 'snickers'
// console.log(dog)
