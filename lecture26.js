//add new node dynamically, adding node function
const addNode = () => {
// console.log("adding node here");
let addDynamicNode = document.createElement("div"); /* jo bhi tag hum dege function ke 
andar, like maine "div" de dia, too iss div ka object bana jayega addDynamicNode variable me */
//  console.log(addDynamicNode); output: <div></div>
/* hum humko div ke andar text dikhana hai, too ab hum text add karte hai with help of, */
//creating a text node
let addTextNodeEle =  document.createTextNode("This is dynamic div text node!!"); /*createTextNode karne se ai naya onject ban gya jo ki
addTextNodeEle me store hai
*/
let addTextNodeEle1 =  document.createTextNode("This is amazing!!!");
// console.log(addTextNodeEle);
/* now we are going to add this div node element text to my div */
//Adding text node to div element
addDynamicNode.appendChild(addTextNodeEle);
addDynamicNode.appendChild(addTextNodeEle1);
console.log(addDynamicNode);
//print this div text to the html page
let printOnPage = document.getElementById("main");
printOnPage.appendChild(addDynamicNode); //output: div element dynamically print as a last child of main div element
/* add the div text befote the h1 as a first child by using insertBefore() function and pass two parameter kisme and kiske pehle add karna hai  */
let insertBeforeTitle = document.getElementById("heading");
printOnPage.insertBefore(addDynamicNode, insertBeforeTitle);

//change the text value by using the innerhtml property
insertBeforeTitle.innerHTML = ("Hey There JavaScript DOM Manipulation Lecture 26 is Going to Finished!!!");//output: new title print after clicking on button

//remove the title element from the main container by using the function removeChild() function
printOnPage.removeChild(insertBeforeTitle); //output: title was removed after clicking on button

//replace child node 
let childNodeObj = document.getElementById("myListItem").childNodes[0];
let replaceNodeObj = document.createTextNode("This Javascript Tutorial is Amazing!!!");
childNodeObj.replaceChild(replaceNodeObj, childNodeObj.childNodes[0]);
}




  
