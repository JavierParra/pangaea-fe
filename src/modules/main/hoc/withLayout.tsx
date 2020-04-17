import React, {FunctionComponent} from 'react';
import Header from '../header/Header';
import CartModal from '../../store/cart/CartModal';

function WithLayout<T>(Component: FunctionComponent<T>) {
	return (props: T) => (
		<>
			<Header />
			<div className='pageContainer'>
				<Component {...props} />
			</div>
			<CartModal />
		</>
	)
}

export default WithLayout;
