(this["webpackJsonpcost-metru.github.io"]=this["webpackJsonpcost-metru.github.io"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),l=a.n(o),r=(a(13),a(1)),c=a(2),u=a(5),s=a(4),h=(a(14),a(3)),m=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.props.changeOption(this.props.items[e.target.value],this.props.level+1)}},{key:"render",value:function(){return i.a.createElement("select",{onChange:this.handleChange},i.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Alege ceva"),this.props.items.map((function(e,t){return i.a.createElement(p,{item:e,item_id:t,key:t})})))}}]),a}(n.Component),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("option",{value:this.props.item_id},this.props.item.name)}}]),a}(n.Component),v=m,d=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(h.a)(n)),n.state={value:""},n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.props.changeValue(e.target.value)}},{key:"render",value:function(){var e=this.props.value;return i.a.createElement("input",{type:"number",value:e,onChange:this.handleChange})}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={max_level:0,options:[{value:"0"},null,null,null,null],value:0},n.changeOption=n.changeOption.bind(Object(h.a)(n)),n.changeValue=n.changeValue.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"changeValue",value:function(e){this.setState({value:e})}},{key:"changeOption",value:function(e,t){var a=this;this.setState((function(a){return{max_level:t,options:a.options.map((function(a,n){return n===t?e:a}))}}),(function(){a.changeValue(a.state.options[a.state.max_level].value)}))}},{key:"render",value:function(){var e,t=[null];for(console.log(this.state),e=1;e<=this.state.max_level;e++)null!=this.state.options[e]&&this.state.options[e].hasOwnProperty("data")&&(console.log(1),t[e-1]=i.a.createElement(v,{items:this.state.options[e].data,changeOption:this.changeOption,level:e}));return i.a.createElement("div",null,i.a.createElement(v,{items:this.props.data.data,changeOption:this.changeOption,level:0}),t,i.a.createElement(d,{value:this.state.value,changeValue:this.changeValue}))}}]),a}(n.Component),b="Camin",O="Garsoniera",f="Apartament cu 2 camere",j={name:b,value:70},C={name:O,value:700},y=[{name:"Chirie",data:[{name:"Bucuresti",data:[{name:b,data:[{name:"Complex1",value:50},{name:"Complex2",value:100},{name:"Complex3",value:150}],value:50},{name:O,value:500},{name:f,value:5e3}]},{name:"Cluj",data:[j,C,{name:f,value:7e3}]},{name:"Brasov",data:[j,C]}]}],k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},y.map((function(e,t){return i.a.createElement(g,{data:e,key:t})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0d8d48e4.chunk.js.map