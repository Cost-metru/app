import React, { Component } from 'react';
import './App.css';
import Category from './components/Category';
import {data} from './data/categories.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      globalVariables:{
        locality:"",
        residence_type:""
      }
    }
    this.getGlobalVariables = this.getGlobalVariables.bind(this);
  }

  getGlobalVariables(new_state){
    let new_locality;
    let new_residence_type;
    if(new_state.name==="Cazare"){
      if(new_state.selection[0]!==undefined)
        new_locality = new_state.selection[0];
      if(new_state.selection[1]!==undefined)
        new_residence_type = new_state.selection[1];
    }
    this.setState({
      globalVariables:{
        locality:new_locality,
        residence_type:new_residence_type
      }
    })
  }

  render() {
    console.log(this.state);
    let categories;
    categories = data.map((category,key) =>
    <Category globalVariables={this.state.globalVariables} category={category} key={key} setGlobalVariables={this.getGlobalVariables}/>);
    return ( 
      <div className = "App" >
        {/* {data.map(function(category,key){
          return (
        <Category category={category} key={key} setGlobalVariebles={this.getGlobalVariables}/>
        )})} */}
        {categories}
      </div>
    );
  }
}

export default App;