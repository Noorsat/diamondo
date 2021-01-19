const express = require('express');
const { route } = require('./auth');

const router = express.Router();

router.get('/', (req, res)=> {
    res.render('index');
});

router.get('/register', (req, res)=> {
    res.render('register');
})

router.get('/login', (req, res)=> {
    res.render('login');
})

router.get('/jewellery', (req, res) => {
    res.render('jewellery');
});

router.get('/about', (req,res) => {
    res.render('about')
})

router.get('/brilliant', (req,res) => {
    res.render('brilliant')
})

router.get('/collection', (req,res) => {
    res.render('collection')
})

router.get('/delivery', (req,res) => {
    res.render('delivery')
})

router.get('/favorite', (req,res) => {
    res.render('favorite')
})

router.get('/order', (req,res) => {
    res.render('order')
})

router.get('/premium', (req,res) => {
    res.render('premium')
})

router.get('/present', (req,res) => {
    res.render('present')
})

router.get('/wedding', (req,res) => {
    res.render('wedding')
})

router.get('/telegram.php', (req,res) => {
    res.render('telegram.php');
});



module.exports = router;
