# banner使用方法

## 引入
import Banner from 'banner.js'

## npm 命令
* npm run build-dev

    构建开发包
* npm run server

    启动Server，查看module显示效果!
* npm run buid-prd

    构建导出包
## React单元测试
* 安装测试依赖包

    npm install --save-dev jest enzyme sinon react-test-renderer
* 碰到的问题

    [问题以及解决方案](https://github.com/facebookincubator/create-react-app/issues/1981)
 * reference: 

    [react-test](https://facebook.github.io/react/docs/test-utils.html#simulate)

    [jest](https://facebook.github.io/jest/)

    [enzyme](http://airbnb.io/enzyme/index.html) 

   
## 识别库的类型
* 全局库（jQuery）

    从代码上识别,查看全局库代码，通常你会看到：

    顶级的var或function声明

    一个或多个赋值语句：widnow.targetName = XXX

    且假设DOM的原始值document或window是存在的
* 模块化库(UMD,AMD,COMMONJS,CMD)
    从代码上识别模块化库，通常你会看到：

    无条件的调用require或define

    像import * as a from 'a'; 或 export c;这样的声明语句
    
    赋值给exports或module.exports

## 书写d.ts文件
* 全局库的.d.ts书写[模板](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration%20files/templates/global.d.ts.md)
* 模块化的.d.ts书写模板，[normal](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration%20files/templates/module.d.ts.md)，[function](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration%20files/templates/module-function.d.ts.md)，[class](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration%20files/templates/module-class.d.ts.md)，[模块插件或UMD插件](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration%20files/templates/module-plugin.d.ts.md)，[全局插件](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/declaration%20files/templates/global-plugin.d.ts.md)



