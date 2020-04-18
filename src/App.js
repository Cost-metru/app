import React, { Component } from 'react';
import './App.css';
import Selection from './components/Selection';
import {data} from './data/categories.js';
class App extends Component {
  
  render() {
    return ( 
      <div className = "App" >
        {data.map(function(category,key){
          return (
        <Selection data={category} key={key}/>
        )})}
      </div>
    );
  }
}



export default App;