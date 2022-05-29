var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel')


/* GET News page. */
router.get('/', function (req, res, next) {
  res.render('admin/news', {
    layout: 'admin/layout',
    userName: req.session.userName // ej: flavia, adrian, etc
  });
});

module.exports = router;