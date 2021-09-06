import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from './data/allProducts';
import ProductCard from './utils/ProductCard';
import DataWrapper from './utils/DataWrapper';
import ImageSlider from './utils/ImageSlider';

function CatalogPage(props) {
	const { productType } = useParams();
	const [displayContent, setDisplayContent] = useState([]);

	const shuffleArray = (array) => {
		let i = array.length;
		let r;
		while (i !== 0) {
			r = Math.floor(Math.random() * i);
			i--;
			[array[i], array[r]] = [array[r], array[i]];
		}
		return array;
	};

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
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			if (item.categoryId === 'gpu') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			if (item.categoryId === 'memory') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			if (item.categoryId === 'mboard') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			if (item.categoryId === 'psu') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			if (item.categoryId === 'storage') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			if (item.categoryId === 'chassis') {
				return (
					<ProductCard
						key={index + '_' + item.categoryId + '_' + item.name}
						data={item}
						addToCart={props.addToCart}
					>
						<div className='detailsCard'>
							<DataWrapper data={item} />
							<ImageSlider gallery={item.gallery} />
						</div>
					</ProductCard>
				);
			}
			return null;
		});
		setDisplayContent(newContent);
	}, [productType, props.addToCart]);

	return <div className='catalogPage'>{displayContent}</div>;
}

export default CatalogPage;
