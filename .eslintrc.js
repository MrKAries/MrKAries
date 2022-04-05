/**
 * https://eslint.bootcss.com/
 * eslint 指定 .eslintrc.js 文件为最先优先级
 */
module.exports = {
  // 指定当前目录为 eslint 检测根目录
  // 设置为 false 则 eslint 会往父目录寻找 .eslintrc.* 配置文件直到项目的根目录
  root: true,
  // eslint 支持指定的 JavaScript 语言选项
  parserOptions: {
    ecmaVersion: 6, // 指定 ECMAScript 版本 2015(同 6)
    sourceType: 'module', // 指定代码为 ECMAScript 模块
    // 使用额外的语言特性
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
  },
  // 指定解析器
  parser: '@typescript-eslint/parser',
  // 指定脚本的运行环境
  // 一个环境定义了一组预定义的全局变量
  env: {
    node: true, // Node.js 全局变量和 Node.js 作用域
  },
  // 支持扩展第三方配置
  // 配置名称可以省略 eslint-config- 前缀
  // 值为 "eslint:recommended" 的 extends 属性为注册此插件并启用一系列核心规则的简写
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  // 支持使用第三方插件
  // 插件名称可以省略 eslint-plugin- 前缀
  plugins: ['@typescript-eslint'],
  // 自定义规则配置
  rules: {},
}
