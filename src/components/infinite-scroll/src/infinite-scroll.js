import InfiniteScroll from './directive';

const install = function(Vue) {
  Vue.directive('InfiniteScroll', InfiniteScroll);//添加全局资源
};

if (window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install); // eslint-disable-line
}

InfiniteScroll.install = install;
export default InfiniteScroll;//Vue.use(MyPlugin)调用插件
