import { Component } from 'react';
import { connect } from 'react-redux';

import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';
import { fetchRecipes} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Warning } from '../modal';


const useStyles = makeStyles(() => ({
    recipeWrapper:{
        flexGrow: 1,
    },
  }));

const RecipeList = ({recipes}) => {
    const classes = useStyles();

    return(
        <Container>
            <Grid container className={classes.recipeWrapper} spacing={4}>
                {
                    recipes.map((recipe) => {
                        return(
                            <Grid item key = {recipe.id} xs={12} sm={6} md={4} className={classes.recipeItem}>
                                <RecipeListItem 
                                    recipe = {recipe} />
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
        this.props.fetchRecipes()
    }


    render(){
        
        const {recipes, loading, error, basketIsFul} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return(
            <>
                <RecipeList 
                    recipes = {recipes} />
                <Warning
                    basketIsFul = {basketIsFul} />
            </>
        )
    }
}

const mapStateToProps = ({ recipeList: {recipes, loading, error, basketIsFul }}) => {
    return{
        recipes,
        loading,
        error,
        basketIsFul
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchRecipes: fetchRecipes(menuService, dispatch),
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListContainer);