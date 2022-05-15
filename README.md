# 筆記:

## vue-cli 使用前置:

- 第一步(沒有安裝過的執行)：全局安裝 @vue/cli
  > npm install -g @vue/cli
- 第二步：切換到要創建項目的目錄，然後使用命令創建項目
  > vue create xxxxx
- 第三步：啟動項目
  > npm run serve

## vue-cli 文件結構:

    ├── node_modules
    ├── public
    │   ├── favicon.ico: 頁簽圖標
    │   └── index.html: 主頁面
    ├── src
    │   ├── assets: 存放靜態資源
    │   │   └── logo.png
    │   │── component: 存放組件
    │   │   └── HelloWorld.vue
    │   │── App.vue: 匯總所有組件
    │   │── main.js: 入口文件
    ├── .gitignore: git版本管制忽略的配置
    ├── babel.config.js: babel的配置文件
    ├── package.json: 應用包配置文件
    ├── README.md: 應用描述文件
    ├── package-lock.json：包版本控製文件

## 關於不同版本的 Vue:

- vue.js 與 vue.runtime.xxx.js 的區別:

  (1). vue.js 是完整版的 Vue，包含：核心功能+模板解析器。

  (2). vue.runtime.xxx.js 是運行版的 Vue，只包含：核心功能；沒有模板解析器。

- 因為 vue.runtime.xxx.js 沒有模板解析器，所以不能使用 template 配置項，需要使用 render 函數接收到的 createElement 函數去指定具體內容。

## 修改腳手架的默認配置

> 使用 vue inspect > output.js 可以查看到 Vue 腳手架的默認配置。

> 使用 vue.config.js 可以對腳手架進行個性化定制，詳情見：https://cli.vuejs.org/zh

## ref 屬性

1. 被用來給元素或子組件註冊引用信息（id 的替代者）
2. 應用在 html 標籤上獲取的是真實 DOM 元素，應用在組件標籤上是組件實例對象（vc）
3. 使用方式：

   打標識:`<h1 ref="xxx">.....</h1>或<School ref="xxx"></School> `

   獲取：this.$refs.xxx

## props 配置項

    功能：讓組件接收外部傳過來的數據

      (1).傳遞數據：
              <Demo name="xxx"/>

      (2).接收數據：

          第一種方式（只接收）:

              props:['name']

          第二種方式（限制類型）:

              props:{name:String}

          第三種方式（限制類型、限制必要性、指定默認值）:

              props :{
                  name :{
                    type : String ,//類型
                    required : true , //必要性
                    default : '老王' //默認值
                  }
              }

      備註：props 是只讀的，Vue 底層會監測你對 props 的修改，如果進行了修改，就會發出警告，若業務需求確實需要修改，那麼請複制 props 的內容到 data 中一份，然後去修改 data 中的數據。

## mixin(混入):

      功能: 可以把多個組件共用的配置提取成一個混入對象
      使用方式:
          第一步定義混和，例如:
            {
              data(){...},
              methods:{...},
              ...
            }
          第二步使用混和，例如:
            (1).全局混入: Vue.mixin(xxx)
            (2).局部混入: mixin:['xxx']

## plugin(差件):

      功能: 用於增強Vue
      本質: 包含install方法的一個對象，install的第一個參數是Vue，第二個之後是插件使用者傳遞的數據。

      定義插件:
          對象.install=function(Vue,options){
            // 1. 添加全局過濾器
            Vue.filter(...)

            // 2. 添加全局指令
            Vue.directive(...)

            // 3. 配置全局混入
            Vue.mixin(...)

            // 4. 添加實例方法
            Vue.prototype.$myMethod = function(){...}
            Vue.prototype.$myProperty = xxx
          }

      使用插件:
          Vue.use(plugin,[options])

      備註: Vue.use需要在Vue實例被創建之前調用

## scoped 樣式

    作用: 讓樣式局部生效
    寫法: <style scoped>

    補充lang使用:
        作用: 指定使用的css預處理器
        寫法: <style lang="scss">
        注意:
             1. 需要引入對應的預處理器loader，使用scss的話要下載sass sass-loader
             2. lang如果有寫出來，就一定要填入值，否則會抱錯

## todoList 案例總結

組件化編碼流程：

​ (1).拆分靜態組件：組件要按照功能點拆分，命名不要與 html 元素衝突。

​ (2).實現動態組件：考慮好數據的存放位置，數據是一個組件在用，還是一些組件在用：

      ​(1).一個組件在用：放在組件自身即可。

      ​(2). 一些組件在用：放在他們共同的父組件上（狀態提升）。

      ​(3).實現交互：從綁定事件開始。

props 適用於：

​ (1).父組件==> 子組件通信

​ (2).子組件==> 父組件通信（要求父先給子一個函數）

    使用v-model時要切記：v-model綁定的值不能是props傳過來的值，因為props是不可以修改的！

    props傳過來的若是對像類型的值，修改對像中的屬性時Vue不會報錯，但不推薦這樣做。

## WebStorage

### Cookie:

Cookie 是最早被提出來的本地存儲方式，在此之前，服務端是無法判斷網絡中的兩個請求是否是同一用戶發起的，為解決這個問題，Cookie 就出現了。Cookie 是存儲在用戶瀏覽器中的一段不超過 4 KB 的字符串。它由一個名稱（Name）、一個值（Value）和其它幾個用於控制 Cookie 有效期、安全性、使用範圍的可選屬性組成。不同域名下的 Cookie 各自獨立，每當客戶端發起請求時，會自動把當前域名下所有未過期的 Cookie 一同發送到服務器。

### Cookie 的特性:

- Cookie 一旦創建成功，名稱就無法修改
- Cookie 是無法跨域名的，也就是說 a 域名和 b 域名下的 cookie 是無法共享的，這也是由 Cookie 的隱私安全性決定的，這樣就能夠阻止非法獲取其他網站的 Cookie
- 每個域名下 Cookie 的數量不能超過 20 個，每個 Cookie 的大小不能超過 4kb
- 有安全問題，如果 Cookie 被攔截了，那就可獲得 session 的所有信息，即使加密也於事無補，無需知道 cookie 的意義，只要轉發 cookie 就能達到目的
- Cookie 在請求一個新的頁面的時候都會被發送過去

### Cookie 在身份認證中的作用:

客戶端第一次請求服務器的時候，服務器通過響應頭的形式，向客戶端發送一個身份認證的 Cookie，客戶端會自動將 Cookie 保存在瀏覽器中。

隨後，當客戶端瀏覽器每次請求服務器的時候，瀏覽器會自動將身份認證相關的 Cookie，通過請求頭的形式發送給服務器，服務器即可驗明客戶端的身份。

### Cookie 不具有安全性:

由於 Cookie 是存儲在瀏覽器中的，而且瀏覽器也提供了讀寫 Cookie 的 API，因此 Cookie 很容易被偽造，不具有安全性。因此不建議服務器將重要的隱私數據，通過 Cookie 的形式發送給瀏覽器。 在這裡插入圖片描述

> 注意：千萬不要使用 Cookie 存儲重要且隱私的數據！比如用戶的身份信息、密碼等。

### Session

Session 是另一種記錄客戶狀態的機制，不同的是 Cookie 保存在客戶端瀏覽器中，而 Session 保存在服務器上。客戶端瀏覽器訪問服務器的時候，服務器把客戶端信息以某種形式記錄在服務器上。這就是 Session。客戶端瀏覽器再次訪問時只需要從該 Session 中查找該客戶的狀態就可以了。

如果說 Cookie 機制是通過檢查客戶身上的“會員卡”來確定客戶身份的話，那麼 Session 機制就是通過檢查服務器上的“客戶明細表”來確認客戶身份（就類似於刷卡機）。Session 相當於程序在服務器上建立的一份客戶檔案，客戶來訪的時候只需要查詢客戶檔案表就可以了。

### LocalStorage

LocalStorage 是 HTML5 新引入的特性，由於有的時候我們存儲的信息較大，Cookie 就不能滿足我們的需求，這時候 LocalStorage 就派上用場了。

### LocalStorage 的優點：

- 在大小方面，LocalStorage 的大小一般為 5MB，可以儲存更多的信息
- LocalStorage 是持久儲存，並不會隨著頁面的關閉而消失，除非主動清理，不然會永久存在
- 僅儲存在本地，不像 Cookie 那樣每次 HTTP 請求都會被攜帶
  LocalStorage 的缺點：

