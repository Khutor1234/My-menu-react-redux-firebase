import RecipeList from "../recipe-list";
import Subheader from "../subheader";
import RecipeSelected from "../recipe-selected";

const RecipesPage = () => {

    return(
        <div>
            <Subheader/>
            <RecipeSelected/>
            <RecipeList />
        </div>
        
    )
}

export default RecipesPage;