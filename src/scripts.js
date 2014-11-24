var avote = new Answanet("http://localhost:8080/", voteComplete);
var pollId = 1;

function voteComplete(data) {
    console.log(data);
}

$(function() {

    $('#voteup').click(function() {
        avote.yes(pollId);
    });

    $('#votedown').click(function() {
        avote.no(pollId);
    });

});
