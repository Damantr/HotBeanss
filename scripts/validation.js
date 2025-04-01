document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();
    let isValid = validateForm();

    if (isValid){
        alert("Form submitted successfully!");
        this.reset();
        clearErrors();
    }
});

document.getElementById("name").addEventListener("input", validateName);
document.getElementById("surename").addEventListener("input", validateSurname);
document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("phone-number").addEventListener("input", validatePhone);


function validateForm(){
    let isNameValid  = validateName();
    let isSurnameValid = validateSurname();
    let isPhoneValid = validatePhone();
    let isEmailValid = validateEmail();

    return isNameValid && isSurnameValid && isPhoneValid && isEmailValid;
}

function validateName(){
    let name = document.getElementById("name").value.trim();
    if (name === '') {
        document.getElementById("error-name").style.opacity = "1";
        return false;
    } else {
        document.getElementById("error-name").style.opacity = "0";
        return true;
    }

}
function clearErrors(){
    document.getElementById("error-name").style.opacity = "0";
    document.getElementById("error-surname").style.opacity = "0";
    document.getElementById("error-email").style.opacity = "0";
    document.getElementById("error-number").style.opacity = "0";
}

function validateSurname(){
    let surename = document.getElementById("surename").value.trim();
    if (surename === '') {
        document.getElementById("error-surname").style.opacity = "1";
        return false;
    } else {
        document.getElementById("error-surname").style.opacity = "0";
        return true;
    }
}
function validateEmail(){
    let email = document.getElementById("email").value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-email").style.opacity = "1";
        return false;
    } else {
        document.getElementById("error-email").style.opacity = "0";
        return true;
    }
}
function validatePhone(){
    let phoneNumber = document.getElementById("phone-number").value.trim();

    const phoneNumberPattern = /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,4}$/;
    ;
    if (!phoneNumberPattern.test(phoneNumber)) {
        document.getElementById("error-number").style.opacity = "1";
        return false;
    } else {
        document.getElementById("error-number").style.opacity = "0";
        return true;
    }
}