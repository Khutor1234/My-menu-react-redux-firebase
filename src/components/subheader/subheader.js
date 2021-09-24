import { Container, Typography, Paper, Grid} from '@material-ui/core';
import {AddNewRecipeModal} from '../modal';
import useStyles from './style';

const Subheader = () => {
    const classes = useStyles();

    return(
        <Paper className={classes.subheader}
             style={{backgroundImage: `url(https://media.istockphoto.com/photos/delicious-pizza-with-ingredients-and-spices-picture-id924476838?k=6&m=924476838&s=612x612&w=0&h=ORCMVPZ_h5uZuZWG35jtw2ovGhGTdb-bRh3LW3DQNaE=)`}} >
            <Container fixed>
                <div className={classes.overlay}></div>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.subheaderContent}>
                            <Typography
                                component='h1'
                                variant='h3'
                                color='inherit'
                                gutterBottom >
                                    My Menu
                            </Typography>
                            <Typography
                                variant='h6'
                                color='inherit'
                                paragraph>
                                    Собери свое идеальное меню. 
                            </Typography>
                            <Typography
                                variant='h6'
                                color='inherit'
                                paragraph>
                                    Добавляй в корзину рецепты и мы расчитаем твою продуктовую корзину на неделю. В каждом рецепте грамовки указаны на одну порцию.
                            </Typography>
                            <Grid container>
                                <Grid item>
                                    <AddNewRecipeModal/>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default Subheader ;