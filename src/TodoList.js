import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [task: "Feed the cat"]};
  }
  render() {
    const todos = this.state.todos.map((t) => {
      return <Todo task={t.task} />;
    });
    return (
      <div>
        <h1> Simple React To Do List App</h1>
        <Form />
        <ul> {todos} </ul>
        <h5>Made with &hearts; by harry2gks</h5>
      </div>
    );
  }
}

