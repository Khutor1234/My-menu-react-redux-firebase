import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {Button, Container,List, ListItem, ListItemText, Typography} from '@material-ui/core';
import { connect } from 'react-redux';
import { onCountIngrid} from '../../actions';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  button: {
    margin: '40px auto',
    minWidth: 300,
    height: 50,
    fontSize: 15
  },
});

const ButtonCountIngredients = ({ingredients , onCountIngrid}) => {
    const classes = useStyles();

    console.log(ingredients);

    const ingred = ingredients ?
    <List>
            {
                ingredients.map((item) => {
                    const {name, weight, id} = item;
        
                    return (
                            <ListItem key = {id} className={classes.recipeItem}>
                                <CheckIcon/>
                                <ListItemText
                                primary={name}></ListItemText>
                                <Typography>{weight}г.</Typography>
                            </ListItem>
                    );
                })
            }
        </List> : null

    return (
        <Container>
            <Button
                variant="contained"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick = {() => onCountIngrid()}>
                    Расчитать ингридиенты
        </Button>
        {ingred}
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
        onCountIngrid: () => dispatch(onCountIngrid())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonCountIngredients);

