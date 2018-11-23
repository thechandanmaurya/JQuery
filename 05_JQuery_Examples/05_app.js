// SMS App
$('#text-area').keyup(function() {
    var maxLength = 100;
    var textLength = $(this).val().length;
    $('#char-count').text(maxLength - textLength);
});

// File Upload
$('#file').change(function() {
    $('#form-button').removeAttr('disabled');
});


// Change Image
var count = 0;
$('#change-button').click(function() {
    if(count % 2 === 0){
        $('#card-img').fadeOut('2000');
        count++;
    }
    else{
        $('#card-img').fadeIn('2000').attr('src','../img/image2.jpeg');
        count++;
    }
});