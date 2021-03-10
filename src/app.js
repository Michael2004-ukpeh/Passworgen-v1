//for range in html
function updatedemo(val) {
    document.getElementById('demo').innerText = val;
}

// random character generator functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//console.log(getRandomUpper());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//console.log(getRandomNumber());

function getRandomSymbol() {
    const symbols = "~!@#$%^&*()_{}[]";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//console.log(getRandomSymbol());


//DOM connected to Javascript

const resultel = document.getElementById('result');
const lengthel = document.getElementById('demo');
const upperel = document.getElementById('upper');
const lowerel = document.getElementById('lower');
const numberel = document.getElementById('number')
const symbolel = document.getElementById('symbol');
const copyel = document.getElementById('copy');
const generatorbtn = document.getElementById('generatorbtn');
const status = document.getElementById('status');


//storing gen funcs in map
const randomfunc = {
    "upper": getRandomUpper,
    "lower": getRandomLower,
    "number": getRandomNumber,
    "symbol": getRandomSymbol,
}
const randomFuncMap = new Map(Object.entries(randomfunc));

//event listeners
generatorbtn.addEventListener("click", function() {

    const length = +lengthel.innerText;
    const hasUpper = upperel.checked;
    const hasLower = lowerel.checked;
    const hasSymbol = symbolel.checked;
    const hasNumber = numberel.checked;

    resultel.innerText = generate(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

//copy event listener
copyel.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const pw = resultel.innerText;

    if (!pw) {
        return;
    }
    textarea.value = pw
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    status.innerText = "Password Copied!!"

})

// Generator FUnction generate()

function generate(upper, lower, number, symbol, length) {
    let generatedPassword = "";

    const count = upper + lower + number + symbol
    console.log(count);

    const typeArr = [{ upper }, { lower }, { number }, { symbol }].filter(
        item => Object.values(item)[0]

    )


    let typesArr = [];
    for (let i = 0; i < typeArr.length; i++) {

        typesArr.push(Object.keys(typeArr[i]).join(''))

    }
    console.log(typesArr);

    if (count === 0) {
        return "";
    }

    for (let i = 0; i < length; i++) {

        const funcName = typesArr[Math.floor(Math.random() * typesArr.length)]
        console.log(funcName);
        generatedPassword += randomfunc[funcName]();


    }
    console.log(generatedPassword);
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

}

//reset button to be added when you want to upgrade it