//DOM elements Selectors 
//#################################   1. Selectors #####################################
//top most element selectors

console.log("Dom Selectors");


let htmlDoc = document.documentElement;
console.log(htmlDoc);   //output: full html code print

let htmlTit = document.title;
console.log(htmlTit); //output:title print Lecture 22 | Javascript DOM Selectors | DOM Selectors in detail

let htmlBdy = document.body;
console.log(htmlBdy); //output: body code printed

let htmlHead  = document.head;
console.log(htmlHead); //output: head code printed

//#################################   2. Selectors #####################################

//selecting element by using id with getElementById() function
//particular element selectors like h1, p , span, ul li, and many more by using id 
/*  agar kisi bhi elements ko select karna hai using ID too use karege getElementById() function */
/* getElementById() --> return karega single object, kyu ki id kisi bhi page ki unique hoti hai, aur single element return
karna hai aik hi isliye hum Element use karege not Elements 
*/
 
let getTit = document.getElementById("banrid");  /*id pe humko # and  class pe humko . pass karne ki jarurat nhi hai hum bas id and class ka 
name pass karege */
console.log(getTit);   //output: print hogya h2 tag

//ab hum iss h2 tag ke andar wale content ko change karte hai

let newh2 = getTit.innerHTML = "Hello Delhi";
console.log(newh2); //output: print


//change the color of h2 tag with help of dom object property
let h2ChngCol = getTit.style.color = "red";    //foreground color to red
console.log( h2ChngCol);     //output: color change to red 


//change the backgroundcolor of h2 tag with help of dom object selector property
let h2ChngBackCol = getTit.style.backgroundColor = "blue";   //background color to blue
console.log(h2ChngBackCol); //output: background color change to blue


/* jab bhi humko kisi element ko select karna hai by id too hum use karege getElementById() not getElementsById() */


//#################################   3. Selectors #####################################

 //selecting element by using className  with getElementsByClassName(className) function
 
 let getbyClass = document.getElementsByClassName("headingClass");
 console.log(getbyClass);    //output: multiple elements print hoga array me
 console.log(typeof getbyClass);    //output: object , and ye array object hoga

 /* agar aik variable bhut saare elements hogye too voo aik array ban jaati hai */
 /* too ye basically array hoga jisme 3 elements hoga */

 /* and array ko traverse karne ke liye hum for..of loop use kar sakte hai */

 for(let arrayResult of getbyClass)   /* of..loop (array se aik aik elements nikaal ke de deta hai) */
{
    console.log(arrayResult);   //output: teeno elements print hogya
    //change the color of text by using style property
    arrayResult.style.color = "violet";  //output: color change to violet
    //change the background color of text by using style property
   arrayResult.style.background = "gray";     //output: backgroundcolor change to gray
}



//#################################   4. Selectors #####################################

//get element by tag name

function getTagNameParams () {
let getByTag = document.getElementsByTagName("p");
console.log(getByTag);    //
console.log(typeof getByTag);    //output: object, after click of button
console.log(getByTag.length);     //output: 2


//print innerhtml on console by using for..of loop
for(let tagNameSingle of getByTag)   /* of..loop (array se aik aik elements nikaal ke de deta hai) */
{
    console.log(tagNameSingle);   //output: 2 elements print hogya

}
}




//#################################   5. Selectors #####################################

/* hum css selectors bhi use kar sakte hai elements ko select karne ke liye */
//selecting element with the help of css selectors
/* There are 2 function we use to do this: 1. querySelector()  -->ye single element return karega, pehla element return kar dega
                                           2. querySelectorAll() --> ye list of element return karega, jitne bhi element match karge 
                                                                       selectors se usko return kar dega
                                           
                                           */
//querySelector()
let querySel = document.querySelector(".reactHeading");  /* css selector use karne ke liye . lagana padhta hai */
console.log(querySel);   //output: bus 1 element return karega 


//querySelectorAll()

let querySelAll = document.querySelectorAll(".reactHeading");  /* css selector use karne ke liye . lagana padhta hai */
console.log(querySelAll);   /* output: ye 3 element return karega nodelist me, hum loop lagake isko alag alag print kar sakte hai */
/* ye list of element ke object ko return karega nodelist me and fhir hum loop laga sakte hai */

for(let querySelAllIndv of querySelAll) {
    console.log(querySelAllIndv);  //output: ye teeno elements print kar dega alag alag 
    //change the color by using style selectors
    querySelAllIndv.style.color = "yellow";    //output: color change to yellow  
}