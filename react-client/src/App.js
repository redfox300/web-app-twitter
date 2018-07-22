import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import './App.css'
import NavBar from './components/NavBar'
import Column from './components/Column'


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <NavBar />
                <Grid container alignItems={"center"} direction={"column"} justify={"center"}>
                    <Grid item>
                        <Grid container alignItems={"flex-start"} justify={"center"} direction={"row"}>
                            <Grid item>
                                <Column screenName={"appdirect"}/>
                            </Grid>
                            <Grid item>
                                <Column screenName={"techcrunch"}/>
                            </Grid>
                            <Grid item>
                                <Column screenName={"laughingsquid"}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default App;
