import React, { Component } from "react";
import Todo from "./Todo";
import Form from "./Form";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
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
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((t) => {
      if (t.id === id) {
        return { ...t, task: updatedTask };
      }
      return t;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompleted(id) {
    const updatedTodos = this.state.todos.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((t) => {
      return <Todo 
      key={t.id} 
      id={t.id} 
      task={t.task} 
      completed={t.completed}
      removeTodo={this.remove}
      updateTodo={this.update}
      toggleTodo={this.toggleCompleted}
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
