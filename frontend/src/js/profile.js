const SIGNUP = document.getElementById("signup");
const PROFILE = document.getElementById("profile");

function checkIsLogin() {
    let isLogin = localStorage.getItem('isLogin')
    if (isLogin === 'true') {
        SIGNUP.classList.add("hidden");
        PROFILE.classList.remove("hidden");
    } else {

        PROFILE.classList.add("hidden");
        SIGNUP.classList.remove("hidden");
    }
}

checkIsLogin();
