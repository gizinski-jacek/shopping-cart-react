import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from './data/allProducts';
import ProductCard from './utils/ProductCard';
import DetailsChassis from './utils/DetailsChassis';
import DetailsCPU from './utils/DetailsCPU';
import DetailsGPU from './utils/DetailsGPU';
import DetailsMboard from './utils/DetailsMboard';
import DetailsMemory from './utils/DetailsMemory';
import DetailsPSU from './utils/DetailsPSU';
import DetailsStorage from './utils/DetailsStorage';

function CatalogPage(props) {
	const { productType } = useParams();
	const [displayContent, setDisplayContent] = useState([]);

	function shuffleArray(array) {
		let i = array.length;
		let r;
		while (i !== 0) {
			r = Math.floor(Math.random() * i);
			i--;
			[array[i], array[r]] = [array[r], array[i]];
		}
		return array;
	}

	useEffect(() => {
		let productList = shuffleArray(allProducts);
		if (productType) {
			const newList = productList.filter(
				(item) => item.categoryId === productType
			);
			productList = newList;
		}
		const newContent = productList.map((item, index) => {
			if (item.categoryId === 'cpu') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsCPU
							key={'modal_' + item.categoryId + '_' + index}
							id={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			if (item.categoryId === 'gpu') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsGPU
							key={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			if (item.categoryId === 'memory') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsMemory
							key={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			if (item.categoryId === 'mboard') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsMboard
							key={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			if (item.categoryId === 'psu') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsPSU
							key={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			if (item.categoryId === 'storage') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsStorage
							key={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			if (item.categoryId === 'chassis') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
					>
						<DetailsChassis
							key={'modal_' + item.categoryId + '_' + index}
							data={item}
						/>
					</ProductCard>
				);
			}
			return null;
		});
		setDisplayContent(newContent);
	}, [productType]);

	return <div className='catalogPage'>{displayContent}</div>;
}

export default CatalogPage;
