import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleRemove() {
  this.props.removeTodo(this.props.id)
}
handleChange(evt) {
  this.setState({
    [evt.target.name]: evt.target.value
  });
}
handleSubmit(evt) {
  evt.preventDefault();
  // take the new task Data and pass it to the parent (todoList)
  this.props.updateTodo(this.props.id, this.state.task);
  this.setState({ isEditing: false });
}
toggleForm() {
  this.setState({ isEditing: !this.state.isEditing });
}
render() {
  let edit;
  if (this.state.isEditing) {
    edit = (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text"
        name="task"
        value={this.state.task}
        onChange={this.handleChange}/>
        <button>Update</button>
      </form>
    );
  } else {
    edit = (
    <div>
      <li>{this.props.task}</li>
      <button onClick={this.toggleForm}>Edit</button>
      <button onClick={this.handleRemove}>Delete</button>
    </div>
    )
  }
  return edit;
}
}
