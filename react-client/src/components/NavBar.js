import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EditLayout from './EditLayout'

const NavBar = (props) => {
    return(
        <div>
            <AppBar position={"fixed"} color={"primary"}>
                <Toolbar>
                    <Typography variant="title" color="inherit" style={{flexGrow:1}}>
                        Twitter Tweet Viewer
                    </Typography>
                    <EditLayout
                        defaults={{
                            palette: props.layout.palette,
                            nbOfTweets: props.layout.nbOfTweets,
                            names: props.layout.names
                        }}
                        handleLayoutChange={props.handleLayoutChange}
                    />
                    {/*<IconButton color={"inherit"}>*/}
                        {/*<EditIcon/>*/}
                    {/*</IconButton>*/}
                </Toolbar>
                {(props.tabs ?
                (<Tabs value={props.tabs.state.activeTabValue} onChange={props.tabs.onChange} fullWidth>
                    <Tab value={0} label={props.tabs.state.names[0]} />
                    <Tab value={1} label={props.tabs.state.names[1]} />
                    <Tab value={2} label={props.tabs.state.names[2]} />
                </Tabs>): null)}
            </AppBar>
        </div>
    )
};

export default NavBar;