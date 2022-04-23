import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from './data/allProducts';
import ProductCard from './utils/ProductCard';
import DataWrapper from './utils/DataWrapper';
import ImageSlider from './utils/ImageSlider';

const CatalogPage = (props) => {
	const { productType } = useParams();
	const { addToCart } = props;
	const [productList, setProductList] = useState([]);

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
		let productList = [];
		if (productType) {
			productList = allProducts.filter(
				(item) => item.categoryId === productType
			);
		} else {
			productList = shuffleArray(allProducts);
		}
		setProductList(productList);
	}, [productType]);

	const productsDisplay = productList.map((item, index) => {
		if (item.categoryId === 'cpu') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		if (item.categoryId === 'gpu') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		if (item.categoryId === 'memory') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		if (item.categoryId === 'motherboard') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		if (item.categoryId === 'psu') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		if (item.categoryId === 'storage') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		if (item.categoryId === 'chassis') {
			return (
				<ProductCard
					key={item.categoryId + index + item.name}
					data={item}
					addToCart={addToCart}
				>
					<div className='detailsCard'>
						<DataWrapper data={item} />
						<ImageSlider category={item.categoryId} gallery={item.gallery} />
					</div>
				</ProductCard>
			);
		}
		return null;
	});

	return <div className='catalogPage'>{productsDisplay}</div>;
};

export default CatalogPage;
