import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//注意 view不可设置与字体相关的样式 需要设置在text中  View中只可以有一个元素
let style = StyleSheet.create({
    container: {
        backgroundColor: '#108EE9',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: 'white',
    },
    title: {
        fontSize: 26,
        color: 'white',
    },
    arr1: {
        position: 'absolute',
        left: -4,
        top: -12,
        borderWidth: 12,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'white',
    },
    arr2: {
        position: 'absolute',
        borderWidth: 12,
        left: 0,
        top: -12,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#108EE9',
    }
})

//需求：
//左边、中间、右边内容，左、右边点击事件 
//没有传递左侧内容 则为一个箭头
export default class Header extends Component {
    render() {
        let { title, leftContent, rightContent, onLeftClick, onRightClick, children } = this.props;
        // console.log(this.props)
        // console.log(this.props.children)
        return (
            <View style={style.container}>
                
                <View style={{ position: 'relative',minWidth:40}} onTouchEnd={onLeftClick}>
                    {
                        leftContent ? <Text style={style.text}>{leftContent}</Text> :
                            <Fragment>
                                <View style={style.arr1}></View>
                                <View style={style.arr2}></View>
                            </Fragment>

                    }

                </View>
                <View style={style.title}>
                    {!title && typeof children === 'object' ?
                        children : <Text >{title || children}</Text>
                    }

                </View>
                <View style={{minWidth:40}}>
                    <Text style={style.text} onTouchEnd={onRightClick}>{rightContent}</Text>
                </View>
            </View>
        )
    }
}

// 设置默认属性数据
Header.defaultProps = {
    title: '',
    leftContent: '',
    rightContent: '',
    onRightClick() { },
    onLeftClick() { }
}