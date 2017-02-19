/**
 * Created by starc on 2017/2/13.
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

const  db = mongoose.connection
db.once('error',() => console.log('Mongo connection error'))
db.once('open',() => console.log('Mongo connection successed'))


// 定义模式loginSchema
const loginSchema = mongoose.Schema({
  account: String,
  password: String
})

// 定义模型Model
const Models = {
  Login: mongoose.model('Login',loginSchema)
}

module.exports = Models
