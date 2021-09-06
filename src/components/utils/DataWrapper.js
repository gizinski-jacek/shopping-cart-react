const DataWrapper = (props) => {
	const { data } = props;

	const content = Object.entries(data).map(([key, value]) => {
		if (key !== 'categoryId' && key !== 'preview' && key !== 'gallery') {
			if (key === 'Price') {
				return (
					<div>
						<p>{key + ': '}</p>
						<p>{value + ' \u20AC'}</p>
					</div>
				);
			} else {
				return (
					<div>
						<p>{key + ': '}</p>
						<p>{value}</p>
					</div>
				);
			}
		}
		return null;
	});
	return <div className='moreDetails'>{content}</div>;
};

export default DataWrapper;
