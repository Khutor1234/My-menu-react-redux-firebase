const RecipeListItem = ({ recipe }) => {

    const { text, title } = recipe;

    return(
        <div>
            <span>{title}</span>
            <span>{text}</span>
        </div>
    )
}

export default RecipeListItem;