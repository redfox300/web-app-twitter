import React from 'react'
import Tweet from './Tweet'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import * as twitterProxy from './../data/twitter'

const styles = {
    tweetElement: {
        paddingTop: 6,
        paddingBottom: 6
    }
};

class Column extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            screenName : props.screenName,
            tweets: null
        }
    }
    componentWillMount(){
        //Fetch tweets from proxy and set them in component state
        twitterProxy.getBatchOfTweets(this.state.screenName).then((data)=> this.setState({tweets : data}));
    }
    render(){
        const { classes } = this.props;

        return(
            //Only render when tweets are available
            (this.state.tweets ?
                (<div>
                    <List>
                        {this.state.tweets.map(tweet => {
                            let myTweet = tweet;
                            //Handle retweets as it's own object
                            if(tweet.retweeted_status){
                                myTweet = tweet.retweeted_status;
                            }
                            return(
                                <ListItem key={tweet.id_str} className={classes.tweetElement}>
                                    <Tweet tweet={myTweet}/>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>) :null)
        )
    }
}

Column.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Column);
