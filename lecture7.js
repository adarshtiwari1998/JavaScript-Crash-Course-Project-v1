/* understanding data types in practical way  */
/* ############### 1. Primitive data type ################ */
console.log("Hey, Understanding Primitive Data Types in Practical Way!");

/* number */
var shubh = 50;     
console.log(typeof shubh);

let marks = 1800.23;    //float value
console.log(typeof marks);

/* string data type */
let name = "Adarsh";
let surname = 'tripathi';
console.log(typeof name);
console.log(typeof surname);

/* character data type */
/* character yaha pe nhi hota hai sab kuch treat hoga as a
a string jaise, village, name, address, paragraph voo sab string me aa jata hai   */
let ch = 'B-139 pandav nagar';
console.log(typeof ch);

/* boolean data type */
/* true/ false*/
let adarshBank = false;
console.log(typeof adarshBank); 

/* undefined data type */
var delhi;
console.log(typeof delhi);

/* null data type */
/* null data type aik tarah ka special case hai, jo ki object hi print karega.
null aik tarah ka object special type hota hai
but voo aik alag se data type hai.
null ke case me object aata hai
*/
let sleep = null;
console.log(typeof sleep);    /* object print hoga  */


/* ############### 2. Reference data type ################ */

console.log("Hey, Understanding Reference Data Types in Practical Way!");

/* array reference data type  */
let childrenName = ["First", "Second", "Third"];
console.log(typeof childrenName);    //object


/* Example: Difference Between Array Reference type(Heap) and Primitive type (Stack) */
/* 1. primitive type */
   let x = 56;
   let y  = 56;
   console.log(x  == y);
   /* but in stack data type x = 56, y = 56, and then check the variables value equal or not so, and
   56==56, (equal) so return true */

/* array reference type*/
let xarr = [56]; 
let yarr =  [56];
console.log(xarr == yarr);
/* array assign memory address into the variables "xarr"
Example: xarr = 1024656 , yarr = 1045645 and then check the value of both variables are equal or not so,
1024656  == 1045645 (not equal) so return false.
Reference type saare heap me jayege.
*/

/* object reference type*/

let studentOne = {
    //object type
    name: "Adarsh",
    address: "B-139, Delhi",
    phone: "1213133",
};

console.log(studentOne);
console.log(typeof studentOne);


/* date reference type*/
let newDate = new Date;
console.log(newDate);
console.log(typeof newDate);

/* function reference type*/
/* Example 1 */
function jupiterBike(theObject) {
    theObject.brand = "Tvs";
}

var myBike = {
    brand: "Tvs",
    model: "Zx",
    year: "2021",
}
console.log(myBike); 

jupiterBike(myBike);

console.log(myBike.brand);      /* print object brand Tvs , which you decaled in function */





