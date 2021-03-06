
/* This is  Internal javascript */
/* javascript code goes here */
console.log("Hey this is lecture 6 of this tutorial");

/* javascript standard message boxes */

/* ############## 1. window: alert; ############## */

/* it only show on browsers because browsers ke paas hi window hai */
let message = "Hey this is standard message box example!";
 window.alert(message);     /* First way to show alert on browsers  */
 alert(message);               /* second way to show alert on browsers */

/* ################ 2. prompt: alert; ############# */

/* ye acutally text lene ke liye hai, it show the input box on alert box */
 prompt("Enter your name");
/* yaha variable name value ko return karege alert box me jo hum input field me daalege prompt ke */
let name = prompt("Enter your name");
alert(name);
/* concanetate method */
alert("Hello! " + name);
/* prompt basically user se input lene ke liye use hota hai and ye browsers ke saath execute hoga*/

/* ################ 3. confirm; based on yes or no ############# */

 let choice = confirm("Are you sure want to do this?");
 alert(choice);     

 let choice = confirm("Are you sure, want to go on Google");
/* we add if else condition here */
/* if user click on yes, so our condition
 is true, so the url are open on browsers */
if(choice==true) {
  /* add a link of google site here */
  location.href = "https://www.google.com";
}
/* if condition is false, means user click on cancel button, so this else condition are running  */
else {
alert("Better luck next time!");
}

 /* ################ 4. console; object ############# */
/* console object ke paas bhut saare function hai like function
1. log     //mostly used
2. warn    //mostly used
3. table   //mostly used
4. time 
5. clear    //mostly used
6. count
7. debug
8. exception
9. group function
10. group collapse function
11. group and function
12. info function   //mostly used
13. profile function 
14. trace function
15. error function
*/
/* 1. first object function "console"  (mostly used for debugging) */
console.log("Hey this is console object function!");
/* 2. second object function "warn"   */
console.warn("Hey this is warn object function!");
/* 3. third object function "error"   */
console.error("Hey this is error object function!");
/* 4. fourth object function "info"   */
console.info("Hey this is info object function!");
/* 5. fifth object function "clear"   */
console.clear();
/* Example 1:  agar hum 4 second ke liye object function print karwana chaha rhe hai uske baad clear ho jaaye too hum
aisee karege:
*/
setTimeout(function(){
 /* log object function for showing text  */
 console.log("clearing.....");
 /* clear object function call */
 console.clear();
},3000);

/* 6. sixth object function "table"   */
let student = {
 //object here
 name: "Adarsh",
 address: "B-139, pandav nagar",
 phone: "112331313",
}
console.log(student);
console.log(student.name);      /* you show the value of each object also in console  */
console.log(student.phone);
/* print the object result in a tabular form, table form in console, by using object function  */
console.table(student);
