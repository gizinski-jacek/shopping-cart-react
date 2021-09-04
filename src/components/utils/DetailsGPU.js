function DetailsGPU(props) {
	const {
		categoryId,
		name,
		price,
		cores,
		threads,
		tdp,
		coreClock,
		boostClock,
		gallery,
	} = props.data;
	const { toggle } = props;

	const galleryDisplay = gallery.map((item) => {
		return <img src={item} alt='' />;
	});

	return (
		<div className='detailsCard'>
			<div className='gallery'>{galleryDisplay}</div>
		</div>
	);
}

export default DetailsGPU;
