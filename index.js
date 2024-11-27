const btnLogin = document.getElementById('btnLogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    if (username.value === "admin" && password.value === "password"){
        alert('Login Successfully!');
        window.location.href="main.html";
    }else{
        alert('Try Again');
    }
});