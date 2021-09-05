import { useState } from 'react';

function ProductCard(props) {
	const { categoryId, name, price, preview } = props.data;
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
			<img className='productPreview' src={preview} alt={name} />
			<div className='productInfo'>
				<div className='productName'>{name}</div>
				<div>
					<div>
						<div className='productDetails' onClick={toggleCardOn}>
							Details
						</div>
						<div className='productPrice'>Price: {price}</div>
					</div>
					<div className='quantityControls'>
						<button className='decrementBtn' onClick={decrement}>
							&#8722;
						</button>
						<input className='itemQuantity' value={itemQuantity} />
						<button className='incrementBtn' onClick={increment}>
							&#43;
						</button>
					</div>
					<div
						className='detailsModal'
						style={{ display: showModal }}
						onClick={(e) => {
							toggleCardOff(e);
						}}
					>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
