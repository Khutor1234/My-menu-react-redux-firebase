import { Container, Grid, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Spinner, ErrorIndicator, DefaultButton } from '../../atoms';
import { Counter, IngredientsList } from '../../molecules';
import { BasketItem } from '../../molecules';
import { countIngredients } from '../../../utils';
import { getMenu, removeMenuItem } from '../../../store/actions/menu';
import { menuSelector } from '../../../store/selectors/menu';
import {
  errorsSelector,
  isRequestSelector,
} from '../../../store/selectors/menu';

import useStyles from './style';

const BasketList = ({ removeMenuItem, loading, error, getMenu, menu }) => {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [ingred, setIngred] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  const days = [0, 1, 2, 3, 4, 5, 6];
  const breakfast = menu?.filter((item) => item.category === 'Завтрак') || [];
  const lunch = menu?.filter((item) => item.category === 'Обед') || [];
  const diner = menu?.filter((item) => item.category === 'Ужин') || [];

  const changeValue = (val) => {
    setValue(val);
    setIngred([]);
  };

  if (loading) {
    return <Spinner className={classes.spinner} />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container>
      <Grid container className={classes.container} justifyContent="center">
        <Grid item>
          {days.map((day) => {
            return (
              <Grid item key={day}>
                <Grid
                  container
                  className={classes.basket}
                  spacing={4}
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h6" className={classes.title}>
                      День {day + 1}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <BasketItem
                      item={breakfast[day]}
                      removeMenuItem={removeMenuItem}
                    />
                  </Grid>
                  <Grid item>
                    <BasketItem
                      item={lunch[day]}
                      removeMenuItem={removeMenuItem}
                    />
                  </Grid>
                  <Grid item>
                    <BasketItem
                      item={diner[day]}
                      removeMenuItem={removeMenuItem}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <DefaultButton
        text="Удалить это меню"
        appearance="black"
        onClick={() => {}}
      />
      <Counter
        value={value}
        changeValue={changeValue}
        countIngredients={() => countIngredients(menu, value, setIngred)}
      />
      <IngredientsList ingredients={ingred} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  menu: menuSelector(state),
  error: errorsSelector(state),
  loading: isRequestSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMenu,
      removeMenuItem,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