- 存在瀏覽器兼容問題，IE8 以下版本的瀏覽器不支持
- 如果瀏覽器設置為隱私模式，那我們將無法讀取到 LocalStorage
- LocalStorage 受到同源策略的限制，即端口、協議、主機地址有任何一個不相同，都不會訪問

### LocalStorage 的常用 API：

```
// 保存數據到localStorage
localStorage . setItem ( ' key ' ,  ' value ' );

// 從localStorage 獲取數據
let  data  =  localStorage . getItem ( ' key ' );

// 從localStorage 刪除保存的數據
localStorage . removeItem ( ' key ' );

// 從localStorage 刪除所有保存的數據
localStorage . clear ();

// 獲取某個索引的Key
localStorage . key ( index )
```

### SessionStorage

SessionStorage 和 LocalStorage 都是在 HTML5 才提出來的存儲方案，SessionStorage 主要用於臨時保存同一窗口(或標籤頁)的數據，刷新頁面時不會刪除，關閉窗口或標籤頁之後將會刪除這些數據。

### SessionStorage 與 LocalStorage 對比：

- SessionStorage 和 LocalStorage 都在本地進行數據存儲；
- SessionStorage 也有同源策略的限制，但是 SessionStorage 有一條更加嚴格的限制，SessionStorage 只有在同一瀏覽器的同一窗口下才能夠共享；
- LocalStorage 和 SessionStorage 都不能被爬蟲爬取；

### SessionStorage 的常用 API：

```
// 保存數據到sessionStorage
sessionStorage . setItem ( ' key ' ,  ' value ' );

// 從sessionStorage 獲取數據
let  data  =  sessionStorage . getItem ( ' key ' );

// 從sessionStorage 刪除保存的數據
sessionStorage . removeItem ( ' key ' );

// 從sessionStorage 刪除所有保存的數據
sessionStorage . clear ();

// 獲取某個索引的Key
sessionStorage . key ( index )
```

## 組件的定義事件:

1. 一種組件間的通信方式，適用於: 子組件===>父組件
2. 使用場景: A 是父組件，B 是子組件，B 組件想給 A 組件傳遞數據
3. 綁定自定義事件:
   1. 第一種方式: `<Demo v-on:sendSomething="test"></Demo>` 或 `<Demo @sendSomething="test"></Demo>`
   2. 第二種方式:
      ```
      <Demo ref="demo"></Demo>
      ......
      mounted(){
        this.$refs.xxx.$on("sendSomething", this.test);
      }
      ```
   3. 若想讓自定義事件指觸發一次，可以使用`once`修飾符，或或`$once`方法
   4. 觸發自定義事件: `this.$emit("sendSomething",數據)`
   5. 解綁自定義事件: `this.$off("sendSomething")`
   6. 組件上也可綁定原生 DOM 事件，需要使用`native`修飾符
   7. this.$refs.xxx.$on("sendSomething", 回調)綁定事件名時，<font color=#FF0000>回調要馬配置在 methods 中，要馬使用箭頭函數，否則 this 指向會發生錯誤!!!</font>

## 全局事件總線

1. 一種組件間通信的方式，適用於任意組件間通信。

2. 安裝全局事件總線：

   ```
   new Vue({
     ......
     beforeCreate() {
       Vue.prototype.$bus = this //安裝全局事件總線，$bus就是當前應用的vm
     },
       ......
   })
   ```

3. 使用事件總線：

   1. 接收數據：A 組件想接收數據，則在 A 組件中給$bus 綁定自定義事件，<font color="ff0000">事件的回調留在 A 組件自身</font>。

      ```
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx',this.demo)
      }
      ```

   2. 提供數據：`this.$bus.$emit('xxxx',数据)`

4. 最好在 beforeDestroy 鉤子中，用$off 去解綁當前組件所用到的事件。

## 消息訂閱與發布

1.  一種組件間通信的方式，適用於任意組件間通信。

2.  使用步驟：

    1.  安裝 pubsub：npm i pubsub-js

    2.  引入:import pubsub from 'pubsub-js'

    3.  接收數據：A 組件想接收數據，則在 A 組件中訂閱消息，訂閱的回調留在 A 組件自身。

        ```
          methods:{
            demo(data){......}
          }
          ......
          mounted() {
            this.pid = pubsub.subscribe('xxx',this.demo) //订阅消息
          }
        ```

    4.  提供數據：pubsub.publish('xxx',数据)

    5.  最好在 beforeDestroy 鉤子中，用 PubSub.unsubscribe(pid)去取消訂閱。

