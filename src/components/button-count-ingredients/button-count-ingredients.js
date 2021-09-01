import {Button, Container,List, ListItem, ListItemText, Typography} from '@material-ui/core';
import { connect } from 'react-redux';
import { onCountIngredients} from '../../actions';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './style';

const ButtonCountIngredients = ({ingredients , onCountIngredients}) => {
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
        onCountIngredients: () => dispatch(onCountIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCountIngredients);

