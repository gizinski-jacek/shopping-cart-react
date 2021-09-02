import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';

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
