var errorText = "Please enter a sentence to be translated";
var inputArray = [];
var inputCount = 0;
var concatArray = [];

var checkVowel = function(word) {
  for (i = 0; i < word.length; i) {
    inputCount += 1;
    if (inputCount === 1 && inputArray[0] === "a" || inputCount === 1 && inputArray[0] === "A" || inputCount === 1 && inputArray[0] === "e" || inputCount === 1 && inputArray[0] === "E" || inputCount === 1 && inputArray[0] === "i" || inputCount === 1 && inputArray[0] === "I" || inputCount === 1 && inputArray[0] === "o" || inputCount === 1 && inputArray[0] === "O" || inputCount === 1 && inputArray[0] === "u" || inputCount === 1 && inputArray[0] === "U") {
      $("#output").text(inputArray.join("") + "way")
      console.log("vowel first letter");
      break;
    } else if (inputCount > 1 && inputArray[0] === "a" || inputCount > 1 && inputArray[0] === "A" || inputCount > 1 && inputArray[0] === "e" || inputCount > 1 && inputArray[0] === "E" || inputCount > 1 && inputArray[0] === "i" || inputCount > 1 && inputArray[0] === "I" || inputCount > 1 && inputArray[0] === "o" || inputCount > 1 && inputArray[0] === "O" || inputCount > 1 && inputArray[0] === "u" || inputCount > 1 && inputArray[0] === "U") {
      $("#output").text(inputArray.join("") + concatArray.join("") + "ay");
      console.log("vowel later");
      break;
    } else if (inputArray[0] !== "a" || inputArray[0] !== "A" || inputArray[0] !== "e" || inputArray[0] !== "E" || inputArray[0] !== "i" || inputArray[0] !== "I" || inputArray[0] !== "o" || inputArray[0] !== "O" || inputArray[0] !== "u" || inputArray[0] !== "U") {
      concatArray.push(inputArray[0]);
      inputArray.splice(0, 1);
      console.log(inputArray);
      continue;
    }
  }
}

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
      checkVowel(inputString);
    }
  });
});
