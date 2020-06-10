import React, { Component } from 'react';
import { Route, NativeRouter } from 'react-router-native';
import App from './App';
//NativeRouter组件 包裹Route路由规则组件
// 暴露接口 
export default class Router extends Component {
    render() {
        return (
            <NativeRouter>
                {/* <App></App> */}
                {/* 让App中有路由数据 */}
                <Route path="/" component={App}></Route>
            </NativeRouter>   
        )
    }
} 