import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// hook
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.jpg';
import useStyles from './styles';
const App = () =>{
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit" >
            <Typography variant="h2" align="center">My Social Network</Typography>
            <img src={memories} alt="memories" width="100"></img>
        </AppBar>
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing="3" >
                <Grid item xs={12} sm={7} >
                    <Posts />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Form />
                </Grid>
            </Grid>
        </Container>
        </Grow>
        </Container>
    )
}

export default App;