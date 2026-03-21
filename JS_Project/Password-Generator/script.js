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
    // Remove any existing toasts
    document.querySelectorAll('.notification-toast').forEach(toast => toast.remove());
    
    let NewToast = document.createElement('div');
    NewToast.innerHTML = `
    <div class="toast notification-toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="" onclick="this.parentElement.remove()"></i>
        </div>`;
        document.body.appendChild(NewToast);
        NewToast.timeOut = setTimeout(
            ()=>NewToast.remove(),5000
        )
}

generate_password.onclick = function(){
    createPassword();
    let type = 'generate_password';
    let icon = 'fa-solid fa-circle-check';
    let title = 'generate_password';
    let text = 'New password Generate';
    createToast(type,icon,title,text);
}
copyBtn.onclick = function (){
    copyPassword();
    createToast('copy','fa-solid fa-copy','Copied','Password copied');
}