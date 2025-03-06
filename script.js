// Utrzymujemy elementy interfejsa kalkulatora
const display = document.querySelector('.calculator-screen');

const buttons = document.querySelectorAll(".calculator-keys>button");
// Zmienne przechowujące wartości dla operacji, liczb i funkcji
let buttonNum = [];
let buttonOperator = [];
let buttonFunction = [];
let cache = [];
let sum = [];
let cacheValue =  "";
// Knopki dla każdej operacji
buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        buttonOperator.push(button);
        const operator = button.value;
        switch(operator) {
            case '+':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); 
                        cache.push('+'); 
                        cacheValue = ""; 
                        display.innerText = ""; 
                    }
                });
                break;
            case '-':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); 
                        cache.push('-'); 
                        cacheValue = ""; 
                        display.innerText = ""; 
                    }
                });
                break;
            case '*':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); 
                        cache.push('*'); 
                        cacheValue = ""; 
                        display.innerText = ""; 
                    }
                });
                break;
            case '/':
                button.addEventListener('click', (e) => {
                    if (cacheValue !== "") {
                        cache.push(parseFloat(cacheValue.replace(',', '.'))); 
                        cache.push('/'); 
                        cacheValue = ""; 
                        display.innerText = "";
                    }
                });
                break;
        }
    }else if(button.classList.contains('decimal')) { // możliwość korzystać nie całe liczby
        button.addEventListener('click', (e) => {
            if (!cacheValue.includes(',')) { 
                setDisplayValue(e.target.value);
            }
        });
    }else if(button.classList.contains('all-clear')) { // możliwość wyczyścić przykład 
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            clearDisplay();
            cache = [];
        });
    }else if(button.classList.contains('equal-sign')) { // możliwość otrzymywać wynik przykładu
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            equal();
            sum = [];
        });
    }else {
        buttonNum.push(button);
        buttonFunction.push(button);
        button.addEventListener('click', (e) => {
            setDisplayValue(e.target.value);
            console.log(e.target.value);
        });
    }

});


function setDisplayValue(value) {
    display.innerText += value;
    console.log("value:"+value)
    cacheValue += value;
}
function clearDisplay() {
    display.innerText = "";
    cacheValue = "";
}
let test = true;
function add(a) {
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] + cache[1]; // Dodawanie
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}
function subtract(a) {
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] - cache[1]; // Odejmowanie
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}

function multiplication(a) {
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] * cache[1]; // Mnożenie
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}
function fission(a) {
    cache.push(a);
    console.log(cache);
    if(cache.length >= 2) {
        clearDisplay();
        let sum = cache[0] / cache[1]; // Dzielenie
        cache = [];
        cache.push(sum);
        setDisplayValue(cache);
    }
    else {
        clearDisplay();
    }
}
function equal() {
    if (cache.length >= 2 && cacheValue !== "") {
        cache.push(parseFloat(cacheValue.replace(',', '.')));

        const num1 = cache[0];
        const operator = cache[1]; 
        const num2 = cache[2]; 

        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = "Error";
        }
        // Wyświetlanie wyniku
        display.innerText = result.toString().replace('.', ',');
        // Zapisanie wyniku do cache
        cache = [result]; 
        cacheValue = result.toString().replace('.', ','); 
    }
}

// Metoda/funkcja mnożenia

// Metoda/funkcja dzielenia

// Metoda/funkcja dodawania liczb zmiennoprzecinkowych: dodawany jest przecinek, a wartości float muszą zawierać kropkę (np. 1.2 zamiast 1,2).

// Te zmienne nie są wykorzystywane. Dodaje się do nich przyciski z kalkulatora, ale potem nie są używane.
// Pasowałoby je usunąć z kodu.
// let buttonNum = [];
// let buttonOperator = [];
// let buttonFunction = [];

// Gdy wszystko będzie działać, dopisz komentarze wyjaśniające działanie kodu oraz udokumentuj go w plikach Markdown dokumentacji:
// https://github.com/Code-V-Craft/Documentation
// Ten kod powinien być w Moduł 0: Kalkulator
