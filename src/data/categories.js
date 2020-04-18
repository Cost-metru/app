const rent_names={
    COM: "Camin",
    AP1: "Garsoniera",
    AP2: "Apartament cu 2 camere"
}
const RO_BUC_COM = {
    name:rent_names.COM,
    data: 50
}
const RO_BUC_AP1={
    name:rent_names.AP1,
    data: 500
}
const RO_BUC_AP2={
    name:rent_names.AP2,
    data: 5000
}
const RO_BUC ={
    name:"Bucuresti",
    data:[
        RO_BUC_COM,
        RO_BUC_AP1,
        RO_BUC_AP2
    ]
};
const RO_CJ_COM = {
    name:rent_names.COM,
    data: 70
}

const RO_CJ_AP1={
    name:rent_names.AP1,
    data: 700
}
const RO_CJ_AP2={
    name:rent_names.AP2,
    data: 7000
}
const RO_CJ={
    name:"Cluj",
    data:[
        RO_CJ_COM,
        RO_CJ_AP1,
        RO_CJ_AP2
    ]
};
const RO_BV={
    name:"Brasov",
    data:[
        RO_CJ_COM,
        RO_CJ_AP1,
        RO_CJ_AP2
    ]
}
const rent={
    name:"Chirie",
    data:[
        RO_BUC,
        RO_CJ,
        RO_BV
    ]
    
};

const data=[
    rent
];

export{data}