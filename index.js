module.exports = {
  plugins: ["stylelint-order"],
  extends: ["stylelint-prettier/recommended"],
  rules: {
    //不允许出现空属性
    "block-no-empty": true,
    //不允许非法的16进制
    "color-no-invalid-hex": true,
    //不允许有空注释
    "comment-no-empty": true,
    //calc 函数操作符空格
    "function-calc-no-unspaced-operator": true,
    //linear-gradient 符合标准语法
    "function-linear-gradient-no-nonstandard-direction": true,
    //选择器优先级优化
    "no-descending-specificity": true,
    //不允许同时引入同个样式
    "no-duplicate-at-import-rules": true,
    //不允许同样是的选择器
    "no-duplicate-selectors": true,
    //不允许未知的属性
    "property-no-unknown": true
  }
};
