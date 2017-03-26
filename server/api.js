/**
 * Created by starc on 2017/2/13.
 */
"use strict"
const  models = require('./db')
const express = require('express')
const router = express.Router()

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
  console.log(req.body.createTime)
  let newAccount = new models.User({
    account : req.body.account,
    password : req.body.password,
    createTime: req.body.createTime
  })
  console.log(newAccount)
  newAccount.save((err,data) => {
    if(err) {
      res.send(err)
    } else {
      res.send({ state: 1,type: 'SUCCESS',msg: '注册成功' })
    }
  })
})

// 获取已有账号接口
router.post('/api/login/getAccount',(req,res) => {
  const { account,password } = req.body
  models.User.findOne({ 'account':account },(err,data) => {
    switch(true) {
      case !!err:
            console.log(err)
            break
      case !data:
            console.log(data)
            res.send({ state: 0,type: 'ERROR',msg: '账号不存在' })
            break
      case data.password == password:
            res.send({ state: 1,type: 'SUCCESS',msg: '登陆成功' })
            break
      case data.password != password:
            res.send({ state: 2,type: 'ERROR',msg: '密码错误' })
            break
      default:
            res.send({ state: 3,type: 'ERROR',msg: '未知错误' })
    }
    //if(err) {
    //  res.send('error')
    //} else {
    //  res.send('succcess')
    //  console.log('success')
    //}
  })
})

module.exports = router
