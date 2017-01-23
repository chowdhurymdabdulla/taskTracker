import React, {Component} from 'react'
import ReactDOM from "react-dom";
import ShowPost from './ShowPost';
import {connect} from 'react-redux';
import {addTask} from '../actions/index';

class TaskForm extends Component {
  onHandleSubmit(e){
    e.preventDefault();
    let name = this.refs.name.value;
    let date = this.refs.date.value;
    let assigned = this.refs.assign.value;
    this.props.addTask(name, date, assigned);
      this.refs.name.value = "";
      this.refs.date.value = "";
      this.refs.assign.value ="";
  }
    render(){

      return(
        <div>
        <form
          onSubmit={this.onHandleSubmit.bind(this)}
        >
        <h3>Create a Task</h3>
        <label className="col-sm-5 control-label"
            htmlFor="taskName">TASK NAME:</label>
          <input type="text" ref="name" required className="form-control" />
        <label className="col-sm-5 control-label"
            htmlFor="taskDate">DATE:</label>
          <input type="text" ref="date" required className="form-control" />
        <label className="col-sm-5 control-label"
            htmlFor="assignTo">ASSIGN TO:</label>
          <input type="text" ref="assign" required className="form-control" />
        <div>
              <button className="btn btn-success">SUBMIT</button>
        </div>
        </form>

   </div>
      )
    }
}

 export default connect(null,{addTask})(TaskForm)
