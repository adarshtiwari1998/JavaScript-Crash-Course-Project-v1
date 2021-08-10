//digital clock time by using arrow function
const getDateTime = () => {

    //get current Date  and Time
    let getDateTimeObj = new Date();
    // console.log(getDateTimeObj);
      //Tue Aug 10 2021 13:52:04 GMT+0530 (India Standard Time)
//humko ab meaningful cheeze nikalni hai like hour, second

   let hours = getDateTimeObj.getHours();
    //console.log(hours); //output: 13
    //new variable for AM/PM using ternary operator
   let amPm = hours>=12? "PM" : "AM";
    //console.log(amPm); //output:
    /* start mode in hours*/
   hours = hours % 12;
   hours = hours==0?12: hours;
   hours = hours > 12 ? hours: "0" + hours;
   let minutes = getDateTimeObj.getMinutes();
   //console.log(minute);  //output: 56
    minutes = minutes > 9 ? minutes: "0" + minutes;
   let seconds = getDateTimeObj.getSeconds();
   //console.log(second); //output: 17
   seconds = seconds > 9 ? seconds: "0" + seconds;
   let milliSeconds = getDateTimeObj.getMilliseconds();

   return `${hours} : ${minutes} : ${seconds} : ${milliSeconds} : ${amPm} `;

 /* Second Method by using localTimeString method */
//return getDateTimeObj.toLocaleTimeString();

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