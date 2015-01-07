var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('filemanager', { title: 'Anadolu Panteri Desktop' });
});

module.exports = router;
