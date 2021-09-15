import {Grid, Typography, Avatar, Badge, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';
import { connect } from 'react-redux';
import {onDeleteRecipe} from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';

const BasketListItem = ({time, day, onDeleteRecipe}) => {
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
                <Avatar className={classes.avatar} alt="Фото рецепта" src={menuItem.img} />
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

const BasketListItemContainer = ({menu, day, onDeleteRecipe}) => {
    const classes = useStyles();

    const breakfast = menu.filter(item => item.category === 'Завтрак');
    const lunch = menu.filter(item => item.category === 'Обед');
    const diner = menu.filter(item => item.category === 'Ужин');

    return(
        <Grid container className={classes.basket} spacing={4} alignItems='center'>
            <Grid item>
                <Typography
                    variant='h6'
                    className={classes.title}>День {day + 1}</Typography>
            </Grid>
            <Grid item>
                <BasketListItem time={breakfast} day={day} onDeleteRecipe ={() => onDeleteRecipe(breakfast[day])} />
            </Grid>
            <Grid item>
                <BasketListItem time={lunch} day={day} onDeleteRecipe ={() => onDeleteRecipe(lunch[day])}/>
            </Grid>
            <Grid item>
                <BasketListItem time={diner} day={day} onDeleteRecipe ={() => onDeleteRecipe(diner[day])}/>
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
)(BasketListItemContainer);