var express = require('express');
var router = express.Router();
var newsModel = require('../../models/newsModel');


/* GET News page. */
router.get('/', async function (req, res, next) {
  
  var news = await newsModel.getNews();
  
  res.render('admin/news', {
    layout: 'admin/layout',
    userName: req.session.userName, // ej: flavia, adrian, etc
    news
  });
});

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id;
  await newsModel.deleteNewsById(id);
  res.redirect('/admin/news')
});

module.exports = router;