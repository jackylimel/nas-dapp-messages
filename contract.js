'use strict';

let TweetContract = function () {
  LocalContractStorage.defineMapProperty(this, "tweets");
};

TweetContract.prototype = {
  init: function () {
  },

  post: function (tweet) {
    let from = Blockchain.transaction.from;
    console.log("************* posting a tweet ************");
    console.log(tweet);
    console.log("************* tweet comes from ***********");
    console.log(from);
    this.tweets.set(from, tweet);
  },

  timeline: function () {
    console.log("*********** getting timeline ***********");
    let from = Blockchain.transaction.from;
    console.log("*********** the tweet ******************");
    console.log(this.tweets.get(from));
    return this.tweets.get(from);
  }
};

module.exports = TweetContract;