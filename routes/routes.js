const express= require('express')
const path= require('path')
const myblogs= require('../data/data')

const router= express.Router()

router.get('/', (req, res)=>{
    res.render('home');
})

router.get('/blog', (req, res)=>{
    res.render('blogHome',{
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (req, res)=> {
    myBlog= blogs.filter((e)=> {
    return e.slug == req.params.slug
    })

    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    });
})

module.exports= router