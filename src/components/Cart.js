function Cart(props) {
	return (
		<div className='cart'>
			<div className='divRelative'>
				<span className='close' onClick={props.toggle}>
					<img src='/assets/close.svg' alt='' />
				</span>
			</div>
		</div>
	);
}

export default Cart;
