// 管理所有组件
import tButton from "./button/index";
import tInput from "./input/index";

const install = app => {
  app.use(tButton);
  app.use(tInput);
};

const UI = {
  install,
}

export {tButton};//按需引用
export default UI;