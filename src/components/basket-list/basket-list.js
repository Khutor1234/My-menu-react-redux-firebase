import { connect } from 'react-redux';
import { fetchMenu, onDeleteMenu} from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid, Button} from '@material-ui/core';
import BasketListItem from '../basket-list-item';
import ButtonCountIngredients from '../button-count-ingredients';
import { Redirect } from 'react-router';
import { useEffect } from 'react';
import useStyles from './style';

const BasketList = ({onDeleteMenu}) => {
    const classes = useStyles();
    const day = [0, 1, 2, 3, 4, 5, 6];
    return(
        <Container>
            <Grid container style = {{marginTop: 50}} justifyContent='center'>
                <Grid item>
                    {
                        day.map((day) => {
                            return(
                                <Grid item key={day}>
                                    <BasketListItem
                                        day={day}
                                    />
                                </Grid>
                            )
                        })    
                    }
                </Grid>
            </Grid>
            <Button variant="contained" className={classes.button} onClick = {() => onDeleteMenu()}>Удалить это меню</Button>
            <ButtonCountIngredients/>
        </Container>
    )
}

const  BasketListContainer = ({user, loading, error, menu, onDeleteMenu, fetchMenu}) => {

    useEffect(() => {
        fetchMenu(user)
    }, [user]);

    if(loading){
        return (
            <div style = {{paddingTop: 110}}>
                <Spinner/>
            </div>
        )
    }

    if(error){
        return <ErrorIndicator/>
    }

    if(!user){
        return <Redirect to="/"/>
    }

    return(
        <BasketList onDeleteMenu = {() => onDeleteMenu(menu)}/>
    )
}

const mapStateToProps = ({ basket: { loading, error, menu}, user: {user}}) => {
    return{
        loading, 
        error,
        menu,
        user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchMenu: (user) => fetchMenu(menuService, dispatch)(user),
        onDeleteMenu:  (menu) => onDeleteMenu(menuService, dispatch)(menu)
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BasketListContainer);