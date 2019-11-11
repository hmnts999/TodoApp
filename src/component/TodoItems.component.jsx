import React, { Component } from "react";
import "./TodoItems.style.css";

class TodoItems extends Component {
	createTasks = item => {
		return (
			<li className="item__class" id={item.key} key={item.key}>
				{item.text}
				<br />
				<section className="Manipulationbtn">
					<button
						onClick={() => this.props.deleteItem(item.key)}
						className="deleteButton"
					>
						&#x2717;
					</button>
				</section>
			</li>
		);
	};
	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);
		return <ul className="theList">{listItems}</ul>;
	}
}
export default TodoItems;
