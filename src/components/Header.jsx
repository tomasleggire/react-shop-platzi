import React, { useContext, useState } from 'react';
import '../styles/Header.scss';
import Menu from './Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';

const Header = () => {
	const { state } = useContext(AppContext);

	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle ? <Menu /> : ''}
			{toggleOrders ? <MyOrder /> : ''}
		</nav>
	);
}

export default Header;
