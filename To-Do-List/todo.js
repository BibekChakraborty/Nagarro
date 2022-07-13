$("#formin").submit(function (e) {
  e.preventDefault();
  var value = $("#userinput").val();
  if (value.length !== 0) {
    $("#lists").append(
      "<li>" +
        value +
        "<span><i class='fa-solid fa-trash-can'></i></span>" +
        "</li>"
    );
    $("#userinput").val("");
  }
});

$("#userinput").val("");

$("ul").on("click", "span", function (e) {
  $(this).closest("li").remove();
});
