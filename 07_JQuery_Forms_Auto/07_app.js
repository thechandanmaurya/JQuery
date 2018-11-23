// Keyup Event for UserName Field
$('#username').keyup(function() {
    $('#user_text').text($(this).val());
});

// Keyup Event for Email Field
$('#email').keyup(function() {
    $('#email_text').text($(this).val());
});

// Keyup Event for Password Field
$('#password').keyup(function() {
    $('#pass_text').text($(this).val());
});