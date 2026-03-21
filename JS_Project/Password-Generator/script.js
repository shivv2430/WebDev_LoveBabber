let notifications = document.getElementById('notifications');
let generate_password = document.getElementById('generate_password');
let copyBtn = document.getElementById('copyPassword');

const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"
const symbol = "!@#$%^&*()><?:{}[]\\|~``"
const allChars = upperCase + lowerCase + number +symbol;

function createPassword(){
    let password = "";
    password +=upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
         password +=allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    

}

function createToast(type,icon,title,text){
    let NewToast = document.createElement('div');
    NewToast.innerHTML = `
    <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="ri-checkbox-circle-fill" onclick="this.parentElement.remove()"></i>
        </div>`;
        notifications.appendChild(NewToast);
        NewToast.timeOut = setTimeout(
            ()=>NewToast.remove(),5000
        )
}

generate_password.onclick = function(){
    let type = 'generate_password';
    let icon = 'ri-checkbox-circle-fill';
    let title = 'generate_password';
    let text = 'New password Generate';
    createToast(type,icon,title,text);
}
copyBtn.onclick = function (){
    copyPassword();
    createToast('copy','ri-file-copy-fill','Copied','Password copied');
}