import { Typography, FormControl, TextField, FormLabel, TextareaAutosize, RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import { connect } from 'react-redux';
import { onTitleChange, onIngredientNameChange, onIngredientWeightChange, onAddedToRecipes, onTextChange, onAddedIngredient, onCategoryFormChange } from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';

const RecipeForm = ({error, onAddedToRecipes,onAddedIngredient, onTitleChange, newRecipe, onIngredientNameChange, onIngredientWeightChange, onTextChange, onCategoryFormChange}) => {
    const classes = useStyles();
    const {ingredients} = newRecipe
    const ingred = ingredients.map((item) => {
        return  `${item.name}(${item.weight}г.), `
    })

    console.log(error)

    return(
        <div>
            <Typography>Добавить новый рецепт</Typography>
            <FormControl className={classes.form} >
            <TextField label="Название рецепта" className={classes.field} onChange={e => onTitleChange(e)}/>
            <div className={classes.ingred}>
                <TextField label="Название ингридиента" className={classes.name} onChange={e => onIngredientNameChange(e)}/>
                <TextField label="Вес(г.)" className={classes.weight} onChange={e => onIngredientWeightChange(e)}/>
                <AddIcon fontSize="large" className={classes.icon}  onClick ={() => onAddedIngredient()}/>
            </div>
            <Typography className={classes.allIngred}>Ингридиенты: {ingred}</Typography>
            <TextareaAutosize minRows={5} placeholder="Текст рецепта"  className={classes.text} onChange={e => onTextChange(e)}/>
            <FormLabel component="legend" className={classes.radio}>Выберете прием еды</FormLabel>
            <RadioGroup row aria-label="position" name="position"  onChange={e => onCategoryFormChange(e)}>
                <FormControlLabel value="Завтрак" control={<Radio color="default" />} label="Завтрак" />
                <FormControlLabel value="Обед" control={<Radio color="default" />} label="Обед" />
                <FormControlLabel value="Ужин" control={<Radio color="default" />} label="Ужин" />
            </RadioGroup>

            <Button variant="outlined" className={classes.button}  onClick ={() => onAddedToRecipes(newRecipe)}>Добавить рецепт</Button>
        </FormControl>
        </div>
    )
}

const mapStateToProps = ({ form: {newRecipe, error}}) => {
    return{
        newRecipe
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        onTitleChange: (e) => dispatch(onTitleChange(e.target.value)),
        onIngredientNameChange: (e) => dispatch(onIngredientNameChange(e.target.value)),
        onIngredientWeightChange: (e) => dispatch(onIngredientWeightChange(e.target.value)),
        onTextChange: (e) => dispatch(onTextChange(e.target.value)),
        onCategoryFormChange: (e) => dispatch(onCategoryFormChange(e.target.value)),
        onAddedIngredient: () => dispatch(onAddedIngredient()),
        onAddedToRecipes: (newRecipe) => onAddedToRecipes(menuService, dispatch)(newRecipe),
    }
}


export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeForm);




