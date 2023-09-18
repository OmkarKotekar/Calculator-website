function textvalue(button) {
    document.getElementById('screen').value += button.textContent;
}

function clearScreen() {
    document.getElementById('screen').value = '0';
}

function backspace() {
    var inputField = document.getElementById('screen');
    var value = inputField.value;
    inputField.value = value.substring(0, value.length - 1);
}

function getResult() {
    var inputField = document.getElementById('screen');
    var expression = inputField.value;
    if (expression.indexOf('+') !== -1) {

        // Extract the numbers from the expression
        var numbers = expression.split('+');

        // Perform the addition
        var result = 0;
        for (var i = 0; i < numbers.length; i++) {
            var number = parseFloat(numbers[i]);
            if (!isNaN(number)) {
                result += number;
            }
        }

        // Update the input field with the result
        inputField.value = result;
    } else if (expression.indexOf('-') !== -1) {
        var numbers = expression.split('-');
        var result = 0;
        if (numbers.length > 0) {
            result = parseFloat(numbers[0]);
            for (var i = 1; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if (!isNaN(number)) {
                    result -= number;
                }
            }
        }

        // Update the input field with the result
        inputField.value = result;
    } else if (expression.indexOf('*') !== -1) {
        // Multiplication operation
        var numbers = expression.split('*');
        var result = 1;
        if (numbers.length > 0) {
            for (var i = 0; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if (!isNaN(number)) {
                    result *= number;
                }
            }
        }
        inputField.value = result;
    } else if (expression.indexOf('/') !== -1) {
        // Division operation
        var numbers = expression.split('/');
        var result = 0;
        if (numbers.length > 0) {
            result = parseFloat(numbers[0]);
            for (var i = 1; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if(number == 0){
                    result = 'undefined';
                }
                if (!isNaN(number) && number !== 0) {
                    result /= number;
                }
            }
        }
        inputField.value = result;
    }
}

function percent() {
    var inputField = document.getElementById('screen');
    var expression = inputField.value;
    if (expression.indexOf('+') !== -1) {
        // Addition operation
        var numbers = expression.split('+');
        var result = 0;
        if (numbers.length > 0) {
            for (var i = 0; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if (!isNaN(number)) {
                    result += number;
                }
            }
        }
        result = result * 0.01; // Calculate percentage
        inputField.value = result;
    } else if (expression.indexOf('-') !== -1) {
        // Subtraction operation
        var numbers = expression.split('-');
        var result = 0;
        if (numbers.length > 0) {
            result = parseFloat(numbers[0]);
            for (var i = 1; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if (!isNaN(number)) {
                    result -= number;
                }
            }
        }
        result = result * 0.01; // Calculate percentage
        inputField.value = result;
    } else if (expression.indexOf('*') !== -1) {
        // Multiplication operation
        var numbers = expression.split('*');
        var result = 1;
        if (numbers.length > 0) {
            for (var i = 0; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if (!isNaN(number)) {
                    result *= number;
                }
            }
        }
        result = result * 0.01; // Calculate percentage
        inputField.value = result;
    } else if (expression.indexOf('/') !== -1) {
        // Division operation
        var numbers = expression.split('/');
        var result = 1;
        if (numbers.length > 0) {
            result = parseFloat(numbers[0]);
            for (var i = 1; i < numbers.length; i++) {
                var number = parseFloat(numbers[i]);
                if (!isNaN(number)) {
                    result /= number;
                }
            }
        }
        result = result * 0.01; // Calculate percentage
        inputField.value = result;
    }
}
