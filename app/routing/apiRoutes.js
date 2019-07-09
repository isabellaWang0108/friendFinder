var friends=require("../data/friend.js");

module.exports = function(app) {

    app.post("/api/friends", function (req, res) {
        var userData = req.body;

        console.log(userData);

        friends.push(userData);

        res.json(userData);
    });

    app.get("/api/friends", function (req, res) {
        // check the value of all options between userinput and charaters in database
        // return res.json(friends);

        ////////////////////////////////////
        var theFriend = 0;
        var count = 0;
        var scoreOfYou = friends[friends.length - 1].scores;
        

        
        for (var i = 0; i < friends.length-1; i++) {
            var scoreOfCompare = friends[i].scores;
            var theScore = 0;
        // //     //  do the calculation of each element i

            for (var j = 0; j < scoreOfCompare.length; j++) {
                if ( (parseInt(scoreOfYou[j]) - parseInt(scoreOfCompare[j]) ) >= 0) {
                    theScore += (parseInt(scoreOfYou[j]) - parseInt(scoreOfCompare[j]));
                } else if ((scoreOfYou - scoreOfCompare[j]) < 0) {
                    theScore += (parseInt(scoreOfCompare[j])-parseInt(scoreOfYou[j]));
                }
                
            };
            if (theScore > theFriend) {
                theFriend = theScore;
                count = parseInt(i);
            } else {
                console.log("not big enough");
            };
            console.log(count);


        }



        return res.json(friends[count]);

    });



}