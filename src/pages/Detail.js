import React, { Component } from 'react';
import { ScrollView, View, Text, Image, Button,TouchableOpacity, Link } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    UNSAFE_componentWillMount() {
        // console.log(33333,this.props)
        fetch('http://localhost:8081/data/detail.json?id=' + this.props.match.params.id)
            // .then(res=>console.log(res))
            .then(res => res.json())
            .then(data =>
                // 正常情况后端的返回的数据直接用
                // this.setState({data})

                this.setState({ data: data[this.props.match.params.id - 1] })
            )
    }
    render() {
        // console.log(this.state.data)
        let { title, content, img, time, comment, id } = this.state.data;
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontSize: 28, color: '#555', textAlign: 'center', padding: 15 }}>{title}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{ fontSize: 20, color: '#999' }}>{time}</Text>
                    <Text style={{ fontSize: 20, color: '#999' }}>{'评论:' + comment}</Text>
                </View>
                <Image source={{ uri: img }} style={{ width: '100%', height: 400, marginTop: 15, marginBottom: 15 }} resizeMode="cover"></Image>

                <Text style={{ fontSize: 22, color: '#999', lineHeight: 40, paddingBottom: 20 }}>{content}</Text>

                {/* <View style={{ paddingBottom: 150, margin: 10 }}>
                    <Button title="查看更多评论" onPress={e => console.log('click')} ></Button>
                </View> */}
                <TouchableOpacity style={{ paddingBottom: 350, margin: 10 }}
                    onPress={e => this.props.history.push('/comments/'+id)}
                >
                         <Text style={{ backgroundColor: '#108EE9', borderRadius: 6, lineHeight: 50, paddingLeft: 35, paddingRight: 35,textAlign:'center',color:'#fff', fontSize:20 }}> 查看更多评论 </Text>
                       
                </TouchableOpacity>
                
            </ScrollView>
        )
    }
}