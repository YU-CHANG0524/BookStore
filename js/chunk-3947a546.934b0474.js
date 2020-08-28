(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3947a546"],{"4c4a":function(t,a,e){},"73a8":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"adminCoupon"},[e("div",{staticClass:"container mt-5 d-flex flex-column align-items-end"},[e("div",{staticClass:"d-flex justify-content-between w-100"},[e("h1",{staticClass:"h1"},[t._v("優惠券")]),e("button",{staticClass:"mb-3 btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.openModal("add")}}},[t._v("建立優惠券")])]),e("table",{staticClass:"table table-striped mb-6"},[t._m(0),e("tbody",t._l(t.couponsList,(function(a,s){return e("tr",{key:a.id},[e("td",{staticClass:"lh-25 p-3"},[t._v(t._s(a.title))]),e("td",{staticClass:"lh-25 p-3"},[t._v(t._s(a.code))]),e("td",{staticClass:"lh-25 p-3"},[t._v(t._s(t._f("dataFormat")(a.deadline.timestamp)))]),e("td",{staticClass:"lh-25 d-flex justify-content-center align-items-center"},[e("div",{staticClass:"c-circle",class:{active:a.enabled}})]),e("td",{staticClass:"lh-25 p-3"},[e("a",{staticClass:"py-2 btn btn-info mr-2",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal("edit",a)}}},[t._v("編輯")]),e("a",{staticClass:"py-2 btn btn-danger",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal("delete",a)}}},[t._v("刪除")])])])})),0)]),e("pagination",{attrs:{total:t.paginationData.total_pages,current:t.paginationData.current_page},on:{clickEvent:t.getCouponList}})],1),e("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponTemplate.title,expression:"couponTemplate.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.couponTemplate.title},on:{input:function(a){a.target.composing||t.$set(t.couponTemplate,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"category"}},[t._v("優惠碼")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponTemplate.code,expression:"couponTemplate.code"}],staticClass:"form-control",attrs:{id:"category",type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponTemplate.code},on:{input:function(a){a.target.composing||t.$set(t.couponTemplate,"code",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"price"}},[t._v("優惠折數 (單位%)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponTemplate.percent,expression:"couponTemplate.percent"}],staticClass:"form-control",attrs:{id:"unit",type:"number",placeholder:"請輸入折扣"},domProps:{value:t.couponTemplate.percent},on:{input:function(a){a.target.composing||t.$set(t.couponTemplate,"percent",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-4"},[e("label",{attrs:{for:"origin_price"}},[t._v("截止日期")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponTemplate.deadline.datetime,expression:"couponTemplate.deadline.datetime"}],staticClass:"form-control",attrs:{id:"origin_price",type:"text",placeholder:"yyyy-mm-dd hh:mm:ss"},domProps:{value:t.couponTemplate.deadline.datetime},on:{input:function(a){a.target.composing||t.$set(t.couponTemplate.deadline,"datetime",a.target.value)}}})])]),e("div",{staticClass:"form-group d-flex flex-column col-md-3"},[e("label",{attrs:{for:"is_enabled"}},[t._v("是否啟用")]),e("div",{staticClass:"c-toggleButton"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponTemplate.enabled,expression:"couponTemplate.enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(t.couponTemplate.enabled)?t._i(t.couponTemplate.enabled,null)>-1:t.couponTemplate.enabled},on:{change:function(a){var e=t.couponTemplate.enabled,s=a.target,o=!!s.checked;if(Array.isArray(e)){var n=null,l=t._i(e,n);s.checked?l<0&&t.$set(t.couponTemplate,"enabled",e.concat([n])):l>-1&&t.$set(t.couponTemplate,"enabled",e.slice(0,l).concat(e.slice(l+1)))}else t.$set(t.couponTemplate,"enabled",o)}}}),e("span",{staticClass:"slider round"})])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary py-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary py-2",attrs:{type:"button"},on:{click:t.updateDate}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"coupondeleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v("是否刪除"),e("strong",{staticClass:"mx-2 text-danger"},[t._v(t._s(t.couponTemplate.title))]),t._v("優惠券(刪除後將無法恢復)。")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary py-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger py-2",attrs:{type:"button"},on:{click:t.deleteData}},[t._v("確認刪除")])])])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{staticClass:"p-3",attrs:{width:"300px"}},[t._v("名稱")]),e("th",{staticClass:"p-3",attrs:{width:"300px"}},[t._v("優惠碼")]),e("th",{staticClass:"p-3"},[t._v("有效期限")]),e("th",{staticClass:"p-3",attrs:{width:"120px"}},[t._v("是否啟用")]),e("th",{staticClass:"p-3",attrs:{width:"150px"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增優惠券")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除優惠券")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=e("5530"),l=e("2f62"),i=e("9537"),c=e.n(i),r=e("d529"),d={components:{pagination:r["a"]},data:function(){return{couponTemplate:{deadline:{datetime:""}},pagination:{},couponDataFormat:{deadline:{datetime:""},enabled:!1}}},methods:Object(n["a"])({openModal:function(t,a){var e=this;switch(t){case"add":c()("#couponModal").modal("show"),e.couponTemplate=JSON.parse(JSON.stringify(e.couponDataFormat));break;case"edit":c()("#couponModal").modal("show"),e.couponTemplate=JSON.parse(JSON.stringify(a));break;case"delete":c()("#coupondeleteModal").modal("show"),e.couponTemplate=JSON.parse(JSON.stringify(a));break;default:break}},getCouponList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.getCoupon(t)},updateDate:function(){var t=this;this.updateCoupon(t.couponTemplate)},deleteData:function(){var t=this;this.deleteCoupon(t.couponTemplate)}},Object(l["b"])("admin",["getCoupon","updateCoupon","deleteCoupon"])),computed:Object(n["a"])({},Object(l["c"])("admin",["couponsList","paginationData"])),created:function(){this.getCouponList()}},p=d,u=(e("ba47"),e("2877")),m=Object(u["a"])(p,s,o,!1,null,null,null);a["default"]=m.exports},a730:function(t,a,e){"use strict";var s=e("d6ff"),o=e.n(s);o.a},ba47:function(t,a,e){"use strict";var s=e("4c4a"),o=e.n(s);o.a},d529:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return 1!==t.total?e("nav",{staticClass:"center",attrs:{"aria-label":"..."}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.current}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.pageSwitch(t.current-1)}}},[t._v("Previous")])]),t._l(t.total,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:a===t.current}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pageSwitch(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.current===t.total}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.pageSwitch(t.current+1)}}},[t._v("Next")])])],2)]):t._e()},o=[],n=(e("a9e3"),{name:"Pagination",data:function(){return{}},props:{total:Number,current:Number},methods:{pageSwitch:function(t){this.$emit("clickEvent",Number(t))}}}),l=n,i=(e("a730"),e("2877")),c=Object(i["a"])(l,s,o,!1,null,"923134cc",null);a["a"]=c.exports},d6ff:function(t,a,e){}}]);
//# sourceMappingURL=chunk-3947a546.934b0474.js.map