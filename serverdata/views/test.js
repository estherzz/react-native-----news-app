var Mock = require('mockjs');
var yiyi = Mock.mock({
    'list|3-10': [
        {
            'id|+1':1
        }
    ]
})
console.log(yiyi)
