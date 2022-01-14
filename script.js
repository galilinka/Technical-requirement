'use strict'

function valid (form) {
    let fail = false;
    let name = form.name.value;
    //console.log(name)
    let password = form.password.value;
    //console.log(password)
    let rePassword = form.rePassword.value;
    let email = form.email.value;
    //console.log(email)
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (name == '' || name == ' ') {
        fail = 'Вы не ввели свое имя'
    } else if (password == '' || password == ' ') {
        fail = 'Вы не ввели пароль'
    } else if (password !== rePassword) {
        fail = 'Пароли не совпадают'
    } else if (reg.test(email) == false) {
        fail = 'Адрес электронной почты введен неправильно'
    }
    if (fail) {
        alert(fail)
    } 
}

function sendJSON() {
    let validation = valid(form)

    if (!validation) {
        //console.log('error');
        return;
    } 

    let object = {};
    let formData = document.forms.register;

    formData.forEach(function(value, key){
        object[key] = value;
    });

    let json = JSON.stringify(object)

    let xhr = new XMLHttpRequest();

    xhr.open("POST", '/submit', true)
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.onreadystatechange = ...;

    xhr.send(json);
}










