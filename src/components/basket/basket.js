import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu, onDeleteRecipe } from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid} from '@material-ui/core';
import BasketItem from '../basket-item';


class Basket extends Component{

    componentDidMount(){
        this.props.fetchMenu()
    }

    
    render(){

        const {menu,loading, error, onDelete} = this.props;
        const day = [0, 1, 2, 3, 4, 5, 6];

        if(loading){
            return (
                <div style = {{paddingTop: 110}}>
                    <Spinner/>
                </div>
            )
        }

        if(error){
            return <ErrorIndicator/>
        }

        return(
            <Container>
                <Grid container style = {{marginTop: 50}} justifyContent='center'>
                    <Grid item>
                        {
                            day.map((day) => {
                                return(
                                    <Grid item key={day}>
                                        <BasketItem
                                            menu={menu}
                                            day={day}
                                            onDelete = {() => onDelete(menu[day].id)}
                                        />
                                    </Grid>
                                )
                            })    
                        }
                    </Grid>
                </Grid>
            </Container>
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