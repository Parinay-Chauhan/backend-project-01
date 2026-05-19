const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const {registerUser, loginUser, logout} = require('../controllers/authController')


router.get('/', function ( req, res){
    res.send('hey its working');
});

router.post('/register', registerUser );

router.post('/login', loginUser);

router.get('/logout', logout);

// router.post('/login', async function (req, res) {
//     let {email, password} = req.body;

//     try {
//         let user = await userModel.findOne({email, password});
//         if (!user) {
//             return res.status(401).render('index', {error: 'Invalid email or password'});
//         }

//         res.redirect('/shop');
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// });


module.exports = router;


// joy based validdation 
// custom function 
