import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';

import { addMenuItem } from '../../../store/actions/menu';
import {
  errorsSelector,
  recipesSelector,
  isRequestSelector,
  filteredRecipesSelector,
} from '../../../store/selectors/recipes';
import { ErrorIndicator, Spinner } from '../../atoms';
import { RecipeItem } from '../../molecules';
import useStyles from './style';

const RecipeList = ({
  recipes,
  filteredRecipes,
  loading,
  error,
  addMenuItem,
}) => {
  const classes = useStyles();

  const recipeItems = filteredRecipes.length > 0 ? filteredRecipes : recipes;
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
              <RecipeItem addMenuItem={addMenuItem} recipe={recipe} />
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addMenuItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
