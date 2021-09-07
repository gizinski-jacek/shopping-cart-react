import { Link } from 'react-router-dom';

const NavBar = (props) => {
	const { totalPrice, totalCount, toggle } = props;
	return (
		<div className='navBar'>
			<div className='navPages'>
				<h1 className='shopName'>PC Shop</h1>
				<h2 className='homePage'>
					<Link to='/'>Home</Link>
				</h2>
				<h2 className='shopPage'>
					<Link to='/shop'>Shop</Link>
				</h2>
			</div>
			<div className='navCart'>
				<h3 className='itemsTotalPrice'>
					Total: {totalPrice + ' \u20AC'}
				</h3>
				<div className='cartTotalCount' onClick={toggle}>
					<img
						className='cartIcon'
						src='/assets/cartIcon.svg'
						alt=''
					/>
					<div className='itemsCount'>{totalCount}</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
