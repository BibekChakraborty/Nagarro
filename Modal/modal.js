let count = 0;
$(".btn-danger").on("click", function () {
  count += 1;
  if (count % 2 == 0) $(".container").addClass("hide");
  else $(".container").removeClass("hide");
});
$(".fa-solid").on("click", function () {
  count += 1;
  $(".container").addClass("hide");
});

let Password_Error = true;
let Errors = true;
let email_error = true;

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

//  $("#email").keyup(email_valid);

// function email_valid() {
//   if ($("#email").val().length == "") {
//     $("#emailvalidation").show();
//     $("#emailvalidation").html("Email ID cannot be Empty");
//     $("#emailvalidation").css("color", "red");
//     email_error = false;
//     return false;
//   } 
// }

$("#pass").keyup(function () {
  password_validation();
});
function password_validation() {
  var strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var password_val = $("#pass").val();
  if (strongRegex.test(password_val)) {
    $("#passwordvalidation").hide();
    Password_Error = true;
  } else if ($("#pass").val().length == 0) {
    $("#passwordvalidation").show();
    $("#passwordvalidation").html("Password can't be empty.");
    $("#passwordvalidation").css("color", "red");
    Password_Error = false;
    return false;
  } else {
    $("#passwordvalidation").show();
    $("#passwordvalidation").html("Invalid Password");
    $("#passwordvalidation").css("color", "red");
    Password_Error = false;
    return false;
  }
}

$(".btn-primary").on("click", submitform);

function submitform(e) {
  username_validation();
  password_validation();

  if (Errors == true && Password_Error == true ) {
  } else {
    e.preventDefault();
    alert("Enter the fields properly");
  }
}
