(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05ea6e84"],{2894:function(t,a,s){"use strict";var i=s("661f"),e=s.n(i);e.a},5356:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.productDetail.origin_price?s("main",{staticClass:"produtDetail"},[t._m(0),s("nav",{staticClass:"c-breadcrumb"},[s("ol",{staticClass:"c-breadcrumb_wrap g-container"},[s("li",{staticClass:"home"},[s("router-link",{staticClass:"material-icons",attrs:{to:"/"}},[t._v("home")])],1),s("li",{staticClass:"c-breadcrumb_item"},[s("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changeRouter("/productList")}}},[t._v("產品列表")])]),s("li",{staticClass:"c-breadcrumb_item"},[s("router-link",{attrs:{to:"/about"}},[t._v(t._s(t.productDetail.category))])],1),s("li",{staticClass:"c-breadcrumb_item"},[s("router-link",{attrs:{to:"/about"}},[t._v(t._s(t.productDetail.title))])],1)])]),s("section",{staticClass:"produtDetail_content"},[s("div",{staticClass:"content_main"},[s("div",{staticClass:"content_main_img"},[s("img",{attrs:{src:t.productDetail.imageUrl[0],alt:""}})]),s("div",{staticClass:"content_main_information"},[s("div",{staticClass:"title"},[t._v(t._s(t.productDetail.title))]),t.productDetail.price!==t.productDetail.origin_price?s("div",{staticClass:"price"},[t._v("定價 :"),s("del",[t._v(t._s(t.productDetail.origin_price))]),t._v("元，"),s("span",{staticClass:"discount t-red"},[t._v(t._s(Math.floor(t.productDetail.price/t.productDetail.origin_price*100)))]),t._v("折"),s("em",{staticClass:"dollars t-red"},[t._v(t._s(t.productDetail.price))]),t._v("元")]):s("div",{staticClass:"price"},[t._v("售價 :"),s("em",{staticClass:"dollars t-red ml-3"},[t._v(t._s(t.productDetail.price))])]),s("ul",{staticClass:"book-info"},[s("li",[s("span",[t._v("作者：")]),s("em",[t._v(t._s(t.productDetail.options.author))])]),s("li",[s("span",[t._v("出版社：")]),t.productDetail.options.press?s("em",[t._v(t._s(t.productDetail.options.press))]):t._e()]),s("li",[s("span",[t._v("出版日：")]),s("span",[t._v(t._s(t.productDetail.options.publication_date))]),s("span",[t._v(t._s(t.productDetail.options.inventory))])])]),s("div",{staticClass:"buy"},[s("div",{staticClass:"top"},[s("div",{staticClass:"stock"},[t._v("庫存："),s("span",[t._v(t._s(t.productDetail.options.inventory))])]),s("div",{staticClass:"addCount"},[s("a",{staticClass:"material-icons",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.chageCount(-1)}}},[t._v("remove")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.purchase.quantity,expression:"purchase.quantity"}],attrs:{type:"text"},domProps:{value:t.purchase.quantity},on:{input:function(a){a.target.composing||t.$set(t.purchase,"quantity",a.target.value)}}}),s("a",{staticClass:"material-icons",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.chageCount(1)}}},[t._v("add")])])]),s("div",{staticClass:"bottom"},[s("a",{staticClass:"addCart",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addshopCart(t.productDetail.id)}}},[t._v("加入購物車")]),s("a",{staticClass:"goCart",attrs:{href:"#"},on:{click:function(t){t.preventDefault()}}},[t._v("立即購買")])])])])]),s("div",{staticClass:"content_else"},[s("div",{staticClass:"block"},[s("h3",{staticClass:"title"},[t._v("內容簡介")]),s("div",{staticClass:"text"},[s("p",[t._v(t._s(t.productDetail.content))])])]),s("div",{staticClass:"block"},[s("h3",{staticClass:"title"},[t._v("內容介紹")]),s("div",{staticClass:"text"},[s("p",[t._v(t._s(t.productDetail.description))])])]),s("div",{staticClass:"block"},[s("h3",{staticClass:"title"},[t._v("詳細資料")]),s("ul",{staticClass:"table"},[s("li",{staticClass:"table_row"},[s("div",{staticClass:"th"},[t._v("編／譯者")]),s("div",{staticClass:"td"},[t._v(t._s(t.productDetail.options.translator))])]),s("li",{staticClass:"table_row"},[s("div",{staticClass:"th"},[t._v("語言")]),s("div",{staticClass:"td"},[t._v(t._s(t.productDetail.options.language))])]),s("li",{staticClass:"table_row"},[s("div",{staticClass:"th"},[t._v("ISBN")]),s("div",{staticClass:"td"},[t._v(t._s(t.productDetail.options.isbn))])]),s("li",{staticClass:"table_row"},[s("div",{staticClass:"th"},[t._v("出版地")]),s("div",{staticClass:"td"},[t._v(t._s(t.productDetail.options.publisher_place))])])])])])])]):t._e()},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"c-banner produtDetail_banner-bg"},[s("div",{staticClass:"c-banner_bg"}),s("h3",{staticClass:"c-banner_text"},[t._v("產品細節")])])}],c=s("5530"),r=s("2f62"),l={data:function(){return{purchase:{product:"",quantity:1}}},methods:Object(c["a"])({getDetails:function(){this.getProductDetails(this.$route.params.id)},chageCount:function(t){var a=this;a.purchase.quantity+=t},addshopCart:function(t){var a=this,s={product:t,quantity:a.purchase.quantity};this.addCart(s)},buyNow:function(){var t=this;t.addshopCart(),t.$route.push("/cart")}},Object(r["b"])("customer",["getProductDetails","addCart"])),computed:Object(c["a"])({},Object(r["c"])("customer",["productDetail","alertInfo"])),watch:{purchase:{handler:function(t){t.quantity<1?(this.$swal("數量不可小於1"),this.purchase.quantity=1):t.quantity>20&&(this.$swal("數量不可大於20"),this.purchase.quantity=20)},deep:!0},alertInfo:{handler:function(t){this.$swal(t)}}},created:function(){this.getDetails()}},o=l,n=(s("2894"),s("2877")),u=Object(n["a"])(o,i,e,!1,null,null,null);a["default"]=u.exports},"661f":function(t,a,s){}}]);
//# sourceMappingURL=chunk-05ea6e84.fc806074.js.map