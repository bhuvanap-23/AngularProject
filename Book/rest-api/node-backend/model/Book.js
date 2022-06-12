//Schema
const mangoose = require('mongoose');
const Schema = mangoose.Schema;

let Book = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    }
},
    {
    collection:'books'
})

module.exports = mangoose.model('Book',Book);