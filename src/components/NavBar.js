import { Link } from 'react-router-dom';

function NavBar(props) {
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
				<h3 className='itemsTotalPrice'>Value: 55555$</h3>
				<div className='cartItems' onClick={props.toggle}>
					<img
						className='cartIcon'
						src='/assets/cartIcon.svg'
						alt=''
					/>
					<div className='itemsCount'>3</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
