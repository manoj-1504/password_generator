
const generateBtn = document.querySelector("#generate-btn");
const input = document.querySelector("#input");
const range = document.getElementById("range");
const val = document.getElementById("number");
const copyBtn = document.getElementById("copy-btn");

// adding click event to get the password according to the password range

generateBtn.addEventListener('click', () => {

    let pwdString = "abcdefghijklmnopqrstuvwxyz1234567890@#$&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    // storing the range value in a variable called "len" and taking as the length of the password
    let len = val.innerHTML;

    // checking the range value and validating
    if (len == "" || len == 0) {

        alert("Please Select Password range");
    }
    for (let i = 0; i < len; i++) {

        //random value is multiplyed by the total "pwdString".
        var passwordLen = Math.floor(Math.random() * pwdString.length);
        
        // the substring is extracted from the total randomly generated string by specifying "starting and end index".
        password += pwdString.substring(passwordLen, passwordLen + 1);   
    }

    input.value = password;

});

// appending slider value into the input field

range.addEventListener("input", () => {

    // slider or range value is devided by the max range value.
    sliderValue = (range.value / range.max) * 16;
    //adding range value into the HTML file
    val.innerHTML = sliderValue;

});

// adding copy event listner and copying the password inside the input field

copyBtn.addEventListener('click', () => {
    input.select();
    document.execCommand('copy');
});



