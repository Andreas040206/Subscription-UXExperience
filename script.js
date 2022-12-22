
const submitBtn = document.querySelector("#submitBtn")
const inputPassword = document.querySelector('#inputPassword')
const inputRePassword = document.querySelector('#inputRePassword')

let validationStyles = `
input[type="text"]:invalid:not(:focus),
input[type="tel"]:invalid:not(:focus),
input[type="password"]:invalid:not(:focus),
input[type="mail"]:invalid:not(:focus){
    border: solid 3px red;
}

`

let styleSheet = document.createElement('style')

function scriptValidate(){
    if (inputRePassword.value === inputPassword.value){
        return true
    } else {
        alert('den gentagede kode er ikke den samme')
      return false
    }
}

submitBtn.addEventListener('click',function(){
    styleSheet.innerHTML = validationStyles
    document.head.appendChild(styleSheet)
});

inputRePassword.addEventListener('input', function(){
    if (inputRePassword.value === inputPassword.value){
    }
});

inputPassword.addEventListener('input', function(){
    if (inputRePassword.value === inputPassword.value){
    }
});