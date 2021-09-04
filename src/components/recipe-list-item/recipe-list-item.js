import {Card, CardMedia, CardContent, CardActions,
    FormControl, InputLabel, Select, Typography,
    List, ListItem, ListItemText,
    Button, ButtonGroup} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './style';
import { connect } from 'react-redux';
import { onAddedToMenu, onChangeItem, onCategoryChange} from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';

const RecipeInfo = ({show, text, ingredients, img}) => {
    const classes = useStyles();
    if (show === 'img'){
        return( 
            <CardMedia 
                component='img'
                height='250'
                image = {img}
                alt='Фото рецепта' /> 
        )
    }

    

    if(show === 'recipe'){
        return(
            <Typography className={classes.recipeText} variant="body2" gutterBottom>{text}</Typography> 
        )
    }

    if(show === 'ingredients'){
        return (
            <List className={classes.ingridList}>
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
            </List> 
        )
    }
}

const RecipeListItem = ({ recipe, onAddedToMenu, onCategoryChange, onChangeItem}) => {

    const classes = useStyles();
    const { text, id, title, ingredients, show, addCategory, img} = recipe;

    return(
        <div>
            <Card >
                <RecipeInfo show = {show} text = {text} ingredients = {ingredients} img = {img}/>
                <ButtonGroup fullWidth size="small" className={classes.recipeButtons}>
                    <Button className={classes.button} onClick = {() => onChangeItem(id, 'ingredients')}>Ингридиенты</Button>
                    <Button className={classes.button}  onClick = {() => onChangeItem(id, 'recipe')}>Рецепт</Button>
                    <Button className={classes.button} onClick = {() => onChangeItem(id, 'img')}>Фото</Button>
                </ButtonGroup>
                <CardContent>
                    <Typography variant='h5'>{title}</Typography>
                </CardContent>
                <CardActions>
                    <FormControl variant="outlined" className={classes.recipeItemForm}>
                        <InputLabel htmlFor="outlined-age-native-simple">Прием еды</InputLabel>
                        <Select 
                            className={classes.recipeItemSelect}
                            native
                            onChange={e => onCategoryChange(e, id)}
                            label="Прием еды"
                            inputProps={{
                                id: 'outlined-age-native-simple',
                            }} >
                                <option aria-label="None" value="" />
                                <option value="Завтрак">Завтрак</option>
                                <option value="Обед" >Обед</option>
                                <option value="Ужин" >Ужин</option>
                        </Select>
                    </FormControl>
                    <Button 
                        size='large' 
                        variant='outlined' 
                        className={classes.recipeItemButton}
                        onClick ={() => onAddedToMenu(recipe, addCategory)} >Добавить</Button>
                </CardActions>
            </Card>
        </div>
        
    )
}


const mapStateToProps = ({ recipeList: {recipes, loading, error }}) => {
    return{
        recipes,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        onChangeItem: (id, variableItem) => dispatch(onChangeItem(id, variableItem)), 
        onCategoryChange: (e, id) => dispatch(onCategoryChange(e.target.value, id)),
        onAddedToMenu: (recipe, addCategory) => onAddedToMenu(menuService, dispatch)(recipe, addCategory),
    }
}


export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListItem);

