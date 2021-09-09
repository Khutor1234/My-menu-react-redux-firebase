import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import { connect } from 'react-redux';
import { onEmailChange, onPasswordChange, onLogIn} from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';


const Login = ({email, password, onEmailChange, onPasswordChange, onLogIn}) => {
    const classes = useStyles();

    console.log(email, password)
    return(
        <Paper className={classes.mainPaper}>
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    {/* <TextField label='Логин' placeholder='Введите логин'  type='email' className={classes.input} onChange={e => onEmailChange(e)}/>
                    <TextField label='Пароль' placeholder='Введите пароль' type='password' className={classes.input} onChange={e => onPasswordChange(e)}/> */}
                    <Button type='submit' variant="contained" className={classes.button} 
                        onClick ={() => onLogIn()}>Войти с помощью Google</Button>
                    <Button variant="contained" className={classes.button}>Войти как гость</Button>
                </Paper>
            </Grid>
        </Paper>

    )
}


const mapStateToProps = ({user: {email, password}}) => {
    return{
        email, 
        password
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        onEmailChange: (e) => dispatch(onEmailChange(e.target.value)),
        onPasswordChange: (e) => dispatch(onPasswordChange(e.target.value)),
        onLogIn: () => onLogIn(menuService, dispatch)(),
    }
}


export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
