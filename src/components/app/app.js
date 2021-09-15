import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecipesPage, BasketPage, LoginPage } from '../pages';
import { connect } from 'react-redux';
import { withMenuService } from '../hoc';
import { fetchAuth} from '../../actions';
import { compose } from '../../utils';
import { Redirect } from 'react-router'

class App extends Component{

	componentDidMount(){
        this.props.fetchAuth();
    }

	render(){
		const {user} = this.props;
		console.log(user)
		

		return (
			<div>
				<Switch>
					<Route path = '/recipes' component = {RecipesPage} exact />
					<Route path = '/basket' component = {BasketPage} />
					<Route path = '/' component = {LoginPage} />
				</Switch>
			</div>
		);
	}	
}

const mapStateToProps = ({user: {user}}) => {
    return { 
        user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {menuService} = ownProps;

    return {
        fetchAuth: fetchAuth(menuService, dispatch)
    }
}

export default compose(
    withMenuService(),
    connect(mapStateToProps, mapDispatchToProps)
)(App);
