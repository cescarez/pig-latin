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
        if (inputCount === 1 && currentChar === "a" || currentChar === "A" || currentChar === "e" || currentChar === "E" ||  currentChar === "i" || currentChar === "I" ||  currentChar === "o" || currentChar === "O" ||  currentChar === "u" || currentChar === "U") {
          $("#output").text(inputArray.join("") + "way")
          console.log("vowel first letter");
          break;
        } else if (currentChar === "a" || currentChar === "A" || currentChar === "e" || currentChar === "E" ||  currentChar === "i" || currentChar === "I" ||  currentChar === "o" || currentChar === "O" ||  currentChar === "u" || currentChar === "U" && inputCount > 1) {
          $("#output").text(inputArray.join("") + concatArray.join("") + "ay");
          console.log("vowel later");
          break;
        // } else if (currentChar !== "a" || currentChar !== "A" || currentChar !== "e" || currentChar !== "E" ||  currentChar !== "i" || currentChar !== "I" ||  currentChar !== "o" || currentChar !== "O" ||  currentChar !== "u" || currentChar !== "U") {
        //   concatArray.push(currentChar);
        //   inputArray.shift();
        //   continue;
        }
      }
    }
  });
});
