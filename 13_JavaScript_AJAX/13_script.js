// function getAJAX()
function getAJAX() {

    // Create an AJAX Request
    var http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','persons.xml',true);

    // Send the AJAX Request
    http.send();

    // OnReadyStateChange Events
    http.onreadystatechange = function() {
        // response is ready and status is OK
        if(http.readyState === 4 && http.status === 200){
            process(http);
        }
    }
}

// Process the Response
function process(xml) {
    var xmlData = xml.responseXML;
    var imageHTMLString = '';
    var galleryElement = document.querySelector('#image-gallery-div');
    var contactList = xmlData.getElementsByTagName('contacts');
    for(var i=0; i<contactList.length;i++){
        var imageSource = contactList[i].childNodes[21].childNodes[1].textContent;
        imageHTMLString += "<img src='" + imageSource +  "'>" + "\n";
    }
    galleryElement.innerHTML = imageHTMLString;
}