//if statement

let delhi = 1500;
let pune = 3400;

if (delhi>pune){
    console.log("Delhi is  greater than Pune")
}

//if else statement

let up = 1500;
let mp = 3400;

if (up>mp){
    console.log("UP is  greater than MP")
}
else {
    console.log("MP is  greater than UP")
}

//truthy value example

if (12) {
    console.log("Wow it is truthy value");   //output: true,  Wow it is truthy value
}

if (-12) {
    console.log("Wow it is truthy value"); // output: true, Wow it is truthy value
};

if (false) {
    console.log("Wow it is truthy value"); // output:  false consider
}
if (undefined) {
    console.log("Wow it is truthy value"); // output:  false consider
}

if (true) {
    console.log("Wow it is truthy value"); // output: true,   Wow it is truthy value
}

if (NaN) {
    console.log("Wow it is truthy value"); // output:  false consider
}

if (0) {
    console.log("Wow it is truthy value"); // output:  false consider
}


if ("Adarsh") {
    console.log("Wow it is truthy value"); // output: true,  Wow it is truthy value
}

if ("") {
    console.log("Wow it is truthy value"); // output: false
}