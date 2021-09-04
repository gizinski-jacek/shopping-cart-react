import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
	const [showCart, setShowCart] = useState(false);

	const toggleCartDisplay = () => {
		setShowCart((prevState) => !prevState);
	};

	return (
		<BrowserRouter>
			<NavBar toggle={toggleCartDisplay} />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop' component={Shop} />
			</Switch>
			{showCart ? <Cart toggle={toggleCartDisplay} /> : null}
		</BrowserRouter>
	);
}

export default App;
