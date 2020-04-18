import React, { Component } from 'react';

class Dropdown extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.changeItem(this.props.items[e.target.value]);
    }
    render() {
        return (
            <select onChange={this.handleChange}>
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