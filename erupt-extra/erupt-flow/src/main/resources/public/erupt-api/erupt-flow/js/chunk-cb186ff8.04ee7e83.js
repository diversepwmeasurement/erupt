(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb186ff8"],{"057f":function(t,e,n){var i=n("fc6a"),s=n("241c").f,r={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return s(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==r.call(t)?a(t):s(i(t))}},"07ae":function(t,e,n){"use strict";var i=n("845e"),s=n.n(i);s.a},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"22da":function(t,e,n){"use strict";var i=n("3be3"),s=n.n(i);s.a},"3be3":function(t,e,n){},"498a":function(t,e,n){"use strict";var i=n("23e7"),s=n("58a8").trim,r=n("c8d2");i({target:"String",proto:!0,forced:r("trim")},{trim:function(){return s(this)}})},"709c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("w-dialog",{attrs:{border:!1,closeFree:"",width:"600px",title:t._title},on:{ok:t.selectOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"picker"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"candidate"},["role"!==t.type?n("div",[n("el-input",{staticStyle:{width:"95%"},attrs:{size:"small",clearable:"",placeholder:"搜索","prefix-icon":"el-icon-search"},on:{input:t.searchUser},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showUsers,expression:"!showUsers"}]},[n("ellipsis",{staticStyle:{height:"18px",color:"#8c8c8c",padding:"5px 0 0"},attrs:{hoverTip:"",row:1,content:t.deptStackStr}},[n("i",{staticClass:"el-icon-office-building",attrs:{slot:"pre"},slot:"pre"})]),n("div",{staticStyle:{"margin-top":"5px"}},[t.multiple?n("el-checkbox",{on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]):t._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:t.deptStack.length>0,expression:"deptStack.length > 0"}],staticClass:"top-dept",on:{click:t.beforeNode}},[t._v("上一级")])],1)],1)],1):n("div",{staticClass:"role-header"},[n("div",[t._v("系统角色")])]),n("div",{staticClass:"org-items",style:"role"===t.type?"height: 350px":""},[n("el-empty",{directives:[{name:"show",rawName:"v-show",value:!t.nodes||0===t.nodes.length,expression:"!nodes || nodes.length === 0"}],attrs:{"image-size":100,description:"似乎没有数据"}}),t._l(t.nodes,(function(e,i){return n("div",{key:i,class:t.orgItemClass(e)},[e.type===t.type?n("el-checkbox",{on:{change:function(n){return t.selectChange(e)}},model:{value:e.selected,callback:function(n){t.$set(e,"selected",n)},expression:"org.selected"}}):t._e(),"dept"===e.type?n("div",{on:{click:function(n){return t.triggerCheckbox(e)}}},[n("i",{staticClass:"el-icon-folder-opened"}),n("span",{staticClass:"name",attrs:{title:e.name}},[t._v(t._s(e.name.substring(0,12)))]),n("span",{class:"next-dept"+(e.selected?"-disable":""),on:{click:function(n){n.stopPropagation(),!e.selected&&t.nextNode(e)}}},[n("i",{staticClass:"iconfont icon-map-site"}),t._v(" 下级 ")])]):"user"===e.type?n("div",{staticStyle:{display:"flex","align-items":"center"},on:{click:function(n){return t.triggerCheckbox(e)}}},[t.$isNotEmpty(e.avatar)?n("el-avatar",{attrs:{size:35,src:e.avatar}}):n("span",{staticClass:"avatar"},[t._v(t._s(t.getShortName(e.name)))]),n("span",{staticClass:"name",attrs:{title:e.name}},[t._v(t._s(e.name.substring(0,12)))])],1):n("div",{staticStyle:{display:"inline-block"},on:{click:function(n){return t.triggerCheckbox(e)}}},[n("i",{staticClass:"iconfont icon-bumen"}),n("span",{staticClass:"name",attrs:{title:e.name}},[t._v(t._s(e.name.substring(0,12)))])])],1)}))],2)]),n("div",{staticClass:"selected"},[n("div",{staticClass:"count"},[n("span",[t._v("已选 "+t._s(t.select.length)+" 项")]),n("span",{on:{click:t.clearSelected}},[t._v("清空")])]),n("div",{staticClass:"org-items",staticStyle:{height:"350px"}},[n("el-empty",{directives:[{name:"show",rawName:"v-show",value:0===t.select.length,expression:"select.length === 0"}],attrs:{"image-size":100,description:"请点击左侧列表选择数据"}}),t._l(t.select,(function(e,i){return n("div",{key:i,class:t.orgItemClass(e)},["dept"===e.type?n("div",[n("i",{staticClass:"el-icon-folder-opened"}),n("span",{staticClass:"name",staticStyle:{position:"static"}},[t._v(t._s(e.name))])]):"user"===e.type?n("div",{staticStyle:{display:"flex","align-items":"center"}},[t.$isNotEmpty(e.avatar)?n("el-avatar",{attrs:{size:35,src:e.avatar}}):n("span",{staticClass:"avatar"},[t._v(t._s(t.getShortName(e.name)))]),n("span",{staticClass:"name"},[t._v(t._s(e.name))])],1):n("div",[n("i",{staticClass:"iconfont icon-bumen"}),n("span",{staticClass:"name"},[t._v(t._s(e.name))])]),n("i",{staticClass:"el-icon-close",on:{click:function(e){return t.noSelected(i)}}})])}))],2)])])])},s=[],r=(n("4160"),n("d81d"),n("a434"),n("b0c0"),n("ac1f"),n("841c"),n("498a"),n("159b"),n("0c6d"));function o(t){return Object(r["a"])({url:"oa/org/tree",method:"get",params:t})}function a(t){return Object(r["a"])({url:"oa/org/tree/user",method:"get",params:t})}function c(t){return Object(r["a"])({url:"oa/role",method:"get",params:t})}var l={name:"OrgPicker",components:{},props:{title:{default:"请选择",type:String},type:{type:String,required:!0},multiple:{default:!1,type:Boolean},selected:{default:function(){return[]},type:Array}},data:function(){return{visible:!1,loading:!1,checkAll:!1,nowDeptId:null,isIndeterminate:!1,searchUsers:[],nodes:[],select:[],search:"",deptStack:[]}},computed:{_title:function(){return"user"===this.type?"请选择用户"+(this.multiple?"[多选]":"[单选]"):"dept"===this.type?"请选择部门"+(this.multiple?"[多选]":"[单选]"):"role"===this.type?"请选择角色"+(this.multiple?"[多选]":"[单选]"):"-"},deptStackStr:function(){return String(this.deptStack.map((function(t){return t.name}))).replaceAll(","," > ")},showUsers:function(){return this.search||""!==this.search.trim()}},methods:{show:function(){this.visible=!0,this.init(),this.getDataList()},orgItemClass:function(t){return{"org-item":!0,"org-dept-item":"dept"===t.type,"org-user-item":"user"===t.type,"org-role-item":"role"===t.type}},getDataList:function(){var t=this;if(this.loading=!0,"user"===this.type)return a({deptId:this.nowDeptId,keywords:this.search}).then((function(e){t.loading=!1,t.nodes=e.data,t.selectToLeft()})),"请选择用户";"dept"===this.type?o({deptId:this.nowDeptId,keywords:this.search}).then((function(e){t.loading=!1,t.nodes=e.data,t.selectToLeft()})):"role"===this.type&&c({deptId:this.nowDeptId,keywords:this.search}).then((function(e){t.loading=!1,t.nodes=e.data,t.selectToLeft()}))},getShortName:function(t){return t?t.length>2?t.substring(1,3):t:"**"},searchUser:function(){},selectToLeft:function(){var t=this,e=""===this.search.trim()?this.nodes:this.searchUsers;e.forEach((function(e){for(var n=0;n<t.select.length;n++){if(t.select[n].id===e.id){e.selected=!0;break}e.selected=!1}}))},triggerCheckbox:function(t){t.type==this.type&&(t.selected=!t.selected,this.selectChange(t))},selectChange:function(t){if(t.selected)this.multiple||(this.nodes.forEach((function(t){t.selected=!1})),this.select=[]),t.selected=!0,this.select.push(t);else{this.checkAll=!1;for(var e=0;e<this.select.length;e++)if(this.select[e].id===t.id){this.select.splice(e,1);break}}},noSelected:function(t){for(var e=this.nodes,n=0;n<2;n++){for(var i=0;i<e.length;i++)if(e[i].id===this.select[t].id){e[i].selected=!1,this.checkAll=!1;break}e=this.searchUsers}this.select.splice(t,1)},handleCheckAllChange:function(){var t=this;this.nodes.forEach((function(e){if(t.checkAll)e.selected||e.type!=t.type||(e.selected=!0,t.select.push(e));else{e.selected=!1;for(var n=0;n<t.select.length;n++)if(t.select[n].id===e.id){t.select.splice(n,1);break}}}))},nextNode:function(t){this.nowDeptId=t.id,this.deptStack.push(t),this.getDataList()},beforeNode:function(){0!==this.deptStack.length&&(this.deptStack.length<2?this.nowDeptId=null:this.nowDeptId=this.deptStack[this.deptStack.length-2].id,this.deptStack.splice(this.deptStack.length-1,1),this.getDataList())},recover:function(){this.select=[],this.nodes.forEach((function(t){return t.selected=!1}))},selectOk:function(){this.$emit("ok",Object.assign([],this.select.map((function(t){return t.avatar=void 0,t})))),this.visible=!1,this.recover()},clearSelected:function(){var t=this;this.$confirm("您确定要清空已选中的项?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.recover()}))},close:function(){this.$emit("close"),this.recover()},init:function(){this.checkAll=!1,this.nowDeptId=null,this.deptStack=[],this.nodes=[],this.select=Object.assign([],this.selected),this.selectToLeft()}}},u=l,d=(n("07ae"),n("2877")),f=Object(d["a"])(u,i,s,!1,null,"35bed664",null);e["a"]=f.exports},"746f":function(t,e,n){var i=n("428f"),s=n("5135"),r=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});s(e,t)||o(e,t,{value:r.f(t)})}},"841c":function(t,e,n){"use strict";var i=n("d784"),s=n("825a"),r=n("1d80"),o=n("129f"),a=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var r=s(t),c=String(this),l=r.lastIndex;o(l,0)||(r.lastIndex=0);var u=a(r,c);return o(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},"845e":function(t,e,n){},"86c3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"max-width":"350px"}},["DESIGN"===t.mode?n("div",[n("el-button",{attrs:{disabled:"",icon:"el-icon-user",type:"primary",size:"mini",round:""}},[t._v("选择人员")]),n("span",{staticClass:"placeholder"},[t._v(" "+t._s(t.placeholder))])],1):n("div",[!t.formDisable||t._value.length<=0?n("div",[n("el-button",{attrs:{disabled:t.formDisable,icon:"el-icon-user",type:"primary",size:"mini",round:""},on:{click:function(e){return t.$refs.orgPicker.show()}}},[t._v("选择人员")]),n("org-picker",{ref:"orgPicker",attrs:{type:"user",multiple:t.multiple,selected:t._value},on:{ok:t.selected}}),n("span",{staticClass:"placeholder"},[t._v(" "+t._s(t.placeholder))])],1):t._e(),n("div",{staticStyle:{"margin-top":"5px"}},t._l(t._value,(function(e,i){return n("el-tag",{staticStyle:{margin:"5px"},attrs:{closable:!t.formDisable},on:{close:function(e){return t.delDept(i)}}},[t._v(t._s(e.name))])})),1)])])},s=[],r=(n("a434"),n("8f73")),o=n("709c"),a={mixins:[r["a"]],name:"DeptPicker",components:{OrgPicker:o["a"]},props:{value:{type:Array,default:function(){return[]}},placeholder:{type:String,default:"请选择人员"},multiple:{type:Boolean,default:!1}},data:function(){return{showOrgSelect:!1}},methods:{selected:function(t){this.showOrgSelect=!1,this._value=t},delDept:function(t){this._value.splice(t,1)}}},c=a,l=(n("22da"),n("2877")),u=Object(l["a"])(c,i,s,!1,null,"7aebdc57",null);e["default"]=u.exports},"8f73":function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}e["a"]={props:{mode:{type:String,default:"DESIGN"},formDisable:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},data:function(){return{}},watch:{_value:function(t,e){this.$emit("change",t)}},computed:{_value:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{_opValue:function(t){return"object"===i(t)?t.value:t},_opLabel:function(t){return"object"===i(t)?t.label:t}}}},a4d3:function(t,e,n){"use strict";var i=n("23e7"),s=n("da84"),r=n("d066"),o=n("c430"),a=n("83ab"),c=n("4930"),l=n("fdbf"),u=n("d039"),d=n("5135"),f=n("e8b5"),p=n("861d"),h=n("825a"),v=n("7b0b"),m=n("fc6a"),g=n("c04e"),b=n("5c6c"),y=n("7c73"),S=n("df75"),k=n("241c"),w=n("057f"),_=n("7418"),x=n("06cf"),C=n("9bf2"),O=n("d1e7"),D=n("9112"),I=n("6eeb"),j=n("5692"),N=n("f772"),E=n("d012"),P=n("90e3"),A=n("b622"),$=n("e538"),L=n("746f"),T=n("d44e"),U=n("69f3"),z=n("b727").forEach,B=N("hidden"),J="Symbol",F="prototype",q=A("toPrimitive"),G=U.set,Q=U.getterFor(J),R=Object[F],V=s.Symbol,W=r("JSON","stringify"),H=x.f,K=C.f,M=w.f,X=O.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),nt=j("wks"),it=s.QObject,st=!it||!it[F]||!it[F].findChild,rt=a&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=H(R,e);i&&delete R[e],K(t,e,n),i&&t!==R&&K(R,e,i)}:K,ot=function(t,e){var n=Y[t]=y(V[F]);return G(n,{type:J,tag:t,description:e}),a||(n.description=e),n},at=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof V},ct=function(t,e,n){t===R&&ct(Z,e,n),h(t);var i=g(e,!0);return h(n),d(Y,i)?(n.enumerable?(d(t,B)&&t[B][i]&&(t[B][i]=!1),n=y(n,{enumerable:b(0,!1)})):(d(t,B)||K(t,B,b(1,{})),t[B][i]=!0),rt(t,i,n)):K(t,i,n)},lt=function(t,e){h(t);var n=m(e),i=S(n).concat(ht(n));return z(i,(function(e){a&&!dt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=g(t,!0),n=X.call(this,e);return!(this===R&&d(Y,e)&&!d(Z,e))&&(!(n||!d(this,e)||!d(Y,e)||d(this,B)&&this[B][e])||n)},ft=function(t,e){var n=m(t),i=g(e,!0);if(n!==R||!d(Y,i)||d(Z,i)){var s=H(n,i);return!s||!d(Y,i)||d(n,B)&&n[B][i]||(s.enumerable=!0),s}},pt=function(t){var e=M(m(t)),n=[];return z(e,(function(t){d(Y,t)||d(E,t)||n.push(t)})),n},ht=function(t){var e=t===R,n=M(e?Z:m(t)),i=[];return z(n,(function(t){!d(Y,t)||e&&!d(R,t)||i.push(Y[t])})),i};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===R&&n.call(Z,t),d(this,B)&&d(this[B],e)&&(this[B][e]=!1),rt(this,e,b(1,t))};return a&&st&&rt(R,e,{configurable:!0,set:n}),ot(e,t)},I(V[F],"toString",(function(){return Q(this).tag})),I(V,"withoutSetter",(function(t){return ot(P(t),t)})),O.f=dt,C.f=ct,x.f=ft,k.f=w.f=pt,_.f=ht,$.f=function(t){return ot(A(t),t)},a&&(K(V[F],"description",{configurable:!0,get:function(){return Q(this).description}}),o||I(R,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),z(S(nt),(function(t){L(t)})),i({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=V(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),i({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),W){var vt=!c||u((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));i({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var i,s=[t],r=1;while(arguments.length>r)s.push(arguments[r++]);if(i=e,(p(e)||void 0!==t)&&!at(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!at(e))return e}),s[1]=e,W.apply(null,s)}})}V[F][q]||D(V[F],q,V[F].valueOf),T(V,J),E[B]=!0},c8d2:function(t,e,n){var i=n("d039"),s=n("5899"),r="​᠎";t.exports=function(t){return i((function(){return!!s[t]()||r[t]()!=r||s[t].name!==t}))}},d28b:function(t,e,n){var i=n("746f");i("iterator")},d81d:function(t,e,n){"use strict";var i=n("23e7"),s=n("b727").map,r=n("1dde"),o=n("ae40"),a=r("map"),c=o("map");i({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,n){"use strict";var i=n("23e7"),s=n("83ab"),r=n("da84"),o=n("5135"),a=n("861d"),c=n("9bf2").f,l=n("e893"),u=r.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var p=f.prototype=u.prototype;p.constructor=f;var h=p.toString,v="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(o(d,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var i=n("b622");e.f=i}}]);
//# sourceMappingURL=chunk-cb186ff8.04ee7e83.js.map