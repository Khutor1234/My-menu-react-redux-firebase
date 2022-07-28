import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipesPage, BasketPage, LoginPage } from '../pages';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { userSelector } from '../../store/selectors/user';
import { getUser } from '../../store/actions/user';

const App = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  });

  const routes = !user ? (
    <Route path="/" component={LoginPage} />
  ) : (
    <>
      <Route path="/" component={RecipesPage} exact />
      <Route path="/basket" component={BasketPage} />
    </>
  );

  return <Switch>{routes}</Switch>;
};

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUser,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
