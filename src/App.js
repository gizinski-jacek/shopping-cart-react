import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';

const App = () => {
	const [showCart, setShowCart] = useState(false);
	const [cartContents, setCartContents] = useState([]);
	const [totalItemPrice, setTotalItemPrice] = useState(0);
	const [totalItemCount, setTotalItemCount] = useState(0);

	const toggleCartDisplay = () => {
		setShowCart((prevState) => !prevState);
	};

	const changeItemCount = (e, itemToUpdate) => {
		const { value } = e.target;
		if (value > 100 || value < 1) {
			return;
		}

		const newState = cartContents.map((item) => {
			return item === itemToUpdate ? { ...item, count: Number(value) } : item;
		});
		setCartContents(newState);
	};

	const addItemToCart = (newItem, quantity) => {
		const duplicate = cartContents.find((item) => item.Name === newItem.Name);
		if (duplicate) {
			duplicate.count += quantity;
			const newState = cartContents.map((item) => {
				return item === newItem ? duplicate : item;
			});
			setCartContents(newState);
		} else {
			setCartContents((prevState) => [
				...prevState,
				{ ...newItem, count: quantity },
			]);
		}
	};

	const removeItemFromCart = (removeItem) => {
		setCartContents((prevState) => [
			...prevState.filter((item) => item !== removeItem),
		]);
	};

	const clearCart = () => {
		setCartContents([]);
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
				<Redirect to='/' />
			</Switch>
			<Cart
				showCart={showCart}
				data={cartContents}
				clear={clearCart}
				toggle={toggleCartDisplay}
				change={changeItemCount}
				remove={removeItemFromCart}
			/>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
