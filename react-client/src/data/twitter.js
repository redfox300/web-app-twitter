//All Twitter API calls are sent to the twitter-proxy from here.

const API_PROXY = "http://localhost:7890/1.1";

function getSingleTweetById(id){
    //Can add tweet_mode=extended to request to return non-truncated tweet
    return fetch(`${API_PROXY}/statuses/show.json?id=${id}`).then(function (response) {
        return response.json().then(data => {return data});
    });
}

function getBatchOfTweets(user,amount = 30) {
    //Can add tweet_mode=extended to request to return non-truncated tweet
    return fetch(`${API_PROXY}/statuses/user_timeline.json?count=${amount}&screen_name=${user}`).then(function (response) {
        return response.json().then(data => {return data});
    });
}

function doesUserExist(user) {
    return fetch(`${API_PROXY}/users/show.json?screen_name=${user}`)
        .then(function(response) {
            //If response is a 404 with json body with code 50, the user does not exist.
            //other non 200 responses treated as errors
            if(!response.ok){
                if(response.status === 404){
                    response.json().then(function (data) {
                        if(data.errors && data.errors[0].code === 50){
                            //User does not exist
                            return false;
                        } else throw(new Error(response.status || response.statusText));
                    });
                } else {
                    throw(new Error(response.status || response.statusText));
                }
            }
            else {
                //User exists
                return true;
            }
        })
        .catch(function (error) {
            console.log('Checking if user exists failed with '+error.message);
        });
}
export { getSingleTweetById, getBatchOfTweets, doesUserExist };