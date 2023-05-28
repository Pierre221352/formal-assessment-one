var nameSurname = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;
var subject = document.getElementById("subject").value;
var spam = document.getElementById("spam").checked;

if (spam) {
    var message = "Welcome " + nameSurname + "!Thank you for your interest in " + subject + "We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + contact + ".";
    alert(message);
}   else {
    var message = "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + nameSurname + " If you want to sign up, you better CHECK that newsletter box! ";
    alert(message);
}

