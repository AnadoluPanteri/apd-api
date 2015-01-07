var express = require('express');
var router = express.Router();
var fs = require('file');

/* GET home page. */
router.get('/', function(req, res) {
  /*
    get files to compile all files on folder
    list on renderer
    clicked go to folder
  */
  res.render('filemanager', {
     title: 'Anadolu Panteri Desktop',
     fs: files.get('/')
  });
});

module.exports = router;
