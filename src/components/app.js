import React, { Component } from 'react';
import TaskForm from './TaskForm'
import ShowPost from './ShowPost'

export default class App extends Component {
  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Welcome to the Task Tracker</h1>
        <TaskForm/>
        <ShowPost />
      </div>
    );
  }
}
