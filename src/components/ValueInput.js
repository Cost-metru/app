import React, {Component} from 'react';


class ValueInput extends Component{ 
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
    }
    handleChange(e) {
        this.props.changeValue(e.target.value);
    }
    render(){
        const value = this.props.value;
        return(
            <input type="number" value={value} onChange={this.handleChange} />
        );
    }
}

export default ValueInput;