import {AppBar, Container, Toolbar, Breadcrumbs,Link, Button, InputBase, Paper} from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import useStyles from './style';
import { connect } from 'react-redux';
import { onSearch, onLogOut} from '../../actions';
import { withMenuService } from '../hoc';
import { compose } from '../../utils';

const Header = ({onSearch, onLogOut}) => {
    const classes = useStyles();

    return(
        <AppBar position = 'fixed' className={classes.header}>
            <Container fixed>
                <Toolbar>
                    <Breadcrumbs className={classes.label}>
                        <Link className={classes.link} color="inherit" href="/recipes" >
                            <HomeIcon className={classes.icon}/>
                            Рецепты
                        </Link>
                        <Link className={classes.link} color="inherit" href="/basket" >
                            <ShoppingBasketOutlinedIcon className={classes.icon}/>
                            Корзина
                        </Link>
                    </Breadcrumbs>
                    <Paper component="form" className={classes.search}>
                        <InputBase
                            onChange={e => onSearch(e)}
                            className={classes.searchText}
                            placeholder="Найти"/>
                    </Paper>
                    <Link className={classes.link} color="inherit" href="/" >
                        <Button color="inherit" variant='outlined' onClick ={() => onLogOut()}>Выйти</Button>
                    </Link> 
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        onSearch: (e) => dispatch(onSearch(e.target.value)),
        onLogOut: onLogOut(menuService, dispatch),
    }
}

export default compose(
    withMenuService(),
    connect(null, mapDispatchToProps)
)(Header);;