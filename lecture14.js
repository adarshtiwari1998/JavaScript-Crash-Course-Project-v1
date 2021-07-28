//array operations
//.create

//#################### Operations: 1 #############################
let arrNames = ["jolly", "pintu", "salim"];
console.log(arrNames);
console.log(typeof arrNames);   //to find data type
console.log(arrNames.length);   // to find array size by using lenght property

//Array element access using indexing
console.log(arrNames[2]);  //output: salim  , 2 is position of elements


/* agar humko saare elements nikalne hai array ke, and elements bhut jyada hai 1000 me hai too hum
kaise karege, too humko baar baar console.log([index]) ko type karne ji jarurat nhi humko simple,
Loop over an array
*/

//loop over an array by using  forEach() function to fetch each elements of an array 
//###################  operations: 2 ######################
arrNames.forEach(function(item, index){
 //this is function body
 /* ye function anonymouse function hai kyu ki ye maine forEach() function
  ke andar paas kar dia hai */
 /* ye function jo maine forEach() function ke andar banaye hai voo teeno array elements ke liye
 baari baari call hoga, ye elements ke upar hai array mai kitna element hai.
 */
console.log(index, " => ", item )
});


//example 2

let simpleSum = [22,42,44,31];
let result = 0;

simpleSum.forEach(function(item, index){
       result = result + item;
});
console.log(result);     //output 139


//################################ Operations 3: ########################
//adding element at last position

let addlastArr = ["shubh", "raju", "shyam"];
console.log(addlastArr);

//adding element at last position in array
//push() function
addlastArr.push("Nandini");    //add the new elements in last position of an array
console.log(addlastArr);

addlastArr.push("saurabh");    //add the new elements in last position of an array
console.log(addlastArr);


//delete/remove element from the last of an array using
//pop() function
let deleteArr = addlastArr.pop()    //delete array elements from the last
console.log(deleteArr);     //saurabh element are deleted in array 
console.log(addlastArr);

//delete/remove element from the beginning/front of an array using
//shift() function

let deleteArrFnt = addlastArr.shift();
console.log(deleteArrFnt);     //output: shubh removed from beginning
console.log(addlastArr);


//add element from the beginning/frontend of an array using
//unshift()

let addFront = addlastArr.unshift("Delhi");
console.log(addFront); //output: delhi will be added from front of an array
console.log(addlastArr);

/* shift() function me voo elements return hota hai output me jo starting se remove ho rha ho*/
/* unshift() function me element ki new wali size return hoti hai jo stating se add ho rhi hai. */

//find any elements/item from index, humko item pata hai but uska index position janana hai too hum, string indexOf() ka use karege
//indexOf() function 

let indexFind = addlastArr.indexOf("shyam");
console.log(indexFind);   //output: 2 position


//remove/delete array elements from any position using splice
//splice() function me 2 value deni hoti hai
/*First:  kis position se value ko remove karna chahte hai jaise index 0, index 1 and so on  */
/*Second: isme hum n pass karte hai iska matlab kitne elements humko remove karna hai like: 2, 3, 4 and so on */
/* suppose koi elements remove karna hai */

//direct check from console without creating new variables
console.log(addlastArr.splice(1,2));
console.log(addlastArr);

//check by creating new variables
let remAnyPos = addlastArr.splice(1,2);
console.log(remAnyPos);                       
//output: raju , shyam elements removed
console.log(addlastArr);


//copy an array by using slice() function
//slice() function

let copyArr = addlastArr.slice();
/* ye jo copy hoga voo shallow copy */
/* agar hum array ke andar reference use kiye hogye too reference as it is copy kar diye hogye, uska 
duplicate nhi banaye gya hoga */
/* jo duplicate banate hai usko kehte hai deep copy, but agar refernces ke andar hai too usko direct rakh diya hoga new copy me. */
console.log(copyArr);    //new array (delhi copy)
console.log(addlastArr);  //original array (delhi copy)


//******************* Tips 1:   dont do this in programming  ********************************

//let arr.lenght() 
/* array ka length nikalne ke liye .length ka use too hota hai but parenthesis() ka use nhi karte hai,
kyu ki tab .lenght() aik method/function ban jaata hai
*/
/* Difference between lenght and length() parentheses */
//  .length  -> ye property/variable hai, array yaa string property, and  variable ke aage kabhi bhi parenthesis() nhi lagta hai
//   .length() -> function/method hai 

//example
//add an array element from the beginning of an array
console.log(addlastArr.unshift("shimla")); //output: shimla will be added from front of an array
console.log(addlastArr);
//without parenthesis
console.log(addlastArr.length);     //output length 2
//with parenthesis
// console.log(addlastArr.length());  /*error: length is not a function  */

//string example
//without parentheses
let newString = "Uttarakhand";
console.log(newString.length);   //output 11 characters

//with parenthesis
// console.log(newString.length());     /*error: length is not a function  */

/* java me string ki length nikalne ke liye humko parentheses use karna hota hai  */
/* javascript me array and string ke saath .length property me parentheses nhi use  karte hai kabhi bhi */



//******************* Tips 2:   dont do this in programming  ********************************

/* agar humko array element ka 0 position dekhna hai too hum aisee dekhge */


// addlastArr[0]
//method 1 correct

console.log(addlastArr[0]);     /* isko use karne ke liye [] square brackets ka use karege isko hum off bolte hai  */

//method 2 incorrect

// console.log(addlastArr.0);  
/* error:  Uncaught SyntaxError: missing ) after argument list, position find karne ke liye hum reference operator ka
use nhi kar sakte error aayega.

*/