## nextTick

1. 語法：this.$nextTick(回调函数)
2. 作用：在下一次 DOM 更新結束後執行其指定的回調。
3. 什麼時候用：當改變數據後，要基於更新後的新 DOM 進行某些操作時，要在 nextTick 所指定的回調函數中執行。

## Vue 封裝的過度與動畫

1. 作用：在插入、更新或移除 DOM 元素時，在合適的時候給元素添加樣式類名。

2. 寫法：

   1. 準備好樣式：

      1. 元素進入的樣式：
         1. v-enter：進入的起點
         2. v-enter-active：進入過程中
         3. v-enter-to：進入的終點
      2. 元素離開的樣式：
         1. v-leave：離開的起點
         2. v-leave-active：離開過程中
         3. v-leave-to：離開的終點

   2. 使用`<transition>`包裹要過渡的元素，並配置 name 屬性：

      ```
        <transition  name= "hello" >
        <h1 v-show= "isShow" >你好啊！</h1> </transition>
      ```

   3. 備註：若有多個元素需要過度，則需要使用：`<transition-group>`，且每個元素都要指定 key 值。

## vue 腳手架配置代理

### **方法一**

​
在 vue.config.js 中添加如下配置：

```
devServer:{
  proxy:"http://localhost:5000"
}
```

說明：

1. 優點：配置簡單，請求資源時直接發給前端（8080）即可。
2. 缺點：不能配置多個代理，不能靈活的控制請求是否走代理。
3. 工作方式：若按照上述配置代理，當請求了前端不存在的資源時，那麼該請求會轉發給服務器（優先匹配前端資源）

### **方法二**

​ 編寫 vue.config.js 配置具體代理規則：

```
module.exports = {
	devServer: {
      proxy: {
      '/api1': {// 匹配所有以 '/api1'開頭的請求路徑
        target: 'http://localhost:5000',// 代理目標的基礎路徑
        changeOrigin: true,
        pathRewrite: {'^/api1': ''}
      },
      '/api2': {// 匹配所有以 '/api2'開頭的請求路徑
        target: 'http://localhost:5001',// 代理目標的基礎路徑
        changeOrigin: true,
        pathRewrite: {'^/api2': ''}
      }
    }
  }
}
/*
   changeOrigin設為true時，服務器收到的請求頭中的host為：localhost:5000
   changeOrigin設為false時，服務器收到的請求頭中的host為：localhost:8080
   changeOrigin默認值為true
*/
```

說明：

1. 優點：可以配置多個代理，且可以靈活的控制請求是否走代理。
2. 缺點：配置略微繁瑣，請求資源時必須加前綴。

## slot 插槽

1.  作用：讓父組件可以向子組件指定位置插入 html 結構，也是一種組件間通信的方式，適用於 父組件===> 子組件。

2.  分類：默認插槽、具名插槽、作用域插槽

3.  使用方式：

    1. 默認插槽：

       ```
       父组件中：
                 <Category>
                   <div>html結構1</div>
                 </Category>
       子组件中：
                 <template>
                     <div>
                       <!-- 定義插槽 -->
                       <slot>插槽默認内容...</slot>
                     </div>
                 </template>
       ```

    2. 具名插槽：

       ```
       父组件中：
               <Category>
                   <template slot="center">
                     <div>html结构1</div>
                   </template>

                   <template v-slot:footer>
                     <div>html结构2</div>
                   </template>
               </Category>
       子组件中：
               <template>
                   <div>
                     <!-- 定義插槽 -->
                     <slot name="center">插槽默認内容...</slot>
                     <slot name="footer">插槽默認内容...</slot>
                   </div>
               </template>
       ```

    3. 作用域插槽：

       理解：數據在組件的自身（子組件），但根據數據生成的結構需要組件的使用者（父組件）來決定。（games 數據在 Category（子）組件中，但使用數據所遍歷出來的結構由 App（父）組件決定）

       具體編碼：

       ```
       父组件中：
         <Category>
           <template scope="scopeData">
             <!-- 生成的是ul列表 -->
             <ul>
               <li v-for="g in scopeData.games" :key="g">{{g}}</li>
             </ul>
           </template>
         </Category>

         <Category>
           <template slot-scope="scopeData">
             <!-- 生成的是h4標題 -->
             <h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
           </template>
         </Category>

       子组件中：
         <template>
           <div>
             <slot :games="games"></slot>
           </div>
         </template>
           <script>
               export default {
                   name:'Category',
                   props:['title'],
                   //數據在子組件自身
                   data() {
                       return {
                           games:["超級瑪利歐", "魔物獵人", "遊戲王", "打彈珠"]
                       }
                   },
               }
           </script>
       ```

