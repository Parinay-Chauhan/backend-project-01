const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
// const productModel = require('../models/product-models');

router.get('/', (req, res) => {
    let error = req.flash('error')
    res.render('index', {error});
});

router.get('/shop', isLoggedIn, async (req, res) => {
    res.render('shop');
    // try {
    //     let products = await productModel.find();
    //     res.render('shop', {products});
    // } catch (err) {
    //     res.status(500).send(err.message);
    // }
});

// router.get('/cart', (req, res) => {
//     res.render('cart');
// });

// router.get('/admin', (req, res) => {
//     res.render('createproducts', {success: ''});
// });

module.exports = router;
