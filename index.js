let buttonOK = document.getElementById('buttonOK');
let message = document.getElementById('message');

function showMessage(){
    message.innerHTML = 'เข้าได้แล้ว';
}



buttonOK.addEventListener('click', showMessage);

