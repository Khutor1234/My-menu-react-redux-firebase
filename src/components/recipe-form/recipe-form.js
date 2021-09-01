import { Typography} from '@material-ui/core';

const RecipeForm = () => {
    return(
        <div>
            <Typography>Добавить новый рецепт</Typography>
            <Form/>
        </div>
    )
}

const Form = () => {

    return(
        <form>
            <input/>
            <button>Добавить рецепт</button>
        </form>
    )
}

export default RecipeForm;

