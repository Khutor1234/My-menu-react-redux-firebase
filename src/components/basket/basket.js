import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu} from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid} from '@material-ui/core';
import BasketItem from '../basket-item';
import ButtonCountIngredients from '../buttonCountIngredients';


class Basket extends Component{

    componentDidMount(){
        this.props.fetchMenu()
    }

    
    render(){

        const {loading, error, menu} = this.props;
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
                                            day={day}
                                        />
                                    </Grid>
                                )
                            })    
                        }
                    </Grid>
                </Grid>
                <ButtonCountIngredients menu ={menu}/>
            </Container>
        )
    }
}

const mapStateToProps = ({ basket: { loading, error, menu}}) => {
    return{
        loading, 
        error,
        menu
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchMenu: fetchMenu(menuService, dispatch),
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Basket);