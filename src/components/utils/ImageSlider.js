import { useState } from 'react';

const ImageSlider = (props) => {
	const { gallery } = props;
	const [slideIndex, setSlideIndex] = useState(0);

	const prevSlide = () => {
		if (slideIndex <= 0) {
			setSlideIndex(gallery.length - 1);
		} else {
			setSlideIndex((prevState) => prevState - 1);
		}
	};

	const nextSlide = () => {
		if (slideIndex >= gallery.length - 1) {
			setSlideIndex(0);
		} else {
			setSlideIndex((prevState) => prevState + 1);
		}
	};

	const changeSlideWithDots = (e) => {
		const newIndex = Array.from(e.target.parentElement.children).findIndex(
			(dot) => dot === e.target
		);
		setSlideIndex(newIndex);
	};

	const galleryDisplay = gallery.map((item, index) => {
		return (
			<div
				key={index}
				style={{ display: index === slideIndex ? 'block' : 'none' }}
				className='slide animation'
			>
				<img src={item} alt='' />
			</div>
		);
	});

	const galleryDots = gallery.map((item, index) => {
		return (
			<span
				className={index === slideIndex ? 'dot active' : 'dot'}
				onClick={changeSlideWithDots}
			></span>
		);
	});

	return (
		<div className='container'>
			<div className='galleryContainer'>
				{galleryDisplay}
				<div className='arrowsControls'>
					<div className='prev' onClick={prevSlide}>
						&#10094;
					</div>
					<div className='next' onClick={nextSlide}>
						&#10095;
					</div>
				</div>
			</div>
			<div className='dotsControls'>{galleryDots}</div>
		</div>
	);
};

export default ImageSlider;