## VUEX

1.  概念
    ​ 在 Vue 中實現集中式狀態（數據）管理的一個 Vue 插件，對 vue 應用中多個組件的共享狀態進行集中式的管理（讀/寫），也是一種組件間通信的方式，且適用於任意組件間通信。

2.  何時使用？
    ​ 多個組件需要共享數據時

3.  搭建 vuex 環境

    1. 創建文件：src/store/index.js

       ```
       //引入 Vue 核心庫
       import Vue from ' vue '
       //引入 Vuex
       import Vuex from ' vuex '
       //應用 Vuex 插件
       Vue . use ( Vuex )

       //準備 actions 對象——響應組件中用戶的動作
       const actions = {}
       //準備 mutations 對象——修改 state 中的數據
       const mutations = {}
       //準備 state 對象——保存具體的數據
       const state = {}

       //創建並暴露 store
       export default new Vuex . Store ({
       actions , mutations , state })
       ```

    2. 在 main.js 中創建 vm 時傳入 store 配置項

       ```
       ......
       //引入 store
       import store from ' ./store '
       ......

       //創建 vm
       new Vue ({
       el : ' #app ' , render : h => h ( App ), store })
       ```

4.  基本使用

    1. 初始化數據、配置 actions、配置 mutations，操作文件 store.js

       ```
       //引入 Vue 核心庫
       import Vue from ' vue '
       //引入 Vuex
       import Vuex from ' vuex '
       //引用 Vuex
       Vue . use ( Vuex )

       const actions = {
           //響應組件中加的動作
         jia ( context , value ){
             // console.log('actions 中的 jia 被調用了',miniStore,value);

             context.commit ( ' JIA ' , value )
         },
       }

       const mutations = {
         //執行加 JIA ( state , value ){
           // console.log('mutations 中的 JIA 被調用了',state,value);
           state.sum += value
         }
       }

       //初始化數據
       const state = {
         sum : 0
       }

       //創建並暴露 store
       export default new Vuex.Store ({
         actions,
         mutations,
         state,
       })
       ```

    2. 組件中讀取 vuex 中的數據：$store.state.sum

    3. 組件中修改 vuex 中的數據：$store.dispatch('action中的方法名',数据)或$store.commit('mutations 中的方法名',数据)

    > 備註：若沒有網絡請求或其他業務邏輯，組件中也可以越過 actions，即不寫 dispatch，直接編寫 commit

5.  getters 的使用

    1. 概念：當 state 中的數據需要經過加工後再使用時，可以使用 getters 加工。

    2. 在 store.js 中追加 getters 配置

       ```
         const getters = {
           bigSum(state){
             return state.sum * 10
           }
         }

         //創建並暴露store
         export default new Vuex.Store({
           ......
           getters
         })
       ```

    3. 組件中讀取數據：$store.getters.bigSum

