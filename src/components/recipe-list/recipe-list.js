import { Component } from 'react';
import { connect } from 'react-redux';

import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';

class RecipeList extends Component{

    componentDidMount(){
        const { menuService } = this.props;
        const data = menuService.getLists();

        data.then((data) => this.props.recipesLoaded(data))

    }

    render(){

        const {recipes} = this.props;

        return(
            <ul>
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

const mapStateToProps = (state) => {
    return{
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        recipesLoaded: (newRecipes) => {
            dispatch({
                type: 'RECIPES_LOADED',
                payload: newRecipes
            })
        }
    }
}

export default withMenuService()(connect(
    mapStateToProps, mapDispatchToProps)(RecipeList)
);