/**
 * Created by starc on 2017/2/13.
 */
"use strict"
const  models = require('./db')
const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')
const cacheUserAvatar = '../../../../background/userAvatar'
const cacheCookBook = '../../../../background/cookbook'

// 注册账号接口
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
  var { account,password } = req.body
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
            console.log(data)
            res.send({ state: 1,type: 'SUCCESS',msg: '登陆成功',data:data })
            break
      case data.password != password:
            res.send({ state: 2,type: 'ERROR',msg: '密码错误' })
            break
      default:
            res.send({ state: 3,type: 'ERROR',msg: '未知错误' })
    }
  })
})

// 上传用户头像
router.post('/api/upDate/userAvatar',(req,res) => {
  //var currentUser = req.session.user
  var userDirPath =cacheUserAvatar
  if (!fs.existsSync(userDirPath)) {
    fs.mkdirSync(userDirPath)
  }
  var form = new formidable.IncomingForm({
    encoding: 'utf-8', //设置编辑
    uploadDir: userDirPath, //设置上传目录
    keepExtensions: true, //保留后缀
    maxFieldsSize: 2 * 1024 * 1024, //文件大小
    type: true
  }) //创建上传表单
  var displayUrl
  console.log(form)
  form.parse(req, function(err, fields, files) {
    if (err) {
      res.send(err);
      return;
    }
    var extName = '' //后缀名
    console.log(files)
    switch (files.upload.type) {
      case 'image/pjpeg':
        extName = 'jpg'
        break
      case 'image/jpeg':
        extName = 'jpg'
        break
      case 'image/png':
        extName = 'png'
        break;
      case 'image/x-png':
        extName = 'png'
        break
    }
    if (extName.length === 0) {
      res.send({
        state: 0,
        type: 'ERROR',
        msg: '只支持png和jpg格式图片'
      })
    } else {
      var avatarName = '/' + Date.now() + '.' + extName
      var newPath = form.uploadDir + avatarName
      displayUrl = avatarName
      fs.renameSync(files.upload.path, newPath); //重命名
      res.send({
        state: 1,
        type: 'SUCCESS',
        msg: displayUrl
      });
    }
  })
})

// 更新用户的资料
router.post('/api/update/userMessage',(req,res) => {
  console.log(req.body)
  var { _id,userName,password,signature,avatar } = req.body
  var conditions = {_id : _id}
  var userMessage = {}
  var update = {$set : {
    userName : userName,
    password: password,
    signature: signature,
    avatar: avatar }}
  models.User.update(conditions, update, function(error){
    if(error) {
      console.log(error)
    } else {
      models.User.findOne(conditions,(error,data) => {
        if(error) {
          console.log(error)
        }
        else {
          userMessage = data
          console.log(data)
          res.send({
            state: 1,
            type: 'SUCCESS',
            msg: '更新成功',
            data: userMessage
          });
        }
      })

    }
  })
})

// 上传菜谱照片
router.post('/api/upDate/upLoadCookBook',(req,res) => {
  //var currentUser = req.session.user
  var userDirPath = cacheCookBook
  if (!fs.existsSync(userDirPath)) {
    fs.mkdirSync(userDirPath)
  }
  var form = new formidable.IncomingForm({
    encoding: 'utf-8', //设置编辑
    uploadDir: userDirPath, //设置上传目录
    keepExtensions: true, //保留后缀
    maxFieldsSize: 2 * 1024 * 1024, //文件大小
    type: true
  }) //创建上传表单
  var displayUrl
  console.log(form)
  form.parse(req, function(err, fields, files) {
    if (err) {
      res.send(err);
      return;
    }
    var extName = '' //后缀名
    console.log(files)
    switch (files.upload.type) {
      case 'image/pjpeg':
        extName = 'jpg'
        break
      case 'image/jpeg':
        extName = 'jpg'
        break
      case 'image/png':
        extName = 'png'
        break;
      case 'image/x-png':
        extName = 'png'
        break
    }
    if (extName.length === 0) {
      res.send({
        state: 0,
        type: 'ERROR',
        msg: '只支持png和jpg格式图片'
      })
    } else {
      var cookbookName = '/' + Date.now() + '.' + extName
      var newPath = form.uploadDir + cookbookName
      fs.renameSync(files.upload.path, newPath); //重命名
      res.send({
        state: 1,
        type: 'SUCCESS',
        msg: cookbookName
      });
    }
  })
})

// 上传菜谱
router.post('/api/login/createCookBook',(req,res) => {
  let newCookBook = new models.CookBook({
    userId : req.body.userId,
    content: req.body.content
  })
  for(var i = 0;i<newCookBook.content.step.length;i++) {
    var cookbook
  }
  console.log(newCookBook)
  newCookBook.save((err,data) => {
    if(err) {
      res.send(err)
    } else {
      res.send({ state: 1,type: 'SUCCESS',msg: '发布成功' })
    }
  })
})

module.exports = router
