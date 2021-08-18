import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu} from '../../actions';
import { compose } from '../../utils';
import { withMenuService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { Container, Grid, Button} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import BasketItem from '../basket-item';


class Basket extends Component{

    componentDidMount(){
        this.props.fetchMenu()
    }

    
    render(){

        const {loading, error} = this.props;
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
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                >
                    Send
                </Button>
            </Container>
        )
    }
}

const mapStateToProps = ({ basket: { loading, error }}) => {
    return{
        loading, 
        error
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