//setTimeout()  --> execute code after a delay
//setInterval() --> function execute code at regular intervals+

/* write code in advance, those you have want to execute after 6 seconds, this is USE CASE code jo ki bas
6 second and jo time lagovo ge uspe hi chalega.
*/
function codeExectAftFiveSec() {
    console.log("Hello JavaScript!!");
    console.log("Hello this code run after 5 Second!");
}


function setTimeOutFun() {
   /* start the function here */
   /* call the function immediately */
    // codeExectAftFiveSec();
    /* call the function after 5 second */
   /*setTimeout() funcion ko 2 cheez deni hai
   1. kis code ko chalana hai, uss function ka name paas karna hai
   2. kitne der baad chalana hai, kitna delay dena hai*/
   //setTimeout(function, delay in milliseconds)
   setTimeout(codeExectAftFiveSec, 5000);
}

let setIntervalObj;
function setIntervalFun() {
    /* start the function here */
    /*setInterval() funcion ko 2 cheez deni hai
    1. kis code ko chalana hai, uss function ka name paas karna hai
    2. kitne der baad chalana hai, kitna delay dena hai*/
    //setInterval(function, delay in milliseconds)
     setIntervalObj = setInterval(codeExectAftFiveSec, 2000); /*agar hum let ka use kareg too iska scope bas iss function
    ke andar hai too hum variable ka bahar defined karage. */
    console.log(setIntervalObj); //output: ID 1, jitne baar hum start karege id change hota jaayega
 }
 
//clear the setIntervalObj Interval by using clearInterval() function
 function setStopFun() {
  let clearTimer = clearInterval(setIntervalObj);
  console.log(clearTimer);   //output: undefined
 }







