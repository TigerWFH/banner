# banner使用方法

## 引入
import Banner from 'dist/banner.js'

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



