var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/data/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/data/friends", function (req, res) {
        var newFriends = req.body;
        var total = 1000;
        var temp = 0;
        var bestFriend;

        //loops through the array of friends objects
        for (let i = 0; i < friends.length; i++) {
            var currentIndex = friends[i];
            temp = 0;
            //loops through the array of answers in each friend
            for (let j = 0; j < currentIndex.scores.length; j++) {
                temp += Math.abs(currentIndex.scores[j] - newFriends.scores[j]);
            }
            if (temp < total) {
                bestFriend = currentIndex;
                total = temp;
            }
        }
        res.json(bestFriend);

    });

};