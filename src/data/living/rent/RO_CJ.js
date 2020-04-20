import {rent_names} from '../../names/names.js'
import {rent_ids} from '../../names/ids.js'

const RO_CJ_COM = {
    name:rent_names.COM,   
     id:rent_ids.COM,
    value: 70
}

const RO_CJ_AP1={
    name:rent_names.AP1,
    id:rent_ids.AP1,
    value: 700
}
const RO_CJ_AP2={
    name:rent_names.AP2,
    id:rent_ids.AP2,
    value: 7000
}
const RO_CJ={
    name:"Cluj",
    id:"RO_CJ",
    data:[
        RO_CJ_COM,
        RO_CJ_AP1,
        RO_CJ_AP2
    ]
};
export{RO_CJ};