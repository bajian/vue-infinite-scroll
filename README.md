# vue-infinite-scroll

vue-infinite-scroll is an infinite scroll directive for vue.js(Vue2.0)

##demo

[live demo](https://cdn.rawgit.com/bajian/vue-infinite-scroll/master/dist/index2.html)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### CommonJS

You can use any build tool which supports `commonjs`:

```JavaScript
// register globally
var infiniteScroll =  require('./components/infinite-scroll');
Vue.use(infiniteScroll)

// or for a single instance
var infiniteScroll = require('./components/infinite-scroll').infiniteScroll;
new Vue({
  directives: {infiniteScroll}
})

```


## Usage

Use v-infinite-scroll to enable the infinite scroll, and use infinite-scroll-* attributes to define its options.

The method appointed as the value of v-infinite-scroll will be executed when the bottom of the element reaches the bottom of the viewport.

```HTML
<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
  ...
</div>
```
> attention!! `loadMore` not `loadMore()`

```JavaScript
var count = 0;

new Vue({
  el: '#app',
  data: {
    data: [],
    busy: false
  },
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    }
  }
});
```

# Options

| Option | Description |
| ----- | ----- |
| infinite-scroll-disabled | infinite scroll will be disabled if the value of this attribute is true. |
| infinite-scroll-distance | Number(default = 0) - the minimum distance between the bottom of the element and the bottom of the viewport before the v-infinite-scroll method is executed. |
| infinite-scroll-immediate-check | Boolean(default = true) - indicates that the directive should check immediately after bind. Useful if it's possible that the content is not tall enough to fill up the scrollable container. |
| infinite-scroll-listen-for-event | infinite scroll will check again when the event is emitted in Vue instance. |

## Development

|Command|Description|
|---|---|
|npm run build|Build in umd format|
|npm test|Lint code|

###base on 
## [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll)
因为该库合并到mint-ui（里面的此组件还是有bug。。），没有更新至Vue2.0，而我的项目中急需要使用，所以迫于无奈在它的基础上进行了升级：
修正一些js语法上的错误，如原为:
```js
distance = Number(directive.vm.distanceExpr);
```
改成
```js
distance = Number(directive.vm[distanceExpr]||distanceExpr);
```
等等。
更新至vue2.0的语法(因为本人不再使用vue1.0，为了性能的极致，所以不做兼容)

如果有bug，会做适当的维护。并无意冒犯原作者之意，谢谢

本着不重复造轮子的思想，分享给肛需的人

# License

MIT
