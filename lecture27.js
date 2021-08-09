//dom navigating parent to child and other node

let headingObj = document.getElementById("heading");
console.log(headingObj);
//agar humko child nikalna hai lekin humko id ka name nhi pata hai too hum aise nikalege

const firstChildObj = headingObj.firstChild.nodeName;  /*basically headingObj variable first child nikalega and child ka name print kardega */
console.log(firstChildObj);   /* output: #text, yaha pe #text isliye aaya hai kyu ki #heading se line change ho rhi hai
first child ke liye too waha pe space aa rha hai too voo usko #text consider kiya, agar hum </br> , line break, space bar, 
tab change kar dia too voo usko #text consider karega.
*/
/* element or tag nikalne ke liye hum ye use karege */
const firstChildEleObj = headingObj.firstElementChild.nodeName;
console.log(firstChildEleObj);    //Output:  H1, ye lagane se humko tag return karega, ye space, br ko ignore kar dega.
//print the first child text with element
let firstChildEleObj1 = headingObj.firstElementChild;
console.log(firstChildEleObj1);  //output: <h1 id="title">We are learning JavaScript</h1>

//change the text of first child
console.log(firstChildEleObj1.innerHTML= "JavaScript Are Flexible Language!");   //output: JavaScript Are Flexible Language!

//find the last child of parent node
const lastChildObj = headingObj.lastElementChild;
console.log(lastChildObj);  //output: <p>Lorem12</p>
//change the backgroundcolor style of last child
console.log(lastChildObj.style.backgroundColor="blue"); //output:  blue backgroundColor

//change the color style of last child
console.log(lastChildObj.style.color="white"); //output: color: white

//change the font size og last child after click on button

function lastChildBtn ()  {
console.log(lastChildObj.style.fontSize="45px")
}

//too see all the child node by using childNode property
let allNodeObj = headingObj.childNodes;
console.log(allNodeObj); //Output: return all children in array
//array ko traverse karne liye hum for loop ka use karege
for(let traverseN of allNodeObj) {
console.log(traverseN.nodeName); /*  Output 
                                         #text
                                          H1
                                         #text   //it means space, br, tab etc
                                          P
                                          #text
                                           P
                                         #text
*/

}

//too see all the child element by using children property

let allNodeEleObj = headingObj.children;
// console.log(allNodeEleObj); //Output: return all children in array
//array ko traverse karne liye hum for loop ka use karege
for(let allNodeEle of allNodeEleObj) {
console.log(allNodeEle.nodeName); /*  Output 
                                      H1
                                      H2
                                      P
                                    */

}


//To access the Parent Node of main heading div by using parentNode properties
 let parntNodeObj = headingObj.parentNode;
 console.log(parntNodeObj.nodeName); //Output: BODY


 //to access the siblings of any child node
 /*So there are 2 property previousSibling and nextSibling */

 let titleObj = document.getElementById("title");
 //to see the next siblings of title of child node return #text if any space and </br> and tab
 let nextSibObj = titleObj.nextSibling;
 console.log(nextSibObj.nodeName);  //output: #text

 let titleObjEle = document.getElementById("title");
 //to see the next siblings of title of child node return #text if any space and </br> and tab
 let nextSibEleObj = titleObjEle.nextElementSibling;
 console.log(nextSibEleObj.nodeName);  //output: H2

 console.log(nextSibEleObj.nextElementSibling.nodeName);   //output: p




