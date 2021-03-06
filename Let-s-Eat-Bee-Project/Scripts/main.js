﻿var toastContent = $('<img src="/Content/gendalf.jpg"/>');

$(document).ready(function () {
    $(".dropdown-button").dropdown();
});
$(document).ready(function () {
    $(".button-collapse").sideNav();
});
$(document).ready(function () {
    $('ul.tabs').tabs();
});

$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
$(document).ready(function () {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});


$(document).ready(function () {
    $('select').material_select();
});

///for validation

function validateEmail(email, toastFlag) {
    //var pattern = new RegExp("^[a-zA-Z]+([a-z]|\.|_|[0-9])+@[a-z]+\.[a-z]+$");
    //работает рандомно, не трогать
    var res = [];
    res = email.match(/[a-zA-Z]+([a-z]|\.|_|[0-9])+@[a-z]+\.[a-z]+/g);
    //alert(res);
    if ( res === null || !(res.length === 1 && res[0].length === email.length)) {
        if (toastFlag)
        {
            Materialize.toast('Invalid email format.', 3000);
            //Materialize.toast(toatContent, 3000);
        }
        return false;
    }
    return true;
}
function validatePassword(password, toastFlag) {
    var pattern = new RegExp("^([a-zA-Z]|[0-9]){6,25}$");
    var res = pattern.test(password);

    if (!res) {
        if (toastFlag) {
            Materialize.toast('Invalid password format. Use letters & digits (6-25).', 3000);
            //Materialize.toast(toatContent, 3000);
        }
        return false;
    }
    return true;
}

function validateName(name, toastFlag) {
    var pattern = new RegExp("^([a-zA-Z]){3,25}$");
    var res = pattern.test(name);
    if (!res) {
        if (toastFlag) {
            Materialize.toast('Invalid name format. Use letters only (3-25)', 3000);
            //Materialize.toast(toatContent, 3000);
        }
        return false;
    }
    return true;
}

function validateTime(time, toastFlag)
{
    var pattern = new RegExp("^(0[0-9]|1[0-9]|2(0|1|2|3)):(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])$");
    var res = pattern.test(time);
    if (!res) {
        if (toastFlag) {
            Materialize.toast('Use time format like 09:30, 16:15.', 3000);
            //Materialize.toast(toatContent, 3000);
        }
        return false;
    }
    return true;
}

function markAsValid(id)
{
    $(id).removeClass('invalid');
    $(id).addClass('valid');
}

function markAsInvalid(id) {
    $(id).removeClass('valid');
    $(id).addClass('invalid');
}