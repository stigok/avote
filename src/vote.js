var Answanet = function(endpoint, callback) {
    this.endpoint = endpoint;
    this.fingerprint = new Fingerprint().get();
    this.callback = callback;
};

Answanet.prototype = {
    vote : function(pollId, answer) {
        $.post(
            this.endpoint,
            {
                "v" : answer ? 1 : 0,
                "p" : pollId,
                "x" : this.state.clientId
            },
            function(data, textStatus, jxXHR) {
                this.callback(data);
            }
        );
    },
    yes : function(pollid) {
        vote(pollid, true);
    },
    no : function(pollid) {
        vote(pollid, false);
    }
};
