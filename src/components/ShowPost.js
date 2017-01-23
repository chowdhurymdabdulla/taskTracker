import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions/index'
import {TaskForm} from './TaskForm'

class ShowPost extends Component {

onComplete(task){
  let completeTask = this.props.tasks.indexOf(task);
  if(!completeTask.isChecked){
    completeTask.isChecked =  true;
    console.log("is chacked");
    this.setState({tasks: this.props.tasks})
  } else{
    completeTask.isChecked = false;
    console.log("is not checked");
    this.setState({tasks: this.props.tasks})
  }
}

  onRemove(task){
    console.log("its clicked");
    let oldTask = this.props.tasks;
    let index = oldTask.indexOf(task);
    // console.log(this.props.task.name);
    let oldTask2 = this.props.tasks.splice(index, 1)
    this.setState({tasks: oldTask})
  }
  render(){

    const renderTask = () => {
      console.log(this.props.tasks);
      return this.props.tasks.map((task, i) =>{
      return (
          <tr key={i}>
              <td>{task.name}</td>
              <td>{task.date}</td>
              <td>{task.assigned}</td>
              <td><input
                type="checkbox"
                readOnly
                onChange = {this.onComplete.bind(this, task)}

                /></td>
              <td><input
                type="button"
                value="remove"
                className="btn btn-danger"
                onClick={this.onRemove.bind(this, task)}/>
            </td>
          </tr>
        )
      });
    }

    return(
      <table className="table table-hover">
      <thead>
        <tr>
          <td>Name</td>
          <td>Date</td>
          <td>Assigned To</td>
          <td>Compleated</td>
          <td>Remove</td>
        </tr>
      </thead>
      <tbody>
        {renderTask()}
      </tbody>
    </table>
    )
  }
}
  function mapStateToProps(state){
      return {
          tasks: state.tasks
       }
  }

export default connect(mapStateToProps)(ShowPost)

// checked = {this.props.task.isChecked}
