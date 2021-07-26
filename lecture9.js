// <!-- 1.JAVASCRIPT CODE USED HERE -->

//string example
let name = 'Adarsh';   //store the string, it is seqence of characters
console.log("Hello " + name);
console.log(typeof name);


// <!-- 2.JAVASCRIPT CODE USED HERE -->

//Example 1: using string Literal  (first way of creating string), mostly used

let message = "Hello World!";  /* yaha Hello World! aik string literal hai, string ki constant 
 value wahi hamara literal ho jaata hai.
*/
console.log(message);
console.log(typeof message);

// <!-- 3.JAVASCRIPT CODE USED HERE -->

//Example 2: using String() constructor  , (second way of creating string), but consume more time and memory
/* constructor basically object ko initialize karne ke liye hota hai */
let newcode = new String("Hello Guys");   //store the string
console.log(newcode);
/* yaha pe maine object create kiya hai "new" keyword se */
console.log(typeof newcode);


// <!-- 4.JAVASCRIPT CODE USED HERE -->

/* Example 1: ""  ,it is primitive type string, with literal */ 
let cricketer1 = "Dhoni";
console.log(cricketer1);
console.log(typeof cricketer1);

/* Example 2: ''  ,it is primitive type string, with literal  */
let cricketer2 = "Sachin";
console.log(cricketer2);
console.log(typeof cricketer2);

/* Example 3: `` backtick ,tilde sign  ,it is primitive type string, with literal, 
it is also called multiline string */
let cricketer3 = `
Kohli
is 
my
favorite
crickter.`; 
console.log(cricketer3);
console.log(typeof cricketer3);




// <!-- 5.JAVASCRIPT CODE USED HERE -->

//string interpolation example
 let a = 96;
 let b = 76;
 let c = a+b; 

/* output hame kuch aise chahiye
Sum of 96 and 76 is 96+76.
We can use concatenation method to print this:
*/
//concatenation method
console.log("Sum of " + a + " and " + b + " is " + c);   /* but this is too complex in large code, to resolve
this problem we use string interpolation method.
*/

//string Interpolation Method, it is very powerful                  
console.log(`Sum of ${a} and ${b} is ${c}`);         /* 172 output, it is widely used */
console.log(`Sum of ${a} and ${b} is ${c + 100}`);   /* 272 output */





