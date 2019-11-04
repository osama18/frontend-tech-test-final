import React, { PureComponent } from 'react'
import TasksBoard from '../TasksBoard/TasksBoard'
import style from './style.css'
import EisenhowerTemplate from '../EisenhowerTemplate/EisenhowerTemplate';

class TemplatesManager extends PureComponent {

  constructor(props){
    super(props);
    this.state = {data:null};
  }

  componentDidMount() {
  this.callBackendAPI()
    .then(res => this.setState({ data: res.tasks }))
    .catch(err => console.log(err));
}


  callBackendAPI = async () => {

    const response = await fetch('/tasks');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


  getTemplate()
  {
    var templateid = this.props.data;
    var template = null;
    switch(templateid)
    {
      case 1 : 
        template = <EisenhowerTemplate  data={this.state.data}/>;
        break;
      case 2 : 
        template = <TasksBoard className="board-content"  data={this.state.data}/>;
        break;
    }
    return template;
  }  
  render () {

    if(this.state.data == null)
      return null;
    
    
    return (
      <div>
        {/* <div className="row">
          <div className="col-sm">
              <button>Test1</button>
          </div>
          <div className="col-sm">
            <button>Test1</button>
          </div>
          <div className="col-sm">
            <button>Test1</button>
          </div>
        </div> */}
        <div className="board-container">
          {this.getTemplate()}
        </div>
      </div>
    )
  }
}

export default TemplatesManager
