import {
	BrowserRouter,
	Link,
	Route,
	Switch,
	useRouteMatch,
} from 'react-router-dom';
import CatalogPage from './CatalogPage';

const Shop = ({ addToCart }) => {
	let match = useRouteMatch();

	return (
		<BrowserRouter>
			<div className='content'>
				<div className='productMenu'>
					<Link to={match.url}>All Products</Link>
					<Link to={match.url + '/cpu'}>Processor</Link>
					<Link to={match.url + '/gpu'}>Video Card</Link>
					<Link to={match.url + '/memory'}>Memory</Link>
					<Link to={match.url + '/motherboard'}>Motherboard</Link>
					<Link to={match.url + '/psu'}>Power Supply</Link>
					<Link to={match.url + '/storage'}>Storage</Link>
					<Link to={match.url + '/chassis'}>Chassis</Link>
				</div>
				<Switch>
					<Route exact path={match.path}>
						<CatalogPage addToCart={addToCart} />
					</Route>
					<Route exact path={match.path + '/:productType'}>
						<CatalogPage addToCart={addToCart} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default Shop;
