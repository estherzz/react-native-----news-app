let fs = require('fs')
fs.writeFile(process.cwd()+'./data/list.json', '{ "kk": 11111111 }', err => { console.log(err) })
// import fs from 'fs';
// // function createMock(url, config) {
// //     let data = Mock.mock(config)
// //     fs.writeFile(url, data,err=>{console.log('errrrrrrr')})
// // }

// fs.writeFile('/data/list.json', { kk: 11111111 }, err => { console.log('errrrrrrr') })
console.log(3333)
    fs.writeFile('/data/list.json', '{ "kk": 11111111 }', err => { console.log(err) })