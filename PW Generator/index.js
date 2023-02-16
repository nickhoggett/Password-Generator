let charecters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
                "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
                "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")"
                ,"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let addSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|"
                ,":",";","<",">",".","?","/"]
                
let addNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lengthIndex = ["8","9","10","11","12","13","14","15"];

let currentIndex = 7;

const getButton = document.querySelector('#gen-password');
const getPasswordOne = document.querySelector('#password-one');
const getPasswordTwo = document.querySelector('#password-two');
const getLength = document.querySelector('#length')
const getCopyOne = document.querySelector('#copy-pwOne');
const getCopyTwo = document.querySelector('#copy-pwTwo');
const getNumbers = document.querySelector('#numbers');
const getSymbols = document.querySelector('#symbols');

let getMinus = document.querySelector('#minus-length');
let getPlus = document.querySelector('#plus-length');

function handlePassword() {
    
        getPasswordOne.textContent = "";
        getPasswordTwo.textContent = "";
        
        function getRandomCharOne () {
            const randomChar = Math.floor(Math.random() * charecters.length);
            return randomChar;
        }
        
        function getRandomCharTwo () {
            const randomChar = Math.floor(Math.random() * charecters.length);
            return randomChar;
        }
        
        for (let i = 0; i < lengthIndex[currentIndex]; i++) {
            getPasswordOne.textContent += charecters[getRandomCharOne()];
            getPasswordTwo.textContent += charecters[getRandomCharTwo()];
    }

}

function handleCopyOne() {
    if (getPasswordOne.textContent){
        navigator.clipboard.writeText(getPasswordOne.textContent);
        alert("Copied the text: " + getPasswordOne.textContent);
    }
}

function handleCopyTwo() {
    if (getPasswordTwo.textContent){
        navigator.clipboard.writeText(getPasswordTwo.textContent);
        alert("Copied the text: " + getPasswordTwo.textContent);
    }
  
}

function handleToggleNumbers () {
    let cutLetters = charecters.slice(0, 52);
    let cutSymbols = charecters.slice(62, 91);
    // removes numbers
    if (charecters.length === 91) {
        let cutNumbers = cutLetters.concat(cutSymbols)
        charecters = cutNumbers
        getNumbers.textContent = "Include Numbers";
    } // add numbers
     else if (charecters.length === 81) {
        let newNumbers = cutLetters.concat(addNumbers, addSymbols)
        charecters = newNumbers
        getNumbers.textContent = "Remove Numbers";
    } // removes number if symbols also cut 
    else if (charecters.length === 62) {
        let cutNumbers = charecters.slice(0, 52);
        charecters = cutNumbers;
        getNumbers.textContent = "Include Numbers";
    } // adds numbers if symbols are in array
    else if (charecters.length === 52) {
        let newNumbers = charecters.concat(addNumbers);
        charecters = newNumbers
        getNumbers.textContent = "Remove Numbers";
    }
}



function handleToggleSymbols() {
    //removes symbols
    if (charecters.length === 91) {
        let cutSymbols = charecters.slice(0, 62);
        charecters = cutSymbols;
        getSymbols.textContent = "Include Symbols";
    } // removes symbols if numbers are also cut
    else if (charecters.length === 81){
        let cutSymbols = charecters.slice(0, 52)
        charecters = cutSymbols;
        getSymbols.textContent = "Include Symbols";
    } // adds symbols 
    else if (charecters.length === 62 || 52) {
        let newSymbols = charecters.concat(addSymbols);
        charecters = newSymbols;
        getSymbols.textContent = "Remove Symbols";
    }
}



function handleMinusLength(){
    if (currentIndex === 0) {
        getMinus.classList.add("disabled");
        getLength.textContent = lengthIndex[currentIndex];
    } else {
        currentIndex = currentIndex - 1;
        getPlus.classList.remove("disabled");
        getLength.textContent = lengthIndex[currentIndex];
    }
    
}


function handlePlusLength(){
    if (currentIndex === 7) {
        getPlus.classList.add("disabled");
        getLength.textContent = lengthIndex[currentIndex]
    } else {
        currentIndex = currentIndex + 1;
        getMinus.classList.remove("disabled")
        getLength.textContent = lengthIndex[currentIndex]
    }
    
}

getMinus.addEventListener('click', handleMinusLength)
getPlus.addEventListener('click', handlePlusLength)
getCopyOne.addEventListener('click', handleCopyOne)
getCopyTwo.addEventListener('click', handleCopyTwo)
getButton.addEventListener('click', handlePassword)
getSymbols.addEventListener('click', handleToggleSymbols)
getNumbers.addEventListener('click', handleToggleNumbers)