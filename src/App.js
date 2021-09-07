import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState } from 'react';

const App = () => {
	const [showCart, setShowCart] = useState(false);
	const [cartContents, setCartContents] = useState([]);
	console.log(cartContents);

	const toggleCartDisplay = () => {
		setShowCart((prevState) => !prevState);
	};

	const addItemToCart = (item) => {
		setCartContents((prevState) => [...prevState, item]);
	};

	const removeItemFromCart = (remove) => {
		setCartContents((prevState) => [
			...prevState.filter((item) => item !== remove),
		]);
	};

	return (
		<BrowserRouter>
			<NavBar toggle={toggleCartDisplay} />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop'>
					<Shop addToCart={addItemToCart} />
				</Route>
			</Switch>
			{showCart ? (
				<Cart
					data={cartContents}
					remove={removeItemFromCart}
					toggle={toggleCartDisplay}
				/>
			) : null}
		</BrowserRouter>
	);
};

export default App;
