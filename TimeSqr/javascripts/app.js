var main = function () {
var messages = ["First message", "Second message", "Third", "Fourth"];
var displayMessage = function (messageIndex) {
var $message = $("<p>").text(messages[messageIndex]).hide();
$(".message").empty();
$(".message").append($message);
$message.fadeIn();
setTimeout(function () {
messageIndex = messageIndex + 1;
displayMessage(messageIndex);
}, 3000);
};
displayMessage(0);
}
$(document).ready(main);