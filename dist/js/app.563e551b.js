(function(t){function e(e){for(var s,r,i=e[0],l=e[1],c=e[2],d=0,v=[];d<i.length;d++)r=i[d],n[r]&&v.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(v.length)v.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,i=1;i<o.length;i++){var l=o[i];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var s=o("64a9"),n=o.n(s);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[o("ul",{staticClass:"navbar-nav"},[o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Promotion")])],1),o("li",{staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:"/memberInfo"}},[t._v("MemberInfo")])],1)])]),o("br"),o("transition",{attrs:{name:"fade"}},[o("router-view")],1)],1)},a=[],r={},i=r,l=(o("034f"),o("2877")),c=Object(l["a"])(i,n,a,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,d=(o("ab8b"),o("8c4f")),v=o("a7fe"),p=o.n(v),m=o("bc3a"),f=o.n(m),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Login")]),t._m(0),o("br"),o("vue-telegram-login",{attrs:{mode:"callback","telegram-login":"fubokbot"},on:{callback:t.loginCallBack}}),o("table",{staticClass:"table table-hover"},[t._m(1),o("tbody",t._l(t.posts,function(e){return o("tr",{key:e._id},[o("td",[t._v(t._s(e.title))]),o("td",[t._v(t._s(e.body))]),o("td",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"memberPoints",params:{id:e._id}}}},[t._v("Login")])],1)])}))])],1)},_=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-10"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Title")]),o("th",[t._v("Body")]),o("th",[t._v("Actions")])])])}],b=o("d226"),g={name:"Login",components:{vueTelegramLogin:b["vueTelegramLogin"]},data:function(){return{posts:[]}},created:function(){var t=this,e="https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers";this.axios.get(e).then(function(e){t.posts=e.data})},methods:{loginCallBack:function(t){console.log(t)}}},C=g,y=Object(l["a"])(C,h,_,!1,null,null,null);y.options.__file="Login.vue";var w=y.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Register")]),t._m(0),o("br"),o("table",{staticClass:"table table-hover"},[t._m(1),o("tbody",[o("td",[o("button",{staticClass:"btn btn-danger",on:{click:function(e){e.preventDefault(),t.deletePost(t.post._id)}}},[t._v("Register")])]),t._v(" --\x3e\n          ")])])])},P=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-10"})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Title")]),o("th",[t._v("Body")]),o("th",[t._v("Actions")])])])}],$={data:function(){return{posts:[]}},created:function(){var t=this,e="https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers";this.axios.get(e).then(function(e){t.posts=e.data})},methods:{}},E=$,O=Object(l["a"])(E,x,P,!1,null,null,null);O.options.__file="Register.vue";var k=O.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Membership Points")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-10"})]),o("br"),o("table",{staticClass:"table table-hover"},[o("thead",[o("tr",[o("th",[t._v("Member Points")]),o("th",[t._v("Login ID")])])]),o("tbody",[o("td"),o("td")])])])}],B={data:function(){return{}},created:function(){var t="https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers";this.axios.get(t).then(function(t){console.log("memberinfo vue ->",t)})},methods:{}},M=B,D=Object(l["a"])(M,j,T,!1,null,null,null);D.options.__file="MemberInfo.vue";var I=D.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Posts")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-10"}),o("div",{staticClass:"col-md-2"})]),o("br"),o("table",{staticClass:"table table-hover"},[o("thead",[o("tr",[o("th",[t._v("Title")]),o("th",[t._v("Body")]),o("th",[t._v("Actions")])])]),o("tbody",[o("tr",[t._v("1")]),o("tr",[t._v("2")]),o("tr",[t._v("3")])])])])}],N={data:function(){return{posts:[]}},created:function(){var t=this,e="https://www.instagram.com/web/search/topsearch/?context=blended&query=avengers";this.axios.get(e).then(function(e){t.posts=e.data})},methods:{}},S=N,R=Object(l["a"])(S,L,A,!1,null,null,null);R.options.__file="Gifts.vue";var q=R.exports,U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Promotion")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-10"}),o("div",{staticClass:"col-md-2"})]),o("br"),o("table",{staticClass:"table table-hover"},[o("thead",[o("tr",[o("th",[t._v("Title")]),o("th",[t._v("Body")])])]),o("tbody",[o("td"),o("td")])])])}],J={data:function(){return{posts:[]}},beforeMount:function(){console.log("mount this shit"),console.log(Object({NODE_ENV:"production",BASE_URL:"/"}).MONGODB_URI)},created:function(){},methods:{}},V=J,z=Object(l["a"])(V,U,G,!1,null,null,null);z.options.__file="Promotion.vue";var F=z.exports,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Create A Post")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Post Title:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Post Body:")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),o("br"),t._m(0)])])},K=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-primary"},[t._v("Create")])])}],Q={data:function(){return{post:{}}},methods:{addPost:function(){var t=this,e="http://localhost:4000/posts/add";this.axios.post(e,this.post).then(function(){t.$router.push({name:"posts"})})}}},W=Q,X=Object(l["a"])(W,H,K,!1,null,null,null);X.options.__file="CreateComponent.vue";X.exports;var Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Posts")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-10"}),o("div",{staticClass:"col-md-2"},[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"create"}}},[t._v("Create Post")])],1)]),o("br"),o("table",{staticClass:"table table-hover"},[t._m(0),o("tbody",t._l(t.posts,function(e){return o("tr",{key:e._id},[o("td",[t._v(t._s(e.title))]),o("td",[t._v(t._s(e.body))]),o("td",[o("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")])],1),o("td",[o("button",{staticClass:"btn btn-danger",on:{click:function(o){o.preventDefault(),t.deletePost(e._id)}}},[t._v("Delete")])])])}))])])},Z=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Title")]),o("th",[t._v("Body")]),o("th",[t._v("Actions")])])])}],tt={data:function(){return{posts:[]}},created:function(){var t=this,e="http://localhost:4000/posts";this.axios.get(e).then(function(e){t.posts=e.data})},methods:{deletePost:function(t){var e=this,o="http://localhost:4000/posts/delete/".concat(t);this.axios.delete(o).then(function(o){e.posts.splice(e.posts.indexOf(t),1)})}}},et=tt,ot=Object(l["a"])(et,Y,Z,!1,null,null,null);ot.options.__file="IndexComponent.vue";ot.exports;var st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Edit Post")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.updatePost(e)}}},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Post Title: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",[t._v("Post Body: ")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),o("br"),t._m(0)])])},nt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-primary"},[t._v("Update")])])}],at={data:function(){return{post:{}}},created:function(){var t=this,e="http://localhost:4000/posts/edit/".concat(this.$route.params.id);this.axios.get(e).then(function(e){t.post=e.data})},methods:{updatePost:function(){var t=this,e="http://localhost:4000/posts/update/".concat(this.$route.params.id);this.axios.post(e,this.post).then(function(){t.$router.push({name:"posts"})})}}},rt=at,it=Object(l["a"])(rt,st,nt,!1,null,null,null);it.options.__file="EditComponent.vue";it.exports;s["a"].use(d["a"]),s["a"].use(p.a,f.a),s["a"].config.productionTip=!1;var lt=[{name:"promotion",path:"/",alias:"/promotion",component:F},{name:"login",path:"/login",component:w},{name:"register",path:"/register",component:k},{name:"memberInfo",path:"/memberInfo",component:I},{name:"gifts",path:"/gifts",component:q}],ct=new d["a"]({mode:"history",routes:lt});new s["a"](s["a"].util.extend({router:ct},u)).$mount("#app")},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.563e551b.js.map