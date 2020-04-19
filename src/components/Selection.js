import React, { Component } from 'react';
import Dropdown from './Dropdown';
import ValueInput from './ValueInput';
class Selection extends Component{
    constructor(props) {
        super(props);
        this.state={
            max_level:1,
            display_level:0,
            options:[{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"},{value:"0"}],
            value: 0
        }
        this.changeOption = this.changeOption.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }
    changeValue(custom_value){
        this.setState({value:custom_value});
    }
    changeOption(new_option,level){
        this.setState(state=>{
            const display_level=level;
            const options= state.options.map((option,j) => {
                if(j === level)return new_option;
                else{
                    if(j<level)
                        return option;
                    else
                        return null;
                }
            });
            return {
                display_level,
                options,
            };
        },()=>{
            if(this.state.options[this.state.display_level].hasOwnProperty("value")){this.changeValue(this.state.options[this.state.display_level].value);}
        });
        
    }
    render(){
        //console.log(this.props.data.data);
        let dropdown=[null];
        let level;
        console.log(this.state);
        for(level=1;level<=this.state.display_level;level++){
            if(this.state.options[level]!=null){
                if(this.state.options[level].hasOwnProperty("data")){
                    dropdown[level-1] = <Dropdown items={this.state.options[level].data} changeOption={this.changeOption} level={level}/> ;
                }
            }
        }
        return( 
        <div>
            <Dropdown items={this.props.data.data} changeOption={this.changeOption} level = {0} />
            {dropdown}
            <ValueInput value={this.state.value} changeValue={this.changeValue}/>
        </div>
        );
    }
}




export default Selection;