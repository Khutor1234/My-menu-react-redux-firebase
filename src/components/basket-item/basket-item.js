import {Grid, Typography, Avatar, Badge, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    basket: {
        marginTop: 40
    },
    avatar:{
        width: theme.spacing(25),
        height: theme.spacing(25),
        backgroundColor: 'rgba(0,0,0,.4)'
    },
    title:{
        color: '#fff',
        fontSize: 27
    },
    badge:{
        color: '#fff',
        borderRadius: '100%',
        border: `2px solid #000`,
    },
    button: {
        position: 'absolute',
        bottom: 3,
        left: 2,
        color: '#fff'
    }
  }));

const BasketItem = ({menu, day, onDelete}) => {
    const classes = useStyles();

    let breakfast = [];
    let lunch = [];
    let diner = [];

    menu.map((item) => {
        if(item.category === 'Завтрак'){
            breakfast.push(item)
        }
        if(item.category === 'Обед'){
            lunch.push(item)
        }
        if(item.category === 'Ужин'){
            diner.push(item)
        }
    }) 
  

    return(
        <Grid container className={classes.basket} spacing={4} alignItems='center'>
            <Grid item>
                <Typography
                    variant='h6'
                    className={classes.title}>День {day + 1}</Typography>
            </Grid>
            <Grid item>
                <Eating time={breakfast} day={day} onDelete = {() => onDelete()}/>
            </Grid>
            <Grid item>
                <Eating time={lunch} day={day} onDelete = {() => onDelete()}/>
            </Grid>
            <Grid item>
                <Eating time={diner} day={day} onDelete = {() => onDelete()}/>
            </Grid>
        </Grid>
)}

const Eating = ({time, day, onDelete}) => {
    const classes = useStyles();

    if(time[day]){
        return(
            <Badge 
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                overlap="circular"
                color="primary"
                className={classes.badge}
                badgeContent={time[day].title}>
                <Avatar className={classes.avatar} alt="Фото рецепта" src="https://media.istockphoto.com/photos/delicious-pizza-with-ingredients-and-spices-picture-id924476838?k=6&m=924476838&s=612x612&w=0&h=ORCMVPZ_h5uZuZWG35jtw2ovGhGTdb-bRh3LW3DQNaE=" />
                <IconButton aria-label="delete" color="secondary" className={classes.button} onClick = {onDelete}>
                    <DeleteIcon />
                </IconButton>
            </Badge> 
        )
    } else {
        return(
            <Badge className={classes.badge}>
                <Avatar className={classes.avatar} >Не выбрано</Avatar>
            </Badge> 
        )
    }
}

export default BasketItem ;