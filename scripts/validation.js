document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let surename = document.getElementById("surename").value.trim();
    let email = document.getElementById("email").value.trim();
    let phoneNumber = document.getElementById("phone-number").value.trim();
    let additionalInfo = document.getElementById("additional-information").value.trim();

    if(name === '' ) {

    }
    if(surename === ''){
        
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert("eblo");
    }
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    if(!phoneNumberPattern.test(phoneNumber)){
        alert("dayn")
    }


});