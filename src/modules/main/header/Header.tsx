import React from 'react';
import CurrencySelector from '../../store/currency/Selector';
import CartIcon from '../../store/cart/CartIcon';

function Header() {
	return (
		<header>
			<h1>Lumin</h1>
			<section className='actions'>
				<CurrencySelector />
				<CartIcon />
			</section>
		</header>
	);
}

export default Header;
