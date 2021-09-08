import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { useEffect, useState } from 'react';

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

		// This was the first iteration of doing update I picked up on internet,
		// but won't use it for now since I dont understand why it's working
		// even though the log throws false on every check. Will do more
		// research into it to figure out why.
		// itemToUpdate.count = value;
		// const newState = cartContents.map((item, index) => {
		// 	console.log(index === itemToUpdate.index);
		// 	return index === itemToUpdate.index ? itemToUpdate : item;
		// });

		// This was second iteration built upon knowledge from previous on
		// after slight modification. Looks a bit messy but does the job.
		// const oldIndex = cartContents.indexOf(itemToUpdate);
		// itemToUpdate.count = Number(value);
		// const newState = cartContents.map((item, index) => {
		// 	console.log(index === oldIndex);
		// 	return index === oldIndex ? itemToUpdate : item;
		// });

		// Third iteration using spread syntax, much cleaner. Will use
		// this one until I figure out the workings behind first iteration.
		const newState = cartContents.map((item) => {
			return item === itemToUpdate
				? { ...item, count: Number(value) }
				: item;
		});
		setCartContents(newState);
	};

	const addItemToCart = (newItem, quantity) => {
		const duplicate = cartContents.find((dup) => dup.Name === newItem.Name);
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
				<Route exact path='/checkout'>
					<Checkout />
				</Route>
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
