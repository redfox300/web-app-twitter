import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import StyledDate from './StyledDate'
import TweetText from './TweetText'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    tweet:{
        maxWidth: 400
    },
    avatar:{
        width: 48,
        height: 48,
        marginLeft: 8,
        marginTop: 8,
        marginRight: 8,
        marginBottom: 0
    },
    username: {
        padding: 5,
        paddingTop:10
    },
    content:{
        padding: 5,
        paddingBottom: 8
    }
};

const Tweet = (props) => {
    const { classes } = props;

    return(
        <Paper className={classes.tweet}>
            <Grid container alignItems={"center"}>
                <Grid item>
                    {(props.tweet.user.profile_image_url ?
                        <Avatar className={classes.avatar} src={props.tweet.user.profile_image_url} />
                        : <Avatar className={classes.avatar} src={"/people.ico"}/>)}
                </Grid>
                <Grid item className={classes.username}>
                    <Typography variant={"title"}>
                        {props.tweet.user.name}
                        <br/>
                        <Typography component={"p"}>
                            @{props.tweet.user.screen_name}
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container direction={"column"} className={classes.content}>
                        <Grid item >
                            <TweetText tweet={props.tweet}/>
                        </Grid>
                        <Grid container direction={"row"} justify={"space-around"} alignItems={"flex-end"}>
                            <Grid item >
                                <Typography variant={'body1'} gutterBottom>
                                    <StyledDate date={props.tweet.created_at}/>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <a href={props.tweet.entities.urls[0].url} target={"_blank"}>
                                    <Button variant={"contained"} size="small" color="primary">
                                        View on Twitter
                                    </Button>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

Tweet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tweet);