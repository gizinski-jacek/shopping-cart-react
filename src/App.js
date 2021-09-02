import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop' component={Shop} />
				<Route exact path='/cart' component={Cart} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
