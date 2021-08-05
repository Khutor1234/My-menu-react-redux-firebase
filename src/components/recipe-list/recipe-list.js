import { Component } from 'react';
import { connect } from 'react-redux';

import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';
import { fetchRecipes} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './recipe-list.sass';

const RecipeList = ({recipes}) => {
    return(
        <ul className = 'recipe-list'>
            {
                recipes.map((recipe) => {
                    return(
                        <li key = {recipe.recipeId}>
                            <RecipeListItem 
                                recipe = {recipe} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

class RecipeListContainer extends Component{

    componentDidMount(){
        this.props.fetchRecipes()
    }

    render(){

        const {recipes, loading, error} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return <RecipeList recipes = {recipes} />
    }
}

const mapStateToProps = ({recipes, loading, error}) => {
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
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListContainer);