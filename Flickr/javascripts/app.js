var evntHandler = function(){
var messageIndex = 0;
    var prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    var suffixURL = "&format=json&jsoncallback=?";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;

    //clear old photos
    $(".photos").html("");

    $.getJSON(requestURL, function(flickrResponse) {
        console.log(flickrResponse);
        var photosArr = flickrResponse.items;
           var displayMessage = function (messageIndex) {
var $photos = $("<img>").attr("src", photosArr[messageIndex].media.m).hide();
$(".photos").empty();
$(".photos").append($photos);
$photos.fadeIn();
setTimeout(function () {
messageIndex = messageIndex + 1 % photosArr.length;
displayMessage(messageIndex);
}, 3000);
        };
displayMessage(messageIndex);
    });
};


$("button").on("click", evntHandler);

$("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
        evntHandler();
    }
});