import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu, onDeleteRecipe } from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './basket.sass';

class Basket extends Component{

    componentDidMount(){
        this.props.fetchMenu()
    }

    
    render(){

        const {menu,loading, error, onDelete} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return(
            <div className = 'basket'>
                <h2>Day 1</h2>
                <h2>Day 2</h2>
                <h2>Day 3</h2>
                <h2>Day 4</h2>
                <h2>Day 5</h2>
                <h2>Day 6</h2>
                <h2>Day 7</h2>
                <ul>
                    {
                        menu.map((item) => {
                            const {title, id} = item;
                            return(
                                <li key = {id}>
                                    <div>img</div>
                                    <span>{title}</span>
                                    <button
                                        onClick = {() => onDelete(id)} >
                                            <i className="bi bi-x-circle-fill"></i>
                                    </button>
                                </li>
                            )
                        })  
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ basket: { menu, loading, error }}) => {
    return{
        menu,
        loading, 
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchMenu: fetchMenu(menuService, dispatch),
        onDelete: (id) =>  onDeleteRecipe(menuService, dispatch)(id)
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Basket);