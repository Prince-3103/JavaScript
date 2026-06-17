let email = document.querySelector("#email");
let pswd = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    document.querySelector(".email-msg").textContent = "";
    document.querySelector(".password-msg").textContent = "";
    document.querySelector("#result-msg").textContent = "";


    let isValid = true;

    let emailCheck = emailPattern.test(email.value.trim());
    let pswdCheck = passwordPattern.test(pswd.value);

    if(!emailCheck){
        document.querySelector(".email-msg").textContent = "Invalid Email";
        isValid = false;
    }
    if(!pswdCheck){
        document.querySelector(".password-msg").textContent = "Password must have atleast 8 character and atleast 1 uppercase, lowercase, number and any symbol.";
        isValid = false;
    }
    if(isValid){
        document.querySelector("#result-msg").textContent = "Login Successfull";
    }
});