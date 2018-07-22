import React from 'react'
import Tweet from './Tweet'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    tweetElement: {
        paddingTop: 6,
        paddingBottom: 6
    }
};

class Column extends React.Component {
    render(){
        const { classes } = this.props;
        return(
            <div>
                <List>
                    {this.props.tweets.map(tweet => {
                        let myTweet = tweet;
                        //Handle retweets
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
            </div>
        )
    }
}

Column.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Column);
