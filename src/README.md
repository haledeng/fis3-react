# fis3 + react
react 包可以使用node_modules来处理, fis3-hook-node_modules

### css引入
+ 使用import方式引入， js-require-css负责编译处理

### 打包
+ fis3-packager-deps-pack 可以指定打包
+ packTo 规则被忽略


### react 本身相关
+ 循环元素必须有key属性
+ 只暴漏一个接口时，可以使用export default xxx
+ 暴漏多个接口是，import {接口名} from 'file.jsx'