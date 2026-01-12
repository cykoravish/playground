const input = document.getElementById("inp");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", ()=>{
    let value = input.value;
    if(isNaN(value)){
        console.log("provided value is not a number - ",value)
        return;
    }
    console.log("all ok")
})