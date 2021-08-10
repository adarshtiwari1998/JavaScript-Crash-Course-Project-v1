
/*work experience function */

function addNewWorkExpFieFun() {
    // console.log("yes working....")
    //added new node textarea before click on the add button
    let newTextNode = document.createElement("textarea");
    //class name added
    newTextNode.classList.add("form-control"); //added the form control class
    newTextNode.classList.add("workExpField"); //added the workExp ID name of textarea given in className
    newTextNode.classList.add("mt-2"); //added the margin from top
    //rows attribute
    newTextNode.setAttribute("rows", 3); //added the rows attributes, rows is basically a attribute, by passing attributes and value
    //placeholder attribute
    newTextNode.setAttribute("placeholder", "Your Work Experience");

    //kis from group element ke andar add karna hai workExperience ke andar
    let workExperienceObj = document.getElementById("workExperienceEle"); //extract reference of the form group 
    //kiske pehle add karna hai workExpAddBtn iske pehle
    let workExpAddBtnObj = document.getElementById("workExpAddBtn");  // extract reference of form group add button

    //call the function
    workExperienceObj.insertBefore(newTextNode, workExpAddBtnObj);

}

/* academic qualifications function */
function addNewAcaQuaFieFun() {
    // console.log("yes working....")
    //added new node textarea before click on the add button
    let newTextNode = document.createElement("textarea");
    //class name added
    newTextNode.classList.add("form-control"); //added the form control class
    newTextNode.classList.add("acadeQualiField"); //added the workExp ID name of textarea given in className
    newTextNode.classList.add("mt-2"); //added the margin from top
    //rows attribute
    newTextNode.setAttribute("rows", 3); //added the rows attributes, rows is basically a attribute, by passing attributes and value
    //placeholder attribute
    newTextNode.setAttribute("placeholder", "Your Academic Qualifications");

    //kis from group element ke andar add karna hai acadmicQualficObj ke andar
    let acadmicQualficObj = document.getElementById("acadmQualificEle"); //extract reference of the form group 
    //kiske pehle add karna hai acadeQualiAddBtn iske pehle
    let acaQuaAddBtnObj = document.getElementById("acadeQualiAddBtn");  // extract reference of form group add button

    //call the function
    acadmicQualficObj.insertBefore(newTextNode, acaQuaAddBtnObj);

}

//generate cv function
function generateCvFun() {
    // console.log("working");
//nameField id ko set karna hai
let nameFieldObj = document.getElementById("nameField").value;  //hamare paas nameField id ki value aa jayegi
//cv template ke id ka obj aagya hai jis element ke id pe muzea set karna hai usko paas karna padega
let nameTempl1Obj = document.getElementById("nameTempl1");
//ab humko iss value ko set karna hai cv template ke id me jaha hum chahate hai name ko set karna

nameTempl1Obj.innerHTML = nameFieldObj; //dynamic name set ho jayega cv template element id par
// console.log(nameTempl1Obj);

//directly set the dynamic value into cv template of id nameTempl2
document.getElementById("nameTempl2").innerHTML = nameFieldObj;

//directly set the dynamic value into cv template of id contactTempl
document.getElementById("contactTempl").innerHTML = document.getElementById("mobileNoField").value;

//directly set the dynamic value into cv template of id emailTempl
document.getElementById("emailTempl").innerHTML = document.getElementById("emailField").value;

//directly set the dynamic value into cv template of id addressTempl
document.getElementById("addressTempl").innerHTML = document.getElementById("addressField").value;

//directly set the dynamic value into cv template of id linkedinTempl
document.getElementById("linkedinTempl").innerHTML = document.getElementById("lkField").value;

//directly set the dynamic value into cv template of id facebookTempl
document.getElementById("facebookTempl").innerHTML = document.getElementById("fbField").value;

//directly set the dynamic value into cv template of id instagramTempl
document.getElementById("instagramTempl").innerHTML = document.getElementById("instaField").value;

//objective
//directly set the dynamic value into cv template of id objectiveTempl
document.getElementById("objectiveTempl").innerHTML = document.getElementById("objectiveField").value;


//work experience
let workExpFieldObj = document.getElementsByClassName("workExpField");  //object nikalna hai workExpField ka

let str = "";    //li ke liye

for(let workExp of workExpFieldObj ) {   //isme aik aik kar ke work experience aata rahega

    //then add the li on str variable
    str= str + `<li> ${workExp.value} </li>`; //isme aik aik work experience li ke form me add hota rahega
}
//jab loop end hoga, iska matlab sab work experience ki value aa gyi hogi
//directly set the dynamic value into cv template of id workExpTempl
document.getElementById("workExpTempl").innerHTML = str;   

//academic qualifications
let acadeQualiFieldObj = document.getElementsByClassName("acadeQualiField");  //object nikalna hai acadeQualiField ka

let strAcaQua = "";    //li ke liye

for(let acadQua of acadeQualiFieldObj ) {   //isme aik aik kar ke academic qualifications aata rahega

    //then add the li on str variable
    strAcaQua= strAcaQua + `<li> ${acadQua.value} </li>`; //isme aik aik academic qualifications li ke form me add hota rahega
}
//jab loop end hoga, iska matlab sab academic qualifications ki value aa gyi hogi
//directly set the dynamic value into cv template of id acadeQualiTempl
document.getElementById("acadeQualiTempl").innerHTML = strAcaQua;   


//jab hum sab data fill kar diye hoge form me ab humko form hide karna hai and template show karna hai, too aisee karege

document.getElementById("cv-form").style.display = "none";  //hide the cv form after we fill the data
document.getElementById("cv-template").style.display="block"  //show the cv template after the data will be filled in cv form
}

//printCvFun
function printCvFun() {
  window.print()  
}