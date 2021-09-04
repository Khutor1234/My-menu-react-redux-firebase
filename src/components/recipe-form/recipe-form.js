import { Typography, TextField, FormLabel, TextareaAutosize, RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import { connect } from 'react-redux';
import { onTitleChange, onIngredientNameChange, onIngredientWeightChange, onAddedToRecipes, onTextChange, onAddedIngredient, onCategoryFormChange, onDeleteIngredient, onImgChange } from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const RecipeForm = ({errorAdding, ingredientName, newRecipe, ingredientWeight, onAddedToRecipes,onAddedIngredient, onTitleChange, onIngredientNameChange, onIngredientWeightChange, onTextChange, onImgChange, onCategoryFormChange, onDeleteIngredient}) => {
    const classes = useStyles();
    const {ingredients} = newRecipe;

    const error = errorAdding ? 
    <Typography className={classes.error}>Вы ввели не все данные </Typography> : null

    const ingred = 
    <ul className={classes.ingrid}>
        {
            ingredients.map((item) => {
                return (
                    <li key = {item.id} className={classes.ingridItem}>
                        <p className={classes.ingridText}>{item.name}({item.weight}г.)</p>
                        <div className={classes.ingridIcon}>
                            <HighlightOffIcon fontSize="small" className={classes.deleteIcon} 
                                onClick = {() => onDeleteIngredient(item.id)} />,
                        </div>
                    </li> 
                )
            })
        }
    </ul>

    return(
        <div>
            <Typography>Добавить новый рецепт</Typography>
            <form className={classes.form} >
                <TextField label="Название рецепта" className={classes.field} onChange={e => onTitleChange(e)}/>
                <TextField label="Путь к картинке" className={classes.img} onChange={e => onImgChange(e)}/>
                <div className={classes.ingred}>
                    <TextField label="Название ингридиента" className={classes.name} onChange={e => onIngredientNameChange(e)} value ={ingredientName || ""}/>
                    <TextField type = 'number' label="Вес(г.)" className={classes.weight} onChange={e => onIngredientWeightChange(e)} value ={ingredientWeight || ""}/>
                    <AddIcon fontSize="large" className={classes.icon}  onClick ={() => onAddedIngredient()}/>
                </div>
                <Typography className={classes.allIngred}>Ингридиенты:</Typography> 
                {ingred}
                <TextareaAutosize minRows={5} placeholder="Текст рецепта"  className={classes.text} onChange={e => onTextChange(e)}/>
                <FormLabel component="legend" className={classes.radio}>Выберете прием еды</FormLabel>
                <RadioGroup row aria-label="position" name="position"  onChange={e => onCategoryFormChange(e)}>
                    <FormControlLabel value="Завтрак" control={<Radio color="default" />} label="Завтрак" />
                    <FormControlLabel value="Обед" control={<Radio color="default" />} label="Обед" />
                    <FormControlLabel value="Ужин" control={<Radio color="default" />} label="Ужин" />
                </RadioGroup>

                {error}

                <Button type="submit" variant="outlined" className={classes.button}  onClick ={(e) => onAddedToRecipes(e,newRecipe)}>Добавить рецепт</Button>
            </form>
        </div>
    )
}

const mapStateToProps = ({form: {newRecipe, ingredientName, ingredientWeight, errorAdding}}) => {
    return{
        newRecipe,
        ingredientName, 
        ingredientWeight,
        errorAdding
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        onImgChange: (e) => dispatch(onImgChange(e.target.value)),
        onTitleChange: (e) => dispatch(onTitleChange(e.target.value)),
        onIngredientNameChange: (e) => dispatch(onIngredientNameChange(e.target.value)),
        onIngredientWeightChange: (e) => dispatch(onIngredientWeightChange(e.target.value)),
        onTextChange: (e) => dispatch(onTextChange(e.target.value)),
        onCategoryFormChange: (e) => dispatch(onCategoryFormChange(e.target.value)),
        onAddedIngredient: () => dispatch(onAddedIngredient()),
        onAddedToRecipes: (e, newRecipe) => onAddedToRecipes(menuService, dispatch)(e, newRecipe),
        onDeleteIngredient: (id) => dispatch(onDeleteIngredient(id))
    }
}


export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeForm);




