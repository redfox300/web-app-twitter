import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import StyledDate from './StyledDate'
import TweetText from './TweetText'
import Paper from '@material-ui/core/Paper'

import Grid from '@material-ui/core/Grid'

const Tweet = (props) => {

    return(
        <Paper>
            <Grid container direction={"column"} style={{padding: 5}}>
                <Grid item>
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
        </Paper>
    )
};

export default Tweet;