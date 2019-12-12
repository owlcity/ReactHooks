用react-hook开发甚至找不到
```
constructor
this.setState
componentDindMount
render
```
预备知识
##### 工具类
- node
- nvm
- webpack
- eslint
    1. ECMAScript代码风格效验
    2. --fix自动修复风格错误
    3. 自定义规则以扩展效验范围
- prettier
    1. 增强代码梅花工具
    2. 武断的行为风格
    3. 多语法支持
##### 语法类
- es2015
- jsx
- css flex
##### 概念类
- spa/mpa (single-page application/ multi-page application)
    1. 异步接口通讯
    2. 纯前端渲染
    3. 解耦的前后端协作
- pwa progressive-web-app 渐进式网络应用
    1. 可控的静态资源缓存
    2. 离线访问能力
    3. 优化载入速度
##### 效率类
    1. iconfont
    2. snippets
##### 原则类
    1.  职责分类
    
### 创建项目
##### npx 使用教程
https://www.ruanyifeng.com/blog/2019/02/npx.html
##### React Hooks 入门教程
http://www.ruanyifeng.com/blog/2019/09/react-hooks.html

Node 自带 npm 模块，所以可以直接使用 npx 命令
```
npm install -g npx
npx create-react-app train-ticket

package.json
start
build
eject
test

eject 暴露配置文件
yarn eject 后 运行yarn start 可能会报错
需要删除node_modules 重新 yarn install
```
### react 新特性
- Context
- ContextType (对Context的补充)
- lazy 懒加载组件 
- suspense （loading 态）
- memo
