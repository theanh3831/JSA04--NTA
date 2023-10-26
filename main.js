function checkfield(field) {
    if (field == null) {
        return false
    }
    else {
        return true
    }
}
function checklenght(field) {
    if (checkfield < 8) {
        return false
    }
    else {
        return true
    }

}
function checkMail(field) {
    //regular expression
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(field) == false) {
        return false
    }
    else {
        return true
    }

}
function checkPassword(pw1, pw2) {
    if (pw1 != pw2) {
        return false
    }
    else {
        return true
    }
}

let signUpBtn = document.getElementById('sign-up-btn')

function checkregister() {

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let pw = document.getElementById('password').value
    let cofirmed_pw = document.getElementById('confirmed-pw').value

    if (checkfield(username) == false ||
        checkfield(email) == false ||
        checkfield(pw) == false ||
        checkfield(cofirmed_pw) == false) {
        alert('one or more fields is empty')
        return
    }
    else if (checkfield(username) == false
        || checkfield(pw) == false ||
        checkfield(cofirmed_pw) == false) {
        alert('Username or password must have 8 characters length')
        return
    }
    else if (checkMail(email) == false) {
        alert('wrong email format!')
        return
    }
    else if (checkPassword(pw, cofirmed_pw) == false) {
        alert9('password not mathed')
        return
    }
    else {
        alert('sign up successfully')
        return
    }
}
var slideIndex = 1;
showDivs(slideIndex);


function myFunction() {
    currentDiv(1)

}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
   try {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
   } catch (error) {
    
   }
}