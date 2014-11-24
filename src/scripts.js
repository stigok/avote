var o = {

    settings : {
        pollEndpoint : "http://",
        postInterval : 500,
    },

    state : {
        postIntervalId : -1,
        queue : [],
        emptyQueueSuccessions : 0
    },

    _create : function() {
        this.state.postIntervalId = setInterval(this.handleQueue, this.settings.postInterval);
    },

    _handleQueue : function() {
        if (this.state.queue.length === 0) {
            this.state.emptyQueueSuccessions++;
        }

        // Post all cast votes objects in turn
        $.post(
            this.settings.pollEndpoint,
            this.state.queue,
            this._onVotePosted,
            "json"
        );

        for (var i = 0; i < this.state.queue.length; i++) {
            var o = this.state.queue[i];
            if (o.handled === true) {

            }
        }
    },

    postvote : function(isPositiveVote, pollid) {
        $.post(
            this.settings.pollEndpoint,
            {
                "positive" : isPositiveVote,
                "pollid" : pollid,
                "ip" : this.fetchIpAddress()
            },
            this._onVotePosted,
            "json"
        );
    },

    fetchIpAddress : function() {
        $.get(
            this.settings.pollEndpoint,
            {
                "action" : "getip"
            },
            function()
        );
    },

    voteup : function() {
        postvote(true, pollid);
    },

    votedown : function() {
        postvote(false, pollid);
    }

}