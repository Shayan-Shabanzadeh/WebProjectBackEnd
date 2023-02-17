const LOGOUT = document.getElementById("logout");

LOGOUT.addEventListener('click',()=>{
    console.log("ddd")
    localStorage.setItem('isLogin' , 'false');
    window.location.href ='/index.html'
});

function checkIsLogin() {
    let isLogin = localStorage.getItem('isLogin')
    if (isLogin === 'false') {
        window.location.href ='/index.html'
    }
}

checkIsLogin();