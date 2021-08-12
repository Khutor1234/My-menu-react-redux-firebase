import { connect } from 'react-redux';
import {selectCategory} from '../../actions';

import { Container, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    recipeSelected: {
        marginBottom: theme.spacing(5),
    },
    button:{
        color: '#fff'
    }
  }));

const RecipeSelected = ({selectCategory}) => {
    const classes = useStyles();

    return(
        <Container maxWidth='sm' className={classes.recipeSelected}>
            <Grid container justifyContent='center' spacing={4}>
                <Grid item >
                    <Button color="inherit" variant='outlined' className={classes.button} onClick = {() => selectCategory('')}>Все рeцепты</Button>
                </Grid>
                <Grid item >
                    <Button color="inherit" variant='outlined' className={classes.button} onClick = {() =>selectCategory('Завтрак')}>Завтраки</Button>
                </Grid>
                <Grid item >
                    <Button color="inherit" variant='outlined' className={classes.button} onClick = {() =>selectCategory('Обед')}>Обеды</Button>
                </Grid>
                <Grid item >
                    <Button color="inherit"  variant='outlined' className={classes.button} onClick = {() =>selectCategory('Ужин')}>Ужины</Button>
                </Grid>
            </Grid>
        </Container>
)
}

const mapStateToProps = ({ recipeList: {recipes, loading, error }}) => {
    return{
        recipes,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: (category) => dispatch(selectCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSelected);