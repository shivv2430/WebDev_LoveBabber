let notifications = document.getElementById('notifications');
let success = document.getElementById('success');
let error = document.getElementById('error');
let warning = document.getElementById('warning');
let info = document.getElementById('info');

function createToast(type,icon,title,text){
    let NewToast = document.createElement('div');
    NewToast.innerHTML = `
    <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick="this.parentElement.remove()"></i>
        </div>`;
        notifications.appendChild(NewToast);
        NewToast.timeOut = setTimeout(
            ()=>NewToast.remove(),5000
        )
}
success.onclick = function(){
    let type = 'success';
    let icon = 'fa-solid fa-circle-check'
    let title = 'Success';
    let text = 'This is a Success Toast';
    createToast(type,icon,title,text);
}
error.onclick = function (){
   let type = 'error';
    let icon = 'fa-solid fa-exclamation'
    let title = 'Error';
    let text = 'This is a error Toast';
    createToast(type,icon,title,text);
}
warning.onclick = function (){
   let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation'
    let title = 'Warning';
    let text = 'This is a warning Toast';
    createToast(type,icon,title,text);
}
info.onclick = function (){
   let type = 'info';
    let icon = 'fa-solid fa-circle-info'
    let title = 'Info';
    let text = 'This is a info Toast';
    createToast(type,icon,title,text);
}