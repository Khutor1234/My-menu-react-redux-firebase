import {AppBar, Container, Toolbar, Breadcrumbs,Link, Box, Button, InputBase, Paper} from '@material-ui/core';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import useStyles from './style';
import { connect } from 'react-redux';
import { onSearch} from '../../actions';

const Header = ({onSearch, foundRecipes}) => {
    const classes = useStyles();

    return(
        <AppBar position = 'fixed' className={classes.header}>
            <Container fixed>
                <Toolbar>
                    <Breadcrumbs className={classes.label}>
                        <Link className={classes.link} color="inherit" href="/" >
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
                    <Box mr={3}>
                        <Button color="inherit"  variant='outlined'>Log In</Button>
                    </Box>
                    <Button  variant='contained' className={classes.button}>Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

const mapStateToProps = ({ recipeList: {foundRecipes}}) => {
    return{
        foundRecipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (e) => dispatch(onSearch(e.target.value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);