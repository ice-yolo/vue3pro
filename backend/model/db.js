const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://1901314481:m-6gQ_UVqiAAX6w@cluster0.sqp8v2l.mongodb.net/kao').then(() => {
    console.log('服务器连接成功')
}).catch((err) => {
    console.log('服务器连接失败',err)
})
console.log('正在连接中...')

module.exports = mongoose