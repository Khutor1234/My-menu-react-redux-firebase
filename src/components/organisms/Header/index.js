import { useState, useEffect } from 'react';
import {
  AppBar,
  Container,
  Toolbar,
  Breadcrumbs,
  InputBase,
  Paper,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchRecipes } from '../../../store/actions/recipes';
import { logOut } from '../../../store/actions/user';
import { DefaultLink, DefaultButton } from '../../atoms';
import useStyles from './style';

const Header = ({ searchRecipes, logOut, search }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  console.log(value, 'val');
  useEffect(() => {
    searchRecipes(value);
  }, [value]);

  return (
    <AppBar position="fixed" className={classes.header}>
      <Container fixed>
        <Toolbar>
          <Breadcrumbs className={classes.label}>
            <DefaultLink href="/">
              <HomeIcon className={classes.icon} />
              Рецепты
            </DefaultLink>
            <DefaultLink href="/basket">
              <ShoppingBasketOutlinedIcon className={classes.icon} />
              Корзина
            </DefaultLink>
          </Breadcrumbs>
          {search && (
            <Paper component="form" className={classes.search}>
              <InputBase
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={classes.searchText}
                placeholder="Найти"
              />
            </Paper>
          )}

          <DefaultButton onClick={() => logOut()} text="Выйти" />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logOut,
      searchRecipes,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Header);
