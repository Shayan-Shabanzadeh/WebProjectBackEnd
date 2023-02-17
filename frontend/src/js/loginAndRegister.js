function setFormMessage(formElement, _type , message){
    const messageElement = formElement.querySelector('.form__message');

    messageElement.textContent = message;
    messageElement.classList.remove('form__message--success' , 'form__messsage--error');
    messageElement.classList.add('form__message--${_type}');
}


function validateEmail(email){
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
    return pattern.test(email);

}
function validatePassportNumber(passportNumber){
    const pattern = /[a-zA-Z]{2}[0-9]{7}/;
    return pattern.test(passportNumber);

}


function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";

}


document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#createAccount")

    document.querySelector("#LinkCreateAccount").addEventListener("click",e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });


    document.querySelector("#LinkLogin").addEventListener("click",e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
    createAccountForm.addEventListener("submit" , e => {
        e.preventDefault();
        const fd = new FormData(createAccountForm);
        const obj = Object.fromEntries(fd);
        
        const json = JSON.stringify(obj);
        localStorage.setItem('signupForm' , json);
    })

    loginForm.addEventListener("submit",e => {
        e.preventDefault();
        
        setFormMessage(loginForm , "success" , "شما با موفقیت وارد شدید");
        localStorage.setItem('isLogin' , 'true');
        window.location.href ='/profile.html'
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur",e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && !validateEmail(e.target.value)){
                setInputError(inputElement , "ایمیل نامعتبر");
            }
            if (e.target.id === "loginUsername" && e.target.value.length > 0 && !validateEmail(e.target.value)){
                setInputError(inputElement , "ایمیل نامعتبر");
            }
            if (e.target.id === "passportNumber" && e.target.value.length > 0 && !validatePassportNumber(e.target.value)){
                setInputError(inputElement , "شماره پاسپورت نامعتبر است");
            }
        });
        inputElement.addEventListener("input" , e => {clearInputError(inputElement)} );
    });

})