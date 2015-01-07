var express = require('express');
var router = express.Router();
var files = require('file');

/* GET home page. */
router.get('/', function(req, res) {
  /*
    get files to compile all files on folder
    list on renderer
    clicked go to folder
  */
  res.render('filemanager', {
     title: 'Anadolu Panteri Desktop',
     files: files.get('/')
  });
});

module.exports = router;
