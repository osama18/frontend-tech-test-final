import React, { PureComponent } from 'react'
import Templateselector from '../templateselector/templateselector';
import NewTask from '../NewTask/NewTask'
import style from './style.css'

class ApplicationManager extends PureComponent {
  

  constructor(props){
    super(props);
    this.state = {inaddmode : false}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){  
    this.setState(state => ({
      inaddmode: true
    }));
  }


  render () {
    if(this.state.inaddmode)
    {
      this.state.inaddmode = false;
      return(  <div className={style.container}>
        <NewTask/> 
      </div>);
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-10"></div>
          <div className="col-sm-2">
              <button class="btn" onClick={this.handleClick}><i class="fa fa-bars"></i>Add Task</button>
          </div>
        </div>
        <Templateselector/>
      </div>
    )
  }
}

export default ApplicationManager
