import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';

import { ErrorIndicator, Spinner } from '../../atoms';
import { RecipeItem } from '../../molecules';
import { addMenuItem } from '../../../store/actions/menu';
import { deleteRecipeItem } from '../../../store/actions/recipes';
import {
  errorsSelector,
  recipesSelector,
  isRequestSelector,
  filteredRecipesSelector,
} from '../../../store/selectors/recipes';
import { userSelector } from '../../../store/selectors/user';
import useStyles from './style';

const RecipeList = ({
  recipes,
  filteredRecipes,
  loading,
  error,
  addMenuItem,
  user,
  deleteRecipeItem,
}) => {
  const classes = useStyles();

  let recipeItems =
    filteredRecipes && filteredRecipes.length > 0 ? filteredRecipes : recipes;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container>
      <Grid container className={classes.wrapper} spacing={4}>
        {Array.isArray(recipeItems) ? (
          recipeItems?.map((recipe) => (
            <Grid
              item
              key={recipe.id}
              xs={12}
              sm={6}
              md={4}
              className={classes.recipeItem}
            >
              <RecipeItem
                deleteRecipeItem={deleteRecipeItem}
                addMenuItem={addMenuItem}
                recipe={recipe}
                email={user?.email}
              />
            </Grid>
          ))
        ) : (
          <Typography className={classes.warning}>
            По запросу {filteredRecipes} нечего не найдено
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
  loading: isRequestSelector(state),
  error: errorsSelector(state),
  filteredRecipes: filteredRecipesSelector(state),
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMenuItem,
      deleteRecipeItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
