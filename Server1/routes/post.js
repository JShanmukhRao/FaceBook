const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requireLogin')

router.get('/post',(req,res)=>{
    Post.find()
    .populate("postedBy","_id name")
    .then(post=>{
        res.json({
            posts:post
        })
    })
})

router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body} = req.body
    if(!title || !body)
    {
        return res.status(422).json({
            err:"Required all fields"
        })
    }
    req.user.password=undefined
    const post= new Post({
        title,
        body,
        postedBy:req.user
    })
     post.save()
    .then(saved=>{
           console.log(saved)
        res.json({
            post:saved 
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports=router

