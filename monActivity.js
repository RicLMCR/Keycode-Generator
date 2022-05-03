const welcome = document.getElementById("header")
const list = document.getElementById("list")
const code = document.getElementById("code")
const key = document.getElementById("key")
const value = document.getElementById("value")

//Welcome Message
welcome.textContent = "Welcome to My Key Code Generator!"

// Event (keydown) function
window.addEventListener("keydown", (event)=>{
console.log (`event`);

let myCode = event.code;
let myKey = event.key;
let myVal = event.which;

code.textContent = (`.Code is: ${myCode}`);
key.textContent = (`.Key is: ${myKey}`);
value.textContent = (`The value is: ${myVal}`)
})

