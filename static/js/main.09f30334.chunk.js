(this["webpackJsonpextinct-io"]=this["webpackJsonpextinct-io"]||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(3),i=s.n(a),r=(s(12),s(4)),o=s(5),l=s(7),h=s(6),b=(s(13),s(0)),u=function(e){var t=2e6*(e.pessimist?.01:.001)*e.age;return Object(b.jsxs)("div",{className:"form-group w-75",children:[Object(b.jsxs)("p",{children:["You have murdered ",t.toLocaleString()," species ",Object(b.jsx)("em",{children:"so far"}),"."]}),Object(b.jsx)("p",{children:"You monster."}),Object(b.jsx)("a",{className:"btn btn-dark btn-lg btn-block mt-3",href:"https://www.savethekoala.com/",children:"Save koalas"}),Object(b.jsx)("button",{className:"btn btn-dark btn-block mt-3",onClick:e.reset,children:"Back"})]})},j=function(e){Object(l.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={age:23,showForm:!0,pessimist:!1},e.calculate=function(){e.setState({showForm:!1})},e.optionSelected=function(t){var s=isNaN(t.target.value)?e.state.age:(new Date).getFullYear()-parseInt(t.target.value);e.setState({age:s})},e.reset=function(){e.setState({age:23,showForm:!0,optimisit:!1})},e.pessimistChanged=function(){e.setState({pessimist:!e.state.pessimist})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=null,t=null;if(this.state.showForm){for(var s=[],n=2020;n>=1990;n--)s.push(n);e=Object(b.jsxs)("div",{className:"form-group w-75",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox",className:"form-check-input",id:"pessimistCheck",onChange:this.pessimistChanged}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"pessimistCheck",children:"Pessimist?"})]}),Object(b.jsx)("label",{htmlFor:"yearField",children:"Enter your birth year:"}),Object(b.jsxs)("select",{className:"custom-select",id:"options",onChange:this.optionSelected,children:[Object(b.jsx)("option",{defaultValue:!0,children:"Choose..."}),s.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),Object(b.jsx)("button",{className:"btn btn-dark btn-lg btn-block mt-3",onClick:this.calculate,children:"Calculate"})]})}else t=Object(b.jsx)(u,{pessimist:this.state.pessimist,age:this.state.age,reset:this.reset});return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header font-weight-bold",children:[e,t]})})}}]),s}(n.Component),m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.09f30334.chunk.js.map