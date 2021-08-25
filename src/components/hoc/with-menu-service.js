import { MenuServiceConsumer } from '../menu-service-context';

const withMenuService = () => (Wrapped) => {
	return (props) => {
		return (
			<MenuServiceConsumer >
				{
					(menuService) => {
						return (<Wrapped {...props}
								menuService={menuService}/>);
					}
				}
			</MenuServiceConsumer>
		);
	}
};

export default withMenuService;