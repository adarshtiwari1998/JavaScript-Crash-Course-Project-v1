//digital clock time by using arrow function
const getDateTime = () => {

    //get current Date  and Time
    let getDateTimeObj = new Date();
    console.log(getDateTimeObj);
      //Tue Aug 10 2021 13:52:04 GMT+0530 (India Standard Time)
//humko ab meaningful cheeze nikalni hai like hour, second
   let hours = getDateTimeObj.getHours();
   console.log(hours); //output: 13
   let minute = getDateTimeObj.getMinutes();
   console.log(minute);  //output: 56
   let second = getDateTimeObj.getSeconds();
//    let miliSecond = getDateTimeObj.getMilliseconds();
   console.log(second); //output: 17

   return `${hours} : ${minute} : ${second} `;

}

console.log(getDateTime()); 
 //output: 13 : 59 : 9

/* humko isko aik aik second call karna hai too hum setInterval() function call karege*/
setInterval(() => { /* yaha pe maine annoymouse function call kiya, and delay paas kar dia,
    too jo code hum yaha pe paas karege voo har baar chalega
    */
//console.log(getDateTime());
/*ab humko jis html elements me humko dikhana hai time ko uss id and class ka reference
chahiye hoga and then inner html update kar dege
*/

let clockObj = document.querySelector('.clock');
clockObj.innerHTML = getDateTime();

}, 1000);