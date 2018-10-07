var errorText = "Please enter a sentence to be translated";
var inputArray = [];

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    $("#output").removeClass();
    $("#input-form").removeClass();
    var inputString = $("#sentence-input").val();

    if (inputString === "") {
      $("#output").text(errorText).addClass("error-text");
      $("#input-form").addClass("has-error");
    } else {
      for(i = 0 ; i < inputString; i++) {
        inputArray.push(inputString[i]);
      }
    }
  });
});
