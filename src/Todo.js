import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  }
}
