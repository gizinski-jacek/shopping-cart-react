const CartItemWrapper = (props) => {
	const { Name, Price, preview, count, change } = props.data;
	const { data, remove } = props;

	return (
		<div className='cartItem'>
			<div className='toLeft'>
				<img className='cartItemPreview' src={preview} alt='' />
				<div className='cartItemName'>{Name}</div>
			</div>
			<div className='toRight'>
				<div className='cartItemPrice'>{Price + ' \u20AC'}</div>
				<input type='number' className='cartItemCount' value={count} />
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
