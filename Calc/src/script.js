let display = document.getElementById('display');
        let currentInput = '';
        let shouldResetDisplay = false;

        // Get all calculator buttons
        const buttons = document.querySelectorAll('.calc-btn');

        // Add event listeners to all buttons
        buttons.forEach((button) => {
            button.addEventListener('click', function() {
                value = this.getAttribute('data-value');
                handleButtonClick(value);
            });
        });

        function handleButtonClick(value) {
            if (value == 'CE') {
                currentInput = '';
                display.innerHTML = '0';
                shouldResetDisplay = false;
            } else if (value == '=') {
                if (currentInput) {
                        const result = eval(currentInput);
                        display.innerHTML = result;
                        currentInput = result.toString();
                        shouldResetDisplay = true;
                    }
            } else {
                if (shouldResetDisplay) {
                    currentInput = '';
                    shouldResetDisplay = false;
                }
                
                currentInput += value;
                display.innerHTML = currentInput;
            }
        }