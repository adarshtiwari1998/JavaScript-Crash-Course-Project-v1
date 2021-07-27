//string important function

let adarsh = "I love javascript";
console.log(adarsh);

/* Example 1: Length: Number of characters */
let name = "I love javascript language";
let len = name.length;       /*yaha pe length aik property hai, koi function nhi hai
kyu ki function me hamasa aik, parentheses lagega (), like lenght(); ye aik function hai,
yaha pe length aik property hai koi function nhi hai.
length ki help se hum string me number of characters ko find kar sakte hai.
*/
console.log("length", len);

// <!--2. JAVASCRIPT CODE SNIPPET-->
/* Topic 1: concatenate function , concat() */

let name1 = "I love node.js";
let name2 = "I love python";
//concatenation method 
console.log(name1+ " " + name2);
/* concatenation ka matlab hai aik ke aage cheeze add kar dena , combine kar dena
, ab hum isko concat() function se karte hai
*/
//concat() function example
/* Def:  concat function combine one or more string are goings into one existing string,
current string me jitne element dege usko combine kar dega.
*/

let combine = name1.concat(" ",name2);    //yaha " " space ka work kar rha hai
console.log(combine);

/* Topic 2: charAt(index) function*/

/* Def: the function is basically  return the character at exposition with in the string*/
/* charAt() function basically character nikale ga humko bas index paas karna hai, uss index ke character ko nikal dega */
/* index position, exposition position hai*/
// <!-- 3. JAVASCRIPT CODE SNIPPET-->
let charName = "I love java";
let findChar = charName.charAt(7);      /* indexing 0 se start hoti hai 0,1,2,3 and so on and agar hum aisii koi index 
number dal dia jo ki hai hi nhi too voo blank de dega, jaise iss string me hum 130 index dal dia too voo blank de dega.
*/
console.log(findChar);

/* Topic 3: indexOf() function*/

/* ye function charAt() function ka opposite hai, charAt() function ko hum index de rhe the, too voo character de rha tha,
indexOf() function me hum character dege too voo index dega.
*/
// <!-- 4. JAVASCRIPT CODE SNIPPET-->
let indexName = "I love React";
let findIndex = indexName.indexOf("c");            /* output 10,  yaha pe sab kuch substring hai, character hai hi nhi  */
console.log(findIndex);


/* Topic 4: LastIndexOf() function*/

/* ye bhi humko index dega but voo last se check karega. */
// <!-- 5. JAVASCRIPT CODE SNIPPET-->
let lastName = "I love Angular";
let lastIndex = lastName.lastIndexOf("l");   //output 11
console.log(lastIndex);

/* Topic 5: toUpperCase() function*/

/* agar humko capital letter ki string chahiye saari too hum iss function ka use karege */
// <!-- 6. JAVASCRIPT CODE SNIPPET-->
let capitalName = "I love my India and my hindus";
let capitalIndex = capitalName.toUpperCase();
console.log(capitalIndex);

/* Topic 6: toLowerCase() function*/

/* agar humko lower letter ki string chahiye saari too hum iss function ka use karege */
// <!-- 7. JAVASCRIPT CODE SNIPPET-->
let lowerName = "I love my India and my hindus";
let lowerIndex = lowerName.toLowerCase();
console.log(lowerIndex);


/* Topic 7: substring(start, end) function*/

/* kisi bhi string se agar humko choota sa parts nikalna hai too hum iss function ka use karte hai,
yaha pe start index inclued hai but end index excluded hai, voo isko check nhi karega end wale ko, example below:
start is included, but end is not included it is excluded. And agar hum end lagana bhul gye too voo sab start se end 
tak print kar dega.
*/
// <!-- 8. JAVASCRIPT CODE SNIPPET-->
let substringName = "I love doing programming";
let subStringIndex = substringName.substring(1,7);
console.log(subStringIndex);

/* Topic 8: startsWith() function*/

/*  mera pass koi string hai and usko muzea check karna hai kya voo string iss () letter se start ho rhi hai,
too hum iss startsWith() ka use kar sakte hai. */
// <!-- 9. JAVASCRIPT CODE SNIPPET-->
let startWithName = "I love doing debugging";
let startWithIndex = startWithName.startsWith("I");     /* agar string I se start ho rhi hai too true dega and agar 
nhi ho rhi hai too false dega, aur ye case sensitive bhi hai aap agar capital paas kardege check karne ke lia too voo
false return kardega.  
kya hamari current string given string se start ho rhi hai yaa nhi, ye check karta hai.
*/
console.log(startWithIndex);

/* Topic 9: endsWith() function*/

/* ye check karta hai ki koi string iss name se end ho rhi hai agar ho rhi hogi too return kardega true and agar uss
word se nhi ho rhi hogi too return kardega false
kya hamari current string given string se end ho rhi hai yaa nhi, ye check karta hai.
*/
// <!-- 10. JAVASCRIPT CODE SNIPPET-->
let endWithName = "I love doing logic building";
let endWithIndex = endWithName.endsWith("love");
console.log(endWithIndex);

/* Topic 10: split() function*/

/* agar humko koi cheez split karni hai (thodna hai), too hum split function use kar sakte hai */
/* agar humko given string me space ko hatana hai, todhna hai too hum iss function ka use kar sakte hai */

// <!-- 11. JAVASCRIPT CODE SNIPPET-->
let splitName = "I will love doing problem solving";
let splitIndex = splitName.split(" ");   /* yaha se spliting hui hai voo aik object hai, and basically object aik 
array hai, maine jo split() function call kiya, too isne iss string ko, jaha jaha space " " mila waha waha se isne
break kar diya, and break karke isne array[] me rakh dia.
*/
console.log(typeof splitIndex);
console.log(splitIndex);

/* agar humko string I nikalna hai too hum index of array ka use kar sakte hai like below */
console.log(splitIndex[1]);
console.log(splitIndex[4]);
console.log(splitIndex[5]);
/* split basically kya karega jo hum expression paas karege regex, usko waha se lekar mere string ko break kar dega */


/* BonusTopic 11: trim() function*/
/* ye basically start and end ke whitespaces ko remove karta hai */
// <!-- 12. JAVASCRIPT CODE SNIPPET-->
let trimName = "                I am excited to learn any programming language";
let trimIndex = trimName.trim();
console.log(trimIndex);         //spaces removed by using trim function
console.log(trimName);          //spaces not removed because trim function not call here
console.log(typeof trimIndex);