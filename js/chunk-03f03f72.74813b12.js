(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f03f72"],{"40e1":function(t,e,n){},"62d5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"login container-fluid vh-100 h-100 d-flex justify-content-center align-items-center"},[n("div",{staticClass:"login_bg w-100 h-100"}),n("div",{staticClass:"login_form w-100 d-flex flex-column justify-content-center align-items-center"},[n("h1",{staticClass:"mb-4 text-center text-light"},[t._v("後台系統")]),n("form",{staticClass:"d-flex flex-column justify-content-center align-items-center",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"login_input d-block mb-3 py-3 px-4 rounded text-center text-light",attrs:{type:"email",placeholder:"電子郵件",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"login_input d-block mb-3 py-3 px-4 rounded text-center text-light",attrs:{type:"password",placeholder:"密碼",required:"",autocomplete:"on"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),n("button",{staticClass:"py-3 px-4 rounded mb-3",attrs:{type:"submit"}},[t._v("登入")]),n("button",{staticClass:"py-3 px-4 rounded bg-light text-center"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changeRouter("/")}}},[t._v("回到首頁")])])])])])},i=[],r=n("5530"),a=n("2f62"),o={data:function(){return{user:{email:"",password:""}}},methods:Object(r["a"])({signin:function(){var t=this;this.$store.dispatch("login",t.user)},changeRouter:function(t){var e=this;this.LOADING(!0),this.$router.push(t),setTimeout((function(){e.LOADING(!1)}),1500)}},Object(a["d"])(["LOADING"])),computed:{isLoading:function(){return this.$store.state.isLoading}}},u=o,c=(n("d0b3"),n("2877")),l=Object(c["a"])(u,s,i,!1,null,"00fd5359",null);e["default"]=l.exports},d0b3:function(t,e,n){"use strict";var s=n("40e1"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-03f03f72.74813b12.js.map