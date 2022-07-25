import { Container, Grid, Button } from '@material-ui/core';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMenu } from '../../../store/actions/menu';
import { Spinner, ErrorIndicator } from '../../molecules';
import BasketListItem from '../../basket-list-item';
import ButtonCountIngredients from '../../button-count-ingredients';

import useStyles from './style';

const BasketList = ({ onDeleteMenu, loading, error, getMenu }) => {
  const classes = useStyles();
  const day = [0, 1, 2, 3, 4, 5, 6];

  useEffect(() => {
    getMenu();
  }, []);

  if (loading) {
    return (
      <div style={{ paddingTop: 110 }}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container>
      <Grid container style={{ marginTop: 50 }} justifyContent="center">
        {/* <Grid item>
          {day.map((day) => {
            return (
              <Grid item key={day}>
                <BasketListItem day={day} />
              </Grid>
            );
          })}
        </Grid> */}
      </Grid>
      <Button
        variant="contained"
        className={classes.button}
        // onClick={() => onDeleteMenu()}
      >
        Удалить это меню
      </Button>
      {/* <ButtonCountIngredients /> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  // recipes: recipesSelector(state),
  // loading: isRequestSelector(state),
  // error: errorsSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMenu,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
