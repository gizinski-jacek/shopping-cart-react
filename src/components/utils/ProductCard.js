import { useState } from 'react';

const ProductCard = (props) => {
	const { Name, Price, preview } = props.data;
	const [showModal, setShowModal] = useState('none');
	const [itemQuantity, setItemQuantity] = useState(1);

	const toggleCardOn = () => {
		setShowModal('flex');
	};

	const toggleCardOff = (e) => {
		if (e.target.className === 'detailsModal') {
			setShowModal('none');
		}
	};

	const handleChange = (e) => {
		let value = Number(e.target.value);
		if (value >= 100) {
			value = 100;
		}
		setItemQuantity(value);
	};

	const decrement = () => {
		if (itemQuantity > 1) {
			setItemQuantity((prevState) => prevState - 1);
		}
	};

	const increment = () => {
		if (itemQuantity < 100) {
			setItemQuantity((prevState) => prevState + 1);
		}
	};

	return (
		<div className='productCard'>
			<img className='productPreview' src={preview} alt={Name} />
			<div className='productInfo'>
				<div className='productName'>{Name}</div>
				<div>
					<div>
						<div className='detailsBtn' onClick={toggleCardOn}>
							Details
						</div>
						<div className='productPrice'>{Price + ' \u20AC'}</div>
					</div>
					<div className='quantityControls'>
						<button className='decrementBtn' onClick={decrement}>
							&#8722;
						</button>
						<input
							className='itemQuantity'
							value={itemQuantity}
							max='100'
							onChange={handleChange}
						/>
						<button className='incrementBtn' onClick={increment}>
							&#43;
						</button>
					</div>
					<button
						className='addToCartBtn'
						onClick={() => props.addToCart(props.data)}
					>
						Add To Cart
					</button>
				</div>
			</div>
			<div
				className='detailsModal'
				style={{ display: showModal }}
				onClick={toggleCardOff}
			>
				{props.children}
			</div>
		</div>
	);
};

export default ProductCard;
