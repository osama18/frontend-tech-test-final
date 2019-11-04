import React, { PureComponent } from 'react'
import TemplateDetails from '../templatedetails/templatedetails'
import style from './style.css'

class Templateselector extends PureComponent {

  constructor(props){
    super(props);
    this.state = {data:null};
  }

  componentDidMount() {
  this.callBackendAPI()
    .then(res => this.setState({ data: res.templates }))
    .catch(err => console.log(err));
}


callBackendAPI = async () => {
  const response = await fetch('/templates');
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message) 
  }
  return body;
};


render () {
  if(this.state.data == null)
   return(<div className={style.container}></div>)

    this.items = this.state.data.map((item, key) =>
      <TemplateDetails key={item.id} data={item}/>
    );

  return (
    <div className={style.container}>
      <h2>
          Please select your template
      </h2>
        
      <ul>
        {this.items}
      </ul>
    </div>
  )
}
}
export default Templateselector
