const DataWrapper = ({ data }) => {
	const contents = Object.entries(data).map(([key, value], index) => {
		if (key === 'categoryId' || key === 'preview' || key === 'gallery') {
			return null;
		} else {
			if (key === 'Price') {
				return (
					<div key={data.categoryId + index + key}>
						<p>{key + ': '}</p>
						<p>{value + ' \u20AC'}</p>
					</div>
				);
			} else {
				return (
					<div key={data.categoryId + index + key}>
						<p>{key + ': '}</p>
						<p>{value}</p>
					</div>
				);
			}
		}
	});

	return <div className='moreDetails'>{contents}</div>;
};

export default DataWrapper;
