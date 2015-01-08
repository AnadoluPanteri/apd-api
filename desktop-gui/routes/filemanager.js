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
});

router.get('/folder.json',function(){
  res.format({'application/json': function(){
    res.send({ message: 'hey' });
  });
});

module.exports = router;
