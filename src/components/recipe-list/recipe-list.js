import { Component } from 'react';
import { connect } from 'react-redux';

import RecipeListItem from '../recipe-list-item';
import { withMenuService } from '../hoc';
import { fetchRecipes, onAddedToMenu, changeImg} from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    recipeWrapper:{
        flexGrow: 1,
    },
  }));

const RecipeList = ({recipes, onAddedToMenu, onChangeImg, onCategoryChange}) => {
    const classes = useStyles();

    return(
        <Container>
            <Grid container className={classes.recipeWrapper} spacing={4}>
                {
                    recipes.map((recipe) => {
                        return(
                            <Grid item key = {recipe.id} xs={12} sm={6} md={4} className={classes.recipeItem}>
                                <RecipeListItem 
                                    recipe = {recipe}
                                    onAddedToMenu={() => onAddedToMenu(recipe)}
                                    onChangeImg = {() => onChangeImg(recipe.id)}
                                    onCategoryChange = {(e) => onCategoryChange(e)} />
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

        return <RecipeList 
            recipes = {recipes} 
            onAddedToMenu={onAddedToMenu}  
            onChangeImg = {onChangeImg} 
            onCategoryChange = {this.onCategoryChange}/>

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
        onAddedToMenu: (recipe) => onAddedToMenu(menuService)(recipe,'Завтрак'),
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(RecipeListContainer);