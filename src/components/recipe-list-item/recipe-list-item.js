import './recipe-list-item.sass';
import RecipeIngredients from '../recipe-ingredients';
import RecipeForm from '../recipe-form';

const RecipeListItem = ({ recipe }) => {

    const { text, title, ingrid, category } = recipe;

    return(
        <div className = 'recipe-list-item'>
            <div className="card border-primary mb-3">
                <div className = 'cover'></div>
                    <div className="card-header">{title}</div>
                    <div className="card-body">
                        <p className="card-text">{text}</p>
                    <RecipeIngredients ingrid = {ingrid}/>
                </div>
            </div>
            {/* <RecipeForm category = {category}/> */}
        </div>
        
    )
}

export default RecipeListItem;