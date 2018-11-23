// Get the HTML Elements
var firstNumberElement = $('#first_number');
var secondNumberElement = $('#second_number');
var operatorButton = $('#operator');
var equalsButton = $('#equals_button');
var resultButton = $('#result_button');
var plusButton = $('#plus-button');
var minusButton = $('#minus-button');
var divideButton = $('#div-button');
var multiplyButton = $('#mul-button');
var clearButton = $('#clear-button');

// Click event for PlusButton
plusButton.click(function() {
    operatorButton.text($(this).text());
});

// Click event for minusButton
minusButton.click(function() {
    operatorButton.text($(this).text());
});

// Click event for DivideButton
divideButton.click(function() {
    operatorButton.text($(this).text());
});

// Click event for MultiplyButton
multiplyButton.click(function() {
    operatorButton.text($(this).text());
});

// Click event for Equals Button Logic
equalsButton.click(function() {
    var firstNumber = firstNumberElement.val();
    var secondNumber = secondNumberElement.val();
    var operator = operatorButton.text().trim();
    var result = 0;

    if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.text(result);
    }
    else{
        resultButton.text('RESULT');
    }
});

// Clear Button Logic
clearButton.click(function() {
    firstNumberElement.val('');
    secondNumberElement.val('');
    operatorButton.text('+');
    resultButton.text('RESULT');
});