import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom';

import style from './style.css'
import TaskDetails from '../TaskDetails/TaskDetails'

class TasksBoard extends PureComponent {

render () {
    if(this.props.data == null)
    return(<div className={style.container}></div>)

      this.items = this.props.data.map((item, key) =>
        <TaskDetails key={item.id} data={item}/>
      );

      return (
        <div className="container">
          <div className="row">
            {this.items}
          </div>
        </div>
      )
  }
}

export default TasksBoard
