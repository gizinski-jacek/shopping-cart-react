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
				<div className='cartItemPrice'>{Price + ' \u20AC'}</div>
				<input
					type='number'
					className='cartItemCount'
					value={count}
					onChange={(e) => change(e, data)}
				/>
			</div>
			<div className='divRelative'>
				<img
					className='cartRemoveItem'
					src='/assets/remove.svg'
					alt=''
					onClick={() => remove(data)}
				/>
			</div>
		</div>
	);
};

export default CartItemWrapper;
