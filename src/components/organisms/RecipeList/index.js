import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';

import {
  errorsSelector,
  recipesSelector,
  isRequestSelector,
} from '../../../store/selectors/recipes';
import { ErrorIndicator, Spinner } from '../../atoms';
import { RecipeItem } from '../../molecules';
import { Warning } from '../../modal';
import useStyles from './style';

const RecipeList = ({ recipes, loading, error }) => {
  const classes = useStyles();

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container>
      <Grid container className={classes.wrapper} spacing={4}>
        {recipes?.map((recipe) => (
          <Grid
            item
            key={recipe.id}
            xs={12}
            sm={6}
            md={4}
            className={classes.recipeItem}
          >
            <RecipeItem recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  recipes: recipesSelector(state),
  loading: isRequestSelector(state),
  error: errorsSelector(state),
});

export default connect(mapStateToProps, null)(RecipeList);
