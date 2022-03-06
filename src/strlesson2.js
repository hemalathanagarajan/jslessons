/*eslint-disable*/
/* eslint-disable camelcase */
/* eslint-disable quotes */
// multi line str using single quote not works
const my_name = 'hema'
const song1 = ` I like ARR songs and Aniruth songs `
console.log(song1)
const hello3 = 'hello myname is'+ my_name + ". Nice to meet you"
console.log(hello3)
const hello4 = `hello my name ${my_name}. nice to meet . i am ${1 + 100} years old`
console.log(hello4)
const html = `
              <div>
              <h2>${my_name}</h2>
              <p>${hello4}</p>
              </div>`
console.log(html)
// document.body.innerHTML = html;--->if we use this in html document we use this line


// boolean
let isDrawing = false;
let age = 18; // = means assigning a value to variable
const ofAge = age >19;
console.log(ofAge);

console.log(age === 18);// === checks the value and datatypes same
