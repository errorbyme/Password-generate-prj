let range = document.getElementById('range');
let rangevalue = document.getElementById('rangevalue');
let pbox = document.getElementById('pbox');
let copyicon = document.getElementById('copytext');
let p_gen_btn = document.getElementById('genpswdbtn');
var options = document.querySelectorAll(".option input");

// password generate button 

p_gen_btn.addEventListener('click', () => {
    let p = new PasswordGen();
    pbox.value = p.generatePassword();
    if (pbox.value != "") {
        copyicon.style.visibility = 'visible';
    }
});

// getting range in span 

range.addEventListener('input', () => {
    rangevalue.textContent = range.value;
});

//password copy button

copyicon.addEventListener('click', () => {
    navigator.clipboard.writeText(pbox.value);
    copyicon.classList.remove('fa', 'fa-clone');
    copyicon.classList.add('fa', 'fa-check');
    setTimeout(() => {
        copyicon.classList.remove('fa', 'fa-check');
        copyicon.innerText = "text copied!";
        setTimeout(() => {
            copyicon.innerText = "";
            copyicon.classList.add('fa', 'fa-clone');
        }, 1500);
    }, 500)
});

// password generator using class

class PasswordGen {
    constructor() {
        this.password = "";
        this.randompassword = "";
        this.Selected = false;
        this.characters = {
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers: "0123456789",
            symbols: "!@#$%^&*()_"
        }
    }

    generatePassword() {

        if (range.value < 6) {
            console.log("pls greater den 6");
        } else {
            options.forEach((option) => {
                if (option.checked) {
                    this.Selected = true;
                    this.password += this.characters[option.id];
                } else {
                    this.randompassword = "";
                }
            });
            if (this.Selected) {
                let i = 0;
                while (i < range.value) {
                    this.randompassword += this.password[Math.floor(Math.random() * this.password.length)];
                    i++;
                }
            }
            return this.randompassword;
        }
    }

}
setInterval(() => {
    if (pbox.value == "") {
        copyicon.style.visibility = 'hidden';
    }
});