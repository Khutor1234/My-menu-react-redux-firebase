import {Card, CardMedia, CardContent, CardActions,
    FormControl, InputLabel, Select, Typography,
    List, ListItem, ListItemText,
    Button, ButtonGroup} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './style';

import { connect } from 'react-redux';
import { onAddedToMenu, changeImg, changeIngrid, changeRecipe, onCategoryChange} from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';

const RecipeListItem = ({ recipe, onAddedToMenu, onCategoryChange, onChangeImg, onChangeIngrid, onChangeRecipe}) => {

    const classes = useStyles();
    const { text, id, title, ingrid, showImg, showIngrid, showRecipe } = recipe;

    const recipeImg = showImg ? 
    <CardMedia 
        component='img'
        height='250'
        image='https://media.istockphoto.com/photos/stack-of-milk-and-dark-chocolate-with-nuts-caramel-and-fruits-and-on-picture-id965487714?k=6&m=965487714&s=612x612&w=0&h=v8epNbu2l-kk4GjK-Wzfjzx-Ui3MlOkw4w7dtrN_lL8='
        alt='Фото рецепта' /> : null;

    const  recipeText = showRecipe ?
    <Typography className={classes.recipeText} variant="body2" gutterBottom>{text}</Typography> : null;

    const recipeIngrig = showIngrid ?
    <List className={classes.ingridList}>
        {
            ingrid.map((item) => {
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

    return(
        <div>
            <Card >
                {recipeImg}
                {recipeText}
                {recipeIngrig}
                <ButtonGroup fullWidth size="small" className={classes.recipeButtons}>
                    <Button className={classes.button} onClick = {() => onChangeIngrid(id)}>Ингридиенты</Button>
                    <Button className={classes.button}  onClick = {() => onChangeRecipe(id)}>Рецепт</Button>
                    <Button className={classes.button} onClick = {() => onChangeImg(id)}>Фото</Button>
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
                            onChange={e => onCategoryChange(e)}
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
                        onClick ={() => onAddedToMenu(recipe)} >Добавить</Button>
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
        onChangeIngrid: (id) => dispatch(changeIngrid(id)), 
        onChangeRecipe: (id) => dispatch(changeRecipe(id)),
        onChangeImg: (id) => dispatch(changeImg(id)) ,
        onCategoryChange: (e) => onCategoryChange(e.target.value),
        onAddedToMenu: (recipe) => onAddedToMenu(menuService, dispatch)(recipe,'Ужин'),
    }
}


export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListItem);

