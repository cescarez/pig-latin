var errorText = "Please enter a sentence to be translated";
var inputArray = [];
var inputCount = 0;
var concatArray = [];

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    $("#output").removeClass().text("");
    $("#input-form").removeClass();
    var inputString = $("#sentence-input").val();

    if (inputString === "") {
      $("#output").text(errorText).addClass("error-text");
      $("#input-form").addClass("has-error");
    } else {
      for (i = 0 ; i < inputString.length; i++) {
        inputArray.push(inputString[i]);
      }
      console.log(inputArray);

      for (i = 0; i < inputArray.length; i++) {
      inputCount += 1;
      var currentChar = inputArray[i];
      console.log(currentChar);
      console.log(inputCount);
        if (inputCount === 1 && currentChar === "a" || inputCount === 1 && currentChar === "A" || inputCount === 1 && currentChar === "e" || inputCount === 1 && currentChar === "E" ||  inputCount === 1 && currentChar === "i" || inputCount === 1 && currentChar === "I" ||  inputCount === 1 && currentChar === "o" || inputCount === 1 && currentChar === "O" ||  inputCount === 1 && currentChar === "u" || inputCount === 1 && currentChar === "U") {
          $("#output").text(inputArray.join("") + "way")
          console.log("vowel first letter");
          console.log(inputCount);
          break;
        } else if (inputCount > 1 && currentChar === "a" || inputCount > 1 && currentChar === "A" || inputCount > 1 && currentChar === "e" || inputCount > 1 && currentChar === "E" || inputCount > 1 && currentChar === "i" || inputCount > 1 && currentChar === "I" || inputCount > 1 && currentChar === "o" || inputCount > 1 && currentChar === "O" || inputCount > 1 && currentChar === "u" || inputCount > 1 && currentChar === "U") {
          $("#output").text(inputArray.join("") + concatArray.join("") + "ay");
          console.log("vowel later");
          break;
        } else {
          concatArray.push(currentChar);
          inputArray.splice(0, 1);
          console.log(inputArray);
          continue;
        }
      }
    }
  });
});
