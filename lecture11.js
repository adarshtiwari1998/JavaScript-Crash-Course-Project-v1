//################### QUESTION 1: CHECK EQUALITY OF TWO STRING #####################
/* equality ko check karne ke liye hum use karte hai relational operator, (comparison operator), like k
"==", "==="
*/
/* equality "==" operator(comparison operator),case sensitive manner me work karta hai
like j, J are different, cases ko bhi check karta hai, capital and small letters ko bhi */

// METHOD 1. LITERAL 
/* creating string using literal(literal is primitive data type) */ 
/* is wale string me "==" operator content ko check karega,  */
// <!--1.CODE SNIPPET HERE -->
let str1 = "I love javascript";
let str2 = "I love javascript";
console.log(str1);
console.log(str2);
console.log(str1==str2);
if (str1==str2) {
    console.log("Yes, Both string are equal");
    /* use to show output in html page */
    // document.write("<h1>Yes, Both string are equal</h1>");
}else {
    console.log("No, Both string are not equal");
    // document.write("<h1>No, Both string are not equal</h1>");
}

// METHOD 2. OBJECT(it is reference datatype)
/* creating string using Object */
/* is wale string me "==" operator reference ko check karega (address ko check karega),
 content ko check nhi karega */

let str3 = new String("I love programming");
let str4 = new String("I love programming");
console.log(str3);
console.log(str4);
console.log(str3==str4);


/* Pehla method recommended hai literal wala */


//################### QUESTION 2: COMPARING TWO STRING #####################

/* suppose muzea pata nhi hai x1 ke andar kya hai, and x2 ke andar kya hai, but humko dekhna hai,
kaun sii string pehle aayegi and kaun sii string baad me aayegi.
Agar humko string compare karna hai too humko aik function mil jayega 
LocaleCompare() function
*/
// <!--2.CODE SNIPPET HERE -->
let x1 = "adarsh";
let x2 = "mohit";
// .LocaleCompare()
let result = x1.localeCompare(x2);   /* yaha x1 jo hai current string hai, and x2 parameterized string
hai, suppose in dono string ki exact matching ho gyi too ye humko output dega "0",
Agar pehli wali string x1 chooto hogi dusari wali string se x2 se 
CASE 1: exact matching: 0;
CASE 2: x1<x2: -1;
CASE 3: x1>x2: +1;

ASCII CODE: A-65, Z-90
            a-98, z-122
            0-48
            and so on
*/
console.log(result);
//to check ascii value of characters of x1
console.log(x1.charCodeAt(0));
console.log(x1.charCodeAt(1));
console.log(x1.charCodeAt(2));
console.log(x1.charCodeAt(3));
console.log(x1.charCodeAt(4));
console.log(x1.charCodeAt(5));
console.log(x1.charCodeAt(6));

//to check ascii value of characters of x2
console.log(x2.charCodeAt(0));
console.log(x2.charCodeAt(1));
console.log(x2.charCodeAt(2));
console.log(x2.charCodeAt(3));
console.log(x2.charCodeAt(4));
console.log(x2.charCodeAt(5));



//################### QUESTION 3: REPLACE CERTAIN WORDS WITH ANOTHER STRINGS #####################

/* matlab ki pure string me se kisi word ko aapko replace karna hai kisi dusre word se uske liye hum
use karte hai replace() function
*/

/* Iss question me humko "I Notlove Programming" string ko "I Love Programming" karna hai */
// <!--3.CODE SNIPPET HERE -->
let oldString = "I NotLove Programming";
let newString = oldString.replace("NotLove", "Love" );
console.log(newString);
console.log(oldString);
/* #ye replace() function string ko ussi mei change nhi karta hai, ye kya karega new string baneye ga aur
voo humko dedega.
#And agar same word baar baar aa rha hai, too replace() function automatically first occurenece 
ko hi replace karega.
#case sensitive hota hai replace() function
# insensitive me work karne ke lia humko "regular expression" use karna hoga.
*/

/*  replace() function bhut important hai*/

//################### QUESTION 4: ACCESSING CHARACTERS -STRINGS[0] #####################

//FIRST METHOD

/* charAt(index) */
/* charAt() function ko agar character nhi milega too voo "blank space "return karega  */
// <!--4.CODE SNIPPET HERE -->
let name = "sumit";
console.log(name.charAt(0));

//SECOND METHOD
/* ye array ke tarah behave karega but it is not an array */
/* ye string array nhi ban jaata hai, but directly hum iss object pe iss cheez ko use kar sakte hai */
/* string ko hum array operator ke saath use kar sakte hai. */
/* *******************this method is very important */
/* aur isko agar character nhi milega to ye "undefined" return karega  */
/* aur ye string hai array nhi hai, and ye old version pe support nhi karega */
/* Mostly FIRST METHOD jyada use karna chahiye isko, SECOND METHOD KO avoid karna chahiye */
console.log(name[1]);  




//################### QUESTION 5: CONVERTING STRING TO ARRAY BY USING SPLIT FUNCTION #####################
// <!--5.CODE SNIPPET HERE -->
let place = "I hate procastinations";
/* agar humko kahi specific position break karna hai too hum pass karte hai " " space pass karte hai */
let arrayString = place.split(" ");
/*  hum yaha pe space " " pass kiye hai too output me split() function string ko 3 parts me divide kar dega, agar
hum pass kare " " ki jagah letter string me se ho koi letter jaise { 0} too split() function jaha o payega usko fhir
split kardega matlab o ko thode dega.
Agar hum koi aur characters paas kar diye too uss characters se usko break karke array bana dega. 
*/
console.log(arrayString);

/* agar humko saare characters alag alag karna hai string ka too hum "" pass karte hai */
let charArray = place.split("");
console.log(charArray);