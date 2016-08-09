# fis3 + react
react 包可以使用node_modules来处理, fis3-hook-node_modules


### 打包
+ fis3-packager-deps-pack 可以指定打包
+ packTo 规则被忽略


### react、ES6 相关
+ 循环元素必须有key属性
+ 只暴漏一个接口时，可以使用export default xxx
+ 暴漏多个接口是，import {接口名} from 'file.jsx'


### css的引入方式
+ 通过dep-pack打包css，html文件中直接引入（对应的jsx文件中不能require css，非模块）
+ 通过jsx中require的方式引入，插件js-require-css来处理（css模块方式引入）



### dom操作
+ 通过state或者props来触发dom的更新操作


### FE方案
+ [fit-component](https://github.com/fit-component)
+ [fit.baidu.com](http://fit.baidu.com)
+ 这个组件体系一个比较好的方案  fis + react + redux + es6


### react-bootstrap
+ css没有模块化
+ react重写了html和js部分
+ 整个组织结构趋近于一个component体系