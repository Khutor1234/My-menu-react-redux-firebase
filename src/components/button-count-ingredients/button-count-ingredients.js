import {Button, Container,List, ListItem, ListItemText, Typography, TextField, Grid} from '@material-ui/core';
import { connect } from 'react-redux';
import { onCountIngredients, onCountPeople} from '../../actions';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './style';

const ButtonCountIngredients = ({ingredients , onCountIngredients, onCountPeople}) => {
    const classes = useStyles();

    const allIngredients = ingredients ?
    <List className={classes.list}>
        {
            ingredients.map((item) => {
                const {name, weight, id} = item;
    
                return (
                        <ListItem key = {id}>
                            <CheckIcon/>
                            <ListItemText
                            primary={name}></ListItemText>
                            <Typography>{weight}г.</Typography>
                        </ListItem>
                );
            })
        }
    </List> : 
    <Typography className={classes.text} align = 'center'>
        Добавь рецепты в свой список и нажми "Расчитать продуктовую корзину"
    </Typography>

    return (
        <Container className={classes.container}>
            <Button
                variant="contained"
                className={classes.button}
                onClick = {() => onCountIngredients()}>
                    Расчитать продуктовую корзину
            </Button>
            <Grid container justifyContent='center'>
                <Grid item> <Typography className={classes.typography}>на</Typography> </Grid>
                <Grid item> <TextField type = 'number'  defaultValue="1" className={classes.input} onChange={e => onCountPeople(e)}/> </Grid>
                <Grid item> <Typography className={classes.typography}>человек</Typography> </Grid>
            </Grid>
            {allIngredients}
        </Container>
    );
}

const mapStateToProps = ({ basket: {ingredients}}) => {
    return{
        ingredients
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCountIngredients: () => dispatch(onCountIngredients()),
        onCountPeople: (e) => dispatch(onCountPeople(e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCountIngredients);

