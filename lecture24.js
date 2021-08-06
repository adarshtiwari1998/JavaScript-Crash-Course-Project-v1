//get and set attribute example
// get attributes
const getAttr = () => {
    //get the attribute 
    /* sabse pehle dekhna hai kis element ka attributes nikalan chahate hai, too sabse pehle Humko
       uss element ka object nikalna padega, example , href , sec , id*/
    let attUrl = document.getElementById("siteUrl");
     let getUrl = attUrl.getAttribute("href");
     console.log(getUrl);   /* output: http://linkedin.com, ye basically href ki value print kar dia, when user click on Get button. */
     console.log(attUrl.getAttribute("id")); /* output: siteUrl, ye basically humko id ki value print karke de dega */ 
     /* ab hm a tag pe class attributes ki value ko nikalte hai, usme 2 class laga hu hai */
     console.log( attUrl.getAttribute("class")); /* output: link-alert alert-primary, class atributes ki value print ho gyi,
     ye class ke saare values ko return kar dega
     */
};

//set attributes
const setAttr = () => {
//set the attributes
/* ab hum set function use karke url change karte hai like,
jaise user set button pe click kare url (https://linkedin.com changed to https://marketitup.in) ho jaaye
*/
//scope specified hai upar wale function ke andar too humko fhir se nikalna padega
let attUrl = document.getElementById("siteUrl");
let getUrl = attUrl.setAttribute("href", "https://marketitup.in");
console.log(getUrl);

}


//remove attributes

const remAttr = () => {
    //set the attributes
    /* ab hum set function use karke url change karte hai like,
    jaise user set button pe click kare url (https://linkedin.com changed to https://marketitup.in) ho jaaye
    */
    //scope specified hai upar wale function ke andar too humko fhir se nikalna padega
    let remAttUrl = document.getElementById("site1Url");
    let remGet1Url = remAttUrl.removeAttribute("href");
    console.log(remGet1Url);
    }

    
    


