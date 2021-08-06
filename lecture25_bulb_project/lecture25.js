/* 2 function use hoga turnOn function and turnOff function */
//TurnOn Function()
const turnOnFun = () => {
   //turnOn bulb with the help of set attribute function
   let turnOnImgObj = document.getElementById("bulbControl");
   let turnOnRes = turnOnImgObj.setAttribute("src", "./assets/images/on_bulb.jpg");
   console.log(turnOnRes);
}

//turn off function()
const turnOffFun = () => {
    //turnOff bulb with the help of set attribute function
    let turnOffImgObj = document.getElementById("bulbControl");
    let turnOffRes = turnOffImgObj.setAttribute("src", "./assets/images/off_bulb.jpg");
    console.log(turnOffRes);
}

//turnOnOff function

const turnOnOffFun = () => {
       let turnOnImgObj = document.getElementById("bulbControl");
       let attSrcValue = turnOnImgObj.getAttribute("src");
       console.log(attSrcValue);  
        /* current state bta dega aapko ki src ki
        value kya hai abhi off hai on hai, getAttribute() function */
        /* humko button ka state bhi nikalna padega and then value change karna padega */
        let buttonObj = document.getElementById("onOffButon");
        let buttonStateFind = buttonObj.innerHTML;
        console.log(buttonStateFind);
       //if condition apply 
       if(attSrcValue == "./assets/images/off_bulb.jpg") {
             //call the turn on function here
            turnOnFun();
            buttonObj.innerHTML = "Off";
            // console.log(turnOnFun);
        } else {
            turnOffFun();
            buttonObj.innerHTML = "On";
            // console.log(turnOffFun);
        }
} 

