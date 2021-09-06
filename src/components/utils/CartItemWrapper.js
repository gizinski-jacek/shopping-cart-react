const CartItemWrapper = (props) => {
	const { Name, Price, preview } = props.data;
	const { remove } = props;

	return (
		<div className='cartItem'>
			<img className='cartItemPreview' src={preview} alt='' />
			<div className='cartItemName'>{Name}</div>
			<div className='cartItemPrice'>{Price}</div>
			<img
				className='cartRemoveItem'
				src='/assets/remove.svg'
				alt=''
				onClick={() => remove(props.data)}
			/>
		</div>
	);
};

export default CartItemWrapper;
