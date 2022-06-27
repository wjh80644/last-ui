import tButton from './index.vue';
// 提供install方法，app的use才能使用它
tButton.install = app => {
  app.component(tButton.name, tButton)
}

export default tButton;
