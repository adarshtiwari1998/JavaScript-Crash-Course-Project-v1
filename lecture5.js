/* Variables:  let, const, var */

/* ############################### 1. let variable example #################################  */
/* CODE PRACTICE 1 */

/*  here let is keyword and message is messages */
/* means let ki help se message banaya gya hai, 👉 Example: yaha message aik container hai, ye aik bottle hai jisme 
hum water ko store kar sakte hai
*/
/* variable declare kar dia gya hai but abhi value nhi di gyi hai */
/* let message; declaration
   message  = "Hey! How are you...";  //assignment
*/
 let message;
/* value de rhe hai ab string me 👉 By Example: message hamara, bottle hai, and hey! how are you hamara, water hai" */
 message = "Hey! How are you...";
/* print karne ke lia use karege */
console.log(message);
/* browsers me print karane ke lia hum use karege */
 document.write("<h1>" + message + "</h1>");

/* CODE PRACTICE 2  */

/* Yaha pe maine variable declare and assign aik hi line me kar sakte hai */
/* declaration+assignment */

 let message = "What are you doing";
 console.log(message);

/* CODE PRACTICE 3  */

 let a= 12, b= 22, c= 13
 console.log(a);
 console.log(b);
 console.log(c);
 document.write("" +a, " " + b, " " + c);

/* ##########  main property of variable######  */

/* variable value can be change, it can be vary */
 message = "Hey, where are you from?";
 console.log(message);
 document.write("" + message );


/* ############################### 2. const variable example #################################  */
 /* creating const in javascript  */ 

 const user = "CodeWithAdarsh";         /* memory are locked by using const variable */
 console.log(user);                      /* output will be CodeWithAdarsh  */
  
/* But if you want to change the value of user in future  */
 user = "LearnWithAdarsh";        /* error come assignment to constant value, means aapne const variable me new value assign kiya hai */


/* ############################### 1.1. let variable example 2 #################################  */
/* let ka scope limited hai example agar hum let ko if condition ke andar use kare too humko error nhi aayega, agar hum console.log print kareye
 but agar hum console.log if ke bahar print kareye too error aayega, kyu ki hum address variable
if ke andar banaye hai, but agar hum usko if condition ke bahar use kare too error aayega.

*/
if(5>2) {
console.log("Yes");
let address = "Delhi";
console.log(address);              /* print address in  console, no error  */
 };

// console.log(address);                  /* error come because you are using address variable out of the block, uska scope khatm ho gya */
 /* let variable kaafi scoped hai  */


 /* ############################### 3. var variable example #################################  */

 /* var variable is too old but the disadvantage is scoped */
 /* var: global scope hoga yaa fhir function scope  hoga, var has no block scope example*/
   if (6>2) {
    var city ="Delhi";
     console.log(city);                   /* no error and print on variable values print on console  */
  }
 /* var has no block scope */
 console.log(city);                    /* no error and print on variable values print on console  */


/* ############################### 3. var variable example 2 #################################  */
 /* "var" variable are redeclare,  declare multiple times */
 /* but in "let" variable case, error are coming  */
 /* "var* tolerates redeclarations */
 var x = 45;
 var x = 56;
 console.log(x);
 console.log(x);

/* "var" variables can be decalared below their use, example 1 */
 
 y = 42;                                  /* you assign variable value first */
 console.log("Value of y is", y);        /* use and print on console */
 var y;                                  /* then declare variable here */


/* ############################### 4. variable naming rule #################################  */
/*  
RULE 1. aplhabet, but it can not start with the digit, example
*/
/* Accepted Naming Rule */
/* 1 Naming Rule    */
 var ABC = 123;
 console.log(ABC);

/* 2 Naming Rule */
let aBC = 123;
console.log(aBC);

/* Not Accepted Naming Rule */

/* 1 Naming Rule */
// let 221a = 123;
//  console.log(221a);             /* showing error*/

/*  
RULE 2. name must contain only letters, digits, or symbol $ and _  , example below
*/

/* Accepted Naming Rule */
 let my_name$is = "Adarsh";
 console.log(my_name$is);

/* Not Accepted Naming Rule */
//  let my_@name$is = "Adarsh";
// console.log(my_name$is);           /* showing error */


/*  
RULE 3. Keywords cannot be used as variable name  , example below:
keywords are: const, let, var, if , while, and many more
*/

/* Not Accepted Naming Rule */
//  let const = "Adarsh";
//  console.log(const);           /* showing error you not use predefined keywords as variable name */


/*  
RULE 4. javascript variables are case sensitive, example below:
*/

/* Accepted Naming Rule */

 let Const = "Hey this naming rule are accepted";
 console.log(Const);

let Let = "Hey this is also accepted";
console.log(Let);