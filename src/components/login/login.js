import React from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import useStyles from './style';
import { connect } from 'react-redux';
import { onLogIn} from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';
import {authProvider} from '../../services/firebase';
import { Redirect } from 'react-router';

const Login = ({onLogIn, user}) => {
    const classes = useStyles();

    if(user){
        return <Redirect to="/recipes"/>
    }
    
    return(
        <Paper className={classes.mainPaper}>
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    <Button type='submit' variant="contained" className={classes.button} 
                        onClick ={() => onLogIn(authProvider)}>Войти с помощью Google</Button>
                </Paper>
            </Grid>
        </Paper>

    )
}


const mapStateToProps = ({user: {user}}) => {
    return{
        user
    }
}

const mapDispatchToProps = ( ownProps) => {
    const {menuService} = ownProps;

    return {
        onLogIn: (provider) => onLogIn(menuService)(provider),
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);

