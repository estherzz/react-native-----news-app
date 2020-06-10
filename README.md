## 说明
react-native项目练习 新闻app
## 工具
VirtualBox、Genymotion

## 技术栈
react-native, react, jsx, ES6, ES Module, mockjs

**版本**

    "mockjs": "^1.1.0",
    
    "react": "16.11.0",
    
    "react-native": "0.62.2",
    
    "react-router-native": "^5.1.2"

## 项目运行
`git clone https://github.com/estherzz/react-native-app`
打开VBox和Genymotion
`cd yiyi2`
`adb devices` 查看设备是否存在
`react-native run-android`  运行项目

## 截图
`基于mockjs制作的虚拟数据`

![新闻列表](https://upload-images.jianshu.io/upload_images/20110534-c4d2a67b4e63e62b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)
![新闻详情](https://upload-images.jianshu.io/upload_images/20110534-fe6cc163533204bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)
![新闻详情+查看评论](https://upload-images.jianshu.io/upload_images/20110534-650ca870ea4a35c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)
![评论](https://upload-images.jianshu.io/upload_images/20110534-9acabd414d2459d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300)

## 效果动图
![新闻列表+详情+评论.gif](https://upload-images.jianshu.io/upload_images/20110534-bc5f0616dced7ca6.gif?imageMogr2/auto-orient/strip)

## 知识点：
##### 准备：
`npm install -g react-native-cli` 提供react-native指令
##### 配置环境

安装python

安装sdk  选择accept license选项

安装java

##### 初始化项目
`react-native init 项目名称`
##### 调试
- 日志输出
Android：运行` react-native log-android`
Ios: 运行 `react-native log ios`
- 调试Dom
`npm install -g react-devtools@3.6`
##### 组件
- `ScrollView、View、 Text、Image、TouchableOpacity、FlatList`  react-native组件
- Rout、Switch、Link、NativeRouter  react-router-native组件
- View组件不可使用fontSize样式
- 没有复合样式 （即 没有此形式pading ：10 10 20 30）

例子：
```
   <FlatList
                data={data}
                renderItem={({ item }) => <NewsItem data={item}></NewsItem>}
                keyExtractor={item=>''+item.id}
            >
            </FlatList>
 ```

##### 渲染库

```

import { AppRegistry } from 'react-native';
import Router from './src/Router';

AppRegistry.registerComponent('yiyi', () => Router);
```

```
import { View, Text, StyleSheet  } from 'react-native'

let style = StyleSheet({
    demo:{
        fontSize: 20,
        color: 'pink',
        paddingTop: 10
     }
})

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : 'blackpink'
       }
    }
   render(){
      let { title } = this.state;
      return <View>
                <Text style={ style.demo }>{ title }</Text>
             </View>
   }

}

```
