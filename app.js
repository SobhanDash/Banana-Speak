var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerText = "Sobhan Dash"
console.log(outputDiv)

function clickHandler(){
    outputDiv.innerText = "baofinfk" + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler)