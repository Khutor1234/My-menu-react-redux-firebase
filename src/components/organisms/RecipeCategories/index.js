import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Grid } from '@material-ui/core';

import { recipeСategoriesSelector } from '../../../store/selectors/recipes';
import { getRecipes } from '../../../store/actions/recipes';
import { DefaultButton } from '../../atoms';
import useStyles from './style';

const data = [
  {
    id: 1,
    name: 'Все рецепты',
  },
  {
    id: 2,
    name: 'Завтраки',
    nameFB: 'Завтрак',
  },
  {
    id: 3,
    name: 'Обеды',
    nameFB: 'Обед',
  },
  {
    id: 4,
    name: 'Ужины',
    nameFB: 'Ужин',
  },
];

const RecipeCategories = ({ getRecipes, categories }) => {
  const classes = useStyles();

  const [active, setActive] = useState(1);

  useEffect(() => {
    getRecipes();
  }, []);

  const selectCategory = (id) => {
    setActive(id);
    const categoryName =
      id === 1 ? '' : data?.find((el) => el.id === id)?.nameFB;
    getRecipes(categoryName);
  };

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Grid container justifyContent="center" spacing={4}>
        {data?.map((category) => (
          <Grid item key={category.id}>
            <DefaultButton
              text={category.name}
              appearance={active === category.id && 'dark'}
              onClick={() => selectCategory(category.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  categories: recipeСategoriesSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getRecipes,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(RecipeCategories);
