import React, { Component } from 'react'
import TodoList from './TodoList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <TodoList />
      </div>
    )
  }
}

