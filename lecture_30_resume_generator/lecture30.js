
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