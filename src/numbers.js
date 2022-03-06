const age = 100
const money = 100.50
console.log(typeof age) // number
console.log(typeof money)// number

console.log("10" * "10") // this works for sub,mul,div but not for +symbol beacuase + is concatenation 
console.log("10" -  "10")
// math helper methods
console.log( Math.round(2.2))
console.log( Math.floor(2.4))
console.log( Math.ceil(2.4))
console.log( Math.random())

const sweet = 20
const kids = 3
const eachKidGets = Math.floor(sweet/kids)
console.log(eachKidGets)
const leftsweets = sweet % kids
console.log(leftsweets)

let x = 2 ** 3
console.log(x)
console.log(typeof -Infinity)
// let result = 10 /'hello';
console.log(typeof NaN)

// check datatype of value

let h = 100
let result = Number.isInteger(h)
console.log(`hem is number : ${result}`)
let y  = "abcd"
result = Number.isInteger(y)
console.log(`y is number : ${result}`)
result = (typeof y === 'string')
console.log(`is y is string: ${result}`)
let flag = true
result = (typeof flag === 'boolean')
console.log(`is flag is boolean: ${result}`)
let nos = [1,2,3,4,5] // array is an object
result = (typeof nos === 'object')
console.log(`is x an object:${result}`)


