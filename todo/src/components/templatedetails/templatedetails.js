import React, { PureComponent } from 'react'

import style from './style.css'
import TemplatesManager from '../TemplatesManager/TemplatesManager';

class Templatedetails extends PureComponent {
  
  constructor(props){
    super(props);
    
    this.state = {selected: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    
    this.setState(state => ({
      selected: !state.selected
    }));
  }
  
  render () {

    const id =  this.props.data.id;
    const name = this.props.data.name;
    
    if(this.state.selected)
    {
      return (
        <li data-id={id} >
          <div className="headerTemplate" onClick={this.handleClick}>{name}</div>
            <TemplatesManager data={id}/>
         </li>
      );
    }

    return (
      <li data-id={id} onClick={this.handleClick} >{name}</li>
    )
  }
}

export default Templatedetails
