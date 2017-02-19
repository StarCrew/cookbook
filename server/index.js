/**
 * Created by starc on 2017/2/13.
 */
const api = require('./api')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//Express处理post请求是通过中间件bodyParser
//通过bodyParser中间件分析 application/x-www-form-urlencoded和application/json请求，
// 并把变量存入req.body，这种我们才能够获取到
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(api)

api.use(express.static(path.resolve(__dirname,'../dist')))
app.get('*',function(req,res) {
  const html = fs.readFile(path.resolve(__dirname, '../dist/index.html'),'utf-8')
  res.send(html)
})

app.listen(8088)
console.log('success listen...')
