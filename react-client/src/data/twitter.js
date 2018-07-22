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
export { getSingleTweetById, getBatchOfTweets };