// Hide & Show Effects
var successCount = 0;
$('#success-button').click(function() {
    if(successCount % 2 === 0){
        $('#success-card').hide(2000);
        $(this).text('SHOW');
        successCount++;
    }
    else{
        $('#success-card').show(2000);
        $(this).text('HIDE');
        successCount++;
    }
});

// Fade in and Fade out , FadeToggle
var warningCount = 0;
$('#warning-button').click(function() {
    /*
    if(warningCount % 2 === 0){
        $('#warning-card').fadeOut(2000);
        warningCount++;
    }
    else{
        $('#warning-card').fadeIn(2000);
        warningCount++;
    }
    */
    $('#warning-card').fadeToggle(2000);
});

// Slide Down / Slide Up
var primaryCount = 0;
$('#primary-button').click(function() {
    if(primaryCount % 2 === 0){
        $('#primary-card').slideUp(2000);
        primaryCount++;
    }
    else{
        $('#primary-card').slideDown(2000);
        primaryCount++;
    }
});
