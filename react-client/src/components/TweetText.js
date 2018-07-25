import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    text:{
        margin: 5,
        marginBottom: 10
    }
};

const TweetText = (props) => {
    const { classes } = props;
    let text = '';

    //Remove tweet source url from text at end of string
    if(props.tweet.truncated){
        text = props.tweet.text.split(/…/g)[0]+"…";
    }else{
        //Deal with non-truncated tweets
        //Matches on web urls like twitter's https://t.co/
        const matchURL = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g;

        let result = (props.tweet.text.match(matchURL) || []);

        // Remove last url if more than one is found in the original text
        if(result.length >= 2){
            text = props.tweet.text.replace(result[result.length - 1], '');
        } else{
            text = props.tweet.text;
        }

    }

    //Replace Hyperlinks
    text = text.replace(/(https?:\/\/[^\n ]+)/g, '<a href="$1" target="_blank">$1</a>');

    //Replace Mentions
    text = text.replace(/(@[^ ]+)/g, '<a href="http://twitter.com/$1" target="_blank">$1</a>');

    //Replace hashtags, there is a second pass with replace to remove # from url in <a> tag.
    text = text.replace(/(#[^ ]+)/g, '<a href="http://twitter.com/hashtag/$1" target="_blank">$1</a>');
    text = text.replace(/(\/#)/g,'/');

    //Set the modified tweet text parameter as inner html to a <p>
    return (
        <React.Fragment>
            <Typography variant={"headline"}>
                <p className={classes.text} dangerouslySetInnerHTML={{__html: text}} ></p>
            </Typography>
        </React.Fragment>
    );
};

TweetText.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TweetText);