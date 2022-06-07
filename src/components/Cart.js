import { Link } from 'react-router-dom';
import CartItemWrapper from './utils/CartItemWrapper';

const Cart = ({ showCart, data, clear, toggle, change, remove }) => {
	const cartItemListDisplay = data.map((item, index) => {
		return (
			<CartItemWrapper
				key={item.categoryId + index + item.Name}
				data={item}
				change={change}
				remove={remove}
			/>
		);
	});

	return (
		<div className={`cart ${showCart ? 'show' : ''}`}>
			<div className='cartControls'>
				<Link to='/' className='checkout' onClick={toggle}>
					CHECKOUT
				</Link>
				<button className='clear' onClick={clear}>
					CLEAR
				</button>
				<button className='close' onClick={toggle}></button>
			</div>
			<div className='cartContents'>{cartItemListDisplay}</div>
		</div>
	);
};

export default Cart;
