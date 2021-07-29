//creating object

let myDetails = {
    firstName: "Adarsh",    //first element, camel case first letter first word small, second word first letter capital
    age: 24,              //second element
    add: "delhi",
    mob: 211313,
    // last_name: "Tripathi"    //2nd way to set object pair name
    // lastName: "Tripathi"        //3nd way to set object pair name
    // "last Name" : "Tripathi"      //4th way to set object pair name , agar space chahiye too " lagana padega"
    "seclast Name": "Tiwari" ,      //5th way to set object pair name
    lastName: "Tripathi"   //camel case first letter first word small, second word first letter capital
    
};


console.log(myDetails);
console.log(typeof myDetails);


//accessing the properties  of object 
//First Way
console.log(myDetails.age);     //age print 24

//second Way
console.log(myDetails["firstName"]);  //output Adarsh
console.log(myDetails["mob"])    //output: 211313
console.log(myDetails["seclast Name"])    /* output: 211313  , agar space diya hai pair me too humko [] square brackets ke andar
hi use karna padega  .operator me error aayega
*/ 

//syntax error come when access seclast Name in . paramter
/* console.log(myDetails.seclast Name);   //syntax error, kyu ki maine iss pair me maine space diya 
hai too muzea square brackets hi pass karna padega  */
/* (. operator ko reference operator bhi bolte hai) */
/* nhi too hum [] square brackets array use karke properties access kar sakte hai */


//example 3 using function into object 

let tourist = {
    place: "shimla",
    state: "uttarakhand",
    pinCode: "263433",
     //maine showing variable name ka properties liya ,isko hum behaviour bhi bolte hai, and usme anonymouse function defined kar diya
     showing:function() {//anonymouse type function
          
        console.log("Object inside function example");
        console.log(this.place);  //this matlab current object
        console.log(this.state);
      /* iss function ka reference display variable name me aagya, and kabhi bhi hum display variable ko call karege too ye function call 
      hojayega. and display kiske help se use hoga,  tourish variable ke help se, too jab bhi hum tourist.display use karege, 
      too hamara ye function call hoga.
      */

     }
};

//call/invoke the function HERE
//two method of calling function
/* Method 1*/
// tourist.showing();   //output shimla, uttarakhand

/*Method 2  */
tourist["showing"]();    //output shimla, uttarakhand


/* hum object mein pair:values ke saath saath, function bhi rakh sakte hai and uss function ke andar code and logic hi rakh
sakte hai.
*/


// for..in loop for looping properties
/* loop through karne ke liye hum use karege for..in loop */
for (let nearestPlaces in tourist ) {
    console.log(nearestPlaces);   //output- key pair name printed with function variable
    console.log(nearestPlaces + " " + tourist[nearestPlaces]);   
     /* output- key pair name with value printed and 
     last me jab hum tourist.showing print kiya too function print hogya , call nhi hua kyu ki console.log print kar 
     rha hai , invoke/ call nhi kar rha. */

}


console.log(tourist.place);   //output- shimla

/*  hum object ki values ko change bhi kar sakte hai baad me  */
//changing value of properties

tourist.place = "Kedarnath";    //values change from shimla to kedarnath

console.log(tourist.place);  //output- kedarnath
console.log(tourist);     //all elements printed,  with updated pair-place value.
 
myDetails["seclast Name"] = "skukla";
console.log(myDetails);    //output: "seclast Name": change from Tripathi to shukla



//dynamic adding properties
/* suppose humko kuch properties add karna hai future mai too hum dynamically add kar sakte hai like this, */


tourist["package"] = "40000";
console.log(tourist); //output: package property added 


//dynamic deleting properties
/* suppose humko kuch properties delete karna hai future mai too hum dynamically delete kar sakte hai like this, */
//hum delete operator use kar sakte hai
delete myDetails["seclast Name"];   
console.log(myDetails);     //output: seclast Name properties and value are deleted
delete tourist.package;    
console.log(tourist); //output: package properties and value are deleted