/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const displaySwtich = document.querySelector('#display-switch');



displaySwtich.addEventListener('click', function handleDisplayToggle() {
    const convertedContainer = document.querySelector('.converted-cont')
    const result = document.querySelectorAll('.result-cont')
    const measurement = document.querySelectorAll('.measurement')
    
    
    if (displaySwtich.checked) {
        function darkModeOn();
    } else {
        function darkModeOff();
    }
    
    
    function darkModeOn () {
        convertedContainer.classList.add('dark-blue')
    
        for (let i = 0; i < result.length; i++) {
            result[i].classList.add('blue');
        }
        
        for (let i = 0; i < measurement.length; i++) {
            measurement[i].classList.add('light-text');        
        }
    }
    
    function darkModeOff () {
        convertedContainer.classList.remove('dark-blue')
    
        for (let i = 0; i < result.length; i++) {
            result[i].classList.remove('blue');
        }
        
        for (let i = 0; i < measurement.length; i++) {
            measurement[i].classList.remove('light-text');        
        }
    }
})