6.  四個 map 方法的使用

    導入

        ```
        import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
        ```

    1. mapState 方法：用於幫助我們映射 state 中的數據為計算屬性

       ```
         computed: {
             //借助mapState生成計算屬性：sum、school、subject（對象寫法）
             ...mapState({sum:'sum',school:'school',subject:'subject'}),

             //借助mapState生成計算屬性：sum、school、subject（數組寫法）
             ...mapState(['sum','school','subject']),
         },
       ```

    2. mapGetters 方法：用於幫助我們映射 getters 中的數據為計算屬性

       ```
         computed: {
         //借助 mapGetters 生成計算屬性：bigSum（對象寫法）
         ...mapGetters({bigSum:'bigSum'}),

             //借助mapGetters生成計算屬性：bigSum（數組寫法）
             ...mapGetters(['bigSum'])

         },
       ```

    3. mapActions 方法：用於幫助我們生成與 actions 對話的方法，即：包含$store.dispatch(xxx)的函數

       ```
         methods:{
             //靠mapActions生成：incrementOdd、incrementWait（對象寫法）
             ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

             //靠mapActions生成：incrementOdd、incrementWait（數組寫法）
             ...mapActions(['jiaOdd','jiaWait'])
         }
       ```

    4. mapMutations 方法：用於幫助我們生成與 mutations 對話的方法，即：包含$store.commit(xxx)的函數

       ```
         methods:{
          //靠 mapMutations 生成：increment、decrement（對象寫法）
          ...mapMutations({increment:'JIA',decrement:'JIAN'}),

          //靠mapMutations生成：JIA、JIAN（數組寫法）
          ...mapMutations(['JIA','JIAN']),
         }
       ```

    > 備註：mapActions 與 mapMutations 使用時，若需要傳遞參數需要：在模板中綁定事件時傳遞好參數，否則傳的參數是事件對象(event)。

7.  模塊化+命名空間

    1. 目的：讓代碼更好維護，讓多種數據分類更加明確。

    2. 修改 store.js

       ```
         const countAbout = {
           namespaced:true,//開啟命名空間
           state:{x:1},
           mutations: { ... },
           actions: { ... },
           getters: {
             bigSum(state){
               return state.sum * 10
             }
           }
         }

         const personAbout = {
           namespaced:true,//開啟命名空間
           state:{ ... },
           mutations: { ... },
           actions: { ... }
         }

         const store = new Vuex.Store({
           modules: {
             countAbout,
             personAbout
           }
         })
       ```

    3. 開啟命名空間後，組件中讀取 state 數據：

       ```
         //方式一：自己直接讀取
         this.$store.state.personAbout.list

         //方式二：借助 mapState 讀取：
         // 用 mapState 取 countAbout 中的 state 必需加上 'countAbout'

         ...mapState('countAbout',['sum','school','subject']),
       ```

    4. 開啟命名空間後，組件中讀取 getters 數據：

       ```
         //方式一：自己直接讀取
         this.$store.getters['personAbout/firstPersonName']

         //方式二：借助 mapGetters 讀取：
         ...mapGetters('countAbout',['bigSum'])
       ```

    5. 開啟命名空間後，組件中調用 dispatch

       ```
           //方式一：自己直接 dispatch
           this.$store.dispatch('personAbout/addPersonWang',person)

           //方式二：借助 mapActions：
           ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
       ```

    6. 開啟命名空間後，組件中調用 commit

       ```
           //方式一：自己直接 commit
           this.$store.commit('personAbout/ADD_PERSON',person)

           //方式二：借助 mapMutations：
           ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
       ```

## 路由

1. 理解： 一個路由（route）就是一組映射關係（key - value），多個路由需要路由器（router）進行管理。
2. 前端路由：key 是路徑，value 是組件。

### 1.基本使用

1. 安裝 vue-router，命令：npm i vue-router

2. 應用插件：Vue.use(VueRouter)

3. 編寫 router 配置項:

   ```
     //引入VueRouter
     import VueRouter from 'vue-router'
     //引入组件
     import About from '../components/About'
     import Home from '../components/Home'

     //創建路由對象，去管理一組一組的路由
     const router = new VueRouter({
       routes:[
         {
           path:'/about',
           component:About
         },
         {
           path:'/home',
           component:Home
         }
       ]
     })

     //暴露router
     export default router
   ```

4. 實現切換（active-class 可配置高亮樣式）

   ```
     <router-link active-class="active" to="/about">About</router-link>
   ```

5. 指定展示位置

   ```
   <router-view></router-view>
   ```

### 2.幾個注意點

1. 路由組件通常存放在 pages 文件夾，一般組件通常存放在 components 文件夾。
2. 通過切換，“隱藏”了的路由組件，默認是被銷毀掉的，需要的時候再去掛載。
3. 每個組件都有自己的$route 屬性，裡面存儲著自己的路由信息。
4. 整個應用只有一個 router，可以通過組件的$router 屬性獲取到。
5. 不同路由組件$route與$router 之間比較結果
   ```
    // 要先切換兩路由組件，讓window上有個組件所創的全域屬性再比較
    window.homeRouter==window.aboutRouter // true
    window.homeRoute==window.aboutRoute // false
   ```

