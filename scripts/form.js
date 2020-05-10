var int1;
var int2;
var int3;
//int1 - int2 + int3 = result
function generateCaptcha() {
    int1 = Math.ceil(Math.random() * 10);
    int2 = Math.ceil(Math.random() * 10);
    int3 = Math.ceil(Math.random() * 10);
    
    document.getElementById("captcha").placeholder = "How much is " + int1 + " - " + int2 + " + " + int3 + "?";
    console.log(document.getElementById("captcha"));
}

function submitCaptcha() {
    if (int1 - int2 + int3 == parseInt(document.getElementById("captcha").value)) {
        document.getElementById("formResult").innerHTML = "Success! Our Wattz agent will visit your address to present a sample of our product in the coming week."
    }
    else {
        document.getElementById("formResult").innerHTML = "Uh oh, you might have made a mistake in the captcha. Here, we'll reload it for you."
        generateCaptcha();
        document.getElementById("captcha").value = "";
    }
}