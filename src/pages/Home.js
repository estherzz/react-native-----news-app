import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';
import NewsItem from '../components/NewsItem';
// import axios from 'axios';

// 注意ScrollView才可以滚动
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    UNSAFE_componentWillMount() {
        // 发送请求
        // axios.get('http://localhost:8081/data/list.json')
        //     // 监听数据返回
        //     .then(res => { console.log(3333, res) })
        //     // 继续监听
        //     .catch(res => console.log(77777))

        fetch('http://localhost:8081/data/list.json')
            .then((response) => response.ok ? response.json() : console.log('res not ok'))
            .then((data) => {
                this.setState({ data })
            })
        // .catch((error) => {
        //     console.error(error);
        // });

    }
    // 可使用FlatList组件创建列表
    // creatList() {
    //     // 设置key 涉及排序的时候不影响性能 diff算法有关知识点
    //     return this.state.data.map(item => <NewsItem key={item.id} data={item}></NewsItem>)

    // }
    render() {
        let { data } = this.state;
        // console.log(data)
        return (
            // <ScrollView>
            //     {this.creatList()}
            // </ScrollView>
            <FlatList
                data={data}
                renderItem={({ item }) => <NewsItem data={item}></NewsItem>}
                keyExtractor={item=>''+item.id}
            >
            </FlatList>
        )
    }
}