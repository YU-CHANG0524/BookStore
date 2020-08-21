(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7aba4c28"],{"16ef":function(t,e,a){"use strict";var o=a("4b2a"),s=a.n(o);s.a},"4b2a":function(t,e,a){},9464:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"adminProducts"},[a("div",{staticClass:"container mt-5 d-flex flex-column align-items-end"},[a("div",{staticClass:"d-flex justify-content-between w-100"},[a("h1",{staticClass:"h1"},[t._v("產品")]),a("button",{staticClass:"mb-3 btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.openModal("add")}}},[t._v("建立新產品")])]),a("table",{staticClass:"table table-striped"},[t._m(0),a("tbody",t._l(t.productsList,(function(e){return e.options?a("tr",{key:e.id},[a("th",{staticClass:"lh-25 p-3"},[t._v(t._s(e.category))]),a("td",{staticClass:"lh-25 p-3"},[t._v(t._s(e.options.subcategories))]),a("td",{staticClass:"lh-25 p-3"},[t._v(t._s(e.title))]),a("td",{staticClass:"lh-25 p-3"},[t._v(t._s(t._f("moneySign")(e.price)))]),a("td",{staticClass:"lh-25 p-3"},[t._v(t._s(e.options.inventory))]),a("td",{staticClass:"lh-25 d-flex justify-content-center align-items-center"},[a("div",{staticClass:"c-circle",class:{active:e.enabled}})]),a("td",{staticClass:"flex"},[a("a",{staticClass:"btn btn-info mr-1",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.openModal("edit",e)}}},[t.iconLoadingStatus?a("span",{staticClass:"icon-block"},[a("i",{staticClass:"fas fa-spinner fa-pulse"})]):a("span",[t._v("編輯")])]),a("a",{staticClass:"btn btn-danger",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.openModal("delete",e)}}},[t._v("刪除")])])]):t._e()})),0)]),a("pagination",{attrs:{total:t.paginationData.total_pages,current:t.paginationData.current_page},on:{clickEvent:t.getProductList}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"imageUrl"}},[t._v("輸入圖片網址")]),t.productTemplate.imageUrl?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.imageUrl[0],expression:"productTemplate.imageUrl[0]"}],staticClass:"form-control",attrs:{id:"imageUrl",type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.productTemplate.imageUrl[0]},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.imageUrl,0,e.target.value)}}}):t._e()]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"d-flex"},[a("label",{staticClass:"mr-3",attrs:{for:"imageUrl"}},[t._v("或上傳圖片")]),t.iconLoadingStatus?a("span",{staticClass:"icon-block"},[a("i",{staticClass:"fas fa-spinner fa-pulse"})]):t._e()]),a("input",{ref:"file",staticClass:"form-control",attrs:{id:"imgfile",type:"file"},on:{change:t.uploadImg}})]),t.productTemplate.imageUrl?a("img",{staticClass:"img-fluid",attrs:{src:t.productTemplate.imageUrl[0],alt:""}}):t._e()]),a("div",{staticClass:"col-sm-9"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.title,expression:"productTemplate.title"}],staticClass:"form-control",attrs:{id:"title",type:"text",placeholder:"請輸入標題"},domProps:{value:t.productTemplate.title},on:{input:function(e){e.target.composing||t.$set(t.productTemplate,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"category"}},[t._v("種類")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.category,expression:"productTemplate.category"}],staticClass:"form-control",attrs:{id:"category",name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.productTemplate,"category",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("請選擇")]),t._l(t.bookSort,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e))])}))],2)]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"language"}},[t._v("語言")]),t.productTemplate.options?a("select",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.language,expression:"productTemplate.options.language"}],staticClass:"form-control",attrs:{id:"language",name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.productTemplate.options,"language",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("請選擇")]),t._l(t.languageSort,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e))])}))],2):t._e()]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.origin_price,expression:"productTemplate.origin_price"}],staticClass:"form-control",attrs:{id:"origin_price",type:"number",placeholder:"請輸入原價"},domProps:{value:t.productTemplate.origin_price},on:{input:function(e){e.target.composing||t.$set(t.productTemplate,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.price,expression:"productTemplate.price"}],staticClass:"form-control",attrs:{id:"price",type:"number",placeholder:"請輸入售價"},domProps:{value:t.productTemplate.price},on:{input:function(e){e.target.composing||t.$set(t.productTemplate,"price",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-4"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.unit,expression:"productTemplate.unit"}],staticClass:"form-control",attrs:{id:"unit",type:"unit",placeholder:"請輸入單位"},domProps:{value:t.productTemplate.unit},on:{input:function(e){e.target.composing||t.$set(t.productTemplate,"unit",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-4"},[a("label",{attrs:{for:"price"}},[t._v("庫存")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.inventory,expression:"productTemplate.options.inventory"}],staticClass:"form-control",attrs:{id:"inventory",type:"number",placeholder:"請輸入數量"},domProps:{value:t.productTemplate.options.inventory},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"inventory",e.target.value)}}}):t._e()]),a("div",{staticClass:"form-group col-md-4 d-flex flex-column"},[a("label",{attrs:{for:"is_enabled"}},[t._v("是否啟用")]),a("div",{staticClass:"c-toggleButton"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.enabled,expression:"productTemplate.enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(t.productTemplate.enabled)?t._i(t.productTemplate.enabled,null)>-1:t.productTemplate.enabled},on:{change:function(e){var a=t.productTemplate.enabled,o=e.target,s=!!o.checked;if(Array.isArray(a)){var r=null,i=t._i(a,r);o.checked?i<0&&t.$set(t.productTemplate,"enabled",a.concat([r])):i>-1&&t.$set(t.productTemplate,"enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.productTemplate,"enabled",s)}}}),a("span",{staticClass:"slider round"})])])]),a("hr"),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"subcategories"}},[t._v("子分類")]),t.productTemplate.options?a("select",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.subcategories,expression:"productTemplate.options.subcategories"}],staticClass:"form-control",attrs:{id:"subcategories",name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.productTemplate.options,"subcategories",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("請選擇")]),t._l(t.contentSort,(function(e){return a("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e))])}))],2):t._e()]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"isbn"}},[t._v("ISBN 碼")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.isbn,expression:"productTemplate.options.isbn"}],staticClass:"form-control",attrs:{id:"isbn",type:"text",placeholder:"請輸入ISBN 碼"},domProps:{value:t.productTemplate.options.isbn},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"isbn",e.target.value)}}}):t._e()]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"author"}},[t._v("作者")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.author,expression:"productTemplate.options.author"}],staticClass:"form-control",attrs:{id:"author",type:"text",placeholder:"請輸入作者"},domProps:{value:t.productTemplate.options.author},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"author",e.target.value)}}}):t._e()]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"author"}},[t._v("譯者")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.translator,expression:"productTemplate.options.translator"}],staticClass:"form-control",attrs:{id:"translator",type:"text",placeholder:"請輸入譯者"},domProps:{value:t.productTemplate.options.translator},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"translator",e.target.value)}}}):t._e()])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"press"}},[t._v("出版地")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.publisher_place,expression:"productTemplate.options.publisher_place"}],staticClass:"form-control",attrs:{id:"local",type:"text",placeholder:"請輸入出版地"},domProps:{value:t.productTemplate.options.publisher_place},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"publisher_place",e.target.value)}}}):t._e()]),a("div",{staticClass:"form-group col-md-3"},[a("label",{attrs:{for:"press"}},[t._v("出版社")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.press,expression:"productTemplate.options.press"}],staticClass:"form-control",attrs:{id:"press",type:"text",placeholder:"請輸入出版社"},domProps:{value:t.productTemplate.options.press},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"press",e.target.value)}}}):t._e()]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"date"}},[t._v("出版日期")]),t.productTemplate.options?a("input",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.options.publication_date,expression:"productTemplate.options.publication_date"}],staticClass:"form-control",attrs:{id:"date",type:"date",placeholder:"請輸入出版日期"},domProps:{value:t.productTemplate.options.publication_date},on:{input:function(e){e.target.composing||t.$set(t.productTemplate.options,"publication_date",e.target.value)}}}):t._e()])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("內容簡介")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.description,expression:"productTemplate.description"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入產品描述"},domProps:{value:t.productTemplate.description},on:{input:function(e){e.target.composing||t.$set(t.productTemplate,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("內容介紹")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.productTemplate.content,expression:"productTemplate.content"}],staticClass:"form-control",attrs:{id:"description",type:"text",placeholder:"請輸入說明內容"},domProps:{value:t.productTemplate.content},on:{input:function(e){e.target.composing||t.$set(t.productTemplate,"content",e.target.value)}}})])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateDate}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("是否刪除"),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.productTemplate.title))]),t._v("商品(刪除後將無法恢復)。")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteData}},[t._v("確認刪除")])])])])])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"80px"}},[t._v("種類")]),a("th",{attrs:{scope:"col",width:"90px"}},[t._v("子分類")]),a("th",{attrs:{scope:"col"}},[t._v("產品名稱")]),a("th",{attrs:{scope:"col",width:"90px"}},[t._v("售價")]),a("th",{attrs:{scope:"col",width:"90px"}},[t._v("庫存")]),a("th",{attrs:{scope:"col",width:"120px"}},[t._v("是否啟用")]),a("th",{attrs:{scope:"col",width:"150px"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("新增產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],r=(a("99af"),a("5530")),i=a("2f62"),l=a("9537"),n=a.n(l),c=a("d529"),p={components:{pagination:c["a"]},data:function(){return{productTemplate:{},pagination:{},bookSort:["中文書","英文書","電子書","雜誌"],languageSort:["繁體中文","英文","日文"],contentSort:["財經企管","電腦資訊","自然科普","旅遊相關","醫療保健","文學相關"],dataformat:{id:"",title:"",category:"",content:"",description:"",imageUrl:["img-link"],enabled:!0,origin_price:0,price:0,unit:"本",options:{subcategories:"",author:"",translator:"",press:"",publication_date:"",publisher_place:"",language:"",isbn:"",inventory:0}}}},methods:Object(r["a"])(Object(r["a"])({openModal:function(t,e){var a=this;switch(t){case"add":n()("#productModal").modal("show"),a.productTemplate=JSON.parse(JSON.stringify(a.dataformat));break;case"edit":this.ICON_STATUS(!0),this.getProductDetails(e.id);break;case"delete":n()("#delProductModal").modal("show");break;default:break}},getProductList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.getProducts(t)},getProductDetails:function(t){var e=this,a=this,o="".concat("https://course-ec-api.hexschool.io","/api/").concat("64fa7d4d-db25-4ca9-a00b-21a78c607c88","/admin/ec/product/").concat(t);this.$http.get(o).then((function(t){a.productTemplate=t.data.data,e.ICON_STATUS(!1),n()("#productModal").modal("show")})).catch((function(){}))},updateDate:function(){var t=this;this.updateProducts(t.productTemplate)},deleteData:function(){var t=this;this.deleteProducts(t.productTemplate)},uploadImg:function(){var t=this,e=this,a=e.$refs.file.files[0],o=new FormData;o.append("file",a);var s="".concat("https://course-ec-api.hexschool.io","/api/").concat("64fa7d4d-db25-4ca9-a00b-21a78c607c88","/admin/storage");this.ICON_STATUS(!0),this.$http.post(s,o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){e.productTemplate.imageUrl=["".concat(a.data.data.path)],t.ICON_STATUS(!1)})).catch((function(){}))}},Object(i["d"])(["ICON_STATUS"])),Object(i["b"])("admin",["getProducts","updateProducts","deleteProducts"])),computed:Object(r["a"])(Object(r["a"])({},Object(i["c"])(["iconLoadingStatus"])),Object(i["c"])("admin",["productsList","paginationData"])),created:function(){this.getProductList()}},d=p,u=(a("16ef"),a("2877")),m=Object(u["a"])(d,o,s,!1,null,null,null);e["default"]=m.exports},a730:function(t,e,a){"use strict";var o=a("d6ff"),s=a.n(o);s.a},d529:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1!==t.total?a("nav",{staticClass:"center",attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.current}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pageSwitch(t.current-1)}}},[t._v("Previous")])]),t._l(t.total,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:e===t.current}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.pageSwitch(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.current===t.total}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pageSwitch(t.current+1)}}},[t._v("Next")])])],2)]):t._e()},s=[],r=(a("a9e3"),{name:"Pagination",data:function(){return{}},props:{total:Number,current:Number},methods:{pageSwitch:function(t){this.$emit("clickEvent",Number(t))}}}),i=r,l=(a("a730"),a("2877")),n=Object(l["a"])(i,o,s,!1,null,"923134cc",null);e["a"]=n.exports},d6ff:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7aba4c28.6c29de02.js.map