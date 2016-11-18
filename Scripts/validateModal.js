﻿$(document).ready(function () {
    $("#join").attr("disabled", "true")

    $("#first_name").blur(function () {
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();

        var valFirstName = validateName(first_name);
        if (!valFirstName) {
            $("#first_name").removeClass('valid');
            $("#first_name").addClass('invalid');

            $("#joinp").attr("disabled", "true");
            return;
        }
        $("#first_name").removeClass('invalid');
        $("#first_name").addClass("valid");
        if (valFirstName&& validateName(last_name)) {
            $("#join").removeAttr("disabled");
        }
    });

    $("#last_name").blur(function () {
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();

        var valLastName = validateName(last_name);
        if (!valLastName) {
            $("#last_name").removeClass('valid');
            $("#last_name").addClass('invalid');

            $("#join").attr("disabled", "true");
            return;
        }
        $("#last_name").removeClass('invalid');
        $("#last_name").addClass("valid");
        if (valLastName && validateName(first_name)) {
            $("#join").removeAttr("disabled");
        }
    });
});