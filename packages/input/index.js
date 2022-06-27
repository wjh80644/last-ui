import tInput from './index.vue';
// 提供install方法，app的use才能使用它
tInput.install = app => {
  app.component(tInput.name, tInput)
}

export default tInput;
