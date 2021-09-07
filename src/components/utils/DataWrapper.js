const DataWrapper = (props) => {
	const { data } = props;

	const content = Object.entries(data).map(([key, value], index) => {
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

	return <div className='moreDetails'>{content}</div>;
};

export default DataWrapper;
