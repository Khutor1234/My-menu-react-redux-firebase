import { Header, RecipeCategories, RecipeList, Subheader } from '../organisms';

const RecipesPage = () => {
  return (
    <>
      <Header search />
      <Subheader />
      <RecipeCategories />
      <RecipeList />
    </>
  );
};

export default RecipesPage;
