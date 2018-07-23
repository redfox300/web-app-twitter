import React from 'react'
import Button from '@material-ui/core/Button'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 3,
    }
});

const ScrollToTopFAB = (props) => {
    const { classes } = props;

    if(props.mini){
        return (
            <Button variant="fab" mini onClick={props.handleClick} className={classes.fab}>
                <UpIcon/>
            </Button>
        );
    }else{
        return (
            <Button variant="fab" onClick={props.handleClick} className={classes.fab}>
                <UpIcon />
            </Button>
        );
    }
};

ScrollToTopFAB.propTypes = {
    classes : PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollToTopFAB);