import { connect } from 'react-redux';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';
import {selectCategory, fetchRecipes} from '../../actions';
import useStyles from './style';

import { Container, Button, Grid} from '@material-ui/core';

const RecipeSelected = ({selectCategory, fetchRecipes}) => {
    const classes = useStyles();
    
    return(
        <Container maxWidth='sm' className={classes.recipeSelected}>
            <Grid container justifyContent='center' spacing={4}>
                <Grid item >
                    <Button color="inherit" variant='outlined' className={classes.button}
                        onClick = {() =>fetchRecipes()}>Все рецепты</Button>
                </Grid>
                <Grid item >
                    <Button color="inherit" variant='outlined' className={classes.button} 
                        onClick = {() =>selectCategory('Завтрак')}>Завтраки</Button>
                </Grid>
                <Grid item >
                    <Button color="inherit" variant='outlined' className={classes.button} 
                        onClick = {() =>selectCategory('Обед')}>Обеды</Button>
                </Grid>
                <Grid item >
                    <Button color="inherit"  variant='outlined' className={classes.button} 
                        onClick = {() =>selectCategory('Ужин')}>Ужины</Button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchRecipes: fetchRecipes(menuService, dispatch),
        selectCategory: (category) => selectCategory(menuService, dispatch)('recipes', category),
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeSelected );