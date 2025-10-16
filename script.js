const Passwordbar = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@$&?#+%";



const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword(){
    let password = " ";
    password += upperCase[Math.floor(Math.random() *upperCase.length)];
    password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password += numbers[Math.floor(Math.random() *numbers.length)];
    password += symbols[Math.floor(Math.random() *symbols.length)];


    while( length > password.length){
        password += allChars[Math.floor(Math.random() *allChars.length)];
    }
    Passwordbar.value = password;
}

function copyPassword(){
    Passwordbar.select();
    document.execCommand("copy");

    navigator.clipboard.writeText(Passwordbar.value);

    // Alert the copied text
    document.getElementById("copyMsg").style.display = "block";
setTimeout(() => document.getElementById("copyMsg").style.display = "none", 2000);

}