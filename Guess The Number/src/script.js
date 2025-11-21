// Guess The Number - vanilla JS logic without changing HTML
 
document.addEventListener('DOMContentLoaded', () => {
    const numberDisplay = document.querySelector('p.bg-white.p-5.px-10');
    const hintText = document.querySelector('.form__group .text-center');
    const input = document.querySelector('.form__group .form__field');
 
    let secretNumber = generateSecret(); 
    
    function setHint(message) {
        hintText.innerHTML = message;
    }
    function generateSecret() {
        return parseInt(Math.random() * 20);
    }
    function resetStyles() {
        numberDisplay.textContent = '?';
    }
 
    function handleCheck() {
        if (!input) return;
        const value = input.value;
        if (value === '') {
            setHint('Enter a number between 1 and 20');
            return;
        }
 
        const guess = Number(value);
        if (!Number.isInteger(guess) || guess < 1 || guess > 20) {
            setHint('Invalid input. Use an integer 1 - 20');
            return;
        }
 
        if (guess === secretNumber) {
            if (numberDisplay) numberDisplay.textContent = String(secretNumber);
            setHint(`Correct! <br> Click "Try Again!" to play again`);
        } else if (guess > secretNumber) {
            setHint('Too high!');
        } else {
            setHint('Too low!');
        }
    }
 
    function handleAgain() {
        secretNumber = generateSecret();
        console.log(secretNumber);
        
        if (input) input.value = '';
        resetStyles();
        setHint('[ between 1 - 20 ]');
    }
 
    // Expose handlers globally for inline onclick usage
    window.handleCheck = handleCheck;
    window.handleAgain = handleAgain;
 
    // Initialize
    resetStyles();
    setHint('[ between 1 - 20 ]');
});
 
 
