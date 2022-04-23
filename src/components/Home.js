import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className='home'>
			<h2>Build your dream PC with the best parts</h2>
			<Link to='/shop'>SHOP NOW</Link>
		</div>
	);
};

export default Home;
