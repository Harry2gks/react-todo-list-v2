import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    // take the new task Data and pass it to the parent (todoList)
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  render() {
    let edit;
    if (this.state.isEditing) {
      edit = (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      );
    } else {
      edit = (
        <div>
          <li>{this.props.task}</li>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }
    return edit;
  }
}
