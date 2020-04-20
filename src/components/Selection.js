import React, { Component } from 'react';
import Dropdown from './Dropdown';
import ValueInput from './ValueInput';
class Selection extends Component{
    constructor(props) {
        super(props);
        let value = 0;
        if(this.props.data.hasOwnProperty("value")) value=this.props.data.value;
        if((!this.props.data.hasOwnProperty("data"))&&this.props.data.hasOwnProperty("deafult")){
            if(!this.props.data.default==="locality") value=this.props.data.values[this.props.globalVariables.locality];
        }
        this.state={
            display_level:0,
            globalVariables: this.props.globalVariables,
            option_keys:[0,0,0,0,0,0,0,0,],
            value: value
        }
        this.changeOption = this.changeOption.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    changeValue(custom_value){
        this.setState({value:custom_value},()=>{/*console.log(this.state.value)*/});
    }
    
    handleChange(e){
        if(this.props.data.hasOwnProperty("global")){
        if(this.props.data.global===1){
        let data_distributer= this.props.data;
        const new_globalVariables= this.state.option_keys.map((key,j) => {
            if(data_distributer.hasOwnProperty("data")&&key!==null){
                data_distributer=data_distributer.data[key];
                if(data_distributer.hasOwnProperty("id"))
                    return data_distributer.id;
            }
            return null;
        });
        this.props.changeSelection(new_globalVariables);
    }}
    }

    changeOption(level,new_key){
        this.setState(state=>{
            const display_level=level;
            let value;
            let level_id;
            let data_distributer= this.props.data;
            for(level_id=0;level_id<=display_level-2;level_id++){
                if(data_distributer.hasOwnProperty("data")){
                    data_distributer=data_distributer.data[this.state.option_keys[level_id]];
                }
            }
            if(data_distributer.hasOwnProperty("data"))
                data_distributer=data_distributer.data[new_key];
            else console.log("ERROR!");
            if(data_distributer.hasOwnProperty("value"))
                value=data_distributer.value;
            this.changeValue(value);
            const option_keys= state.option_keys.map((key,j) => {
                if(j === level-1)return new_key;
                else{
                    if(j<level-1)
                        return key;
                    else
                        return null;
                }
            });
            return {
                display_level,
                option_keys
            };
        },()=>{
            this.handleChange();
        });
        
    }

    static getDerivedStateFromProps(props,state){
        if(props.globalVariables!==state.globalVariables){
            if(props.data.hasOwnProperty("values")&&props.data.hasOwnProperty("default")){
                if(props.data.default==="locality"&&props.globalVariables.locality!==undefined){
                    let locality = props.globalVariables.locality;
                    let key=0;
                    for(const item_key in props.data.values){
                        if(props.data.values[item_key].name===locality) key=item_key;
                    }
                    console.log(key);
                    return{value:props.data.values[key].value,globalVariables:props.globalVariables};
                }
            }
            return{globalVariables:props.globalVariables};
        }
        return{};
    }
    render(){
        let dropdown=[null];
        let level;
        let data_distributer= this.props.data;
        for(level=0;level<=this.state.display_level;level++){
            if(data_distributer.hasOwnProperty("data")){
                let hidden=0;
                let auto_value=this.props.auto_values;
                if(data_distributer.hasOwnProperty("type"))
                    if(data_distributer.type==="hidden") hidden="1";
                dropdown[level] = <Dropdown hidden={hidden} value={auto_value} items={data_distributer.data} changeOption={this.changeOption} level={level} globalVariables={this.props.globalVariables}/> ;
                data_distributer=data_distributer.data[this.state.option_keys[level]];
            }
        }
        
        return( 
        <div>
            <h2>{this.props.data.name}</h2>
            {dropdown}
            <ValueInput value={this.state.value} changeValue={this.changeValue}/>
        </div>
        );
    }
}




export default Selection;