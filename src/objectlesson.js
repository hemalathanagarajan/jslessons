/*eslint-disable*/
// object creation with value
const person = {
    first:'venkat',
    last:'hemalatha',
    age:21
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);
person.first = null;
console.log(person.first);
  


const empty = {}; // empty 

const point = {x:10 , y:50};// obj with 2 properties
console.log(point.x);
console.log(point.y);
const point2 = {x: point.x ,y: point.y  + 1}; // it points to previous value
console.log(point2.x);
console.log(point2.y);

const book = {
    'main title' : 'java script', // property name include spaces use in single quotes
    'sub-title': 'guide to java script ', // hypen also uses single qoutes
    'for': 'students', // using reserved keyword use single quotes
    author:{
        first:'hema',
        last:'latha'
    }
};
console.log(book['main title']); // using this [] we prints the value 
console.log(book['sub-title']);
console.log(book['for']);
console.log(book.author.first);
console.log(book.author.last);
//console.log(book.sub-title);
console.log(book.for);

