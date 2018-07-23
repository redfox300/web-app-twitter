import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import './App.css'
import NavBar from './components/NavBar'
import Column from './components/Column'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import ScrollToTopFAB from './components/ScrollToTopFAB'

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

    scrollToTop = () => {
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        //Incremental scroll based on distance from top
        if(top > 5000){
            window.scrollTo(0, top - 200);
            setTimeout(this.scrollToTop, 4);
        }else if (top > 1500) {
            window.scrollTo(0, top - 100);
            setTimeout(this.scrollToTop, 4);
        }else if (top > 300) {
            window.scrollTo(0, top - 30);
            setTimeout(this.scrollToTop, 4);
        }else if(top > 0){
            window.scrollTo(0, top - 10);
            setTimeout(this.scrollToTop, 4);
        }
    };

    render() {
        if(isWidthUp('lg', this.props.width)){
            return (
                <React.Fragment>
                    <CssBaseline />
                    <NavBar />
                    <Grid container alignItems={"center"} direction={"column"} justify={"center"} style={{paddingTop: 64}}>
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
                    <ScrollToTopFAB handleClick={this.scrollToTop} />
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <CssBaseline />
                    <NavBar tabs={{state: this.state, onChange: this.handleTabChange}}/>
                    <Grid container alignItems={"center"} justify={"center"} style={{paddingTop: 104}}>
                        <Grid item>
                            {this.state.activeTabValue === 0 && <Column screenName={this.state.names[0]}/>}
                            {this.state.activeTabValue === 1 && <Column screenName={this.state.names[1]}/>}
                            {this.state.activeTabValue === 2 && <Column screenName={this.state.names[2]}/>}
                        </Grid>
                    </Grid>
                    <ScrollToTopFAB mini={true} handleClick={this.scrollToTop}/>
                </React.Fragment>
            );
        }
    }
}

export default withWidth()(App);
