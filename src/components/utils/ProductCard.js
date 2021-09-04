import { useState } from 'react';

function ProductCard(props) {
	const { categoryId, name, price, preview } = props.data;
	const [showModal, setShowModal] = useState('none');

	const toggleCardOn = () => {
		setShowModal('flex');
	};

	const toggleCardOff = (e) => {
		if (e.target.className === 'detailsModal') {
			setShowModal('none');
		}
	};

	return (
		<div className='productCard'>
			<img className='productPreview' src={preview} alt={name} />
			<div className='productInfo'>
				<div className='productName'>{name}</div>
				<div className='productPrice'>{price}</div>
				<p className='productDetails' onClick={toggleCardOn}>
					More Info
				</p>
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
	);
}

export default ProductCard;
