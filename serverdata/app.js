let express = require('express');
let fs = require('fs');
let path = require('path');
let http = require('http');
let https = require('https');
let app = express();
let ejs = require('ejs');
let Mock = require('mockjs')
app.engine('.html', ejs.__express);

Mock.mock('http://localhost:3000/data.json',{
    'list|3-10': [
        {
            'id|+1':1
        }
    ]
})


// app.use('/data', express.static('./data'));
app.use('/img', express.static('./img'));
app.get('/', (req, res) => {
    res.render('test.html')
})
let httpPort = 3000;
let httpsPort = 3001;
let key = fs.readFileSync(path.join(process.cwd(), './ssl/private.pem'));
let cert = fs.readFileSync(path.join(process.cwd(),'./ssl/file.crt'))
http.createServer(app).listen(httpPort,()=>console.log(httpPort))
https.createServer({key, cert},app).listen(httpsPort,()=>console.log(httpsPort))