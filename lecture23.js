//dom styling example 
console.log("Dom styling example");
//select the element to apply styling using id selector

let mainObj = document.getElementById("main");
let subcategoryObj = document.getElementById("subcategory");

//applying styling on element 
/* applying styling with the help of javascript dynamically */
/* if you aapling syling using javascript so the first word of styling properties are small and
the second word are camelcase, example : fontSize, backgroundColor, and fontWeight etc */
mainObj.style.color="blue";
mainObj.style.fontSize="50px";
mainObj.style.fontWeight="200";
mainObj.style.fontStyle="italic";
mainObj.style.padding="22px";
mainObj.style.background="#e2e2e2";
mainObj.style.border="1px solid #333333";


//applying styling using button 
/* using arrow function */

const changeStyleUsingButton = () => {
    mainObj.style.color="green";
    mainObj.style.fontSize="69px";
    mainObj.style.fontWeight="900";
    mainObj.style.fontStyle="italic"
    mainObj.style.padding="32px";
    mainObj.style.background="yellow";
    mainObj.style.border="1px solid #eff4g5";

//dynamically change style wihtout refershing the page of full page body using
document.body.style.backgroundColor="green";  //background : green
document.body.style.color="white";    //color: white

/* but agar mera paas pura ka pura class hi hai too usko kaise set and get karege , 
by using this method below eg: enable, disable */

mainObj.className = 
/* agar hum ye wala chiz append nhi karege too class jitni bhi lagi hogi pehle se too voo replace ho jayegi,
append ka matlab pehle wala bhi class rahega and ye class bhi rahegi. */
/* Then hum iss tarah apne class ko laga sakte hai set kar sakte hai and hum classList bhi use kar sakte hai but 
this method is better */
mainObj.className + "orange";  //output: background orange

}

/* agar information get karni hai kisi bhi element ki too hum aisee kar sakte hai by using another 
button of geinformation in html */
/* ye method ussi ke work karega jispe maine set kiya hai, ye style or rule bydefault wale ko get nhi karege */
const getInformationUsingButton = () => {
    console.log(mainObj.style.fontWeight)  //output: 200
    console.log(mainObj.style.color)  //output: 200

    /* agar humko style or rule bydefault wala chahiye too, means agar maine set nhi kiya hai style attributes se voo bhi chahiye too hum
uske aisee karege , too window ke andar getstyle method/function hota hai usse hum karte hai
*/

let getDefaultStyle = window.getComputedStyle(mainObj);
console.log(getDefaultStyle.getPropertyValue("color"));
}


/* ye top method me hum,kisi bhi elements pe hum style kaise set kar sakte hai and get kar sakte hai */







