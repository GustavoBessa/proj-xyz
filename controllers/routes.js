var user = require('./userController')
var prod = require('./prodController')
var store = require('./storeController')
var express = require('express');
var router = express.Router();

router.route('/user')
    .post(user.create)
    .get(user.read)
    .put(user.update)
    .delete(user.delete);

router.route('/prod')
    .post(prod.create)
    .get(prod.read)
    .put(prod.update)
    .delete(prod.delete);
    
router.route('/store')
    .post(store.create)
    .get(store.read)
    .put(store.update)
    .delete(store.delete);

module.exports = router;