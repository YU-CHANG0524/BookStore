
# 電商網站 —— 書屋

> 這是一份 Vue CLI 3 前端電商練習。

![書屋首頁](https://imgur.com/kNg4GDD.png)

## DEMO

<https://yu-chang0524.github.io/BookStore/#/>

## 簡介

此作品為 Vue.js 前端練習，功能包含：

- 前台：
  - 電商展示（商品分類、單一商品介紹）
  - 購物車
  - 優惠碼套用
  - 下單 / 結帳
  - 查看訂單
- 後台：
  - 管理者登入
  - 商品管理（建立、更新、刪除）
  - 優惠碼管理（建立、更新、刪除）
  - 上傳檔案管理（刪除）
  - 訂單列表 (更改付款狀態)

## 使用技術

- Vue Cli 3
- Vue Router
- Vue Components
- Vuex
- RESTful APIs
- RWD
- Bootstrap 4
- JavaScript（ES6、sessionStorage）
- PUG
- SASS
- ESlint Airbnb

## 使用 Vue-Plugin

- [Vue-axios](https://www.npmjs.com/package/vue-axios)
- [VeeValidate](https://logaretm.github.io/vee-validate/guide/basics.html#validation-provider)
- [Vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)
- [vue-sweetalert2](https://www.npmjs.com/package/vue-sweetalert2)

## 前端介紹

### 首頁畫面

首頁畫面

![首頁畫面](https://i.imgur.com/kNg4GDD.png)

點擊商品類別區塊，會跳到產品列表，並顯示該類別產品列表

![首頁類別卡片](https://imgur.com/6fIEEFu.png)

### 商品列表

![商品列表](https://imgur.com/hSLCQVC.png)

點擊整張商品卡片，可跳轉至該商品的細節，或點選加到購物車，即可成功加到購物車

### 單一商品介紹頁

![單一商品介紹](https://imgur.com/JOsSeRL.png)

此頁包含書的詳細資訊，也可點選數量並加到購物車裡

### 購物車

![購物車畫面](https://imgur.com/208Wq8o.png)

此頁面可調整欲購買之商品數量，並可輸入優惠碼進行折扣，按下「下一步」即開始結帳程序。

![收件資訊頁](https://imgur.com/hkHTUTD.png)

此頁面需輸入購買者訊息，要注意他會針對輸入的內容作驗證

![付款資訊頁](https://imgur.com/RKeS7Xw.png)

![付款成功頁](https://imgur.com/ngIQJaN.png)

### 後台登入介面

![登入頁](https://imgur.com/MOkUG0d.png)

### 後台管理介面

![後台產品列表](https://imgur.com/qKK2Fj5.png)

![後台新增商品](https://imgur.com/UftHQzX.png)

### 其餘更多細節部分，歡迎至 Demo 網站觀看

<https://yu-chang0524.github.io/BookStore/#/>
