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
import * as twitterProxy from './../data/twitter'
import update from 'immutability-helper';

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
        //Keep a copy of original prop values using originalValues
        this.state = {
            open: false,
            textFieldHasError: Array(3).fill(false),
            textFieldHelpText: Array(3).fill(''),
            originalValues: {
                palette: props.defaults.palette,
                nbOfTweets: props.defaults.nbOfTweets,
                columns: props.defaults.names
            }
        };
        //Need deep copy of originalValues
        this.state.values = JSON.parse(JSON.stringify(this.state.originalValues));
    }

    //If incoming props are different, update originalValues
    componentWillReceiveProps(nextProps){
        if(JSON.stringify(nextProps.defaults) !== JSON.stringify(this.props.defaults)){
            let newDefaults = {
                palette: nextProps.defaults.palette,
                nbOfTweets: nextProps.defaults.nbOfTweets,
                columns: nextProps.defaults.names
            };
            this.setState({originalValues: newDefaults});
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        //Reset fields to original values when changes are not saved
        this.setState({
            open: false ,
            textFieldHasError: Array(3).fill(false),
            textFieldHelpText: Array(3).fill(''),
            values: JSON.parse(JSON.stringify(this.state.originalValues))});
    };

    checkIfColumnValid = (index) => {
        //only run check if current values differ from saved defaults
        if(this.state.originalValues.columns[index] !== this.state.values.columns[index]){
            twitterProxy.doesUserExist(this.state.values.columns[index])
                .then((exists)=>{
                    if(exists){
                        this.setState((prevState) => ({
                            textFieldHasError: update(prevState.textFieldHasError, {[index]:{$set:false}}),
                            textFieldHelpText: update(prevState.textFieldHelpText, {[index]:{$set:''}})
                        }));
                    }else{
                        this.setState((prevState) => ({
                            textFieldHasError: update(prevState.textFieldHasError, {[index]:{$set:true}}),
                            textFieldHelpText: update(prevState.textFieldHelpText, {[index]:{$set:"User doesn't exist"}})
                        }));
                    }
                });
        }else if(this.state.textFieldHasError[index]){
            //if text matches but an error flag is found, reset it
            this.setState((prevState) => ({
                textFieldHasError: update(prevState.textFieldHasError, {[index]:{$set:false}}),
                textFieldHelpText: update(prevState.textFieldHelpText, {[index]:{$set:''}})
            }));
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        //Only send new values back to parent if no error flags found, else do nothing
        if(!this.state.textFieldHasError.includes(true)){
            //Call handleLayoutChange to set state in App component
            this.props.handleLayoutChange(JSON.parse(JSON.stringify(this.state.values.columns)), this.state.values.nbOfTweets, this.state.values.palette);
            this.setState({open: false});
        }
    };

    handleChange = (name, index) => event => {
        //Used to set inner state
        let newValues = {...this.state.values};
        if(index != null){
            //if index is provided then the change is for a column textfield, check validity
            newValues[name][index]= event.target.value;
            this.checkIfColumnValid(index);
        }else{
            newValues[name] = event.target.value;
        }
        this.setState({values: newValues});
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
                                            error={this.state.textFieldHasError[0]}
                                            helperText={this.state.textFieldHelpText[0]}
                                            value={this.state.values.columns[0]}
                                            onChange={this.handleChange('columns',0)}
                                            margin={"none"}
                                            className={classes.text}
                                        />
                                        <TextField
                                            required
                                            error={this.state.textFieldHasError[1]}
                                            helperText={this.state.textFieldHelpText[1]}
                                            value={this.state.values.columns[1]}
                                            onChange={this.handleChange('columns',1)}
                                            margin={"none"}
                                            className={classes.text}
                                        />
                                        <TextField
                                            required
                                            error={this.state.textFieldHasError[2]}
                                            helperText={this.state.textFieldHelpText[2]}
                                            value={this.state.values.columns[2]}
                                            onChange={this.handleChange('columns',2)}
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