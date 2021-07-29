//for..in loop example

//example 1

console.log("for..in loop example 1");
    
/* object create in javascript  */



const StudentData =   { 
        //Key: name , phone , address 
        //value: Adarsh, 1234567890, delhi 
        name: "Adarsh",
        phone: "1234567890",
        address: "delhi",
    };
    

    //print the object 
    console.log(StudentData);
    //to check which type of value are
   console.log(typeof StudentData);    //output: object 

     //console.log(StudentData.name);  

   /* suppose ab humko inn sab properties ko individual print karna hai too muzea yaha pe for..in loop ka use karna padega
   kyu ki ye array nhi hai ki hum for loop chala dege ki 1 se le 10 tak print karna hai. Iske lia hum for..in loop ka use karege.
   */
  //for..in loop create

  for(let studentDetails in StudentData) {
    //   console.log(studentDetails)    //values-> alag alag print ho jayegi
        /* lekin suppose humko key bhi nikalna hai too kaise karege, give below */
        console.log(`${studentDetails} => ${StudentData.studentDetails}`)
          /* yaha pe undefined aa rha hai kyu ki 
        yaha pe isko ye ptamhi chal rha hai ki studentDetails kya hai, agar muzea property pta hai too hum direct 
        likh sakte hai and agar direct nhi pata hai too hum array wala symbol use karege [] then hum variable name pass
        kar dege isme
        */  
        console.log(`${studentDetails} => ${StudentData[studentDetails]}`)

        /* yaha studentDetails variables ke andar value dynamic aa rhi hai islia hum .operator nhi use kar sakte */
        /* lekin humko direct likhna hai too hum .operator use kar sakte hai but humko exact key pata hona chahiye */
        // console.log(StudentData.name)    /*output: Adarsh  */ 
  }


  //suppose mere paas koi array hai too for..in loop array ke liye bhi use ho sakta hai
  //example 2

 let places = ["Shimla", "uttarakhand", "rishikesh"];
 //array ko traverse karne ke liye hum use karege for..in loop
 for(var newPlaces in places) {    //in aik variable hai
    console.log(newPlaces);    //output: key 0, 1, 2
    console.log(places[newPlaces]);    //output: shimla, uttarakhand, rishikesh
 }

 



 //for..of loop

 let forofLoopex = ["javascript", "python", "java"];
 console.log(forofLoopex);

 /* for..of loop hum tab hi use karege, jab humko kisi bhi array and strings ke andar ke elements muzea chahiye,
  iss baar humko key pair nhi chahiye */
  /* array ke andar se direct elements nikalne ke liye use karte hai  */
  for(let forofloopItem of forofLoopex) {
      console.log(forofloopItem);   //output: array ke elements mil jaate hai output me like,  javascript, python, java
  }

  //for..in loop

  for(let forofloopItem in forofLoopex) {
    console.log(forofloopItem);   //output: array ke keys/index mil jaate hai output me like, 0,1,2
    console.log(forofLoopex[forofloopItem]); //output: array ka key milne ke baad uska data/ value bhi nikal sakte hai aisee.
}

