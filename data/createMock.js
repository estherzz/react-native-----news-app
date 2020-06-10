let fs = require('fs');
let Mock = require('mockjs');
let listData = Mock.mock({
    'list|13': [{
        'id|+1': 1,
        'title': "@ctitle(5,10)",
        'content': '@cparagraph(2)',
        'img': '@image(300X200,#EBB3CA)',
        'comment': '@integer(0,1000)'
    }]
}).list


let detailData = Mock.mock({
    'detail|13': [{
        'content': `        @cparagraph(10,15)\n        @cparagraph(10,15)`,
        'time': '@datetime(MM-dd HH:mm:ss)'
    }]
}).detail.map((item, index) => {
    let {id,title,comment,img} = listData[index];
    item.time = parseInt(Math.random() * 2 + 2018) + '-' + item.time
    return Object.assign({id,title,comment,img}, item)
})

let comments = Mock.mock({
    'comments|13': [{
        'id|+1': 1,
         'list|3-10': [{
        'user':'@cname(2,4) @first()',
        'content':'@cparagraph(3,6)',
        'time':'@time(A HH:mm:ss)'
    }]
    }]
   
}).comments


fs.writeFile('./list.json', JSON.stringify(listData), err => console.log(err))
fs.writeFile('./detail.json', JSON.stringify(detailData), err => console.log(err))
fs.writeFile('./comments.json', JSON.stringify(comments), err => console.log(err))
fs.writeFile('./comments.json', JSON.stringify(comments), err => console.log(err))
