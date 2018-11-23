// Get the HTML Elements
var originalTextElement = $('#original-text');
var textArea = $('#text-area');
var messageCard = $('#message-card');
var message = $('#message');
var minutesElement = $('#minutes');
var secondsElement = $('#seconds');
var milliSecondsElement = $('#milli-seconds');
var resetButton = $('#reset-button');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var interval = 0;
var timerRunning = false;

// keypress for TextArea
textArea.keypress(function() {
    var textEnteredLength = $(this).val().length;
    if(textEnteredLength === 0 && !timerRunning){
        // start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
});

// keyUp Event for TextArea
textArea.keyup(function() {
    var textEntered = textArea.val();
    var originalText = originalTextElement.text();
    var partialText = originalText.substr(0,textEntered.length);

    if(textEntered === ''){
        // gray
        messageCard.removeClass('bg-success')
            .removeClass('bg-primary')
            .removeClass('bg-danger')
            .addClass('bg-light');
        message.text('');
    }
    else{
        if(textEntered === originalText){
            // green
            messageCard.removeClass('bg-light')
                .removeClass('bg-primary')
                .removeClass('bg-danger')
                .addClass('bg-success');
            message.text('Congratulations !!');
            // stop the timer
            clearInterval(interval);
        }
        else{
            if(textEntered === partialText){
                // blue
                messageCard.removeClass('bg-success')
                    .removeClass('bg-light')
                    .removeClass('bg-danger')
                    .addClass('bg-primary');
                message.text('Correct !!');
            }
            else{
                // red
                messageCard.removeClass('bg-success')
                    .removeClass('bg-primary')
                    .removeClass('bg-light')
                    .addClass('bg-danger');
                message.text('Wrong !!');
            }
        }
    }
});

// Reset Button Logic
resetButton.click(function() {
    // stop Timer
    clearInterval(interval);
    // Reset the variables
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;

    // clear the text area
    textArea.val('');

    // Set the Message to Empty
    messageCard.removeClass('bg-success')
        .removeClass('bg-primary')
        .removeClass('bg-danger')
        .addClass('bg-light');
    message.text('');

    // set the mins , secs , milliSecs to 00
    minutesElement.text('00');
    secondsElement.text('00');
    milliSecondsElement.text('00');

    // Generate a Random String
    generateRandomString();
});

// Start Timer
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutesElement.text(leadingZero(minutes));
    secondsElement.text(leadingZero(seconds));
    milliSecondsElement.text(leadingZero(milliSeconds));

    timer++;
}

// Leading Zero Function
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// Generate a Random String
function generateRandomString() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.text(randomString);
}
