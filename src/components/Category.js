import React, { Component } from 'react';
import Selection from './Selection'

class Category extends Component{
    constructor(props){
        super(props);
        this.changeSelection = this.changeSelection.bind(this);
    }

    changeSelection(selection_meta){
        //this.setState({selection:selection_meta});
        this.props.setGlobalVariables({
            name:this.props.category.name,
            selection:selection_meta
        });
    }


    render(){
        let selection;
        let auto_values='';
        //console.log(this.state);
        selection = this.props.category.costs.map((selection,key) =>
            <Selection globalVariables={this.props.globalVariables} auto_values={auto_values} data={selection} key={key} changeSelection={this.changeSelection}/>);
        return(
        <div>
            <h1>{this.props.category.name}</h1>
            {selection}
        </div>
        )
    }
}

export default Category