import {Grid, Typography, Avatar, Badge, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
import { connect } from 'react-redux';
import {onDeleteRecipe} from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';


const BasketItem = ({time, day, onDeleteRecipe}) => {
    const classes = useStyles();
    const menuItem = time[day];

    if(menuItem){
        return(
            <Badge 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                overlap="circular"
                color="primary"
                className={classes.badge}
                badgeContent={menuItem.title}>
                <Avatar className={classes.avatar} alt="Фото рецепта" src="https://media.istockphoto.com/photos/delicious-pizza-with-ingredients-and-spices-picture-id924476838?k=6&m=924476838&s=612x612&w=0&h=ORCMVPZ_h5uZuZWG35jtw2ovGhGTdb-bRh3LW3DQNaE=" />
                <IconButton aria-label="delete" color="secondary" className={classes.button} onClick ={() => onDeleteRecipe(menuItem)}>
                    <DeleteIcon />
                </IconButton>
            </Badge> 
        )
    } else {
        return(
            <Badge className={classes.badge}>
                <Avatar className={classes.avatar}>Не выбрано</Avatar>
            </Badge> 
        )
    }
}

const BasketItemContainer = ({menu, day, onDeleteRecipe}) => {
    const classes = useStyles();

    const breakfast = menu.filter(item => item.category === 'Завтрак');
    const lunch = menu.filter(item => item.category === 'Обед');
    const diner = menu.filter(item => item.category === 'Ужин');

    console.log(menu)
    return(
        <Grid container className={classes.basket} spacing={4} alignItems='center'>
            <Grid item>
                <Typography
                    variant='h6'
                    className={classes.title}>День {day + 1}</Typography>
            </Grid>
            <Grid item>
                <BasketItem time={breakfast} day={day} onDeleteRecipe ={() => onDeleteRecipe(breakfast[day])} />
            </Grid>
            <Grid item>
                <BasketItem time={lunch} day={day} onDeleteRecipe ={() => onDeleteRecipe(lunch[day])}/>
            </Grid>
            <Grid item>
                <BasketItem time={diner} day={day} onDeleteRecipe ={() => onDeleteRecipe(diner[day])}/>
            </Grid>
        </Grid>
)}

const mapStateToProps = ({ basket: { menu }}) => {
    return{
        menu
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        onDeleteRecipe: (menuItem) => onDeleteRecipe(menuService, dispatch)(menuItem)
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BasketItemContainer);