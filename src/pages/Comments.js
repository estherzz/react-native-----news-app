import React, { Component } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Discuss from '../components/Discuss'

let style = StyleSheet.create({
    textInput: {
        width: '100%',
        height: 200,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20
    },
    btn: {
        width: 80,
        fontSize:18,
        textAlign:'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius:6,
        color: '#fff',
        backgroundColor:'#108EE9'
    }
})
export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: '',
            id: '',
            list:[]
        }
    }
    UNSAFE_componentWillMount() {
        // mockjs模拟的数据 位置：项目文件下的data目录下的comment.json文件
        fetch('http://localhost:8081/data/comments.json?id='+this.props.match.params.id)
            .then(res => res.json())
            .then(res => this.setState({id:res[this.props.match.params.id-1].id,list:res[this.props.match.params.id-1].list}))
    }
    submitData() {
        let { msg,list,id } = this.state;
        if (/^\s*$/.test(msg)){
            alert('请输入内容')
        }
        let time = new Date();
        let setData = {
            id,
            list:{
                user:'yiyi'+Math.random(),
                content: msg,
                time:`刚刚 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            }
           
        }
        console.log(setData)
        fetch('http://localhost:8081/data/submit.json', {
            // method: 'POST',
            data: setData
        })
            .then(res => res.json())
            .then(res => {
                if (res.errno === 0) {
                    list.unshift(setData.list);
                    this.setState({ list })
                }
                })
    }
    render() {
        let { list } = this.state;
        return (
                <ScrollView style={{ padding: 20 }}>
                    {/* multiline 属性 是可以换行的属性*/}
                    <TextInput
                        style={style.textInput}
                        placeholder="文明发言,人人有责"
                        multiline
                        value={this.state.msg}
                        onChangeText={msg=>this.setState({msg})}
                    ></TextInput>
                    {/* 发布按钮 */}
                    <TouchableOpacity
                        style={{ flexDirection: 'row-reverse' }}
                    onPress={e=>this.submitData()}>
                        <Text style={style.btn}>发布</Text>
                    </TouchableOpacity>
                    
                     <FlatList data={list}
                        renderItem={({item}) => <Discuss data={item}></Discuss>}
                        keyExtractor={item => item.user}
                        style={{paddingBottom:300}}
                    ></FlatList>
                   
                </ScrollView>
        )
    }
}