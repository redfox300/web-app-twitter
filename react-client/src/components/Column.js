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
            tweets: null
        }
    }
    componentDidMount(){
        //Fetch tweets from proxy and set them in component state
        twitterProxy.getBatchOfTweets(this.props.screenName, this.props.count).then((data)=> this.setState({tweets : data}));
    }
    componentDidUpdate(prevProps){
        //Check if props have changed; fetch data again on change
        if(this.props.screenName !== prevProps.screenName || this.props.count !== prevProps.count){
            twitterProxy.getBatchOfTweets(this.props.screenName, this.props.count).then((data)=> this.setState({tweets : data}));
        }
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
                                    <Tweet tweet={myTweet} palette={this.props.palette}/>
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
