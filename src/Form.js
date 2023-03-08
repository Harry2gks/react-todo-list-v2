import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        }); 
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createNewTodo({ ...this.state, id:uuidv4() });
        this.setState({ task:"" });
    }  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor='task'></label>
            <input
              type="text"
              placeholder='Add To Do'
              id='task'
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
