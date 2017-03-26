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
  userName: String,
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
  }
},{
  versionKey: false,
  timestamps: { createdAt: 'registerTime'}
})

// 定义模型Model
const Models = {
  User: mongoose.model('User',userSchema)
}

module.exports = Models
