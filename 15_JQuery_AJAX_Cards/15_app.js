$('#load-ajax-btn').click(function() {

    // Create AJAX Request
    $.getJSON('https://gist.githubusercontent.com/thenaveensaggam/1e92b311ede07a86cda6d96b457a918a/raw/ad136d955810ef8c7db067d50f1b8465c7148cbe/13112018.json',function(data) {
        var contactList = data.contacts;
        var imageString = '#image';
        var cardString = '#card';
        var imageName = '_name';
        var dob = '#dob';
        for(var i=0; i<contactList.length; i++){
            var imageSource = contactList[i].picture.large;
            var fullName = contactList[i].name.first + ' ' + contactList[i].name.last;
            var dateOfBirth = contactList[i].dob;
            $(imageString + (i + 1)).attr('src',imageSource);
            $(cardString + (i + 1) + imageName).text(fullName);
            $(dob + (i + 1)).text(dateOfBirth);
        }
    });
});