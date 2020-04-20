import React, { Component } from 'react';

class Dropdown extends Component{
    constructor(props) {
        super(props);
        this.state={value:props.value,props:props.items};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        if(this.props.value!==''){
        this.props.changeOption((this.props.level+1),this.props.value)
        //console.log(this.state.value)
        }
        else
        this.props.changeOption((this.props.level+1),e.target.value);
        this.setState({value:e.target.value});
    }
    static getDerivedStateFromProps(props,state){
        if(props.items!==state.props) return{value:props.value,props:props.items};
        return{};
    }
    render() {
        return (
            <select onChange={this.handleChange} value={this.state.value} hidden={this.props.hidden==="1" && "hidden"}>
                <option value='' selected="selected" hidden="hidden">Alege ceva</option>
                {this.props.items.map(function(item,key) {
                    return <DropdownItem item={item} item_id={key} key={key}/>
                })
                }
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