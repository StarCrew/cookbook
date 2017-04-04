/**
 * Created by starc on 2017/2/13.
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

const  db = mongoose.connection
db.once('error',() => console.log('Mongo connection error'))
db.once('open',() => console.log('Mongo connection successed'))


// 定义模式userSchema
const userSchema = mongoose.Schema({
  account: String,
  password: String,
  registerTime: {
    type: Date,
    default: Date.now
  },
  userName: {
    type: String,
    default: '味觉实验室'
  },
  productionCount: {
    type: Number,
    default: 0
  },
  collectionCount: {
    type: Number,
    default: 0
  },
  followerCount: {
    type: Number,
    default: 0
  },
  followingCount: {
    type: Number,
    default: 0
  },
  avatar: {
    type: String,
    default: '/default.jpg'
  },
  signature: {
    type: String,
    default: '快来介绍一下自己吧'
  }
},{
  versionKey: false,
  timestamps: { createdAt: 'registerTime'}
})

const stepSchema = mongoose.Schema({
  description: String,
  illustration: String
})

const contentSchema = mongoose.Schema({
  title: String,
  synopsis: String,
  cover: {
    type: String,
    default: '/cover-default.jpg'
  },
  material: String,
  step: [stepSchema]
})

const cookBookSchema = mongoose.Schema({
  userId: String,
  pubdate: {
    type: Date,
    default: Date.now
  },
  commentCount: {
    type: Number,
    default: 0
  },
  visitCount: {
    type: Number,
    default: 0
  },
  collectedCount: {
    type: Number,
    default: 0
  },
  content: contentSchema
},{
  versionKey: false,
  timestamps: { createdAt: 'pubdate'}
})

// 定义模型Model
const Models = {
  User: mongoose.model('User',userSchema),
  CookBook: mongoose.model('CookBook',cookBookSchema)
}

module.exports = Models
