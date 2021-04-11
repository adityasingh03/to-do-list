var inputField = document.getElementById("input-field");
var button = document.getElementById("first-button");
var ul = document.getElementById("list");

function inputLength(){
    
    return inputField.value.length;
}

function afterClick(){

    if(inputLength() > 0){

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value));
        ul.appendChild(li);
        inputField.value = "";
    }   
}

function afterEnter(event){

    if(inputLength() > 0 && event.keyCode === 13 ){

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(inputField.value));
        ul.appendChild(li);
        inputField.value = "";
    }   
}

button.addEventListener("click", afterClick);

inputField.addEventListener("keypress", afterEnter);
