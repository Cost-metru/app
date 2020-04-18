import React, { Component } from 'react';
import Dropdown from './Dropdown';
class Selection extends Component{
    constructor(props) {
        super(props);
        this.state={
            option:null
        }
        this.changeItem = this.changeItem.bind(this);
    }
    changeItem(new_item){
        this.setState(
            {
                item:new_item
            }
        );
        console.log(new_item);
    }

    render(){
        //console.log(this.props.data.data);
        return( 
            <Dropdown items={this.props.data.data} changeItem={this.changeItem}/>
        );
    }
}




export default Selection;