### 3. 多級路由（多級路由）

1. 配置路由規則，使用 children 配置項：
   ```
     routes:[
       {
         path:'/about',
         component:About,
       },
       {
         path:'/home',
         component:Home,
         children:[ //通過children配置子級路由
           {
             path:'news', //此處一定不要寫：/news
             component:News
           },
           {
             path:'message',//此處一定不要寫：/message
             component:Message
           }
         ]
       }
     ]
   ```
2. 跳轉（要寫完整路徑）：
   ```
     <router-link to="/home/news">News</router-link>
   ```
3. 指定展示位置
   ```
     <router-view></router-view>
   ```

### 4. 路由的 query 參數

1. 傳遞參數

   ```
     <!-- 跳轉並協帶query參數，to的字串寫法 -->
     <router-link :to="/home/message/detail?id=666&title=你好">跳轉</router-link>

     <!-- 跳轉並協帶query參數，to的對象寫法 -->
     <router-link
       :to="{
         path:'/home/message/detail',
         query:{
           id:666,
                 title:'你好'
         }
       }"
     >跳轉</router-link>
   ```

2. 接收參數：

   ```
     $route.query.id
     $route.query.title
   ```

### 5. 命名路由

1. 作用：可以簡化路由的跳轉。

2. 如何使用

   1. 給路由命名：

      ```
        {
          path:'/demo',
          component:Demo,
          children:[
            {
              path:'test',
              component:Test,
              children:[
                {
                  name:'hello' //给路由命名
                  path:'welcome',
                  component:Hello,
                }
              ]
            }
          ]
        }
      ```

   2. 簡化跳轉：

      ```
        <!--簡化前，需要寫完整路徑 -->
        <router-link to="/demo/test/welcome">跳轉</router-link>

        <!--簡化後，直接通過名字跳轉 -->
        <router-link :to="{name:'hello'}">跳轉</router-link>

        <!--簡化寫法配合參數 -->
        <router-link
          :to="{
            name:'hello',
            query:{
              id:666,
                    title:'你好'
            }
          }"
        >跳轉</router-link>
      ```

### 6. 路由的 params 參數

1. 配置路由，聲明接收 params 參數

   ```
     {
       path:'/home',
       component:Home,
       children:[
         {
           path:'news',
           component:News
         },
         {
           component:Message,
           children:[
             {
               name:'xiangqing',
               path:'detail/:id/:title', //使用佔位符聲明接收params参数
               component:Detail
             }
           ]
         }
       ]
     }
   ```

2. 傳遞參數

   ```
     <!-- 跳轉並協帶params參數，to的字串寫法 -->
     <router-link :to="/home/message/detail/666/你好">跳轉</router-link>

     <!-- 跳轉並協帶params參數，to的物件寫法 -->
     <router-link
       :to="{
         name:'detailTag',
         params:{
          id:666,
          title:'你好'
         }
       }"
     >跳轉</router-link>
   ```

> 特別注意：路由攜帶 params 參數時，若使用 to 的對象寫法，則不能使用 path 配置項，必須使用 name 配置！

### 7. 路由的 props 配置

作用：讓路由組件更方便的收到參數

```
  {
    name: "detailTag",
    path: "detail/:id/:title", //使用佔位符聲明接收params參數
    component: Detail,
    // 第一種寫法: prop值為對象，該隊向所有的key-value的組合最終都會透過prop傳給Detail
    // props: {
    //   a: 1,
    //   b: 2,
    // },

    // 第二種寫法: prop值為boolean值，boolean值為true，則將所有接收到的params通過prop傳給Detail
    // props: true,

    // 第三種寫法: prop值為函數，該函數返回一個對象，其中則所有的key-value的組合最終都會透過prop傳給Detail，並且可以獲得當前route
    props($route) {
      //
      return {
        id: $route.query.id,
        title: $route.query.title,
        a: 1,
        b: "hello",
      };
    },
  },
```

> 方便在要跳轉去的組件裡更簡便的寫法

### 8. `<router-link>`的 replace 屬性

