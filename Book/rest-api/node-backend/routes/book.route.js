const express = require('express')
const app = express();
const bookRoute = express.Router();
let Book = require('../model/Book');

//Add Book
bookRoute.route('/add-book').post((req,res,next)=>{
    Book.create(req.body,(err,data)=>{
    if(err)
        return next(error)
    else{
        res.json(data)
    }
})  
})

//Get Book
bookRoute.route('/').get((req,res)=>{
    Book.find((err,data)=>{
        if(err)
            return next(err)
        else{
            res.json(data)
        }
    })
})

//Get By ID
bookRoute.route('/read-book/:id').get((req,res)=>{
    Book.findById(req.params.id, (err,data)=>{
        if(err)
            return next(err)
        else
            return res.json(data)
    })
})

//Update Book
bookRoute.route('/update-book/:id').put((req,res,next)=>{
    Book.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },(err,data)=>{
        if(err){
            console.log(err)
            return next(err)            
        }
        else{
            res.json(data)
            console.log('Book updated successfully!')
        }
    })
})

//Delete Book
bookRoute.route('/delete-book/:id').delete((req,res,next)=>{
    Book.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err)
            return next(err)
        else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

bookRoute.route('/login').get((req,res)=>{
    Book.find((err,data)=>{
        if(err)
            return next(err)
        else{
            res.json(data)
        }
    })
})

module.exports = bookRoute;