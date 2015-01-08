var express = require('express');
var router = express.Router();
//var fs = require('file');

/* GET home page. */

/*
get all files to render home
*/
router.get('/', function(req, res) {
  res.render('filemanager', {
     title: 'Anadolu Panteri Desktop | Dosya Yöneticisi'
  });

  var folder = req.params.folder;
  if(req.params.folder){
    res.json({
      'deneme' : 'deneme'
    });
  }
});

module.exports = router;