1. 作用：控制路由跳轉時操作瀏覽器歷史記錄的模式
2. 瀏覽器的歷史記錄有兩種寫入方式：分別為 push 和 replace，push 是追加歷史記錄，replace 是替換當前記錄。路由跳轉時候默認為 push
3. 如何開啟 replace 模式：`<router-link replace .......>News</router-link>`

### 9. 編程式路由導航

1. 作用：不借助<router-link>實現路由跳轉，讓路由跳轉更加靈活

2. 具體編碼：

   ```
     //$router的两个API
     this.$router.push({
       name:'aaa',
         params:{
           id:xxx,
           title:xxx
         }
     })

     this.$router.replace({
       name:'bbb',
         params:{
           id:xxx,
           title:xxx
         }
     })
     this.$router.forward() //前進
     this.$router.back() //後退
     this.$router.go() //可前進也可後退
   ```

### 10. 緩存路由組件

1. 作用：讓不展示的路由組件保持掛載，不被銷毀。

2. 具體編碼：

   ```
     <!-- 設定include指定緩存哪個組件 -->

     <keep-alive include="News">
       <router-view></router-view>
     </keep-alive>

     <!-- 設定include指定緩存哪些組件(使用數組) -->

     <keep-alive :include=["News","Message"]>
       <router-view></router-view>
     </keep-alive>

      <!-- 不使用include指定緩存(所有keep-alive中的組件都會緩存) -->

     <keep-alive>
       <router-view></router-view>
     </keep-alive>
   ```

### 11. 兩個新的生命週期鉤子

作用：路由組件所獨有的兩個鉤子，用於捕獲路由組件的激活狀態。
具體名字：

1. activated 路由組件被激活時觸發。
2. deactivated 路由組件失活時觸發。
   > 這兩個生命週期鉤子需要配合前面的緩存路由組件使用（沒有緩存路由組件不起效果）

### 12. 路由守衛

1. 作用：對路由進行權限控制

2. 分類：全局守衛、獨享守衛、組件內守衛

3. 全局守衛:

   ```
     //全局前置守衛：初始化時執行、每次路由切换前執行
     router.beforeEach((to,from,next)=>{
       // to(目標路由) from(目前路由) next(是否放行)

       console.log('beforeEach',to,from)
       if(to.meta.isAuth){ //判斷當前路由是否需要進行權限控制
         if(localStorage.getItem('school') === 'zhejiang'){ //權限控制的具體規則
           next() //放行
         }else{
           alert('暫無權查看')
           // next({name:'guanyu'})
         }
       }else{
         next() //放行
       }
     })

     //全局後置守衛：初始化時執行、每次路由切換後執行
     router.afterEach((to,from)=>{
       console.log('afterEach',to,from)
       if(to.meta.title){
         document.title = to.meta.title /修改網頁title
       }else{
         document.title = 'vue_test'
       }
     })
   ```

### 13. 獨享守衛:

為單一的路由進行守衛

```
  // 獨享路由守衛，沒有獨享後置路由守衛，要使用後置路由守衛只能透過全局後置路由守衛
  beforeEnter(to, from, next) {
    if (localStorage.getItem("mission") == "讓你過") {
      alert("放行");
      next();
    } else {
      alert("禁止通過");
    }
  },
```

### 14.組件內守衛：

在具體組件內寫守衛，只有通過 router 管理的組件才會調用這兩個函數，通過`<xxx/>`宣告的組件不會調用

//進入守衛: 通過路由規則即將進入該組件時調用

```
beforeRouteEnter (to, from, next) {
},
```

//離開守衛: 通過路由規則即將離開該組件時調用

```
beforeRouteLeave (to, from, next) {
}
```

### 15.路由器的兩種工作模式

1. 對於一個 url 來說，什麼是 hash 值？—— #及其後面的內容就是 hash 值。

2. hash 值不會包含在 HTTP 請求中，即：hash 值不會帶給服務器。

3. hash 模式：

   1. 地址中永遠帶著#號，不美觀。
   2. 若以後將地址通過第三方手機 app 分享，若 app 校驗嚴格，則地址會被標記為不合法。
   3. 兼容性較好。

4. history 模式：

   1. 地址乾淨，美觀。
   2. 兼容性和 hash 模式相比略差。
   3. 應用部署上線時需要後端人員支持，解決刷新頁面服務端 404 的問題。

5. 如何設定: 在 router 根配置項中設定 mode:history/mode:hash 即可
