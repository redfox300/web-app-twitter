import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import './App.css'
import NavBar from './components/NavBar'
import Column from './components/Column'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTabValue : 0,
            names : ["appdirect", "techcrunch", "laughingsquid"]
        }
    }

    handleTabChange = (event, value) => {
        this.setState({ activeTabValue: value});
    };

    render() {
        console.log(this.props.width);
        if(isWidthUp('lg', this.props.width)){
            return (
                <React.Fragment>
                    <CssBaseline />
                    <NavBar />
                    <Grid container alignItems={"center"} direction={"column"} justify={"center"}>
                        <Grid item>
                            <Grid container alignItems={"flex-start"} justify={"center"} direction={"row"}>
                                <Grid item>
                                    <Column screenName={this.state.names[0]}/>
                                </Grid>
                                <Grid item>
                                    <Column screenName={this.state.names[1]}/>
                                </Grid>
                                <Grid item>
                                    <Column screenName={this.state.names[2]}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <CssBaseline />
                    <NavBar tabs={{state: this.state, onChange: this.handleTabChange}}/>
                    <Grid container alignItems={"center"} justify={"center"}>
                        <Grid item>
                            {this.state.activeTabValue === 0 && <Column screenName={this.state.names[0]}/>}
                            {this.state.activeTabValue === 1 && <Column screenName={this.state.names[1]}/>}
                            {this.state.activeTabValue === 2 && <Column screenName={this.state.names[2]}/>}
                        </Grid>
                    </Grid>
                </React.Fragment>
            );
        }
    }
}

export default withWidth()(App);
