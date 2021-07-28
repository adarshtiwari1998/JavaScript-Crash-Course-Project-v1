
/*   ################ EXAMPLE 1. SIMPLE FUNCTION  ############### */
//how to create a  function 
function firstFunction()     //abhi argument zero hai  
{//function body open

    //here we  write a task
    console.log("Hello , ");
    console.log("How are you?");
    console.log("What are you doing");

}//function body close


/*   ################ EXMAPLE 2. FUNCTION WITH ARGUMENT/PARAMETER WITH RETURN TYPE  ############### */

//create a function for sum of two number
function calculateSum(a,b)     //here are two argument/parameters given to calculateSum function
{
    //sum of two numbers
    /* lekin sum karne ke  kiye humko 2 no dene hoge jo ki hum waha dege */
    let sum = a + b;
    return sum;   //return function value ko return kar deta hai jo usko call karega
}

console.log("Hello");
console.log("Javascript")
//call/invoke a function
firstFunction();

console.log("Hello world !");
//call/invoke a function here of EXAMPLE 1
firstFunction();
//call/invoke a function here of EXAMPLE 2
let result = calculateSum(12, 22);
console.log("Sum is", result);

/* jis code ko hame baar baar jarurat padhti hai, uss code ka hum function me bana sakte hai*/

/* jo function ko create karte time jo parameters/argumennts hum banate hai usko hum,
*formal parameters kehte hai
*/
/* aur jo call/invoke karte time hum jo value paas karte hai parameters me usko hum
*actual parameters kehte hai
*/

/* jab bhi hum function ko call kare, too jo formal paramters and actual parameters hai, in dono ki
matching honi chahiye.
Matching ka matlab agar maine two elements liye hai formal parameters mai , too agar maine 2 value pass kar dia hai
actual parameters mai tab hi ye call ho payega.
*/
/* Suppose maine 2 elements liye hai formal parameters mai and  maine 1 value pass ki hai actual parameters me too 
output aayega NaN(not a number)
*/


/* function ko call karte time humko parenthesis() use karna hota hai, agar hum parenthesis use nhi karte hai too voo
function ka defination return ho ke aajega.
*/


/*hum function ko kab kab call kar sakte hai 
1. self call
2. event call(clickonButton function call)
3. callback function (automatically  call)
*/


//why you use function 
/*  1. code  reusability 
    */


/*   ################ EXMAPLE 3. ARROW FUNCTION  ############### */
//style of creating function is change
//examples of arrow function
const convtoCelsius = (fahrenheit) => {  //fahrenheit aik variable hai, argument/parameter mai
     //ye basically arrow function hai aur isko maine contoCelsius variable me assign kar dia hai
     //arrow ki help se  function create  ho rha hai isliye hum arrow funciton bolege
     let result = (5/9)*(fahrenheit-32);
     return result;
}; 

//call/ invoke function
let calculatefahrn  = convtoCelsius(102);
console.log(calculatefahrn);   //output: 38.88888888888889



/*  koi function agar aisee ban rha hai jiska name nhi de rha hai example */

//function() {
    //anonymouse function kehte hai isko
    /* jab humko function kahi pass karna hota hai tab hum anonymouse function banate hai, suppose mai aik function
    bana rha hu aur usme dusara function pass kar rha hu tab hum anonymouse function banake wahi pe pass kar sakte hai.
    */
//}


/*  aur arrow function ka bhi anonymouse function hota hau example */

() => {
//isko mai kisi bhi variable me assign kar sakte hai.
//anonymouse arrow function
}