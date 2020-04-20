import {rent_names} from '../../names/names.js'
import {rent_ids} from '../../names/ids.js'

const RO_BV_COM = {
    name:rent_names.COM,
    id:rent_ids.COM,
    value: 70
}

const RO_BV_AP1={
    name:rent_names.AP1,
    id:rent_ids.AP1,
    value: 700
}

const RO_BV={
    name:"Brasov",
    id:"RO_BV",
    data:[
        RO_BV_COM,
        RO_BV_AP1,
        //RO_CJ_AP2
    ]
}
export {RO_BV};