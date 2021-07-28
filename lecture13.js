/* ##############  METHOD 1 ##################  */

//how to create array 
let arrOne = [12, 23, 43, 42, 34];
console.log(arrOne);
console.log(typeof arrOne);

//how to access array elements
console.log(arrOne[4]);   /* output 34 and , agar koi aisaa position pass kar diye too undefined
 aa jayega  */

 /* ##############  METHOD 2 ##################  */
 //array constructor

 let arrTwo = new Array("Adarsh", "Tripath", "Sumit", "Alok", "Akash");
 console.log(arrTwo);    //output: all names are print in array 
 console.log(arrTwo[3]);  /* output: Alok, it helps For printing individual elements by passing index number */

//size of array not fixed
arrTwo.push("Simran");
console.log(arrTwo);    //output: simran name added in last element and position


//how to find size of array
/* you find size of array by using length() function */

console.log("Size of Array Two is", arrTwo.length);


//type of array is also not fixed 
/* Example 1 */
let arrDetails = ["Adarsh", 31331313, 73.55, "New Delhi"];
console.log(arrDetails);    //output: 4 elements are print in object
console.log(typeof arrDetails);

/* Example 2: hum array ke andar bhi array bana sakte hai aur usme apna kuch choice rakh sakte hai */
let multiarrDetails = ["Adarsh", 31331313, 73.55, "New Delhi", ["Mango", "Banana"]];
console.log(multiarrDetails);    //output: 5 elements are print in object
console.log(typeof multiarrDetails);

console.log(multiarrDetails[4][1])     //output: banana will pe print
/* isme first array [4] big wala hai and second array [1] small wala hai */