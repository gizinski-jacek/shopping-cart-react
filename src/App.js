import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';

const App = () => {
	const [showCart, setShowCart] = useState(false);
	const [cartContents, setCartContents] = useState([]);
	const [totalItemPrice, setTotalItemPrice] = useState(0);
	const [totalItemCount, setTotalItemCount] = useState(0);

	const toggleCartDisplay = () => {
		setShowCart((prevState) => !prevState);
	};

	const changeItemCount = (e, oldItem) => {
		const { value } = e.target;
		if (value > 100 || value < 1) {
			return;
		}
		setCartContents((prevState) => [
			...prevState.filter((item) => item !== oldItem),
		]);
		oldItem.count = Number(value);
		setCartContents((prevState) => [...prevState, oldItem]);
	};

	const addItemToCart = (newItem, quantity) => {
		const duplicate = cartContents.find((dup) => dup === newItem);
		if (duplicate) {
			setCartContents((prevState) => [
				...prevState.filter((item) => item !== duplicate),
			]);
			duplicate.count += quantity;
			setCartContents((prevState) => [...prevState, duplicate]);
		} else {
			newItem.count = quantity;
			setCartContents((prevState) => [...prevState, newItem]);
		}
	};

	const removeItemFromCart = (removeItem) => {
		setCartContents((prevState) => [
			...prevState.filter((item) => item !== removeItem),
		]);
	};

	useEffect(() => {
		setTotalItemPrice(
			cartContents
				.map((item) => item.Price * item.count)
				.reduce((a, b) => a + b, 0)
				.toFixed(2)
		);
		setTotalItemCount(
			cartContents.map((item) => item.count).reduce((a, b) => a + b, 0)
		);
	}, [cartContents]);

	return (
		<BrowserRouter>
			<NavBar
				toggle={toggleCartDisplay}
				totalPrice={totalItemPrice}
				totalCount={totalItemCount}
			/>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop'>
					<Shop addToCart={addItemToCart} />
				</Route>
				<Route exact path='/checkout' component={Home} />
			</Switch>
			{showCart ? (
				<Cart
					data={cartContents}
					toggle={toggleCartDisplay}
					change={changeItemCount}
					remove={removeItemFromCart}
				/>
			) : null}
		</BrowserRouter>
	);
};

export default App;
