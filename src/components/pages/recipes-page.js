import RecipeList from "../recipe-list";
import Subheader from "../subheader";
import RecipeCategory from "../recipe-category";
import Header from '../header'

const RecipesPage = () => {

    return(
        <div>
            <Header/>
            <Subheader/>
            <RecipeCategory/>
            <RecipeList />
        </div>
        
    )
}

export default RecipesPage;