//while loop example
//suppose you want to repeat you name 10 times so how do you do, you use while() loop

//example 1
let name = 1;
while(name<=10) {

console.log(`Name is ${name}`);
name++;
}


//example 2

let i = 1;
let b = true;
while(b) {
    console.log(`Values are ${i}`);
    i++;
   if (i == 11) {
       b = false;
   }

}
console.log(b)


//do while loop
//example 1

let x = 1;
do {
    console.log(`Value of x is ${x}`);   //output: print 10 times 
    x++;
} while(x <= 10);

//example 2
let y = 1;
do {
    console.log(`Value of y is ${y}`);
    y++;
} while(y <= 0);  //output: print 1 times atleast 