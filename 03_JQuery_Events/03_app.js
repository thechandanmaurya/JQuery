// Click event
var loginButton = $('#login-button');
$(loginButton).click(function() {
    $(this).removeClass('btn-success').addClass('btn-primary').text('Register');
});

// dbClick
$(loginButton).dblclick(function() {
    $(this).removeClass('btn-success')
        .removeClass('btn-primary')
        .addClass('btn-warning').text('SignUp');
});


var textArea = $('#text-area');

// Focus Event
textArea.focus(function() {
    textArea.css('background-color','lightblue').css('width','400px');

});

// Blur Event
textArea.blur(function() {
    textArea.css('background-color','lightgray').css('width','200px');
});
