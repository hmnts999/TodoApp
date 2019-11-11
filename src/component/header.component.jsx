import React, { Component } from "react";
import "./header.style.css";

class Header extends Component {
	render() {
		return (
			<section className="header__parent">
				<h1 className="header__title">ToDo List</h1>
			</section>
		);
	}
}

export default Header;
