var errorText = "Please enter a sentence to be translated";
var inputArray = [];
var vowelArray = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
var inputCount = 0;
var vowelCount = 0;
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

      for (i = 0; i < inputArray.length; i++) {
        inputCount += 1;
        var currentChar = inputArray[i];
        console.log(currentChar);

        for (v = 0; v< vowelArray.length; v++) {
          vowelCount += 1;
          var currentVowel = vowelArray[v];

          if (currentVowel === currentChar && inputCount === 1) {
            $("#output").text(inputArray.join("") + "way")
            console.log("vowel first letter");
            break;
          } else if (currentVowel === currentChar && inputCount > 1) {
            $("#output").text(inputArray.join("") + concatArray + "ay");
            console.log("vowel later");
            break;
          } else if (currentVowel !== currentChar) {
            concatArray.push(currentChar);
            inputArray.shift();
            continue;
          }
        }
        continue;
      }
    }
  });
});
