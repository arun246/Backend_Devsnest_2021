var express = require('express');
var router = express.Router();
//var registerInitialCheck = require('../middlewares/registerInitialCheck');
//var { register, regSuperAdmin } = require('../controllers/index');
//var check = require('../middlewares/checkSuperAdmin');


/* GET home page. */
router.get('/', function(req, res,next) {
  const sess = req.session;
  sess.username = "Arun B";
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res,next) {
  console.log("Redis value ", req.session.username);
  res.render('index', { title: 'Express' });
});


// router.post('/register', registerInitialCheck , register);
// router.post('/register-super-admin' , registerInitialCheck , regSuperAdmin);
// router.get('/super' , check);

module.exports = router;