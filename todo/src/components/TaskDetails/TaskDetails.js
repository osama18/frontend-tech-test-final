import React, { PureComponent } from 'react'

import style from './style.css'

class TaskDetails extends PureComponent {
  constructor(props){
    super(props);
    this.state = {showdetails:false ,
       editMode:false,
       completed:false,
       title: this.props.data.title,
       description : this.props.data.description}
    this.handleClick = this.handleClick.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.editCompleted = this.editCompleted.bind(this);
    this.handletitleChange = this.handletitleChange.bind(this);
    this.handledescChange = this.handledescChange.bind(this);
    this.taskCompleted = this.taskCompleted.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    
    
  }

  cancelEdit(event){

    this.setState({editMode:false});
   }

  taskCompleted(event){

   this.callDeleteBackendAPI();
  }

  handletitleChange(event) {
    this.setState({title: event.target.value});
  }
  handledescChange(event) {
    this.setState({description: event.target.value});
  }

  editCompleted(){

    this.callSaveBackendAPI();
    
  }
  
  startEdit(){
    this.setState(state => ({
      editMode: true,
      title: this.props.data.title,
      description : this.props.data.description,
      id:this.props.data.id
    }));
  }

  handleClick(){
    this.setState(state => ({
      showdetails: !state.showdetails
    }));
  }


  callSaveBackendAPI = async () => {
    
    const jsonBody = JSON.stringify({
        title : this.state.title,
        description : this.state.description,
        id: this.state.id
    });

    const url = '/task/update/'+this.state.id;
    const self = this;

    fetch(url,{
      method: 'PUT',
      body: jsonBody,
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){      
      return response.json()
    }).then(function(body){
      self.setState({editMode:false});
    });

  };

  callDeleteBackendAPI = async () => {
    
    const url = '/task/delete/'+this.props.data.id;
    const self = this;

    fetch(url,{
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      return response.json()
    }).then(function(body){
      self.setState({completed:true});
    });

  };

  render () {
    if(this.props.data == null)
    return ;

    if(this.state.completed)
     return null;

    if(this.state.showdetails)
    {
      if(this.state.editMode)
      {
        return (
          <div className="col-sm-3 taskholder">
           <div className="header">
              <label>
                Title:
                <input type="text" value={this.state.title} onChange={this.handletitleChange}/>
              </label>
            </div>
            <div className="details">
                <label>
                Description:
                  <input type="text" value={this.state.description} onChange={this.handledescChange}/>
                </label>
              <button onClick={this.editCompleted}>Save</button>
              <button onClick={this.cancelEdit}>cancel</button>
            </div>
          </div>
        )  
      }
      else
      {
        const urgency = this.props.data.urgent ? 'urgent':'unurgent ';
        const importance = this.props.data.important ? 'important':'unimportant';
        return (
          <div className="col-sm-3 taskholder">
           <div className="row">
              <div className="col-sm-9 header" onClick={this.handleClick}>
              <p>
                {this.props.data.title}
              </p>
              </div>
              <div className="col-sm-3">
              <button className="btndone" onClick={this.taskCompleted}></button>
              </div>
            </div>
            <div className="details">
              <p>
                {this.state.description}
              </p>
              <p className={urgency}>
                {urgency}
              </p>
              <p className={importance}>
                {importance}
              </p>
              <button onClick={this.startEdit}>Edit</button>
            </div>
          </div>
        )  
      }
    }

    return (
       <div className="col-sm-3 taskholder">
         <div className="row">
          <div className="col-sm-9 header" onClick={this.handleClick}>
          <p>
            {this.props.data.title}
          </p>
          </div>
          <div className="col-sm-3">
            <button className="btndone" onClick={this.taskCompleted}></button>
          </div>
         </div>
       </div>
    )
  }
}

export default TaskDetails
