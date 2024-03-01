document.addEventListener('DOMContentLoaded', function() {
    var display = document.getElementById('display');

    function clearDisplay() {
        display.value = '';
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    // Attach event listeners to calculator buttons
    var buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonText = this.textContent;
            if (buttonText === '=') {
                calculate();
            } else if (buttonText === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });
});
