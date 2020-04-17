import React, { useContext } from 'react';
import WithLayout from '../../main/hoc/withLayout';
import { MainContext } from '../../main/context/Provider';
import List from '../list/List';

function PageList() {
	const { state: { currency } } = useContext(MainContext)

	return <>
		<h2>All Products</h2>
		<h3>A 360º look at Lumin</h3>
		<List currency={currency} />
	</>
}

export default WithLayout(PageList);

