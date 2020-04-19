import React, { Component } from 'react';

class Dropdown extends Component{
    constructor(props) {
        super(props);
        this.state={value:'',props:props.items};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.changeOption(this.props.items[e.target.value],(this.props.level+1));
        this.setState({value:e.target.value});
    }
    /*static getDerivedStateFromProps(props,state){  
        if(props.items!==state.props) return{value:'',props:props.items};
        return;
    }*/
    render() {
        if(this.props.items!==this.state.props) this.setState({value:'',props:this.props.items});
        return (
            <select onChange={this.handleChange} value={this.state.value}>
                <option value='' selected="selected" hidden="hidden">Alege ceva</option>
                {this.props.items.map(function(item,key) {return <DropdownItem item={item} item_id={key} key={key}/>})}
            </select>
        );
    }
}

class DropdownItem extends Component{
    render() {
        return (
            <option value={this.props.item_id}>
                {this.props.item.name}
            </option>
        );
    }
}

export default Dropdown;