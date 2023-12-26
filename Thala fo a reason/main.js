function inputsubmit(){
    let input = document.getElementById("input").value 
    let result = document.getElementById("result")
     if (input === ""){
        return
     }
    let inputSplit = input.split("")
    if (inputSplit.length === 7){
        result.innerText = (input + " is Thala for a reason")
        result.style.display = "block"
    } else{
        result.innerText = (input + " is not Thala for a reason")
        result.style.display = "block"
    }
}