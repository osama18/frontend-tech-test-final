import React, { PureComponent } from 'react'

import style from './style.css'
import ApplicationManager from '../ApplicationManager/ApplicationManager';

class NewTask extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {addfinished : false ,  title:'',description:'',important:false,urgent:false };

    this.handletitleChange = this.handletitleChange.bind(this);
    this.handledescChange = this.handledescChange.bind(this);
    this.handleimpChange = this.handleimpChange.bind(this);
    this.handleurgentChange = this.handleurgentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.canceladd = this.canceladd.bind(this);
    
  }

  canceladd(event) {
    this.setState({addfinished:true});
  }

  handletitleChange(event) {
    this.setState({title: event.target.value});
  }
  handledescChange(event) {
    this.setState({description: event.target.value});
  }
  handleimpChange(event) {
    this.setState({important: !this.state.important});
  }
  handleurgentChange (event) {
    this.setState({urgent: !this.state.urgent});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.callSaveBackendAPI();
  }

  callSaveBackendAPI = async () => {
    
    const jsonBody = JSON.stringify({
        title : this.state.title,
        description : this.state.description,
        important : this.state.important,
        urgent : this.state.urgent,
      
    });

    const self = this;
    fetch('/task/create',{
      method: 'POST',
      body: jsonBody,
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
      return response.json()
    }).then(function(body){
      self.setState({addfinished: true});
    });

  };

  render() {
    if(this.state.addfinished)
    return(<ApplicationManager/>);

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <fieldset>
        <label>
          Title:
          <input required type="text" value={this.state.title} onChange={this.handletitleChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
        Description:
          <input className="textarea" required type="text" value={this.state.description}  onChange={this.handledescChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          Important:
          <input  type="checkbox" value={this.state.important} onChange={this.handleimpChange}/>
        </label>
        </fieldset>
        <fieldset>
        <label>
          Urgent:
          <input  type="checkbox" value={this.state.urgent} onChange={this.handleurgentChange}/>
        </label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={this.canceladd}>cancel</button>
      </div>
    );
  }
}

export default NewTask
