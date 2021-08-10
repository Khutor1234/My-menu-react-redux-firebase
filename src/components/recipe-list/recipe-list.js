import { Component } from 'react';
import { connect } from 'react-redux';

import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';
import { fetchRecipes, onAddedToMenu, changeImg} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './recipe-list.sass';

const RecipeList = ({recipes, onAddedToMenu}) => {
    return(
        <ul className = 'recipe-list'>
            {
                recipes.map((recipe) => {
                    return(
                        <li key = {recipe.id}>
                            <RecipeListItem 
                                recipe = {recipe}
                                onAddedToMenu={() => onAddedToMenu(recipe)}/>
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

    
    onCategoryChange = (e) => {
        console.log(e.target.value)
    }

    render(){

        const {recipes, loading, error, onAddedToMenu, onChangeImg} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        // return <RecipeList 
        //     recipes = {recipes} 
        //     onAddedToCart={onAddedToCart}  />

        return(
            <ul className = 'recipe-list'>
                {
                    recipes.map((recipe) => {
                        return(
                            <li key = {recipe.id}>
                                <RecipeListItem 
                                    recipe = {recipe}
                                    onAddedToMenu={() => onAddedToMenu(recipe)}
                                    onChangeImg = {() => onChangeImg(recipe.id)}
                                    onCategoryChange = {(e) => this.onCategoryChange(e)} />
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
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
        onChangeImg: (id) => dispatch(changeImg(id)) ,
        fetchRecipes: fetchRecipes(menuService, dispatch),
        onAddedToMenu: (recipe) => onAddedToMenu(menuService)(recipe,'fff'),
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListContainer);