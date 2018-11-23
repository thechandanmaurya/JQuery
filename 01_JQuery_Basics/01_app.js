
$('#uiButton').click(function() {
    $('#uiButton').text('MEAN Stack').removeClass('btn-success').addClass('btn-teal');
});

var  count = 0;

$('#c_header').click(function() {
    if(count % 2 === 0){
        $('#c_body').slideUp();
        count++;
    }
    else{
        $('#c_body').slideDown();
        count++;
    }
});

$('#username').keyup(function() {
    var user = $('#username').val();
    $('#userText').text(user);
});