import React, { PureComponent } from 'react'
import TasksBoard from '../TasksBoard/TasksBoard'
import style from './style.css'

class EisenhowerTemplate extends PureComponent {
  render () {
    if(this.props.data == null)
    return(<div className={style.container}></div>)


    const tasks = this.props.data;
    
    this.urgentimportant = tasks.filter(function(item){
      return item.important == true && item.urgent == true;
    });

    this.urgentunimportant = tasks.filter(function(item){
      return item.important == true && item.urgent == false;
    });

    this.unurgentimportant = tasks.filter(function(item){
      return item.important == false && item.urgent == true;
    });

    this.unurgentunimportant = tasks.filter(function(item){
      return item.important == false && item.urgent == false;
    });


      return(<div className={style.container}>
        <div className="row">
        <div className="col-sm-6">
          <TasksBoard  data={this.urgentimportant}/>
        </div>
        <div className="col-sm-6">
          <TasksBoard  data={this.urgentunimportant}/>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-6">
          <TasksBoard  data={this.unurgentimportant}/>
        </div>
        <div className="col-sm-6">
          <TasksBoard  data={this.unurgentunimportant}/>
        </div>
        </div>
      </div>)
  }
}

export default EisenhowerTemplate
