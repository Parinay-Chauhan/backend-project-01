const express = require('express');
const router = express.Router();

// const multer = require('multer');
// const productModel = require('../models/product-models');

// const upload = multer({storage: multer.memoryStorage()});

router.get('/', function ( req, res){
    res.send('hey its working');
})


// router.post('/create', upload.single('image'), async function (req, res) {
//     try {
//         let {name, price, discount, bgcolor, panelcolor, textcolor, description} = req.body;

//         await productModel.create({
//             image: req.file ? req.file.buffer : undefined,
//             name,
//             price,
//             discount,
//             bgcolor,
//             panelcolor,
//             textcolor,
//             description,
//         });

//         res.status(201).render('createproducts', {success: 'Product created successfully'});
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// });

module.exports = router;
