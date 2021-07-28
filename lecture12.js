//type conversion example
/* String conversion ( x->s) */
let name = "I love javascript";
console.log(name);


let variableName = 12;      //int data type 
console.log(typeof variableName);

/* ###################################### 1. String conversion  ##################################  */

// <!-- 1.JAVASCRIPT CODE SNIPPET HERE--> 

//################# METHOD 1: STRING() FUNCTION ######################

//string conversion happens when we need string form of value;
/* String() function ke help se hum num data type ko string data type me convert kar sakte hai */
let stringCon = String(variableName);           //string data type
console.log(stringCon);
console.log(typeof stringCon);

console.log(variableName.length);
/* variableName variable ke paas number hai aur number ke paas length nikalne ki property nhi hai */
console.log(stringCon.length); 
/* stringCon variable ye aik string hai, aur uske paas length naam ki property hai */


//################# METHOD 2: toSTRING() FUNCTION Method ######################
console.log(variableName.toString());                 //print 12 number in string
console.log(typeof variableName.toString());        //print data type string

//################# METHOD 3: false conversion into string ######################

/* string conversion are most obvious, a false became false, and null became nulls*/
/*Baically agar koi value mere paas false hai too "" uspe lag ke aayega */
/* agar false ko string me convert karna hai too aisee karege */

let falseValue = false;
console.log(String(false));         //false string me convert ho gya 


/*##################################### 2. Numeric conversion / Number conversion ##############################  */

/* ye bhut jyada use hot hai */
/* mathematical function ko jab hum use karte hai too hamare paas bhut saari strings values hoti hai, aur uss
strings value ko humko number me convert karna ki jarurat hoti hai 
*/
/*Number() function */

// <!-- 2.JAVASCRIPT CODE SNIPPET HERE--> 

//Example 1
let numberConversion = "1212";
console.log(numberConversion + 5);     /* output aayega 12125, kyu ki 5 concatenate ho gya hai kyu ki maine variable ki 
values string me dia hai.
*/
/* agar humko agar mathematical operation perform karna hai too humko iss number ko integer me convert karna hoga, then
hum mathematical operation perform kar payege.
*/
/* humko iss string ko number me change karna hoga*/
let value1 = Number(numberConversion);
/* iss function ke help se hum apne string values ko number me convert kar dia  */
console.log(value1 + 1000);     //output aayega 2212, 1212+1000=2212,  correct


//Example 2

let floatValue = "12131.3313";
let convertFloat = Number(floatValue);
console.log(convertFloat + 10)    // output will be 12141.3313, 12131.3313 + 10 = 12141.3313
console.log(typeof convertFloat);    //datatype will be number
console.log(typeof floatValue);      //datatype will be string


//Different Method to convert string into number are;
/* 1. parseInt
   2. parseFloat
*/

//parseInt() function
let pI = parseInt(floatValue);              //covert decimal value into numbers
console.log(pI);
console.log(typeof pI);

//parseFloat() function
let pF = parseFloat(floatValue);          //convert string into float values
console.log(pF);
console.log(typeof pF);     


//Important Points
/* 
undefined ko convert kiya too it becames => NaN(not a number)
null = 0
true = 1
false = 0
*/

console.log(Number(false));    //output 0
console.log(Number(undefined));   //NaN
console.log(Number(null));     // 0;
console.log(Number(true));  // 1


/* ############################ 3. Boolean conversion ##################################  */

// <!-- 3.JAVASCRIPT CODE SNIPPET HERE--> 

let boolConv = -30;   //abhi ye behave kar rha hai string
console.log(typeof boolConv);
/* humko boolConv variable ke andar jo value hai usko boolean me convert karna hai */
/*Boolean() function */
let boolResult = Boolean(boolConv);
console.log(boolResult);
console.log(typeof boolResult);
/* string agar more than 1 character "xyz" ki ye too output hamesa true dega
and agar 0 character "" hai too output hamesa false dega
*/
/* and agar isme number hota =1; too ye true deta and agar = 0; hota too false deta */
/* and agar isme negative value hota =-30; too ye true deta and agar = +30 ; hota too bhi true return karega */