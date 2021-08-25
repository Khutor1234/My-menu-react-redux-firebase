import {AppBar, Container, Toolbar, Breadcrumbs,Link, Box, Button} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import useStyles from './style';

const Header = () => {
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
                    <Box mr={3}>
                        <Button color="inherit"  variant='outlined'>Log In</Button>
                    </Box>
                    <Button  variant='contained' className={classes.button}>Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;