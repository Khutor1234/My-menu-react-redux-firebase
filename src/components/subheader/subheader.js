import { Container, Typography, Paper, Grid} from '@material-ui/core';
import {AddNewRecipeModal, AddNewIngredientModal } from '../modal';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    subheader:{
        position: 'relative',
        color: '#fff',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(7),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    subheaderContent:{
        position: 'relative',
        padding: theme.spacing(3)

    },
    overlay:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
    
  }));

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
                                    Добавляй в корзину рецепты и мы расчитаем твою продуктовую корзину на неделю
                            </Typography>
                            <Grid container>
                                <Grid item>
                                    <AddNewIngredientModal/>
                                </Grid>
                                {/* <Grid item>
                                    <AddNewRecipeModal/>
                                </Grid> */}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}

export default Subheader ;