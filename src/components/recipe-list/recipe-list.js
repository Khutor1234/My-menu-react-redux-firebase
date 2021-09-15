import { Component } from 'react';
import { connect } from 'react-redux';
import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';
import { fetchRecipes, fetchAuth} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid} from '@material-ui/core';
import { Warning } from '../modal';
import useStyles from './style';
import { Redirect } from 'react-router';

const RecipeList = ({recipes}) => {
    const classes = useStyles();

    return(
        <Container>
            <Grid container className={classes.recipeWrapper} spacing={4}>
                {
                    recipes.map((recipe) => {
                        return(
                            <Grid item key = {recipe.id} xs={12} sm={6} md={4} className={classes.recipeItem}>
                                <RecipeListItem recipe = {recipe} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

class RecipeListContainer extends Component{
    componentDidMount(){
        this.props.fetchRecipes();
    }

    render(){
        const { user, recipes, foundRecipes, loading, error, warning, errorAdding} = this.props;
        
        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        if(!user){
            return <Redirect to="/"/>
        }

        if(foundRecipes){
            return( 
                <>
                    <RecipeList 
                        recipes = {foundRecipes} />
                    <Warning
                        warning = {warning} errorAdding = {errorAdding}/>
                </>
            )
        }

        return(
            <>
                <RecipeList 
                    recipes = {recipes} />
                <Warning
                    warning = {warning} errorAdding = {errorAdding}/>
            </>
        )
    }
}

const mapStateToProps = ({ recipeList: {recipes, loading, error, warning, errorAdding, foundRecipes }, user: {user}}) => {
    return{ 
        foundRecipes, 
        errorAdding, 
        recipes, 
        loading, 
        error, 
        warning,
        user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchRecipes: fetchRecipes(menuService, dispatch),
        fetchAuth: fetchAuth(menuService, dispatch)
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListContainer);