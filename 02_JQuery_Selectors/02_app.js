/*
// All Elements Selectors
$('*').click(function() {
    $(this).css('color','red');
});
*/


/*
// All Elements Selectors

$('*').click(function() {
    $(this).css('color','red');
});

*/


/*

// Tag Selector
$('h3').click(function() {
    $(this).css('color' , 'red').css('background-color','black');
});

*/


// class Selector
$('.my-h3').click(function() {
    $(this).css('color' , 'red').css('background-color','black');
});

// Attribute Selector

/*
$(':text').focus(function() {
    $(this).css('background-color','blue');
});
$(':text').blur(function() {
    $(this).css('background-color','white');
});
*/

// Multiple Selectors
$(':password').focus(function() {
    $(this).css('background-color','blue');
});
$(':password').blur(function() {
    $(this).css('background-color','white');
});