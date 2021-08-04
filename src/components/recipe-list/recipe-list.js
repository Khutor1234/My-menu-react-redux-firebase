import { Component } from 'react';
import { connect } from 'react-redux';

import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';
import { recipesLoaded, recipesRequested, recipesError } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './recipe-list.sass';

class RecipeList extends Component{

    componentDidMount(){
        const { menuService, recipesLoaded, recipesRequested, recipesError } = this.props;
        recipesRequested();
        menuService.getLists()
            .then((data) => recipesLoaded(data))
            .catch((error) => recipesError(error))

    }

    render(){

        const {recipes, loading, error} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return(
            <ul className = 'recipe-list'>
                {
                    recipes.map((recipe) => {
                        return(
                            <li key = {recipe.id}><RecipeListItem recipe = {recipe} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({recipes, loading, error}) => {
    return{
        recipes,
        loading,
        error
    }
}

const mapDispatchToProps = {
    recipesLoaded,
    recipesRequested,
    recipesError
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeList);