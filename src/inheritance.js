/*eslint-disable*/

const o = new Object();
const  a = new Array();
const d = new Date();
const f1 = function (){
    // console.log('the cow jumped over the moon');
};
 // console.log("date = " + d);
 f1();
// --- object creation
const o1 = Object.create({x:100, y:200});
// console.log ('x=' + o1.x + 'y=' + o1.y);
// console.log(o1); // this is an empty object 

const o2 = Object.create(null);
const o3 = Object.create(Object.prototype);
// const o3 = Object.create(null);
// const o3 = {}
// console.log(o2); // this is an empty object 
// console.log(o3); // this is an empty object 


function getChild (parent){
    if(parent == null) throw TypeError();
    return Object.create(parent);
}

let o4 = { x: "dont change this value"};
// console.log(o4.x);
let p = getChild(o4); // this p inherits the properties from o4
 //console.log(p);
 
/*o4 = null;
p =  getChild(o4);//Object.create(o4); // object.create (null)
console.log(p);
*/
Object.prototype = 0;// base super class properties cant change its readonly
// console.log(Object);//it remains unchanged


//-------------//
let o5 = {};
console.log(o5);
o5.x = 100; // we assign x that no in the class
console.log(o5);
p = getChild(o5);

console.log(p);
p.y = 200;
let q = getChild(p);
q.z = 300;
console.log(q);
console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
console.log("p.x + p.y " + (p.x + p.y ));
console.log("o5.x + o5.y " + (o5.x + o5.y ));
console.log("o5.x" + (o5.x));


let book = {
    'main title': 'java script',
    subtitle : 'the guide',
    'for':'all audience',
    author:{
        firstname:'hema',
        surname:'latha'
    }
};
let len = undefined;
/*if(book){
    if(book.subtitle){
        len=book.subtitle.length;
        console.log(len);
    }
    else
      console.log("book.subtitle undefined:");
}
else
console.log("book is null");
*/
len = book && book.subtitle && book.subtitle.length; // holds all works of above if else block
if(len) console.log(len);

//-------
console.log(book.author);
delete book.author;
console.log(book.author);
console.log(book["main title"]);
delete book["main title"];
console.log(book["main title"]);
  let o6 = {x:100};
  console.log(o6.x);
  delete o6.x;
  console.log(o6.x);
  console.log(o6.toString);
  delete o6.toString;// inherited properties cant delete

  delete Object.prototype;
  var ab = 1;
  delete this.ab;
  function f12(){
      delete this.f1();
  }

  var cody = new Object();
  cody.living = true;
  cody.age = 33;
  cody.gender = 'male';
  cody.getGender = function(){return cody.gender;};
  console.log(cody.getGender());
  console.log(cody);

  //------------
  const myObject = new Object;
  myObject['0'] = 'f';
  myObject['1'] = 'o';
  myObject['2'] = 'o';
  console.log(myObject);
  const myString = new String('foo');// a string is a array of characters
  console.log(myString);

//-----obj with constructor
const Person = function (living,age,gender){
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function (){ return this.gender;};

};
const smith = new Person(true,33,'male');
console.log(smith);

const myNumber = new Number(16);
const myString1 = new String('male');
const myBoolean = new Boolean(false);
const myObject1 = new Object();
const myFunction = new Array('foo','bar');
const myDate = new Date();
const myRegExp = new RegExp('\bt[a-z] | \b');
const myError = new Error('sorry');


console.log(myNumber.constructor);
console.log(myString1.constructor);
console.log(myBoolean.constructor);
console.log(myObject1.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);

