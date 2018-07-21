import React from 'react'
import Typography from '@material-ui/core/Typography'

const TweetText = (props) => {
    let text = '';

    //Remove tweet source url from text at end of string
    if(props.tweet.truncated){
        text = props.tweet.text.split(/…/g)[0]+"…";
    }else{
        const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/
        text = props.tweet.text.replace(regex, '');
    }

    //Replace Hyperlinks
    text = text.replace(/(https?:\/\/[^ ]+)/g, '<a href="$1" >$1</a>');

    //Replace Mentions
    text = text.replace(/(@[^ ]+)/g, '<a href="http://twitter.com/$1">$1</a>');

    //Rplace Hashtags, there is a second pass with replace to remove # from url.
    text = text.replace(/(#[^ ]+)/g, '<a href="http://twitter.com/hashtag/$1">$1</a>');
    text = text.replace(/(\/#)/g,'/');

    //Set the modified tweet text parameter as inner html to a <p>
    return (
        <React.Fragment>
            <Typography variant={"headline"}>
                <p dangerouslySetInnerHTML={{__html: text}}></p>
            </Typography>
        </React.Fragment>
    );
};

export default TweetText;