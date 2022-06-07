import { Link } from 'react-router-dom';

const NavBar = ({ totalPrice, totalCount, toggle }) => {
	return (
		<div className='navBar'>
			<div className='navPages'>
				<h1>PC Parts</h1>
				<div className='shopLinks'>
					<Link to='/'>Home</Link>
					<Link to='/shop'>Shop</Link>
				</div>
			</div>
			<div className='navCart' onClick={toggle}>
				<h3 className='itemsTotalPrice'>Total: {totalPrice + '\u20AC'}</h3>
				<div className='cartIconCount'>
					<img className='cartIcon' src='/assets/cartIcon.svg' alt='' />
					<div className='itemsCount'>{totalCount}</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
