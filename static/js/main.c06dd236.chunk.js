(this["webpackJsonpcost-metru.github.io"]=this["webpackJsonpcost-metru.github.io"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(13),a(1)),u=a(2),s=a(4),m=a(3),h=(a(14),a(5)),l=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.props.changeItem(this.props.items[e.target.value])}},{key:"render",value:function(){return r.a.createElement("select",{onChange:this.handleChange},this.props.items.map((function(e,t){return r.a.createElement(d,{item:e,item_id:t,key:t})})))}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("option",{value:this.props.item_id},this.props.item.name)}}]),a}(n.Component),p=l,b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={option:null},n.changeItem=n.changeItem.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"changeItem",value:function(e){this.setState({item:e}),console.log(e)}},{key:"render",value:function(){return r.a.createElement(p,{items:this.props.data.data,changeItem:this.changeItem})}}]),a}(n.Component),f="Camin",v="Garsoniera",g="Apartament cu 2 camere",j={name:f,data:70},O={name:v,data:700},k={name:g,data:7e3},y=[{name:"Chirie",data:[{name:"Bucuresti",data:[{name:f,data:50},{name:v,data:500},{name:g,data:5e3}]},{name:"Cluj",data:[j,O,k]},{name:"Brasov",data:[j,O,k]}]}],C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},y.map((function(e,t){return r.a.createElement(b,{data:e,key:t})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c06dd236.chunk.js.map