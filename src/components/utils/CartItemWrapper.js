const CartItemWrapper = (props) => {
	const { Name, Price, preview, count } = props.data;
	const { data, change, remove } = props;

	return (
		<div className='cartItem'>
			<div className='toLeft'>
				<img className='cartItemPreview' src={preview} alt='' />
				<div className='cartItemName'>{Name}</div>
			</div>
			<div className='toRight'>
				<input
					type='number'
					className='cartItemCount'
					value={count}
					onChange={(e) => change(e, data)}
				/>
				<div className='cartItemPrice'>{Price + ' \u20AC'}</div>
				<span className='cartRemoveItem' onClick={() => remove(data)}>
					+
				</span>
			</div>
		</div>
	);
};

export default CartItemWrapper;
