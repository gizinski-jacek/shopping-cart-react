import CartItemWrapper from './utils/CartItemWrapper';

const Cart = (props) => {
	const { data, toggle } = props;

	const content = data.map((item, index) => {
		return (
			<CartItemWrapper
				key={item.categoryId + index + item.Name}
				data={item}
				remove={props.remove}
			/>
		);
	});

	return (
		<div className='cart'>
			<div className='cartControls'>
				<button className='checkout' onClick={toggle}>
					Checkout
				</button>
				<button className='close' onClick={toggle}>
					Close
				</button>
			</div>
			<div className='cartContents'>{content}</div>
		</div>
	);
};

export default Cart;
