const input = document.getElementById("inp");
const submitBtn = document.getElementById("submit");

let computerGuess = Math.floor(Math.random * 100);

submitBtn.addEventListener("click", ()=>{
    let value = input.value;
    if(isNaN(value)){
        console.log("provided value is not a number - ",value)
        input.value = "";
        return;
    }
    input.value = "";
})