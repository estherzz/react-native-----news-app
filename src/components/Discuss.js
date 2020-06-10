import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
let style = StyleSheet.create({
    content: {
        fontSize: 20,
        color: '#666',
        lineHeight:35
    },
    user: {
        fontSize: 22,
        lineHeight: 50,
    },
    time: {
        color: '#999',
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        lineHeight: 50,
        fontSize: 18
    }
})
export default class Discuss extends Component { 
    render() {
        let { data } = this.props;
        if (!data) {
            return (
                <View>
                    <Text>加载中...</Text>
                </View>
            )
        }
        return (
            <View>
                <Text style={style.user}>{data.user}</Text>
                <Text style={style.content}>{data.content}</Text>
                <Text style={style.time}>{data.time}</Text>
            </View>
        )
    }
}