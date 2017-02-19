/**
 * Created by starc on 2017/2/13.
 */
"use strict"
const  models = require('./db')
const express = require('express')
const router = express.Router()

// 创建账号接口
router.post('/api/login/createAccount',(req,res) => {
  console.log(req.body.account)
  let newAccount = new models.Login({
    account : req.body.account,
    password : req.body.password
  })
  newAccount.save((err,data) => {
    if(err) {
      res.send(err)
    } else {
      res.send('createAccount successed')
    }
  })
})

// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
  models.Login.find((err,data) => {
    if(err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router
