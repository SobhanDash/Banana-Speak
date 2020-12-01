var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTraslationUrl(input){
    return serverUrl + "?" + "text=" + input
}

function errorHandler(error){
    console.log("Error Occured!", error);
    alert("The erver is down, Please try again after some time!")
}

function clickHandler(){
    var inputText = txtInput.value

    fetch(getTraslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var tranlatedText = json.contents.translated;
            outputDiv.innerText = tranlatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)