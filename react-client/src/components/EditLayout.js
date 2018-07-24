import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

const styles = (theme) => ({
    radio: {
        paddingLeft: theme.spacing.unit * 2
    },
    text:{
        maxWidth: 150
    },
    gridItem: {
        paddingTop: 25
    }
});

class EditLayout extends React.Component {
    constructor(props){
        super(props);
        //Keep a copy of original values from props
        this.state = {
            open: false,
            originalValues: {
                palette: props.defaults.palette,
                nbOfTweets: props.defaults.nbOfTweets,
                column1: props.defaults.names[0],
                column2: props.defaults.names[1],
                column3: props.defaults.names[2]
            }
        };
        this.state.values = this.state.originalValues;
    }

    //If incoming props are different, update originalValues
    componentWillReceiveProps(nextProps){
        if(JSON.stringify(nextProps.defaults) !== JSON.stringify(this.props.defaults)){
            let newDefaults = {
                palette: nextProps.defaults.palette,
                nbOfTweets: nextProps.defaults.nbOfTweets,
                column1: nextProps.defaults.names[0],
                column2: nextProps.defaults.names[1],
                column3: nextProps.defaults.names[2]
            };
            this.setState({originalValues: newDefaults});
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        //Reset fields to original values when changes are not saved
        this.setState({ open: false , values: this.state.originalValues});
    };

    handleSubmit = (event) => {
        //Call handleLayoutChange to set state in App component
        let names = [this.state.values.column1, this.state.values.column2, this.state.values.column3]
        this.props.handleLayoutChange(names, this.state.values.nbOfTweets, this.state.values.palette);
        event.preventDefault();
        this.setState({open: false});
    };

    handleChange = name => event => {
        //Used to set inner state
        let values = {...this.state.values};
        values[name] = event.target.value;
        this.setState({values});
    };


    render() {
        const { fullScreen, classes } = this.props;
        const xsCellWidth = 8;
        const smCellWidth = 4;

        return (
            <div>
                <IconButton onClick={this.handleClickOpen} color={"inherit"}><EditIcon/></IconButton>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">{"Edit Layout"}</DialogTitle>
                    <form onSubmit={this.handleSubmit}>
                        <DialogContent>
                            <DialogContentText>
                                You can change which twitter accounts to follow as well as how many tweets you want the
                                columns to display. An option to change the color palette is also available.
                            </DialogContentText>
                            <Grid container direction={"row"} justify={"space-around"}>
                                <Grid item xs={xsCellWidth} sm={smCellWidth} className={classes.gridItem}>
                                    <Typography variant={"subheading"}>User timelines</Typography>
                                    <div className={classes.timelines}>
                                        <TextField
                                            required
                                            value={this.state.values.column1}
                                            onChange={this.handleChange('column1')}
                                            margin={"none"}
                                            className={classes.text}
                                        />
                                        <TextField
                                            required
                                            value={this.state.values.column2}
                                            onChange={this.handleChange('column2')}
                                            margin={"none"}
                                            className={classes.text}
                                        />
                                        <TextField
                                            required
                                            value={this.state.values.column3}
                                            onChange={this.handleChange('column3')}
                                            margin={"none"}
                                            className={classes.text}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={xsCellWidth} sm={smCellWidth} className={classes.gridItem}>
                                    <Typography variant={"subheading"}>Number of tweets</Typography>
                                    <div className={classes.numbTweets}>
                                        <TextField
                                            required
                                            value={this.state.values.nbOfTweets}
                                            onChange={this.handleChange('nbOfTweets')}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{min:"1",max:"100"}}
                                            margin="none"
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={xsCellWidth} sm={smCellWidth} className={classes.gridItem}>
                                        <Typography variant={"subheading"}>Color Palette</Typography>
                                        <div className={classes.radio}>
                                            <RadioGroup
                                                aria-label="palette"
                                                name="palette"
                                                value={this.state.values.palette}
                                                onChange={this.handleChange('palette')}

                                            >
                                                <FormControlLabel value="primary" control={<Radio color={"primary"}/>} label="Primary" />
                                                <FormControlLabel value="secondary" control={<Radio color={"secondary"}/>} label="Secondary" />
                                            </RadioGroup>
                                        </div>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color={this.state.values.palette}>
                                Cancel
                            </Button>
                            <Button type={"submit"} color={this.state.values.palette} autoFocus>
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        );
    }
}

EditLayout.propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withMobileDialog()(withStyles(styles)(EditLayout));