$.widget("answa.vote", {

    options : {
        pollEndpoint : "http://answa.net/vote.php",
        votePosted : {}
    },

    _state : {
        clientId : ""
    },

    _create : function() {
        this.state.clientId = new Fingerprint().get();
    },

    _postVote : function(isPositive, pollId) {
        $.post(
            this.settings.pollEndpoint,
            {
                "positive" : isPositive,
                "pollid" : pollId,
                "clientId" : this.state.clientId
            },
            this.options.votePosted,
            "json"
        );
    },

    voteUp : function(pollId) {
        postVote(true, pollId);
    },

    voteDown : function(pollId) {
        postVote(false, pollId);
    }
}
