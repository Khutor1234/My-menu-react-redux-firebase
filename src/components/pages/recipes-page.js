import RecipeList from "../recipe-list";
import Subheader from "../subheader";
import RecipeCategory from "../recipe-category";

const RecipesPage = () => {

    return(
        <div>
            <Subheader/>
            <RecipeCategory/>
            <RecipeList />
        </div>
        
    )
}

export default RecipesPage;