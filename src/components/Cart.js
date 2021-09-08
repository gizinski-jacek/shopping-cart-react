import { Link } from 'react-router-dom';
import CartItemWrapper from './utils/CartItemWrapper';

const Cart = (props) => {
	const { data, toggle, change, remove } = props;

	const content = data.map((item, index) => {
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
		<div className='cart'>
			<div className='cartControls'>
				<Link to='/' className='checkout' onClick={toggle}>
					CHECKOUT
				</Link>
				<button className='close' onClick={toggle}>
					CLOSE
				</button>
			</div>
			<div className='cartContents'>{content}</div>
		</div>
	);
};

export default Cart;
