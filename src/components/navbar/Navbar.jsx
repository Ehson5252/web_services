
import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
		return (
			<nav className="navbar">
				<div className="logo-block">
					<img src={logo} alt="Logo" className="logo" />
					<p>CHAI-SERVICES</p>
				</div>
				<ul className="nav-menu">
					<li><a href="#home">HOME</a></li>
					<li><a href="#about">ABOUT</a></li>
					<li><a href="#services">SERVICES</a></li>
					<li><a href="#portfolio">PORTFOLIO</a></li>
				  <li><a href="#contact">CONTACT</a></li>
			<li><a href="#get-quote" className="get-quote-btn">GET QUOTE</a></li>
				</ul>
			</nav>
		);
};

export default Navbar;
