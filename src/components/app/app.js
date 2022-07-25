import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipesPage, BasketPage, LoginPage } from '../pages';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/user';

const App = ({ getUser }) => {
  useEffect(() => {
    getUser();
  });

  return (
    <Switch>
      <Route path="/recipes" component={RecipesPage} exact />
      <Route path="/basket" component={BasketPage} />
      <Route path="/" component={LoginPage} />
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getUser,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);
