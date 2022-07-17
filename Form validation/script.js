let Errors = true;
let Email_Error = true;
let Password_Error = true;
let Confirm_Password_Error = true;

$("#username").keyup(function () {
  username_validation();
});
function username_validation() {
  var username_val = $("#username").val();
  if (username_val.length == "") {
    $("#usernamevalidation").show();
    $("#usernamevalidation").html("Username Cannot be Empty");
    $("#usernamevalidation").css("color", "red");
    Errors = false;
    return false;
  } else if (username_val.length < 3 || username_val.length > 10) {
    $("#usernamevalidation").show();
    $("#usernamevalidation").html("Invalid Username ");
    $("#usernamevalidation").css("color", "red");
    Errors = false;
    return false;
  } else {
    $("#usernamevalidation").hide();
    Errors = true;
  }
}

$("#email").keyup(function () {
  email_valid();
});
function email_valid() {
  var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  var emval = $("#email").val();
  if (emailregex.test(emval)) {
    $("#emailvalidation").hide();
    Email_Error = true;
  } else {
    $("#emailvalidation").show();
    $("#emailvalidation").html("Invalid Email Address");
    $("#emailvalidation").css("color", "red");
    Email_Error = false;
    return false;
  }
}

$("#password").keyup(function () {
  password_validation();
});
function password_validation() {
  var strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var password_val = $("#password").val();
  if (strongRegex.test(password_val)) {
    $("#passwordvalidation").hide();
    Password_Error = true;
  } else {
    $("#passwordvalidation").show();
    $("#passwordvalidation").html("Invalid Password");
    $("#passwordvalidation").css("color", "red");
    Password_Error = false;
    return false;
  }
}

$("#confirmpassword").keyup(function () {
  Confirm_Pass();
});
function Confirm_Pass() {
  var conpa = $("#confirmpassword").val();
  if (conpa != $("#password").val() || conpa.length == 0) {
    $("#confirmpasswordvalidation").show();
    $("#confirmpasswordvalidation").html("Password not matching");
    $("#confirmpasswordvalidation").css("color", "red");
    Confirm_Password_Error = false;
    return false;
  } else {
    $("#confirmpasswordvalidation").hide();
    Confirm_Password_Error = true;
  }
}

$("#submitvalidation").on("click", submitval);

function submitval(e) {
  username_validation();
  email_valid();
  password_validation();
  Confirm_Pass();

  if (
    Errors == true &&
    Password_Error == true &&
    Email_Error == true &&
    Confirm_Password_Error == true
  ) {
    $(".container").hide();
  } else {
    e.preventDefault();
    alert("Fill up the form properly");
  }
}
