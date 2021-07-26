
//############### Question 1 ###################
// "==" operator example
/* "==" kewal values ko compare karta hai, agar values barabar hai too voo 
retrun kardega "true" */
/* Example: 1  */
let a= 25;
let b= 25;
console.log(a==b);     /* return "true" because both values are same  */

/* Example: 2  */
let x= 25;
let y= 28;
console.log(x==y);    /* return "false" because both values are not same  */

/* "===" ye values ke saath saath variables ke type ko bhi check karega, Agar
"data type" and "values" dono same hai too hi ye (true) return karega. "values" + "datatype" = true
*/
 // "===" operator example
  /* Example: 1  */
 let mango= 25;
 let banana= 25;
 console.log(typeof mango);
 console.log(typeof banana);
 console.log(mango === banana);

   /* Example: 2  */
   let shubh= "25";
   let adarsh = 25;
   console.log(shubh == adarsh);         /* return "true" */

   let akash = "25";
   let nitesh = 25;
   console.log(akash === nitesh);     /* kyu ki "===" ye values ke saath saath data
    type ko bhi check karta hai aur isme datatype dono ka alag alag hai,
    akash = "25" //string 
    nitesh = 25; //number

    isliye return  "false" mila*/



   //############### Question 3  ################### 
     /* Example 1 */
     let ram = 29;
     let shyam = 29;
     console.log(ram==shyam);    /* return "true"  */

     /* Example 2 */
      let mohit = [25];
     let shalini = [25];
     console.log(mohit==shalini);     /* return "false" */
     /* here, array is the reference type data type which will get heap memory location.
     so array will comparison both variable as the different address of the allocated memory address.
     Here both address are not same, so the output will return "false".
    Here, in heap memory, object will be created and the value will be stored in this object and this object
    have a particular address and this address will decaled in both variables.
     */

      /* Example 3 */
      //object reference data type

      let s1 = {
          //Object
          name: "Hanuman Ji jai ho"
      }

      let s2 = {
          name: "Hanuman ji"
      }

      console.log(s1.name);    //return "Hanuman ji"
      console.log(s1==s2);     //return false

      /* yaha 2 object create hua hoga,  then pehle object me name ki value aagyi "Hanuman ji" and iss object ka 
      jo reference hoga (matlab ki memory address) usko maine s1 me daal dia too mai assume karta hu ki
      s1=10000ux and s1 fhir object ko point out karne laga.
      */
     
      /* 
      yaha hum s1 ke help se name ko use kar sakte hai and print kar sakte hai, like
      s1.name, console.log(s1.name);
      yaha (.) jo hai voo reference operator hai
      */

       /* Example 4 */
       let s3 = s1;
       console.log(s1==s3);

       let s4 = s2;
       console.log(s2==s4);



       //example of global scope
       var globalVar = "Hello World!";  
       console.log(globalVar);
     
        // call this global scope variable in under the function
        function myfun() {
            //global variable use 
           console.log(globalVar);
        }
       
        /* function call here,return call
        yaha pe maine function ko call kar lia
        */
        myfun();
      

    //function scope example

    function myfun1(){
        var javascript = "Awesome";
        console.log(javascript);
    }
   
   console.log(javascript);   //reference error come variable not defined
   myfun1();         //return variable value 


    // Example 1: block scope example with help of "let" variable
      
    var akshat = 25;
    var govind = 25;
    if (akshat == govind) {
         
        console.log("This two boy are equal in brain teasure!");
        let boys = "Awesome";
        console.log(boys);
    }

    // console.log(boys);

    // Example 2: block scope example with help of "const" variable
         
    var anirudh = 25;
    var seekha = 25;
    if (anirudh == seekha) {
         
        console.log("This two boy are equal in activity game!");
        const hema = "Awesome Hema";
        console.log(hema);
    }
    console.log(hema);



   

    