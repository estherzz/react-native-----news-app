import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'react-router-native';

let style = StyleSheet.create({
    container: {
        width: '100%',
        'flexDirection': 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        padding: 20,
    },
    image: {
        width: 150,
        height: 100,
        marginRight: 20,
    },
    text: {
        flex: 1,
        justifyContent: 'space-around',
        color: '#aaa',
    },
    title: {
        color: '#555',
        fontSize: 20,
        lineHeight:26
    },
    
    content: {
        overflow: 'hidden',
        fontSize: 18,
        color: '#999',
        lineHeight:30
    },
    comment: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        color: '#999',
        fontSize: 16,

    }

})
export default class NewsItem extends Component {
    render() {
        let { data } = this.props;
        // console.log(data)
        return (
            <Link style={style.container} to={'/detail/' + data.id}>
                <Fragment>
                    {/* 'uri 网络图片地址 require 是本地图片地址 */}
                    <Image source={{ uri: data.img }} style={style.image}></Image>
                    <View style={style.text}>
                        <Text style={style.title}>{data.title}</Text>
                        <Text style={style.content}>{data.content}</Text>
                        <Text style={style.comment}>{'评论：' + data.comment}</Text>
                    </View>
                </Fragment>

            </Link>
        )
    }
}