(function(t){function e(e){for(var n,d,a=e[0],u=e[1],i=e[2],l=0,f=[];l<a.length;l++)d=a[l],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&f.push(r[d][0]),r[d]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,d=1;d<o.length;d++){var u=o[d];0!==r[u]&&(n=!1)}n&&(c.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},c=[];function d(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"15da4de1"}[t]+".js"}function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=d(t);var i=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(l);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",i.name="ChunkLoadError",i.type=n,i.request=c,o[1](i)}r[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var s=i;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"046d":function(t,e,o){},"211d":function(t,e,o){},"2b40":function(t,e,o){"use strict";o("046d")},4405:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={id:"app"};function c(t,e){var o=Object(n["s"])("Header"),c=Object(n["s"])("router-view");return Object(n["l"])(),Object(n["d"])("div",r,[Object(n["f"])(o),Object(n["f"])(c)])}var d=Object(n["z"])("data-v-4d37b51d");Object(n["o"])("data-v-4d37b51d");var a={class:"header"},u=Object(n["f"])("h1",null,"TodoList",-1),i={id:"nav"},l=Object(n["e"])("Home"),s=Object(n["e"])(" | "),f=Object(n["e"])("About");Object(n["m"])();var b=d((function(t,e){var o=Object(n["s"])("router-link");return Object(n["l"])(),Object(n["d"])("header",a,[u,Object(n["f"])("div",i,[Object(n["f"])(o,{to:"/"},{default:d((function(){return[l]})),_:1}),s,Object(n["f"])(o,{to:"/about"},{default:d((function(){return[f]})),_:1})])])})),p={name:"Header"};o("b1a0");p.render=b,p.__scopeId="data-v-4d37b51d";var j=p,m={name:"app",components:{Header:j}};o("64be");m.render=c;var O=m,v=(o("d3b7"),o("8c4f")),h={id:"app"};function g(t,e){var o=Object(n["s"])("Header"),r=Object(n["s"])("Todos"),c=Object(n["s"])("AddTodo");return Object(n["l"])(),Object(n["d"])("div",h,[Object(n["f"])(o),Object(n["f"])(r,{class:"row",todos:t.todos,onToggle:t.markComplete,"onDel-todo":t.deleteTodo},null,8,["todos","onToggle","onDel-todo"]),Object(n["f"])(c,{class:"todo-box","onAdd-todo":t.addTodo},null,8,["onAdd-todo"])])}o("99af"),o("4de4"),o("7db0");var y=o("2909"),T=Object(n["z"])("data-v-0b3142f0"),_=T((function(t,e){var o=Object(n["s"])("TodoItem");return Object(n["l"])(),Object(n["d"])("div",null,[(Object(n["l"])(!0),Object(n["d"])(n["a"],null,Object(n["r"])(t.todos,(function(e){return Object(n["l"])(),Object(n["d"])("div",{class:"col-12 col-md-3 col-lg-3 todo",key:e.id},[Object(n["f"])(o,{todo:e,onToggle:function(o){return t.$emit("toggle",e.id)},"onDel-todo":function(o){return t.$emit("del-todo",e.id)}},null,8,["todo","onToggle","onDel-todo"])])})),128))])})),w=Object(n["z"])("data-v-47af254d"),k=w((function(t,e){return Object(n["l"])(),Object(n["d"])("div",{class:["todo-item",{"is-complete":t.todo.completed}]},[Object(n["f"])("div",{onClick:e[1]||(e[1]=function(e){return t.$emit("del-todo",t.todo.id)}),class:"del"},"✖"),Object(n["f"])("p",null,Object(n["u"])(t.todo.title),1),Object(n["f"])("input",{type:"checkbox",onChange:e[2]||(e[2]=function(e){return t.$emit("toggle",t.todo.id)}),checked:t.todo.completed},null,40,["checked"])],2)})),x={name:"TodoItem",props:["todo"]};o("5eda");x.render=k,x.__scopeId="data-v-47af254d";var A=x,P={name:"Todos",components:{TodoItem:A},props:["todos"]};o("e8cc");P.render=_,P.__scopeId="data-v-0b3142f0";var H=P,I=Object(n["z"])("data-v-4d53450b");Object(n["o"])("data-v-4d53450b");var C=Object(n["f"])("br",null,null,-1),S=Object(n["f"])("input",{type:"submit",value:"Add Todo",class:"btn"},null,-1);Object(n["m"])();var D=I((function(t,e){return Object(n["l"])(),Object(n["d"])("div",null,[Object(n["f"])("form",{class:"add-form text-center",onSubmit:e[2]||(e[2]=function(){return t.addTodo.apply(t,arguments)})},[Object(n["y"])(Object(n["f"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.title=e}),name:"title",placeholder:"Add Todo..."},null,512),[[n["w"],t.title]]),C,S],32)])})),$={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}};o("2b40");$.render=D,$.__scopeId="data-v-4d53450b";var z=$,M=o("bc3a"),E=o.n(M),L={name:"Home",components:{Todos:H,AddTodo:z},data:function(){return{todos:[]}},methods:{markComplete:function(t){var e=this.todos.find((function(e){return e.id===t}));e.completed=!e.completed},deleteTodo:function(t){var e=this;E.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(){return e.todos=e.todos.filter((function(e){return e.id!==t}))})).catch((function(t){return console.log(t)}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;E.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){return e.todos=[].concat(Object(y["a"])(e.todos),[t.data])})).catch((function(t){return console.log(t)}))}},created:function(){var t=this;E.a.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return t.todos=e.data})).catch((function(t){return console.log(t)}))}};o("dfd4");L.render=g;var J=L,q=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],U=Object(v["a"])({history:Object(v["b"])(),routes:q}),V=U;o("ab8b");Object(n["c"])(O).use(V).mount("#app")},5826:function(t,e,o){},"5eda":function(t,e,o){"use strict";o("f9ba")},"64be":function(t,e,o){"use strict";o("c894")},b1a0:function(t,e,o){"use strict";o("4405")},c894:function(t,e,o){},dfd4:function(t,e,o){"use strict";o("211d")},e8cc:function(t,e,o){"use strict";o("5826")},f9ba:function(t,e,o){}});
//# sourceMappingURL=app.98bfe38d.js.map