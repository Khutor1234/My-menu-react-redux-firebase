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

import { logOut } from '../../../store/actions/user';
import { DefaultLink, DefaultButton } from '../../atoms';
import useStyles from './style';

const Header = ({ onSearch, logOut, search }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.header}>
      <Container fixed>
        <Toolbar>
          <Breadcrumbs className={classes.label}>
            <DefaultLink href="/recipes">
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
                onChange={(e) => onSearch(e)}
                className={classes.searchText}
                placeholder="Найти"
              />
            </Paper>
          )}
          <DefaultLink href="/">
            <DefaultButton onClick={() => logOut()} text="Выйти" />
          </DefaultLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      logOut,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Header);
