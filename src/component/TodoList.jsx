import React, { Component } from "react";
import "./Todolist.style.css";

class TodoList extends Component {
	componentDidUpdate() {
		this.props.inputElement.current.focus();
	}
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.props.addItem}>
						<input
							className="inputBox"
							placeholder="What needs to be done?"
							ref={this.props.inputElement}
							value={this.props.currentItem.text}
							onChange={this.props.handleInput}
						/>
						<button className="AddBtn" type="submit">
							{" "}
							Add Task{" "}
						</button>
					</form>
				</div>
			</div>
		);
	}
}
export default TodoList;
