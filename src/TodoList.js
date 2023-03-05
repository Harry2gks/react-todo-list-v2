import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./Form";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
  }
  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }
  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !==id),
    });
  }
  render() {
    const todos = this.state.todos.map((t) => {
      return <Todo 
      key={t.id} 
      id={t.id} 
      task={t.task} 
      removeTodo={this.remove}
      />;
    });
    return (
      <div>
        <h1> Simple React To Do List App</h1>
        <Form createNewTodo={this.create}  />
        <ul> {todos} </ul>
        <h5>Made with &hearts; by harry2gks</h5>
      </div>
    );
  }
}
