import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Route, Switch, Link } from 'react-router-native';//浏览器是react-router-dom

import Home from './pages/Home';
import Comments from './pages/Comments';
import Detail from './pages/Detail';
import Header from './components/Header'

//函数组件
export default props => {
    // console.log(11111111111111,props)
        return (
            <View>
                {/* <Header title="ZZ新闻平台" leftContent="返回" rightContent="登录" onRightClick={ e => console.log('222222222222222222222right click')}></Header> */}
                {/* 不添加左侧内容则为一个箭头 */}
                {/* <Header title="ZZ新闻平台" rightContent="登录" onLeftClick={e => console.log('11111111111111111left Click')} onRightClick={ e => console.log('222222222222222222222right click')}></Header> */}
                <Header rightContent="登录" onLeftClick={e => props.history.go(-1)} onRightClick={e => console.log('222222222222222222222right click')}>
                    <Link to="/">
                        <Text style={{
                            fontSize: 26,
                            color: 'white',
                        }}>新闻平台</Text>
                    </Link>
                </Header>
                {/* <Link to="/">
                <Text>Home</Text>
            </Link>
            <Link to="/detail/1">
                <Text>Detail</Text>
            </Link>
            <Link to="/comments/1">
                <Text>Comments</Text>
            </Link> */}
                <Switch>
                    {/* 也可用exact设置精确匹配 */}
                    <Route path="/detail/:id" name="Detail" component={Detail}></Route>
                    <Route path="/comments/:id" name="Comments" component={Comments}></Route>
                    <Route path="*" name="Home" component={Home}></Route>
                </Switch>
            </View>
        )
}